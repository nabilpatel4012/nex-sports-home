"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Calendar,
  QrCode,
  CreditCard,
  Bell,
  Clock,
  Shield,
  Smartphone,
  TrendingUp,
  Users,
  Zap,
  Award,
  CheckCircle2,
  LayoutDashboard,
  ArrowRight,
} from "lucide-react"

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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

  const features = [
    {
      icon: Calendar,
      title: "Instant Booking",
      description: "Book your favorite sports venue in seconds with our streamlined interface.",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      icon: QrCode,
      title: "Booking QR Generation",
      description: "Generate secure QR codes for your bookings and verify them instantly at the venue.",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description: "Multiple payment options with bank-grade security for your peace of mind.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description: "Get timely reminders and updates about your bookings and promotions.",
      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: Clock,
      title: "Real-Time Slots",
      description: "View live availability and book slots that fit your schedule perfectly.",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      icon: Shield,
      title: "Cancellation Protection",
      description: "Flexible cancellation policies to accommodate your changing plans.",
      gradient: "from-indigo-500 to-violet-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Optimized",
      description: "Book on-the-go with our responsive design that works on any device.",
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Track your booking history and sports activity with detailed insights.",
      gradient: "from-yellow-500 to-amber-500",
    },
    {
      icon: LayoutDashboard,
      title: "Booking Management",
      description: "Manage all your bookings in one place with easy modifications and cancellations.",
      gradient: "from-lime-500 to-green-500",
    },
  ]

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="features" ref={sectionRef} className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Zap className="text-primary" size={20} />
            <span className="text-primary font-semibold text-sm">Powerful Features</span>
          </div>
          <h2
            className={`text-5xl md:text-6xl font-bold text-foreground mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Everything You <span className="text-primary">Need</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground text-pretty leading-relaxed transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            All the tools you need to manage your sports bookings efficiently and enjoy your game time to the fullest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border/50 hover:border-transparent transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />
                <div
                  className={`absolute inset-0 border-2 border-transparent bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  style={{
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMaskComposite: "xor",
                    maskComposite: "exclude",
                    padding: "1px",
                  }}
                />

                <div className="relative z-10">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
                  >
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-card-foreground mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-foreground group-hover:to-foreground/70 group-hover:bg-clip-text transition-all duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-pretty leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* <div
          className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="md:col-span-2 relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-10 md:p-14 border border-primary/30 shadow-2xl shadow-primary/10 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Award className="text-primary" size={20} />
                <span className="text-primary font-semibold text-sm">Why Choose Us</span>
              </div>
              <h3 className="text-4xl font-bold text-foreground mb-6">Why Choose NexSports?</h3>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed mb-10">
                We're not just another booking platform. NexSports is built from the ground up with sports enthusiasts
                in mind, offering unmatched convenience, reliability, and user experience.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 mb-10">
                <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
                    99.9%
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Uptime</div>
                </div>
                <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-secondary/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {"<"}30s
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">Avg Booking</div>
                </div>
                <div className="bg-background/60 backdrop-blur-sm rounded-xl p-6 border border-accent/20">
                  <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-2">
                    4.9★
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">User Rating</div>
                </div>
              </div>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 group transition-all duration-300 bg-transparent"
                onClick={scrollToContact}
              >
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-10 border border-secondary/30 shadow-xl overflow-hidden group hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-500">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">For Players</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed mb-6">
                Find, book, and play at your favorite venues with ease. Track your activity, connect with friends, and
                never miss a booking.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="text-green-400 flex-shrink-0" size={18} />
                  <span>Quick venue discovery</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="text-green-400 flex-shrink-0" size={18} />
                  <span>Activity tracking</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="text-green-400 flex-shrink-0" size={18} />
                  <span>Social features</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-10 border border-accent/30 shadow-xl overflow-hidden group hover:shadow-2xl hover:shadow-accent/10 transition-all duration-500">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <LayoutDashboard className="text-white" size={28} />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">For Venue Owners</h3>
              <p className="text-muted-foreground text-pretty leading-relaxed mb-6">
                Manage your facility bookings, increase visibility, and grow your business with our comprehensive
                management tools.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="text-amber-400 flex-shrink-0" size={18} />
                  <span>Booking management</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="text-amber-400 flex-shrink-0" size={18} />
                  <span>Revenue analytics</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/80">
                  <CheckCircle2 className="text-amber-400 flex-shrink-0" size={18} />
                  <span>Marketing tools</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  )
}
