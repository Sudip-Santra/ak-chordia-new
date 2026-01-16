import { useState } from 'react'
import { ExternalLink } from 'lucide-react'

const ContactOffices = () => {
  const [selectedOffice, setSelectedOffice] = useState(0)

  const offices = [
    {
      id: 1,
      name: 'Nashik',
      fullName: 'A K Chordia & Associates — Head Office',
      state: 'Maharashtra',
      formattedAddress: `Kuntman Bunglow,
      Sector 10, Serene Meadows,
      Gangapur Road, Nashik - 422013,
      India.`,
      description: 'Our head office serving clients across Maharashtra and India with comprehensive audit, tax, and advisory services.',
      tag: 'Head Office',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.873145714467!2d73.73397777468817!3d20.01383812186341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec7203a1def9%3A0x8929872548e5b0b!2s10%2C%20Serene%20Meadows%2C%20Anandvalli%2C%20Nashik%2C%20Maharashtra%20422013!5e0!3m2!1sen!2sin!4v1763703111286!5m2!1sen!2sin',
      googleMapsLink: 'https://maps.app.goo.gl/qUUm6sgbBNuuBXG1A'
    },
    {
      id: 2,
      name: 'Nashik',
      fullName: 'A K Chordia & Associates — Branch Office',
      state: 'Maharashtra',
      formattedAddress: `Office No. 1, 4th Floor,
      Indira Heights,
      Gangapur Road, Nashik - 422013,
      India.`,
      description: 'Branch office providing convenient access to our services for clients in the Nashik region.',
      tag: 'Branch Office',
      mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0252383727507!2d73.769325974688!3d20.007455422072855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba270864883%3A0x1c0ebc79ac4b4269!2sIndira%20Heights!5e0!3m2!1sen!2sin!4v1763702986776!5m2!1sen!2sin',
      googleMapsLink: 'https://maps.app.goo.gl/Urmmpob3sJP1ZY8Q6'
    }
  ]

  const currentOffice = offices[selectedOffice]

  return (
    <section className="bg-background py-8 lg:py-0 lg:pb-20 lg:pt-6">
      <div className="mx-auto px-4 md:px-10 lg:px-0 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-foreground mb-4">
            Our Locations
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mx-auto max-w-2xl">
            A K Chordia & Associates operates across multiple locations to serve our clients with local expertise and personalized service.
          </p>
        </div>

        {/* Location Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-6 lg:mb-8">
          {offices.map((office, index) => (
            <button
              key={office.id}
              onClick={() => setSelectedOffice(index)}
              className={`px-4 py-2 text-sm md:text-base font-medium transition-colors duration-200 rounded-xl ${selectedOffice === index
                  ? 'bg-primary text-white'
                  : 'bg-muted text-muted-foreground border border-border hover:bg-muted/80'
                }`}
            >
              {office.tag} - {office.name}, {office.state}
            </button>
          ))}
        </div>

        {/* Map and Details Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:items-stretch">
          {/* Left Side - Map */}
          <div className="w-full aspect-[4/3] lg:aspect-auto lg:h-full rounded-xl overflow-hidden border border-border">
            <iframe
              src={currentOffice.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          {/* Right Side - Details Panel */}
          <div className="bg-muted/40 rounded-[32px] border border-border p-6 lg:p-8 flex flex-col h-full">
            {/* Office Name */}
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              {currentOffice.fullName}
            </h3>

            {/* Description */}
            <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
              {currentOffice.description}
            </p>

            {/* Address */}
            <div className="mb-6 flex-grow">
              <h4 className="text-sm md:text-base font-semibold text-foreground mb-2">
                Address
              </h4>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed whitespace-pre-line">
                {currentOffice.formattedAddress}
              </p>
            </div>

            {/* Google Maps Link */}
            <a
              href={currentOffice.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 text-sm md:text-base font-medium mt-auto"
            >
              Open in Google Maps
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactOffices

