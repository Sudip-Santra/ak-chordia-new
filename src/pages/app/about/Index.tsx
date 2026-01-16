import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AboutHeroSection from '@/components/app/about/AboutHeroSection'
import MissionValuesSection from '@/components/app/about/MissionValuesSection'
import MissionSection from '@/components/app/about/MissionSection'
import LeadershipSection from '@/components/app/about/LeadershipSection'
import AssociatesSection from '@/components/app/about/AssociatesSection'
import Navbar from '@/components/app/shared/Navbar'
import FooterSection from '@/components/app/shared/Footer'

const AboutPage = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '')
      const element = document.getElementById(targetId)
      if (element) {
        const offset = element.getBoundingClientRect().top + window.pageYOffset - 100
        window.scrollTo({ top: offset, behavior: 'smooth' })
      }
    } else {
      window.scrollTo({ top: 0 })
    }
  }, [location.hash])

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <AboutHeroSection />
        <MissionSection />
        <MissionValuesSection />
        <LeadershipSection />
        <AssociatesSection />
      </main>
      <FooterSection />
    </div>
  )
}

export default AboutPage

