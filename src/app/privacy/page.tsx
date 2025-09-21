import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/Accordion';

export const metadata: Metadata = {
  title: 'Privacy Policy | Quantex Ltd',
  description:
    'Learn how Quantex Ltd collects, uses, and protects your data. Clear, human-readable policy covering cookies, analytics, third parties, and your rights (GDPR/CCPA).',
  openGraph: {
    title: 'Privacy Policy | Quantex Ltd',
    description:
      'Learn how Quantex Ltd collects, uses, and protects your data. Clear, human-readable policy covering cookies, analytics, third parties, and your rights (GDPR/CCPA).',
    type: 'article',
    url: '/privacy',
  },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-text-primary">Privacy Policy</h1>
        <p className="mt-2 text-text-secondary max-w-2xl">
          We collect only what we need, use it responsibly, and give you control over your information.
        </p>
        <div className="mt-4 inline-flex items-center gap-3 rounded-xl border border-border-subtle bg-background-card px-4 py-2 text-sm text-text-muted">
          <span className="font-medium text-text-primary">Effective date:</span>
          <span>September 20, 2025</span>
          <span className="mx-2 opacity-40">•</span>
          <span className="font-medium text-text-primary">Version:</span>
          <span>v1.0</span>
        </div>
        <p className="mt-3 text-xs text-text-muted">
          Governed by the laws of Pakistan. Please have counsel review before publishing.
        </p>
      </header>

      <section className="mb-10 rounded-xl border border-border-subtle bg-background-card p-5">
        <h2 className="text-lg font-semibold text-text-primary">In short</h2>
        <ul className="mt-3 list-disc pl-5 text-text-secondary space-y-1">
          <li>We collect the minimum data needed to run and improve our services.</li>
          <li>You can access, correct, or delete your data by contacting us.</li>
          <li>We use cookies and analytics to understand usage and improve performance.</li>
          <li>We take reasonable steps to protect your information.</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">1) Scope</h3>
        <p className="text-text-secondary">
          This policy explains how Quantex Ltd (“Quantex”, “we”, “us”) collects, uses, and protects information when you
          visit our website, interact with our content, and use our services. It covers our website, contact and support
          channels, analytics, and related activities.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">2) Information we collect</h3>
        <ul className="list-disc pl-5 text-text-secondary space-y-1">
          <li>
            <span className="font-medium text-text-primary">Personal Data:</span> name, email, company, job title, and
            any data you submit through forms or correspondence.
          </li>
          <li>
            <span className="font-medium text-text-primary">Usage Data:</span> IP address, device/browser type, pages
            viewed, referring/exit URLs, and time spent.
          </li>
          <li>
            <span className="font-medium text-text-primary">Cookies & Similar Technologies:</span> identifiers that help
            us remember preferences, measure performance, and improve the experience.
          </li>
          <li>
            <span className="font-medium text-text-primary">Device & Logs:</span> error diagnostics and basic telemetry
            to keep the service reliable and secure.
          </li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">3) How we use information</h3>
        <ul className="list-disc pl-5 text-text-secondary space-y-1">
          <li>Provide and improve our services, respond to inquiries, and offer support.</li>
          <li>Maintain security, prevent abuse, and debug issues.</li>
          <li>Analyze usage to improve performance and product decisions.</li>
          <li>
            Send updates and relevant communications (you can opt out of non-essential messages at any time).
          </li>
        </ul>
        <p className="text-text-muted text-sm">
          Lawful bases (where applicable): Contract, Legitimate Interests, and Consent (for certain analytics/marketing).
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">4) Cookies & similar technologies</h3>
        <p className="text-text-secondary">
          We use cookies for core functionality, preferences, performance analytics, and (where applicable) marketing.
          You can control cookies via your browser settings. If a cookie banner or preferences center is available on our
          site, you can update choices there.
        </p>

        <div className="overflow-x-auto">
          <table className="mt-3 w-full text-left text-sm border border-border-subtle rounded-xl overflow-hidden">
            <thead className="bg-background-subtle text-text-muted">
              <tr>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Purpose</th>
                <th className="px-4 py-2">Examples</th>
              </tr>
            </thead>
            <tbody className="[&>tr:nth-child(even)]:bg-white/5">
              <tr className="border-t border-border-subtle">
                <td className="px-4 py-2 font-medium text-text-primary">Necessary</td>
                <td className="px-4 py-2">Core site functionality, security, sessions</td>
                <td className="px-4 py-2">Next.js, Vercel, CSRF/session cookies</td>
              </tr>
              <tr className="border-t border-border-subtle">
                <td className="px-4 py-2 font-medium text-text-primary">Functional</td>
                <td className="px-4 py-2">Remember preferences and improve UX</td>
                <td className="px-4 py-2">Locale/theme cookies</td>
              </tr>
              <tr className="border-t border-border-subtle">
                <td className="px-4 py-2 font-medium text-text-primary">Analytics</td>
                <td className="px-4 py-2">Understand usage and performance</td>
                <td className="px-4 py-2">Google Analytics, Vercel Analytics</td>
              </tr>
              <tr className="border-t border-border-subtle">
                <td className="px-4 py-2 font-medium text-text-primary">Marketing</td>
                <td className="px-4 py-2">Measure campaigns and personalize content</td>
                <td className="px-4 py-2">Google Ads, LinkedIn Insight Tag</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">5) Third-party providers</h3>
        <p className="text-text-secondary">
          We partner with trusted providers to host, analyze, and improve our services. These processors are bound by
          contracts requiring appropriate security and data protection measures. Examples (replace with your providers):
        </p>
        <ul className="list-disc pl-5 text-text-secondary space-y-1">
          <li>Hosting & Delivery: Vercel, AWS, Cloudflare</li>
          <li>Analytics: Google Analytics, Vercel Analytics</li>
          <li>Communications: Resend (transactional email)</li>
          <li>Payments (if applicable): Stripe</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">6) International transfers</h3>
        <p className="text-text-secondary">
          If data is transferred internationally, we rely on appropriate safeguards (e.g., Standard Contractual Clauses)
          where required by law, and we strive to process data in jurisdictions with adequate protections.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">7) Data retention</h3>
        <p className="text-text-secondary">
          We retain data only as long as necessary for the purposes described above, to comply with legal obligations,
          resolve disputes, and enforce agreements. Typical windows:
        </p>
        <ul className="list-disc pl-5 text-text-secondary space-y-1">
          <li>Contact form submissions: up to 24 months</li>
          <li>Analytics: 14–26 months (adjust per provider)</li>
          <li>Account/billing records (if applicable): as required by law</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">8) Security</h3>
        <p className="text-text-secondary">
          We use reasonable technical and organizational measures including TLS encryption in transit, access controls,
          least-privilege permissions, logging/monitoring, and regular patching. No method of transmission or storage is
          100% secure, but we work to continuously improve our protections.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">9) Your rights (GDPR/CCPA and similar)</h3>
        <ul className="list-disc pl-5 text-text-secondary space-y-1">
          <li>Access, correct, or delete your personal data</li>
          <li>Object to or restrict processing; withdraw consent (where applicable)</li>
          <li>Receive a copy of your data (portability)</li>
          <li>Not be discriminated against for exercising your rights (CCPA/CPRA)</li>
        </ul>
        <p className="text-text-secondary">
          To make a request, email <span className="font-medium">contact.quantex@gmail.com</span> with the subject
          &quot;Privacy Request&quot; and enough information for us to verify your identity. We will respond within the
          timelines required by applicable laws.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">10) Children</h3>
        <p className="text-text-secondary">
          Our services are not intended for children under 16 (or as defined by local law). We do not knowingly collect
          data from children. If you believe a child has provided data, please contact us so we can take appropriate steps.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">11) Changes to this policy</h3>
        <p className="text-text-secondary">
          We may update this policy from time to time. Significant changes will be posted on this page with a new
          &quot;Last updated&quot; date. Continued use of the service after changes means you accept the updated policy.
        </p>
      </section>

      <section className="space-y-3 mb-12">
        <h3 className="text-xl font-semibold text-text-primary">12) Contact us</h3>
        <p className="text-text-secondary">
          Email: <span className="font-medium">contact.quantex@gmail.com</span>
          <br />
          Address: <span className="font-medium">Quantex Ltd., Remote Operations, Lahore, Pakistan</span>
        </p>
      </section>

      <section className="mb-16">
        <h3 className="text-xl font-semibold text-text-primary mb-4">Privacy FAQ</h3>
        <FAQAccordion
          items={[
            {
              question: 'Do you sell my personal information?',
              answer: <p>No. We do not sell personal information. If that ever changes, we will update this policy and provide opt-out options.</p>,
            },
            {
              question: 'How do I opt out of analytics cookies?',
              answer: <p>Use your browser&rsquo;s settings or, if available, our cookie banner/preferences center to adjust analytics preferences.</p>,
            },
            {
              question: 'How do I make a data request?',
              answer: <p>Email contact.quantex@gmail.com with the subject &quot;Privacy Request&quot; and your specific request.</p>,
            },
          ]}
        />
      </section>

      <p className="text-xs text-text-muted">
        This page is informational and does not constitute legal advice. Please consult qualified counsel before publishing.
      </p>
    </main>
  );
}