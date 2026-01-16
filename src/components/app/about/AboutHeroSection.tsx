import { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const AnimatedCounter = ({ value, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLParagraphElement>(null);

  // Extract numeric value and suffix from strings like "500+", "25+", etc.
  const extractNumber = (val: string): { number: number; suffix: string } => {
    const match = val.match(/^(\d+)(.*)$/);
    if (match) {
      return {
        number: parseInt(match[1], 10),
        suffix: match[2] || ''
      };
    }
    return { number: 0, suffix: val };
  };

  useEffect(() => {
    const { number: targetNumber } = extractNumber(value);

    if (!elementRef.current || hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            // Animate from 0 to target number
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = Math.floor(easeOutQuart * targetNumber);

              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(targetNumber);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
    };
  }, [value, duration, hasAnimated]);

  const { suffix } = extractNumber(value);
  const displayValue = hasAnimated ? `${count}${suffix}` : `0${suffix}`;

  return (
    <p className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl" ref={elementRef}>
      {displayValue}
    </p>
  );
};

const AboutHeroSection = () => {
  const stats = [
    { label: 'Years of Trust', value: '26+', detail: 'Serving promoters & enterprises since 1999' },
    { label: 'Clients Served', value: '850+', detail: 'Across India, Middle East & Africa' },
    { label: 'Team Members', value: '120+', detail: 'Partners, CAs, lawyers & professionals' },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 text-center sm:px-10 lg:px-0">
        <div className="space-y-6">
          <p className="text-xs uppercase tracking-[0.45em] text-primary font-bold">About the firm</p>
          <h1 className="text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-5xl">
            Building financial clarity for ambitious businesses and family offices
          </h1>
          <p className="mx-auto max-w-3xl text-base text-muted-foreground">
            A K Chordia & Associates combines deep regulatory expertise with a collaborative advisory approach. We design
            resilient audit, tax, compliance, and governance structures that help enterprises move decisively in India and
            abroad.
          </p>
        </div>

        <div className="grid gap-6 rounded-3xl bg-card/80 p-6 text-left sm:grid-cols-3 sm:p-8">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1 text-center">
              <AnimatedCounter value={stat.value} duration={2000} />
              <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutHeroSection

