import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

const FooterSection = () => {
  const navigation = [
    {
      title: 'Explore',
      links: [
        { label: 'Home', href: '/' },
        { label: 'About Firm', href: '/about' },
        { label: 'Gallery', href: '/gallery' },
        { label: 'Contact', href: '/contact' },
        { label: 'Careers', href: '/careers' },
      ],
    },
    {
      title: 'Primary Services',
      links: [
        { label: 'Audit & Assurance', href: '#audit-assurance' },
        { label: 'Taxation Services', href: '#taxation' },
        { label: 'Business Advisory', href: '#business-advisory' },
        { label: 'Financial Planning', href: '#financial-planning' },
        { label: 'Accounting Services', href: '#accounting' },
      ],
    },
    {
      title: 'Other Services',
      links: [
        { label: 'Corporate Law', href: '#corporate-law' },
        { label: 'GST Services', href: '#gst-services' },
        { label: 'Company Formation', href: '#company-formation' },
        { label: 'Compliance Management', href: '#compliance' },
        { label: 'FEMA Services', href: '#fema' },
      ],
    },
  ]

  const socials = [
    { icon: FaFacebookF, label: 'Facebook', href: 'https://facebook.com' },
    { icon: FaXTwitter, label: 'X (Twitter)', href: 'https://twitter.com' },
    { icon: FaLinkedinIn, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: FaInstagram, label: 'Instagram', href: 'https://instagram.com' },
  ]

  return (
    <footer className="relative overflow-hidden !rounded-none bg-gray-100 text-gray-900">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,0,0,0.06),_transparent_60%)]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-gray-200 via-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-8xl px-6 pt-16 pb-10 !rounded-none sm:px-10 sm:pb-12 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-[0.45em] text-primary font-bold">Legacy of trust</p>
              <h2 className="text-3xl font-semibold sm:text-4xl">A K Chordia & Associates</h2>
              <p className="text-base text-gray-600 max-w-xl">
                Chartered accountants delivering precise audit, tax, compliance, and advisory services for businesses,
                promoters, and global entities seeking clarity in complex regulations.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-500 font-bold">Follow Us On</p>
              <div className="flex gap-3">
                {socials.map((item, index) => {
                  const Icon = item.icon
                  return (
                    <a
                      key={index}
                      href={item.href}
                      aria-label={item.label}
                      className="w-10 h-10 rounded-none bg-background border border-gray-900/10 flex items-center justify-center hover:bg-primary transition-colors text-gray-700 hover:text-white"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {navigation.map((section) => (
              <div key={section.title}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500">{section.title}</p>
                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="inline-flex items-center gap-2 transition hover:text-primary">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-gray-300 pt-6 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} A K Chordia & Associates. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 text-md text-gray-600">
            <a href="/disclaimer" className="transition hover:text-primary">
              Disclaimer
            </a>
            <a href="/privacy-policy" className="transition hover:text-primary">
              Privacy Policy
            </a>
            <a href="/terms-and-conditions" className="transition hover:text-primary">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection

