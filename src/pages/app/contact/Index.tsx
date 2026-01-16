import Navbar from '@/components/app/shared/Navbar'
import FooterSection from '@/components/app/shared/Footer'
import ContactInfoSection from '@/components/app/contact/ContactInfoSection'
// import ContactOffices from '@/components/app/contact/ContactOffices'
import ContactFaq from '@/components/app/contact/ContactFaq'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        <section className="bg-background pt-20 pb-6">
          <div className="mx-auto w-full max-w-4xl px-6 text-center sm:px-10 lg:px-0">
            <p className="text-xs uppercase tracking-[0.45em] text-primary font-bold">Get in touch</p>
            <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Connect with our partner-led team</h1>
            <p className="mt-4 text-base text-muted-foreground">
              Share your mandate, valuation window, or compliance challenge. We align the right professionals and respond within
              one business day.
            </p>
          </div>
        </section>
        <ContactInfoSection />
        {/* <ContactOffices /> */}
        <ContactFaq />
      </main>
      <FooterSection />
    </div>
  )
}

export default ContactPage

