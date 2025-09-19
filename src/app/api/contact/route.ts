import { NextResponse } from 'next/server';
import { Resend } from 'resend';

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FieldErrors = Partial<Record<keyof ContactPayload, string>> & { general?: string };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(body: unknown): { data?: ContactPayload; errors?: FieldErrors } {
  const errors: FieldErrors = {};

  const b = body as Record<string, unknown> | null | undefined;
  const name = typeof b?.name === 'string' ? b.name.trim() : '';
  const email = typeof b?.email === 'string' ? b.email.trim() : '';
  const company = typeof b?.company === 'string' ? b.company.trim() : '';
  const message = typeof b?.message === 'string' ? b.message.trim() : '';

  if (!name) errors.name = 'Name is required';
  if (!email) errors.email = 'Email is required';
  else if (!emailRegex.test(email)) errors.email = 'Please enter a valid email address';
  // company is optional
  if (!message) errors.message = 'Message is required';
  else if (message.length < 20) errors.message = 'Message must be at least 20 characters';

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return { data: { name, email, company, message } };
}

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));
    const { data: validData, errors } = validate(body);
    if (errors) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { success: false, errors: { general: 'Email service not configured. Please try again later.' } },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
  const toEmail = process.env.CONTACT_TO_EMAIL || 'myemail@example.com';
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev';

  const subject = `New contact form submission from ${validData!.name}`;
    const html = `
      <div style="font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, Helvetica Neue, Arial, 'Apple Color Emoji', 'Segoe UI Emoji'; line-height:1.6; color:#0f172a;">
        <h2 style="margin:0 0 12px;font-size:20px;">New Contact Form Submission</h2>
        <p style="margin:0 0 8px;">You have received a new message from your website contact form.</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;"/>
  <p style="margin:0 0 6px;"><strong>Name:</strong> ${validData!.name}</p>
  <p style="margin:0 0 6px;"><strong>Email:</strong> ${validData!.email}</p>
  <p style="margin:0 0 6px;"><strong>Company:</strong> ${validData!.company}</p>
        <p style="margin:12px 0 6px;"><strong>Message:</strong></p>
  <p style="white-space:pre-wrap;margin:0;background:#f8fafc;padding:12px;border-radius:8px;border:1px solid #e2e8f0;">${validData!.message}</p>
        <hr style="border:none;border-top:1px solid #e2e8f0;margin:16px 0;"/>
        <p style="margin:0;color:#64748b;font-size:12px;">This email was sent via the Quantex website contact form.</p>
      </div>
    `;

    const { error } = await resend.emails.send({
      from: `Quantex <${fromEmail}>`,
      to: [toEmail],
      reply_to: validData!.email,
      subject,
      html,
    });

    if (error) {
      // Log server-side for debugging (does not leak secrets)
      console.error('Resend send error:', error);
      const uerr: unknown = error;
      const statusCode = typeof (uerr as { statusCode?: unknown })?.statusCode === 'number'
        ? (uerr as { statusCode?: number }).statusCode
        : undefined;
      const message = typeof (uerr as { message?: unknown })?.message === 'string'
        ? (uerr as { message?: string }).message
        : 'Unknown error';
      const isForbidden = statusCode === 403;
      const general = isForbidden
        ? 'Email blocked by Resend test mode. Set CONTACT_TO_EMAIL to your Resend account email or verify a domain and set RESEND_FROM_EMAIL.'
        : 'Failed to send email. Please verify email configuration and try again.';
      const devDetails = process.env.NODE_ENV !== 'production' ? { details: message } : {};
      return NextResponse.json({
        success: false,
        errors: { general },
        ...devDetails,
      }, { status: isForbidden ? 400 : 500 });
    }

    return NextResponse.json({ success: true, message: 'Message sent successfully' }, { status: 200 });
  } catch {
    return NextResponse.json(
      { success: false, errors: { general: 'Unexpected server error' } },
      { status: 500 }
    );
  }
}
