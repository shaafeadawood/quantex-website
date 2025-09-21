import type { Metadata } from 'next';
import { FAQAccordion } from '@/components/Accordion';

export const metadata: Metadata = {
  title: 'Security & Trust | Quantex Ltd',
  description:
    'How Quantex protects your data: infrastructure, encryption, access controls, vulnerability disclosure, incident response, and compliance placeholders.',
  openGraph: {
    title: 'Security & Trust | Quantex Ltd',
    description:
      'How Quantex protects your data: infrastructure, encryption, access controls, vulnerability disclosure, incident response, and compliance placeholders.',
    type: 'article',
    url: '/security',
  },
};

export default function SecurityTrustPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <header className="mb-10">
        <h1 className="text-3xl font-extrabold tracking-tight text-text-primary">Security &amp; Trust</h1>
        <p className="mt-2 text-text-secondary max-w-2xl">
          We design for security at every layer and continuously improve our defenses.
        </p>
        <div className="mt-4 inline-flex items-center gap-3 rounded-xl border border-border-subtle bg-background-card px-4 py-2 text-sm text-text-muted">
          <span className="font-medium text-text-primary">Last updated:</span>
          <span>September 20, 2025</span>
          <span className="mx-2 opacity-40">•</span>
          <span className="font-medium text-text-primary">Version:</span>
          <span>v1.0</span>
        </div>
        <p className="mt-3 text-xs text-text-muted">
          Replace placeholders (providers, retention windows, contact). Consider a yearly review cadence.
        </p>
      </header>

      <section className="mb-6">
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-background-card px-3 py-1 text-xs text-text-muted">
            SOC 2 (placeholder)
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-background-card px-3 py-1 text-xs text-text-muted">
            ISO 27001 (placeholder)
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-border-subtle bg-background-card px-3 py-1 text-xs text-text-muted">
            GDPR-ready (general posture)
          </span>
        </div>
      </section>

      <section className="mb-10 rounded-xl border border-border-subtle bg-background-card p-5">
        <h2 className="text-lg font-semibold text-text-primary">Summary</h2>
        <ul className="mt-3 list-disc pl-5 text-text-secondary space-y-1">
          <li>Defense-in-depth using reputable cloud infrastructure and managed services.</li>
          <li>Encryption in transit and, where supported, at rest.</li>
          <li>Least-privilege access with periodic reviews and auditing.</li>
          <li>Documented incident response with user notifications when appropriate.</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">1) Infrastructure security</h3>
        <ul className="list-disc pl-5 text-text-secondary space-y-1">
          <li>Hosted on reputable cloud providers with strong physical and network protections.</li>
          <li>Network segmentation, firewalls, and DDoS protections as provided by our cloud provider.</li>
          <li>Regular patching and dependency management across the stack.</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">2) Data protection & encryption</h3>
        <ul className="list-disc pl-5 text-text-secondary space-y-1">
          <li>TLS (HTTPS) for data in transit.</li>
          <li>Encryption at rest where supported by the storage layer.</li>
          <li>Backups and disaster recovery appropriate to data criticality.</li>
          <li>Data minimization: we collect only what we need to provide the service.</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">3) Access controls</h3>
        <ul className="list-disc pl-5 text-text-secondary space-y-1">
          <li>Role-based access following least-privilege principles.</li>
          <li>Multi-factor authentication for administrative access where supported.</li>
          <li>Audit logging for sensitive actions and access.</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">4) Application security</h3>
        <ul className="list-disc pl-5 text-text-secondary space-y-1">
          <li>Secure SDLC practices: code reviews, CI checks, and dependency scanning.</li>
          <li>Input validation, output encoding, and common vulnerability mitigations.</li>
          <li>Managed secrets and environment-based configuration.</li>
        </ul>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">5) Vulnerability disclosure</h3>
        <p className="text-text-secondary">
          We welcome responsible disclosure. Please email suspected vulnerabilities to
          {' '}<span className="font-medium">contact.quantex@gmail.com</span> with a clear description and steps to reproduce.
          Do not publicly disclose before we acknowledge and address the issue.
        </p>
      </section>

      <section className="space-y-3 mb-8">
        <h3 className="text-xl font-semibold text-text-primary">6) Incident response</h3>
        <p className="text-text-secondary">
          We maintain a plan for identifying, containing, eradicating, and recovering from security incidents.
          Where user impact is likely, we notify affected users as required by law and our policies.
        </p>
      </section>

      <section className="space-y-3 mb-12">
        <h3 className="text-xl font-semibold text-text-primary">7) Data retention & deletion</h3>
        <p className="text-text-secondary">
          We retain data only as long as necessary to provide the service and meet legal obligations. You can request
          deletion of your data, subject to legitimate retention requirements (e.g., legal, billing, or security).
        </p>
      </section>

      <section className="mb-16">
        <h3 className="text-xl font-semibold text-text-primary mb-4">Security FAQ</h3>
        <FAQAccordion
          items={[
            {
              question: 'Is my data encrypted?',
              answer: <p>Yes. We encrypt data in transit and, where supported, at rest.</p>,
            },
            {
              question: 'How do I report a vulnerability?',
              answer: <p>Email contact.quantex@gmail.com with a clear description and steps to reproduce.</p>,
            },
            {
              question: 'Do you have compliance certifications?',
              answer: <p>We include placeholders for SOC 2 / ISO 27001. We will update this page as our program evolves.</p>,
            },
          ]}
        />
      </section>

      <p className="text-xs text-text-muted">
        This page describes our current security posture and may evolve over time. It does not create warranties or contractual commitments.
      </p>
    </main>
  );
}