"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Zap, Shield, Clock, TrendingUp, CheckCircle2, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const whyChooseReasons = [
    {
      icon: Clock,
      title: "Real-Time Availability",
      description: "Instantly see available slots and book in seconds without endless phone calls or emails.",
      category: "For Everyone",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: Shield,
      title: "Secure QR-Based Check-In",
      description: "Every booking generates a unique QR code for hassle-free verification and enhanced security.",
      category: "For Everyone",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: Zap,
      title: "Lightning-Fast Booking",
      description: "Book your favorite sports venue in under 30 seconds with our streamlined process.",
      category: "For Players",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: CheckCircle2,
      title: "Instant Confirmations",
      description: "Get immediate booking confirmation with all details sent to your email and dashboard.",
      category: "For Players",
      gradient: "from-blue-500 to-indigo-500",
    },
    {
      icon: TrendingUp,
      title: "Maximize Your Revenue",
      description: "Venue owners can optimize occupancy rates and reduce no-shows with automated reminders.",
      category: "For Venue Owners",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Users,
      title: "Streamlined Management",
      description: "Manage all bookings, view analytics, and track revenue from one powerful dashboard.",
      category: "For Venue Owners",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Target,
      title: "Zero Booking Conflicts",
      description: "Smart scheduling system prevents double bookings and manages cancellations automatically.",
      category: "For Venue Owners",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: Award,
      title: "Premium Experience",
      description: "Industry-leading platform trusted by thousands of players and venue owners nationwide.",
      category: "For Everyone",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-background via-background/50 to-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h2
            className={`text-5xl md:text-6xl font-bold text-foreground mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Why Choose <span className="text-primary">NexSports</span>?
          </h2>
          <p
            className={`text-xl text-muted-foreground text-pretty leading-relaxed transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Join thousands of sports enthusiasts and venue owners who've transformed their booking experience with
            NexSports. Whether you're a player looking for your next game or a venue owner managing multiple facilities,
            we've built the perfect solution for you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {whyChooseReasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <div
                key={index}
                className={`group relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${reason.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  >
                    <Icon className="text-white" size={32} />
                  </div>
                  <div className="inline-block px-3 py-1 bg-primary/10 rounded-full text-primary text-xs font-semibold mb-3">
                    {reason.category}
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3">{reason.title}</h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed">{reason.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* <div
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground mb-6 text-lg">Want to know more about the team behind NexSports?</p>
          <Link href="/about-us">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
            >
              Meet Team NexPictora
            </Button>
          </Link>
        </div> */}
      </div>
    </section>
  )
}
