const MissionSection = () => {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-0">
      <div className="group grid gap-8 rounded-[32px] border border-border/60 bg-card shadow-lg sm:grid-cols-2">
        <div className="relative overflow-hidden rounded-[32px] sm:rounded-r-[40px] sm:rounded-l-[32px]">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
            alt="Strategic financial planning illustration"
            className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
          </div>
        </div>

        <div className="flex flex-col justify-center space-y-4 p-8 sm:p-10">
          <p className="text-xs uppercase tracking-[0.45em] text-primary font-bold">Our Mission</p>
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Advisory that empowers businesses</h2>
          <p className="text-base text-muted-foreground">
            We are a Chartered Accountancy firm committed to empowering businesses by delivering high-impact solutions in
            internal audits, MIS systems, internal controls, consultancy, virtual CFO services, and system/software
            implementation.
          </p>
          <p className="text-base text-muted-foreground">
            Backed by experienced professionals with industry knowledge, we serve start-ups, SMEs, and growth-focused enterprises
            with insight-driven, technology-enabled strategies that enhance compliance, operational efficiency, and long-term
            value.
          </p>
        </div>
      </div>
    </section>
  )
}

export default MissionSection

