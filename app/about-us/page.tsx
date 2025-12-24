"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Rocket, Target, Users, Lightbulb, CheckCircle2, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function AboutUsPage() {
  const teamValues = [
    {
      icon: Lightbulb,
      title: "Innovate",
      description:
        "We constantly push boundaries and explore new technologies to create cutting-edge solutions that transform how sports facilities are booked and managed.",
    },
    {
      icon: TrendingUp,
      title: "Elevate",
      description:
        "We elevate every experience by setting new standards of excellence, ensuring quality and reliability in everything we deliver to our users.",
    },
    {
      icon: Target,
      title: "Confide",
      description:
        "We build confidence through transparency, security, and trustworthiness. Your data and bookings are safe with us, always.",
    },
    {
      icon: Users,
      title: "Customer Centric",
      description:
        "Every decision we make is guided by our customers' needs. Your experience is at the heart of everything we build.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 max-w-5xl text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8">
              <Users className="text-primary" size={20} />
              <span className="text-primary font-semibold text-sm">Our Mission</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-8 tracking-tight">
              Revolutionizing Sports <span className="text-primary">Engagement</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12">
              NexSports is dedicated to simplifying how the world plays. We bridge the gap between passionate players and premium venues through seamless technology.
            </p>
          </div>
        </section>

        <section className="py-12 bg-card/30 border-y border-border/50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl border border-border bg-white flex items-center justify-center p-8">
                  <Image
                    src="/images/nexpictora-logo.png"
                    alt="NexPictora Logo"
                    fill
                    className="object-contain p-8"
                  />
              </div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We are a collective of innovators, engineers, and sports enthusiasts at <a href="https://nexpictora.com" className="text-primary hover:underline font-semibold">NexPictora</a>. We noticed a disconnect in the sports booking ecosystem—inefficiency, lack of transparency, and missed opportunities.
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-4">What We Do</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    We build robust, user-centric platforms that empower venue owners to manage operations effortlessly and enable players to book games instantly.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values Section */}
            <div>
               <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                 {teamValues.map((value, index) => {
                   const Icon = value.icon
                   return (
                     <div
                       key={index}
                       className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                     >
                       <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                         <Icon className="text-primary" size={24} />
                       </div>
                       <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                       <p className="text-muted-foreground leading-relaxed text-sm">
                         {value.description}
                       </p>
                     </div>
                   )
                 })}
               </div>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl">
             <div className="bg-gradient-to-r from-card to-card/50 border border-border rounded-3xl p-12 text-center md:text-left md:flex items-center justify-between gap-8 shadow-lg">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold">Ready to Elevate Your Game?</h2>
                    <p className="text-muted-foreground text-lg">Join the NexSports community today.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mt-8 md:mt-0 flex-shrink-0">
                    <Link href="/#contact">
                        <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8">
                            Get Started
                        </Button>
                    </Link>
                </div>
             </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
