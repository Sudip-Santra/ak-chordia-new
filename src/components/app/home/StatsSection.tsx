import { useState, useEffect, useRef } from 'react';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  {
    value: '500+',
    label: 'Clients Served'
  },
  {
    value: '25+',
    label: 'Years of Experience'
  },
  {
    value: '1000+',
    label: 'Projects Completed'
  },
  {
    value: '50+',
    label: 'Team Members'
  }
];

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

const AnimatedCounter = ({ value, duration = 2000 }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

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
    <span className="text-4xl sm:text-5xl font-bold text-white" ref={elementRef}>
      {displayValue}
    </span>
  );
};

const StatsSection = () => {
  return (
    <section className="py-20 !rounded-none" style={{ backgroundColor: '#1e3a8a' }}>
      <div className="px-4 sm:px-6 lg:px-8 !rounded-none">
        <div className="max-w-7xl mx-auto !rounded-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center"
              >

                {/* Value */}
                <div className="mb-2">
                  <AnimatedCounter value={stat.value} duration={2000} />
                </div>

                {/* Label */}
                <div>
                  <p className="text-base sm:text-lg text-blue-100 font-medium">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

