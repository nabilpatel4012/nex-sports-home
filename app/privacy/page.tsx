import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Privacy Policy - NexSports",
  description: "Learn how NexSports protects and manages your personal information.",
}

export default function PrivacyPage() {
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
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: December 25, 2025</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8 bg-card/30 rounded-3xl p-8 md:p-12 border border-border/50">
          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              <strong>NexPictora</strong> ("Company", "We", "Us", or "Our") operates the <strong>NexSports</strong> platform. We are committed to protecting Your personal information and Your right to privacy. This Privacy Policy applies to all information collected through Our Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
            <div className="text-muted-foreground leading-relaxed space-y-2">
              <p>
                We collect personal information that You voluntarily provide to Us when you register on the Service, express an interest in obtaining information about Us or Our products, or otherwise contact Us.
              </p>
              <p>
                <strong>Personal Data:</strong> This may include Your name, email address, phone number, and payment information necessary to process bookings.
              </p>
              <p>
                <strong>Usage Data:</strong> We may automatically collect certain information when You visit, use, or navigate the Service. This information does not reveal Your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, and other technical information.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-2">
              We use personal information collected via our Service for a variety of business purposes described below:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2">
              <li>To facilitate account creation and logon process.</li>
              <li>To fulfill and manage Your bookings and payments.</li>
              <li>To send administrative information to You, such as product, service, and new feature information.</li>
              <li>To protect Our Services and for legal compliance.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">4. Sharing Your Information</h2>
            <p className="text-muted-foreground leading-relaxed">
              We may process or share Your data that We hold based on the following legal basis:
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 ml-2 mt-2">
              <li><strong>Consent:</strong> We may process Your data if You have given Us specific consent to use Your personal information for a specific purpose.</li>
              <li><strong>Performance of a Contract:</strong> Where We have entered into a contract with You, We may process Your personal information to fulfill the terms of Our contract.</li>
              <li><strong>Venue Providers:</strong> We share necessary booking details with venue owners to facilitate Your reservation.</li>
            </ul>
            <p className="text-muted-foreground mt-4">We do <strong>not</strong> sell Your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">5. Data Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              We have implemented appropriate technical and organizational security measures designed to protect the security of any personal information We process. However, please also remember that We cannot guarantee that the internet itself is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-foreground mb-4">6. Your Privacy Rights</h2>
            <p className="text-muted-foreground leading-relaxed">
              Depending on Your region, You may have certain rights regarding Your personal information, such as the right to access, correct, or delete the data We hold about You. To exercise these rights, please contact Us.
            </p>
          </section>

          <div className="border-t border-border/50 pt-8 mt-12">
            <h2 className="text-xl font-semibold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If You have questions or comments about this policy, You may contact Us at:
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
