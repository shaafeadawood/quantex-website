import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/Accordion';

export const metadata: Metadata = {
  title: 'Terms of Service | Quantex Ltd',
  description:
    'The rules for using Quantex Ltd services: acceptable use, IP rights, disclaimers, limitation of liability, termination, and dispute resolution.',
  openGraph: {
    title: 'Terms of Service | Quantex Ltd',
    description:
      'The rules for using Quantex Ltd services: acceptable use, IP rights, disclaimers, limitation of liability, termination, and dispute resolution.',
    type: 'article',
    url: '/terms',
  },
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-text-primary">Terms of Service</h1>
        <p className="mt-2 text-text-secondary max-w-2xl">
          Please read these terms carefully. By using our services, you agree to them.
        </p>
        <div className="mt-4 inline-flex items-center gap-3 rounded-xl border border-border-subtle bg-background-card px-4 py-2 text-sm text-text-muted">
          <span className="font-medium text-text-primary">Effective date:</span>
          <span>September 20, 2025</span>
          <span className="mx-2 opacity-40">•</span>
          <span className="font-medium text-text-primary">Version:</span>
          <span>v1.0</span>
        </div>
        <p className="mt-3 text-xs text-text-muted">
          Replace placeholders (governing law, address, paid features) and have counsel review.
        </p>
      </header>

      <section className="mb-10 rounded-xl border border-border-subtle bg-background-card p-5">
        <h2 className="text-lg font-semibold text-text-primary">In short</h2>
        <ul className="mt-3 list-disc pl-5 text-text-secondary space-y-1">
          <li>Use the services responsibly and legally.</li>
          <li>You own your content; we own our IP.</li>
          <li>We limit our liability to the extent the law allows.</li>
          <li>Contact us with questions or to report abuse.</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">1) Acceptance of terms</h3>
        <p className="text-text-secondary">
          By accessing or using the services, you agree to these Terms. If you use the services on behalf of a company,
          you represent that you are authorized to bind that company, and “you” refers to that company.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">2) Eligibility & accounts</h3>
        <ul className="list-disc pl-5 text-text-secondary space-y-1">
          <li>You must be the age of majority in your jurisdiction to use the services.</li>
          <li>Keep your account credentials secure. You are responsible for activity under your account.</li>
          <li>Notify us promptly about any unauthorized access or security issues.</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">3) Acceptable use</h3>
        <ul className="list-disc pl-5 text-text-secondary space-y-1">
          <li>Do not violate laws or regulations.</li>
          <li>Do not disrupt the services, introduce malware, or circumvent security controls.</li>
          <li>Do not access accounts, systems, or data without authorization.</li>
          <li>Do not infringe intellectual property or privacy rights; do not upload illegal or harmful content.</li>
        </ul>
        <p className="text-text-secondary">
          We may investigate violations and cooperate with law enforcement when required.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">4) Payment & billing (if applicable)</h3>
        <p className="text-text-secondary">
          Some features may require payment. Pricing, taxes, and refund policies will be shown in the product or order
          form. By providing a payment method, you authorize charges by us and our processors (e.g., Stripe).
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">5) Intellectual property</h3>
        <ul className="list-disc pl-5 text-text-secondary space-y-1">
          <li>
            <span className="font-medium text-text-primary">Our IP:</span> The services, content, and underlying
            technology are owned by Quantex and its licensors. Except as permitted by law, you may not copy, modify, or
            create derivative works.
          </li>
          <li>
            <span className="font-medium text-text-primary">Your content:</span> You retain ownership of the content you
            submit. You grant us a limited license to host, process, and display your content solely to operate and
            improve the services.
          </li>
          <li>
            <span className="font-medium text-text-primary">DMCA:</span> To report infringement, email
            {' '}contact.quantex@gmail.com with your contact details, description, URL, and a sworn statement.
          </li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">6) Disclaimers</h3>
        <p className="text-text-secondary">
          The services are provided &quot;as is&quot; and &quot;as available&quot;. To the fullest extent permitted by
          law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular
          purpose, and non-infringement.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">7) Limitation of liability</h3>
        <p className="text-text-secondary">
          To the maximum extent permitted by law, Quantex and its affiliates are not liable for indirect, incidental,
          special, consequential, or exemplary damages, or for loss of profits, data, or goodwill. Our total liability
          for any claim is limited to the amounts you paid (if any) in the 12 months before the event giving rise to the claim.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">8) Termination & suspension</h3>
        <p className="text-text-secondary">
          We may suspend or terminate access for violations of these Terms, security risks, or legal requirements.
          Where permitted, we will use reasonable efforts to notify you. You may stop using the services at any time.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">9) Indemnity</h3>
        <p className="text-text-secondary">
          You agree to defend, indemnify, and hold harmless Quantex and its affiliates from claims or liabilities arising
          from your use of the services, your content, or your violation of these Terms or applicable laws.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">10) Governing law & dispute resolution</h3>
        <div className="rounded-xl border border-amber-400/30 bg-amber-500/5 p-4 text-sm text-text-secondary">
          Governing Law & Jurisdiction: <span className="font-medium">Laws of Pakistan</span>. Consider small claims or arbitration for cost-effective resolution, subject to applicable law.
        </div>
      </section>

      <section className="space-y-3 mb-12">
        <h3 className="text-xl font-semibold text-text-primary">11) Changes to these terms</h3>
        <p className="text-text-secondary">
          We may update these Terms from time to time. We will update the date above and may provide additional notice
          for significant changes. Continued use of the services means you accept the updated Terms.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-xl font-semibold text-text-primary">Contact</h3>
        <p className="mt-2 text-text-secondary">
          Email: <span className="font-medium">contact.quantex@gmail.com</span>
          <br />
          Address: <span className="font-medium">Quantex Ltd., Remote Operations, Lahore, Pakistan</span>
        </p>
      </section>

      <section className="mb-16">
        <h3 className="text-xl font-semibold text-text-primary mb-4">Terms FAQ</h3>
        <FAQAccordion
          items={[
            {
              question: 'Can I use the services for commercial projects?',
              answer: <p>Yes, subject to these Terms and applicable laws.</p>,
            },
            {
              question: 'How will I know if these Terms change?',
              answer: <p>We will update the effective date above and may provide additional notice for significant changes.</p>,
            },
            {
              question: 'How do I report abuse or a policy violation?',
              answer: <p>Email contact.quantex@gmail.com with details and relevant links or screenshots.</p>,
            },
          ]}
        />
      </section>

      <p className="text-xs text-text-muted">
        This page is a template and does not constitute legal advice. Please consult qualified counsel before publishing.
      </p>
    </main>
  );
}