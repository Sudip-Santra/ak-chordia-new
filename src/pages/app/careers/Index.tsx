import { useState } from 'react'
import Navbar from '@/components/app/shared/Navbar'
import FooterSection from '@/components/app/shared/Footer'
import { Handshake, BookOpenCheck, ShieldCheck } from 'lucide-react'

const heroImage =
  'https://images.unsplash.com/photo-1758518726609-c551f858cd5c?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

const CareersPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    event.currentTarget.reset()
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <section className="relative overflow-hidden bg-background">
          <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:py-0 lg:pt-20">
            <div className="max-w-3xl mx-auto space-y-6 text-center">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600">
                Careers at A K Chordia
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
                Join our team and <span className="text-blue-600">build the future together</span>
              </h1>
              <p className="text-base text-muted-foreground sm:text-lg">
                Be part of an innovative practice that helps ambitious businesses stay compliant, confident,
                and growth-ready. We combine rigorous advisory with a collaborative culture so every mandate
                feels meaningful.
              </p>
            </div>
            <div className="mt-10 lg:mt-14">
              <div className="relative w-full overflow-hidden rounded-[32px] shadow-2xl shadow-blue-200/70">
                <img
                  src={heroImage}
                  alt="Team collaboration"
                  className="h-[520px] w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-[32px] border border-white/40" />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-background">
          <div className="mx-auto w-full max-w-7xl px-6 py-16 sm:px-10 lg:py-0 lg:pt-20 lg:pb-10">
            <div className="text-center space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600">
                Our Values
              </p>
              <h2 className="text-3xl font-semibold sm:text-4xl text-foreground">
                What fuels our culture
              </h2>
              <p className="text-base text-muted-foreground max-w-3xl mx-auto">
                We grow by aligning curious minds, supportive mentors, and ambitious mandates. Here’s how we
                bring that to life every day.
              </p>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: 'Collaborative problem solving',
                  description:
                    'Cross-functional pods pair juniors with partners so you learn faster and ship smarter recommendations.',
                  icon: Handshake,
                },
                {
                  title: 'Always-on learning loops',
                  description:
                    'Structured mentorship hours, lunch-and-learns, and external certifications keep you ahead of regulation.',
                  icon: BookOpenCheck,
                },
                {
                  title: 'Client-first accountability',
                  description:
                    'We obsess over clarity and deadlines. Everyone owns outcomes, from drafting opinion notes to presenting to boards.',
                  icon: ShieldCheck,
                },
              ].map((value) => (
                <div
                  key={value.title}
                  className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100">
                    <value.icon className="h-7 w-7 text-blue-600" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{value.title}</h3>
                  <div className="my-3 h-px bg-gray-200" />
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-background py-16 lg:py-0 lg:pt-10 lg:pb-20">
          <div className="mx-auto w-full max-w-4xl px-6 sm:px-10">
            <div className="text-center space-y-3 mb-10">
              <p className="text-xs font-bold uppercase tracking-[0.4em] text-blue-600">Apply Now</p>
              <h2 className="text-3xl font-semibold sm:text-4xl text-foreground">Ready to make an impact?</h2>
              <p className="text-base text-muted-foreground max-w-2xl mx-auto">
                Share a few details and our people team will reach out with the right opportunity across audit,
                tax, advisory, and support functions.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6 rounded-3xl border border-gray-100 bg-white/80 p-6 shadow-lg shadow-blue-50">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-muted-foreground" htmlFor="fullName">
                    Full name*
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="Priya Sharma"
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-background px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground" htmlFor="email">
                    Work email*
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-background px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-muted-foreground" htmlFor="phone">
                    Phone*
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    placeholder="+91 98765 43210"
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-background px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground" htmlFor="role">
                    Desired role / team*
                  </label>
                  <input
                    id="role"
                    name="role"
                    required
                    placeholder="Audit | Tax | Advisory | People"
                    className="mt-2 w-full rounded-2xl border border-gray-200 bg-background px-4 py-2.5 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground" htmlFor="message">
                  Tell us about your experience*
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Share recent mandates, skill focus, and notice period."
                  className="mt-2 w-full rounded-2xl border border-gray-200 bg-background px-4 py-3 text-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-blue-600 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Submit application'}
              </button>
            </form>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}

export default CareersPage


