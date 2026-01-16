import { Layers, Scale } from 'lucide-react'

const cards = [
  {
    title: 'Values',
    description:
      'Precision, transparency, accountability, and empathy guide how we interpret regulations and deliver advisory roadmaps.',
    icon: Scale,
  },
  {
    title: 'Approach',
    description:
      'Multidisciplinary pods combine CA, legal, and tech expertise. Every mandate is mapped, simulated, and stress-tested.',
    icon: Layers,
  },
]

const MissionValuesSection = () => {
  return (
    <section id="our-story" className="mx-auto mt-20 w-full max-w-6xl px-6 sm:px-10 lg:px-0">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
        <div className="space-y-5">
          <p className="text-xs uppercase tracking-[0.45em] text-primary font-bold">Principles first</p>
          <h2 className="text-3xl font-semibold sm:text-4xl">Why clients trust our independent viewpoint</h2>
          <p className="text-base text-muted-foreground">
            Our practice blends forensic depth with board-level perspective. Every engagement is backed by research,
            scenario planning, and transparent communication with promoters, CFOs, and legal counsel.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-border/50 bg-card/60 p-6 backdrop-blur"
            >
              <div>
                <card.icon className="mb-4 h-6 w-6 text-primary" />
                <h3 className="text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MissionValuesSection

