import { useCallback, useEffect, useMemo, useState } from 'react'
import { Button } from '../../ui/button'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    title: 'Your Growth, Our Priority',
    description:
      'At A K Chordia & Associates, we combine professional expertise with technological innovation to deliver exceptional chartered accountancy services.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Insights that drive clarity',
    description:
      'Partner with professionals who bring structure to audits, confidence to tax positions, and a proactive mindset to every mandate.',
    image: 'https://images.unsplash.com/photo-1492554929733-56d94d6b2fc3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'Partner-first advisory pods',
    description:
      'Experience a team that acts like an embedded CFO arm—agile, accountable, and obsessed with measurable outcomes that align internal stakeholders.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=2070&q=80',
  },
]

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [touchStartX, setTouchStartX] = useState<number | null>(null)
  const totalSlides = useMemo(() => slides.length, [])

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000)
    return () => clearInterval(timer)
  }, [nextSlide])

  const scrollToSection = useCallback((selector: string) => {
    const element = document.querySelector(selector)
    if (element) {
      const offset = 100
      const y = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [])

  const currentSlide = slides[activeIndex]

  return (
    <section
      className="relative flex h-screen items-center justify-center overflow-hidden"
      onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touchStartX === null) return
        const touchEndX = e.changedTouches[0].clientX
        const delta = touchEndX - touchStartX
        if (delta > 50) {
          prevSlide()
        } else if (delta < -50) {
          nextSlide()
        }
        setTouchStartX(null)
      }}
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="flex h-full w-full transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,0.61,0.36,1)]"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <div key={slide.id} className="relative h-full w-full flex-shrink-0">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${slide.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70" />
            </div>
          ))}
        </div>
      </div>

      <div
        key={currentSlide.id}
        className="relative z-10 mx-auto max-w-4xl px-4 text-center text-white transition-opacity duration-700 ease-out"
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white">A K Chordia & Associates</h2>
            <p className="text-lg sm:text-xl text-gray-300">Chartered Accountants</p>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight pt-4">{currentSlide.title}</h1>

          <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">{currentSlide.description}</p>

          <div className="flex flex-row flex-wrap items-center justify-center gap-4 pt-8">
            <Button
              className="rounded-md bg-primary px-6 py-3 text-sm font-medium text-white hover:bg-primary/90"
              onClick={() => scrollToSection('#about')}
            >
              <span>Learn More</span>
              <ArrowRight className="ml-2 hidden sm:inline-block h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="rounded-md border-2 border-white px-6 py-3 text-sm font-semibold text-gray-900 hover:bg-white hover:text-gray-900"
              onClick={() => scrollToSection('#services')}
            >
              <span>Our Services</span>
              <ArrowRight className="ml-2 hidden sm:inline-block h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      <button
        aria-label="Previous slide"
        onClick={prevSlide}
        className="absolute left-6 top-1/2 z-10 -translate-y-1/2 text-white transition hover:text-white/80 hidden sm:inline-flex"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        aria-label="Next slide"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 z-10 -translate-y-1/2 text-white transition hover:text-white/80 hidden sm:inline-flex"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-10 flex gap-2">
        {slides.map((slide, index) => (
          <span
            key={slide.id}
            className={`h-1.5 w-8 rounded-full transition-all ${index === activeIndex ? 'bg-white' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HeroSection

