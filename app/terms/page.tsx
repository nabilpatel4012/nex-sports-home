import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Terms of Service - NexSports",
  description: "Terms and conditions for using the NexSports platform.",
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <Link href="/">
            <Button variant="ghost" className="mb-6 hover:bg-transparent p-0 flex items-center gap-2 cursor-pointer">
              <ArrowLeft size={18} />
              <span>Back to Home</span>
            </Button>
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: December 25, 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 bg-card/30 rounded-3xl p-8 md:p-12 border border-border/50">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Welcome to <strong>NexSports</strong>, operated by <strong>NexPictora</strong> ("Company", "We", "Us", or
              "Our"). By accessing or using the NexSports platform (the "Service"), You ("User", "You", or "Your") agree
              to be bound by these Terms of Service ("Terms"). If You do not agree to these Terms, please do not use Our
              Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. User Accounts</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>
                To access certain features of Our Service, You may be required to create an account. You represent that
                You are at least 18 years of age and that all information You provide is accurate, complete, and
                current.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of Your account credentials and for all activities
                that occur under Your account. You agree to notify Us immediately of any unauthorized use of Your
                account.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. Bookings and Payments</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>
                <strong>Reservation of Venues:</strong> Our platform facilitates the booking of sports venues. All bookings are subject to availability and acceptance by the respective venue owners.
              </p>
              <p>
                <strong>Fees:</strong> You agree to pay all charges associated with Your bookings, including any applicable service fees. Payments are processed securely through Our third-party payment providers.
              </p>
              <p>
                <strong>Cancellations:</strong> Cancellation policies vary by venue. Please review the specific cancellation policy displayed at the time of booking. We reserve the right to cancel bookings on behalf of venue owners if necessary.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Acceptable Use</h2>
            <p className="text-muted-foreground leading-relaxed">
              You agree not to use the Service for any unlawful purpose or in any way that interrupts, damages, or impairs the Service. You agree not to attempt to gain unauthorized access to Our servers, user accounts, or computer systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              The Service and its original content, features, and functionality are and will remain the exclusive property of NexPictora and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of NexPictora.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              In no event shall NexPictora, its directors, employees, partners, agent, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from Your access to or use of or inability to access or use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">7. Changes to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              We reserve the right, at Our sole discretion, to modify or replace these Terms at any time. By continuing to access or use Our Service after those revisions become effective, You agree to be bound by the revised terms.
            </p>
          </section>

          <div className="border-t border-border/50 pt-8 mt-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If You have any questions about these Terms, please contact Us:
            </p>
            <ul className="text-muted-foreground space-y-1">
              <li>
                <strong className="text-foreground">Email:</strong>{" "}
                <a href="mailto:support@nexpictora.com" className="text-primary hover:underline">
                  support@nexpictora.com
                </a>
              </li>
              <li>
                <strong className="text-foreground">Phone:</strong> +91 75229 92713
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
