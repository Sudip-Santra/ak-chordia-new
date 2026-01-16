import Navbar from '@/components/app/shared/Navbar'
import FooterSection from '@/components/app/shared/Footer'
import { Search } from 'lucide-react'

const featuredArticles = [
  {
    title: 'GST 2.0: What the 2025 update means for mid-sized enterprises',
    description:
      'A concise breakdown of the compliance checkpoints, transitional credits, and documentation businesses must prepare before the rollout date.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80',
    category: 'Policy Watch',
    date: 'Nov 10, 2025',
  },
  {
    title: 'Family offices are embracing digital ledgers for control and transparency',
    description:
      'How new-age accounting stacks are enabling promoters to monitor multi-entity finances in real time while staying audit ready.',
    image: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=900&q=80',
    category: 'Insights',
    date: 'Oct 28, 2025',
  },
  {
    title: 'Why startups must rethink ESOP accounting before their next fundraise',
    description:
      "Investor diligence now scrutinises option pools, vesting schedules, and deferred tax positions. Here's a checklist to stay compliant.",
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
    category: 'Startups',
    date: 'Oct 18, 2025',
  },
  {
    title: 'Decoding the new faceless assessment scheme for individuals',
    description:
      'An explainer on documentation, representation windows, and escalation timelines to keep your filing spotless.',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=900&q=80',
    category: 'Tax Talk',
    date: 'Sep 30, 2025',
  },
  {
    title: 'Internal controls for manufacturing SMEs: 5 practical wins',
    description:
      'From vendor onboarding to stock reporting, discover repeatable control activities that satisfy both auditors and bankers.',
    image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?auto=format&fit=crop&w=900&q=80',
    category: 'Operations',
    date: 'Sep 18, 2025',
  },
  {
    title: 'FEMA updates: Overseas investment structures to revisit this quarter',
    description:
      'A radar of reporting requirements and carve-outs relevant for promoters expanding into Southeast Asia.',
    image: 'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&w=900&q=80',
    category: 'Global',
    date: 'Sep 04, 2025',
  },
]

const moreNews = [
  {
    title: 'Budget 2026 wish list: What CFOs want from the Finance Ministry',
    excerpt:
      'We asked 25 finance leaders about direct tax reliefs, digitisation incentives, and recast subsidies that would enable expansion. We asked 25 finance leaders about direct tax reliefs, digitisation incentives, and recast subsidies that would enable expansion.',
    image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=80',
    date: 'Aug 22, 2025',
  },
  {
    title: 'Agri-tech ventures tap alternative structures for cross-border capital',
    excerpt:
      'A look at the regulatory guardrails, FEMA filings, and board governance tweaks enabling smoother international rounds. A look at the regulatory guardrails, FEMA filings, and board governance tweaks enabling smoother international rounds.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    date: 'Aug 05, 2025',
  },
]

const ArticlesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <section className="py-16">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-0">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.45em] text-primary font-bold">Insights that matter</p>
              <h1 className="mt-4 text-xl md:text-2xl lg:text-4xl font-bold">Articles & Insights</h1>
              <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground">
                Timely perspectives on taxation, compliance, and governance so you can anticipate change, not react to it.
                Browse by topic or use the search to jump straight to what you need.
              </p>
            </div>

            <div className="mx-auto mt-8 max-w-3xl">
              <label htmlFor="articles-search" className="sr-only">
                Search articles
              </label>
              <div className="flex items-center rounded-full border border-border bg-card px-3 py-1.5 shadow-sm">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  id="articles-search"
                  type="search"
                  placeholder="Search topics or keywords"
                  className="ml-3 w-full border-0 bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map((article) => (
                <article key={article.title} className="group flex flex-col overflow-hidden border border-border bg-card !rounded-none">
                  <div className="relative h-56 overflow-hidden !rounded-none">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105 !rounded-none"
                    />
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs uppercase text-primary">{article.date}</p>
                    <h3 className="mt-3 text-lg font-semibold leading-tight">{article.title}</h3>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">{article.description}</p>
                    <button className="mt-6 inline-flex items-center text-sm font-semibold text-primary">
                      Read article →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-muted/30 py-16">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-0">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.45em] text-primary font-bold">More articles</p>
              <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">Deep dives & editorials</h2>
              <p className="mx-auto mt-4 max-w-5xl text-base text-muted-foreground">
                Long-form reads where our team unpacks policy shifts, sector micro-trends, and boardroom lessons.
              </p>
            </div>

            <div className="mt-10 space-y-6 !rounded-none">
              {moreNews.map((story) => (
                <article
                  key={story.title}
                  className="group flex flex-col overflow-hidden bg-card shadow-sm sm:flex-row sm:items-stretch !rounded-none"
                >
                  <div className="relative h-40 w-full overflow-hidden sm:w-60 !rounded-none">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105 !rounded-none"
                    />
                    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col justify-center gap-1 px-5 sm:px-7">
                    <p className="text-xs uppercase text-primary">{story.date}</p>
                    <h3 className="mt-2 text-lg font-semibold text-foreground">{story.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{story.excerpt}</p>
                    <button className="mt-3 inline-flex items-center text-sm font-semibold text-primary">
                      Continue reading →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}

export default ArticlesPage

