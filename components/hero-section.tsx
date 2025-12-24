"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                Built by Team{" "}
                <a
                  href="https://nexpictora.com?redirectFrom=NexSports"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline cursor-pointer"
                >
                  NexPictora
                </a>
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground text-balance leading-tight">
              Book Your Game, <span className="text-primary">Anytime</span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
              The ultimate sports booking platform for turf, pickleball, and more. Reserve your favorite venues
              instantly and never miss a game.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 group cursor-pointer"
                onClick={scrollToContact}
              >
                Start Free Trial
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 bg-transparent cursor-pointer"
                onClick={() => {
                  const element = document.getElementById("features")
                  if (element) element.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-1">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Venues</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-secondary">10K+</div>
                <div className="text-sm text-muted-foreground">Bookings</div>
              </div>
              <div className="space-y-1">
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div> */}
          </div>

          {/* Right Content - Animated Cards */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Floating Cards */}
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Calendar className="text-primary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground mb-1">Quick Booking</h3>
                      <p className="text-sm text-muted-foreground">Reserve your spot in under 30 seconds</p>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up ml-8"
                  style={{ animationDelay: "0.2s" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-secondary" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground mb-1">Find Nearby Venues</h3>
                      <p className="text-sm text-muted-foreground">Discover sports facilities near you</p>
                    </div>
                  </div>
                </div>

                <div
                  className="bg-card border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow animate-fade-in-up"
                  style={{ animationDelay: "0.4s" }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="text-accent" size={24} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-card-foreground mb-1">Real-Time Availability</h3>
                      <p className="text-sm text-muted-foreground">Check live slot availability instantly</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
