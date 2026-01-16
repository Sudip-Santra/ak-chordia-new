import { memo } from 'react'
import { UserRound } from 'lucide-react'

const associateTeam = [
  {
    id: 1,
    name: 'CA Karan Somwanshi',
    title: 'ACA, CS, ISA',
    description:
      '“Your single-window legal & compliance advisor.” Focused on comprehensive regulatory solutions for businesses of all sizes.',
  },
  {
    id: 2,
    name: 'CA Ketan Jategaonkar',
    title: 'ACA',
    description:
      '“Representation with clarity and confidence.” Direct tax professional for assessments, appeals, and high-stakes resolutions.',
  },
  {
    id: 3,
    name: 'CA Hitesh Issrani',
    title: 'ACA',
    description:
      '“Taxation decoded.” Regular GST trainer with experience in tax matters and a pragmatic, client-focused mindset for complex regulations.',
  },
  {
    id: 4,
    name: 'CA Mansi Shah',
    title: 'ACA',
    description:
      'Detail-oriented and methodical with 6 years across IFC, audit, and SOX testing—driving resilient and compliant operations.',
  },
]

const AssociatesSection = () => {
  return (
    <section id="associates" className="bg-muted/40 py-20 scroll-mt-24">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-0">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.45em] text-primary font-bold">Associates in action</p>
          <h2 className="mt-3 text-3xl font-semibold text-foreground sm:text-4xl">
            Our Associate Team — Knowledge Meets Execution
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Professionals who extend partner-level insight with dedicated delivery across legal, tax, and compliance.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {associateTeam.map((associate) => (
            <div key={associate.id} className="border border-border bg-card">
              <div className="flex h-52 items-center justify-center bg-muted/40">
                <UserRound className="h-14 w-14 text-muted-foreground" />
              </div>
              <div className="p-5 text-center text-foreground">
                <h3 className="text-lg font-semibold">{associate.name}</h3>
                <p className="text-sm font-medium text-primary">{associate.title}</p>
                <p className="mt-3 text-sm text-muted-foreground">{associate.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default memo(AssociatesSection)

