import { Briefcase, Calculator, ShieldCheck, TrendingUp } from 'lucide-react'

const services = [
  {
    id: 1,
    title: 'Audit & Assurance',
    description:
      'Comprehensive statutory, internal, and risk-based audits that give promoters and boards the clarity they need to act with confidence.',
    icon: ShieldCheck,
    image:
      'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Taxation Services',
    description:
      'Direct and indirect tax advisory, filings, and representation crafted to remove compliance anxiety across jurisdictions.',
    icon: Calculator,
    image:
      'https://images.unsplash.com/photo-1487611459768-bd414656ea10?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Business Advisory',
    description:
      'Strategic guidance for growth, restructuring, and transactions—where financial rigor meets operational insight.',
    icon: Briefcase,
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Financial Planning',
    description:
      'Forward-looking planning, budgeting, and cash flow stewardship that keeps capital allocations disciplined.',
    icon: TrendingUp,
    image:
      'https://images.unsplash.com/photo-1427751840561-9852520f8ce8?q=80&w=2070&auto=format&fit=crop',
  },
]

const SignatureServicesSection = () => {
  return (
    <section id="services" className="bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-10">
        <div className="mx-auto max-w-5xl pb-10 text-center">
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            Partner-Led Services, Delivered With Precision
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Explore a focused set of practice areas that bring the same clarity and structure you see in our services
            menu—now tailored for quick discovery on the homepage.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 pb-12 md:grid-cols-2 lg:grid-cols-4 !rounded-none">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative h-[22rem] overflow-hidden shadow-sm transition duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-2xl !rounded-none"
            >
              <div className="absolute inset-0 !rounded-none">
                <div
                  className="absolute inset-0 !rounded-none"
                  style={{
                    backgroundImage: `url('${service.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                />
                <div className="absolute inset-0 bg-black/40 !rounded-none" />
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out !rounded-none" />
                </div>
              </div>

              <div className="absolute top-6 left-6 right-6">
                <div className="flex items-center gap-2">
                  {service.icon && <service.icon className="h-5 w-5 text-white" />}
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-6 bottom-6">
                <p className="translate-y-3 text-sm text-white opacity-0 transition duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  {service.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="flex justify-center pb-10">
          <a
            href="/services"
            className="inline-flex items-center rounded-full border border-transparent bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-primary/90"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  )
}

export default SignatureServicesSection

