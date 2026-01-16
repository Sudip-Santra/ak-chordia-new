import { useState } from 'react'
import { Mail, Phone, Clock, ExternalLink } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

type FormState = {
  firstName: string
  lastName: string
  email: string
  phone: string
  message: string
  interest: string
}

const interestOptions = [
  'Audit & Assurance',
  'Taxation Services',
  'Business Advisory',
  'Financial Planning',
  'Accounting Services',
  'Corporate Law',
  'GST Services',
  'Company Formation',
  'Compliance Management',
  'FEMA Services',
]

const initialFormState: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  message: '',
  interest: '',
}

const ContactInfoSection = () => {
  const [formData, setFormData] = useState(initialFormState)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [selectedOffice, setSelectedOffice] = useState(0)

  const offices = [
    {
      name: 'Head Office',
      address: 'Kuntman Bunglow,\nSector 10, Serene Meadows,\nGangapur Road, Nashik,\nIndia - 422013',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748.873145714467!2d73.73397777468817!3d20.01383812186341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddec7203a1def9%3A0x8929872548e5b0b!2s10%2C%20Serene%20Meadows%2C%20Anandvalli%2C%20Nashik%2C%20Maharashtra%20422013!5e0!3m2!1sen!2sin!4v1763703111286!5m2!1sen!2sin',
      googleMapsLink: 'https://maps.app.goo.gl/qUUm6sgbBNuuBXG1A'
    },
    {
      name: 'Branch Office',
      address: 'Office No. 1, 4th Floor,\nIndira Heights,\nGangapur Road, Nashik - 422013,\nIndia.',
      mapUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.0252383727507!2d73.769325974688!3d20.007455422072855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddeba270864883%3A0x1c0ebc79ac4b4269!2sIndira%20Heights!5e0!3m2!1sen!2sin!4v1763702986776!5m2!1sen!2sin',
      googleMapsLink: 'https://maps.app.goo.gl/Urmmpob3sJP1ZY8Q6'
    }
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleInterestChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.interest) {
      return
    }
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 800))
    setFormData(initialFormState)
    setIsSubmitting(false)
  }

  return (
    <section className="bg-background py-6">
      <div className="mx-auto w-full max-w-7xl space-y-12 px-6 sm:px-10 lg:px-0">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <div className="rounded-2xl border border-border bg-card/60 p-4 shadow-sm">
            <div className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <Phone className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-foreground">Phone No</p>
                <p className="font-semibold text-primary text-sm">+91-9011549393</p>
                <p className="font-semibold text-primary text-sm">+91-9423964494</p>
                <p className="font-semibold text-primary text-sm">+91-9730334663</p>
                <p className="text-muted-foreground">Direct line to our team</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card/60 p-4 shadow-sm">
            <div className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <Mail className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-foreground">Email ID</p>
                <p className="font-semibold text-primary text-sm">ankit@caakchordia.com</p>
                <p className="font-semibold text-primary text-sm">khushboo@caakchordia.com</p>
                <p className="font-semibold text-primary text-sm">prashant@caakchordia.com</p>
                <p className="text-muted-foreground">We respond within one business day</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card/60 p-4 shadow-sm">
            <div className="flex flex-col gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
                <Clock className="h-5 w-5" />
              </div>
              <div className="space-y-1">
                <p className="text-lg font-semibold text-foreground">Office Hours & Address</p>
                <p className="text-sm font-semibold text-primary">Mon-Fri: 9:00 AM - 6:00 PM IST</p>
                <p className="text-sm text-muted-foreground">Kuntman Bunglow, Sector 10, Serene Meadows, Gangapur Road, Nashik, India - 422013</p>
                <p className="text-muted-foreground">Reach our team during business hours.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] items-start mx-auto w-full">
          <div className="rounded-[24px] border border-border bg-muted/40 p-6 shadow-sm">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="text-sm font-medium text-muted-foreground">
                    First name<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your first name"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="text-sm font-medium text-muted-foreground">
                    Last name<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    placeholder="Enter your last name"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                    Email ID<span className="text-red-500">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-muted-foreground">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm focus:border-primary focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="interest" className="text-sm font-medium text-muted-foreground">
                  You're reaching out for<span className="text-red-500">*</span>
                </label>
                <Select value={formData.interest} onValueChange={handleInterestChange}>
                  <SelectTrigger className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                    <SelectValue placeholder="Select a focus area" />
                  </SelectTrigger>
                  <SelectContent>
                    {interestOptions.map((option) => (
                      <SelectItem
                        key={option}
                        value={option}
                        className="focus:bg-blue-100 dark:focus:bg-blue-900/50 focus:text-blue-900 dark:focus:text-blue-100"
                      >
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm">
                  <label htmlFor="message" className="font-medium text-muted-foreground">
                    Tell us more<span className="text-red-500">*</span>
                  </label>
                  <span className="text-muted-foreground">{formData.message.length}/1000</span>
                </div>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  maxLength={1000}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Share the context, deadlines, or existing advisors."
                  className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-2xl bg-primary py-3 text-sm font-semibold text-white transition hover:bg-primary/90 disabled:opacity-60"
              >
                {isSubmitting ? 'Sending...' : 'Send message'}
              </button>
            </form>
          </div>

          <div className="rounded-[24px] border-b border-border bg-card/60 shadow-sm">
            <div className="flex flex-wrap justify-center gap-2 pb-4">
              {offices.map((office, idx) => (
                <button
                  key={office.name}
                  onClick={() => setSelectedOffice(idx)}
                  className={`rounded-full px-3 py-1 text-sm font-medium transition ${
                    selectedOffice === idx
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground border border-border hover:bg-muted/80'
                  }`}
                >
                  {office.name}
                </button>
              ))}
            </div>

            <div className="overflow-hidden border-t border-l border-r border-border">
              <iframe
                title={`${offices[selectedOffice].name} location`}
                src={offices[selectedOffice].mapUrl}
                className="h-80 w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="space-y-2 text-sm text-muted-foreground py-2.5 px-4 border-l border-r border-border">
              <p className="text-lg font-semibold text-foreground">{offices[selectedOffice].name}</p>
              <p className="whitespace-pre-line">{offices[selectedOffice].address}</p>
              <a
                href={offices[selectedOffice].googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary font-semibold hover:text-primary/80"
              >
                Open in Google Maps
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactInfoSection

