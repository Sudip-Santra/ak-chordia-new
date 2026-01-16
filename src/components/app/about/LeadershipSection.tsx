import { memo } from 'react'
import { UserRound } from 'lucide-react'

const leadershipTeam = [
  {
    id: 1,
    name: 'CA Ankit Chordia',
    title: '~FCA & Post Graduate',
    description:
      '“The strategist who believes in speed with clarity.” With sharp decision-making and relationship-driven approach, he is the engine behind timely and scalable client solutions.',
  },
  {
    id: 2,
    name: 'CA Khushboo Lunawat',
    title: '~FCA, AIR 32 (Final), AIR 37 (IPCC), ISA Qualified',
    description:
      '“Where analytics meets adaptability.” Khushboo translates complex systems into accessible, value-driven strategies using automation and technology.',
  },
  {
    id: 3,
    name: 'CA Prashant Tope',
    title: '~ACA & Post Graduate',
    description:
      '“The process-perfectionist.” Experienced in systems, controls, and audits—his calm approach adds precision and depth to every client solution.',
  },
]

const LeadershipSection = () => {
  return (
    <section id="leadership" className="bg-background py-20 scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-0">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-primary font-bold">Leadership with purpose</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">Partners who architect clarity</h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Chartered accountants leading every mandate with strategic foresight and regulatory fluency.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {leadershipTeam.map((member) => (
            <div key={member.id} className="border border-border bg-card">
              <div className="flex h-64 items-center justify-center bg-muted/40">
                <UserRound className="h-16 w-16 text-muted-foreground" />
              </div>
              <div className="p-5 text-center text-foreground">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm font-medium text-primary">{member.title}</p>
                <p className="mt-3 text-sm text-muted-foreground">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(LeadershipSection)

