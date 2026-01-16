import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '@/components/app/shared/Navbar'
import FooterSection from '@/components/app/shared/Footer'
import { CheckCircle } from 'lucide-react'

const services = [
  {
    id: 'audit-assurance',
    title: 'Audit & Assurance',
    description:
      'Independent statutory, internal, and risk-based audits that translate compliance into actionable intelligence for promoters and boards.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
    highlights: ['Statutory & tax audits', 'Internal controls benchmarking', 'Process walkthrough & reporting'],
  },
  {
    id: 'taxation',
    title: 'Taxation Services',
    description:
      'Direct and indirect tax strategy, filings, and representation handled by senior partners for airtight compliance and planning.',
    image: 'https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2070&auto=format&fit=crop',
    highlights: ['Income tax assessments', 'GST advisory & filings', 'Litigation & representation support'],
  },
  {
    id: 'business-advisory',
    title: 'Business Advisory',
    description:
      'Partner-first advisory pods that combine finance, operations, and governance to accelerate transformation mandates.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop',
    highlights: ['Strategic roadmap workshops', 'Transaction & diligence readiness', 'Board & investor reporting'],
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning',
    description:
      'Forward-looking planning, budgeting, and cash-flow stewardship that keeps capital allocation disciplined and transparent.',
    image: 'https://images.unsplash.com/photo-1427751840561-9852520f8ce8?q=80&w=2070&auto=format&fit=crop',
    highlights: ['Rolling forecasts & KPIs', 'Budget vs actual analytics', 'Working capital optimisation'],
  },
  {
    id: 'accounting',
    title: 'Accounting Services',
    description:
      'Day-to-day bookkeeping, MIS, and reconciliations delivered with enterprise-grade controls and cloud tooling.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    highlights: ['Full-stack bookkeeping', 'System migrations & clean-up', 'Monthly MIS & reconciliations'],
  },
  {
    id: 'corporate-law',
    title: 'Corporate Law',
    description:
      'Secretarial retainers, board advisory, and corporate law opinions that keep governance aligned with Companies Act mandates.',
    image: 'https://images.unsplash.com/photo-1521790797524-b2497295b8a0?q=80&w=2070&auto=format&fit=crop',
    highlights: ['Board & shareholder actions', 'ROC filings & registers', 'Corporate law opinions'],
  },
  {
    id: 'gst-services',
    title: 'GST Services',
    description:
      'Registration, advisory, audits, and dispute management covering the full lifecycle of Goods & Services Tax operations.',
    image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop',
    highlights: ['GST health checks', 'Return preparation & filing', 'Refunds, appeals & advance rulings'],
  },
  {
    id: 'company-formation',
    title: 'Company Formation',
    description:
      'End-to-end entity setup across LLPs, Pvt Ltd, and Section 8 structures with banking, licensing, and statutory onboarding.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop',
    highlights: ['Entity structuring advisory', 'Digital incorporation & PAN/TAN', 'Post-incorporation compliance kit'],
  },
  {
    id: 'compliance',
    title: 'Compliance Management',
    description:
      'Always-on compliance monitoring, dashboards, and remediation that de-risk growth without slowing execution.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2070&auto=format&fit=crop',
    highlights: ['Compliance calendars', 'Policy documentation', 'Risk & remediation tracking'],
  },
  {
    id: 'fema',
    title: 'FEMA Services',
    description:
      'Specialised FEMA and RBI advisory for cross-border investments, ECBs, ODI/FDI, and transaction vetting.',
    image:
      'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop',
    highlights: ['FDI/ODI structuring', 'Filing & liaison with AD banks', 'ECB & capital account compliance'],
  },
]

const ServicesPage = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - 100
        window.scrollTo({ top: y, behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location.hash])

  const handleLearnMoreClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('services-grid')
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-slate-950">
          <img
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop"
            alt="Strategy workshop"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-primary/60" />

          <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-28 text-center text-white sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">Services</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Professional advisory services for business needs
            </h1>
            <p className="mt-6 text-base text-white/80 sm:text-lg">
              From boardrooms to plant floors, our multi-disciplinary teams plug into your mandate with measurable
              outcomes, rigorous governance, and the confidence of a chartered practice.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Contact Us
              </a>
              <a
                href="#services-grid"
                onClick={handleLearnMoreClick}
                className="inline-flex items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white hover:bg-white/5"
              >
                Learn more
              </a>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services-grid" className="bg-background pb-20 pt-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-primary">Capability Stack</p>
              <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Curated services for growth-ready teams</h2>
              <p className="mt-4 text-base text-muted-foreground">
                Select the professional team you need today and scale seamlessly as new mandates appear tomorrow.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 !rounded-none">
              {services.map((service) => (
                <article
                  id={service.id}
                  key={service.title}
                  className="group relative overflow-hidden border border-white/10 bg-card shadow-sm transition duration-500 hover:shadow-xl !rounded-none"
                >
                  <div className="relative h-72 overflow-hidden bg-gray-900 !rounded-none">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 !rounded-none"
                    />
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    </div>
                  </div>
                  <div className="space-y-4 pb-6 pr-6 pt-6 pl-0">
                    <h3 className="text-2xl font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {service.highlights.map((point) => (
                        <li key={point} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="bg-blue-900 py-16 !rounded-none">
          <div className="mx-auto max-w-7xl px-4 text-center text-white sm:px-6 lg:px-8 !rounded-none">
            <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white !rounded-none">Let’s Collaborate</p>
            <h3 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl !rounded-none">
              Partner with a chartered team for your business needs.
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-base text-white/80 sm:text-lg !rounded-none">
              Share your current mandate, and we’ll assemble a team of audit, tax, and advisory professionals who can
              support your requirements with measurable outcomes.
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="/contact"
                className="inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}

export default ServicesPage

