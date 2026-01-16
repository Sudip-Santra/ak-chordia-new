import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface FAQ {
  id: number
  question: string
  answer: string
}

const ContactFaq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)

  const faqs: FAQ[] = [
    {
      id: 1,
      question: 'What services does A K Chordia & Associates provide?',
      answer: 'We offer comprehensive audit & assurance, taxation services, business advisory, financial planning, accounting services, corporate law, GST services, company formation, compliance management, and FEMA services. Our team provides end-to-end solutions for businesses of all sizes.'
    },
    {
      id: 2,
      question: 'How long does it take to complete an audit?',
      answer: 'The duration of an audit depends on the size and complexity of your business. Typically, a small business audit takes 2-4 weeks, while larger organizations may require 6-12 weeks. We provide a detailed timeline during our initial consultation based on your specific requirements.'
    },
    {
      id: 3,
      question: 'What documents do I need for tax filing?',
      answer: 'For tax filing, you will need financial statements, bank statements, invoices, receipts, TDS certificates, Form 16/16A, investment proofs, and any other relevant documents. We provide a comprehensive checklist tailored to your specific tax situation during our consultation.'
    },
    {
      id: 4,
      question: 'Do you help with GST registration and compliance?',
      answer: 'Yes, we provide complete GST services including registration, return filing, compliance management, and advisory services. Our team ensures timely filing and helps you stay compliant with all GST regulations while optimizing your tax position.'
    },
    {
      id: 5,
      question: 'Can you help with company incorporation?',
      answer: 'Absolutely. We assist with company formation, including private limited companies, LLPs, and other business structures. Our services include name reservation, documentation, registration, obtaining necessary licenses, and post-incorporation compliance support.'
    },
    {
      id: 6,
      question: 'How are professional fees determined?',
      answer: 'Professional fees are discussed during engagement discussions and specified in the formal engagement letter. Each engagement is unique, and fees are determined based on the scope and complexity of services required. We work with clients to establish appropriate engagement terms that meet their specific needs.'
    },
    {
      id: 7,
      question: 'How do you ensure data confidentiality?',
      answer: 'We maintain strict confidentiality protocols and data security measures. All our team members sign non-disclosure agreements, and we use secure systems for data storage and transmission. We comply with all applicable data protection regulations and industry best practices.'
    },
    {
      id: 8,
      question: 'Do you provide services for startups?',
      answer: 'Yes, we specialize in supporting startups with company formation, accounting setup, tax planning, compliance management, and business advisory services. We offer flexible engagement models and understand the unique challenges faced by growing businesses.'
    },
    {
      id: 9,
      question: 'What is FEMA compliance and why is it important?',
      answer: 'FEMA (Foreign Exchange Management Act) compliance is crucial for businesses dealing with foreign investments, remittances, or cross-border transactions. We help ensure compliance with FEMA regulations, assist with documentation, and provide advisory services for foreign exchange transactions.'
    },
    {
      id: 10,
      question: 'How can I schedule a consultation?',
      answer: 'You can schedule a consultation by filling out our contact form, calling us at +91-9011549393, or emailing us at ankit@caakchordia.com. We typically respond within one business day and can arrange an in-person or virtual meeting based on your preference.'
    }
  ]

  const displayedFaqs = showAll ? faqs : faqs.slice(0, 5)

  return (
    <section className="bg-background py-8 lg:py-0 lg:pb-20 lg:pt-10">
      <div className="mx-auto px-6 md:px-10 lg:px-0 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-xl md:text-2xl lg:text-4xl font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Find answers to common questions about our audit, tax, advisory, and compliance services.
          </p>
        </div>

        <div className="space-y-0">
          {displayedFaqs.map((faq, index) => (
            <div
              key={faq.id}
              className="border-b border-border py-4 cursor-pointer transition-colors hover:bg-muted/30"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-base font-medium text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </div>
              <div
                className={`text-sm md:text-base text-muted-foreground transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index
                    ? 'opacity-100 max-h-[500px] translate-y-0 pt-4'
                    : 'opacity-0 max-h-0 -translate-y-2'
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {!showAll && faqs.length > 5 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2.5 text-sm font-medium text-primary border border-primary rounded-xl hover:bg-primary hover:text-white transition-colors duration-200"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default ContactFaq

