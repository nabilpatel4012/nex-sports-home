"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle2, Sparkles } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
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

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch("https://api.nexsports.in/query", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setIsSubmitted(true)
      setFormData({ name: "", email: "", phone: "", message: "" })
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      setError("Something went wrong. Please try again later.")
      console.error(err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-32 bg-gradient-to-b from-background to-background/50 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2
            className={`text-5xl md:text-6xl font-bold text-foreground mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="text-muted-foreground">Get Your</span> <span className="text-primary">Free Trial</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground text-pretty leading-relaxed transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Start your one-month free trial today. No credit card required. Have pricing questions?{" "}
            <span className="text-primary font-semibold">Need</span> help? We're here for you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div
            className={`flex flex-col gap-8 h-full transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-10 border border-primary/30 shadow-xl flex-1">
              <h3 className="text-3xl font-bold text-card-foreground mb-8">Why Start Your Free Trial?</h3>
              <ul className="space-y-5">
                {[
                  "Full access to all features for 30 days",
                  "No credit card or payment required",
                  "Cancel anytime with no obligations",
                  "Dedicated onboarding support",
                  "Access to all sports venues on our platform",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="text-white" size={16} />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors text-lg">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <a 
                href="mailto:support@nexpictora.com"
                className="group flex items-start gap-5 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-primary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-violet-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-card-foreground mb-2 text-lg">Email Us</h4>
                  <p className="text-muted-foreground break-all group-hover:text-primary transition-colors">support@nexpictora.com</p>
                </div>
              </a>

              <a 
                href="tel:+917522992713"
                className="group flex items-start gap-5 bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 hover:border-secondary/50 hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5 cursor-pointer"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-card-foreground mb-2 text-lg">Call Us</h4>
                  <p className="text-muted-foreground group-hover:text-primary transition-colors">+91 75229 92713</p>
                </div>
              </a>
            </div>
          </div>

          <div
            className={`h-full transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="h-full flex flex-col justify-center bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-xl rounded-3xl p-10 border border-border/50 shadow-2xl">
              {isSubmitted ? (
                <div className="text-center py-16">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <CheckCircle2 className="text-white" size={40} />
                  </div>
                  <h3 className="text-3xl font-bold text-card-foreground mb-3">Thank You!</h3>
                  <p className="text-muted-foreground text-lg">
                    We'll get back to you soon with your free trial details.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && <p className="text-red-500 text-sm text-center">{error}</p>}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="h-14 bg-background/50 border-border/50 focus:border-primary text-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="h-14 bg-background/50 border-border/50 focus:border-primary text-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-3">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 75229 92713"
                      required
                      className="h-14 bg-background/50 border-border/50 focus:border-primary text-lg"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                      Message / Questions
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your requirements or ask any pricing questions..."
                      rows={5}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary text-lg resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    variant="outline"
                    disabled={isLoading}
                    className="w-full border-2 border-primary text-primary hover:bg-primary hover:text-white text-lg h-14 font-semibold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all bg-transparent disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "Submitting..." : "Start Free Trial"}
                    {!isLoading && <Send className="ml-2" size={20} />}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    By submitting, you agree to our{" "}
                    <Link href="/terms" className="text-primary hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </Link>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
