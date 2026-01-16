import Navbar from '@/components/app/shared/Navbar'
import HeroSection from '@/components/app/home/HeroSection'
import IndustriesSection from '@/components/app/home/IndustriesSection'
import AboutUsSection from '@/components/app/home/AboutUsSection'
import ServiceProcessSection from '@/components/app/home/ServiceProcessSection'
import SignatureServicesSection from '@/components/app/home/SignatureServicesSection'
import StatsSection from '@/components/app/home/StatsSection'
import WhyChooseUsSection from '@/components/app/home/WhyChooseUsSection'
import GallerySection from '@/components/app/home/GallerySection'
import FooterSection from '@/components/app/shared/Footer'

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <SignatureServicesSection />
      <ServiceProcessSection />
      <IndustriesSection />
      <StatsSection />
      <WhyChooseUsSection />
      <GallerySection />
      <FooterSection />
    </div>
  )
}

export default HomePage
