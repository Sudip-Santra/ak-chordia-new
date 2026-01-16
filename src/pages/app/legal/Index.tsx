import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from '@/components/app/shared/Navbar'
import FooterSection from '@/components/app/shared/Footer'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Shield, FileText, AlertTriangle } from 'lucide-react'

const LegalPage = () => {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('privacy')

  useEffect(() => {
    // Handle hash-based navigation
    if (location.hash) {
      const tab = location.hash.replace('#', '')
      if (['privacy', 'terms', 'disclaimer'].includes(tab)) {
        setActiveTab(tab)
      }
    }
    // Handle route-based navigation
    else if (location.pathname === '/privacy-policy') {
      setActiveTab('privacy')
    } else if (location.pathname === '/terms-and-conditions') {
      setActiveTab('terms')
    } else if (location.pathname === '/disclaimer') {
      setActiveTab('disclaimer')
    }
    window.scrollTo({ top: 0 })
  }, [location.hash, location.pathname])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative isolate overflow-hidden bg-slate-950">
          <img
            src="https://images.unsplash.com/photo-1617203443952-6d2619f7ff4e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Legal documents"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />

          <div className="relative mx-auto flex max-w-5xl flex-col items-center px-4 py-20 text-center text-white sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-primary">Legal Information</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Privacy, Terms & Conditions, Disclaimers
            </h1>
            <p className="mt-6 text-base text-white/80 sm:text-lg">
              Transparency and trust are fundamental to our practice. Review our policies and understand how we protect your information.
            </p>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="bg-background py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8 h-auto p-1 bg-muted">
                <TabsTrigger 
                  value="privacy" 
                  className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <Shield className="h-4 w-4 hidden sm:inline-block" />
                  <span className="hidden sm:inline">Privacy Policy</span>
                  <span className="sm:hidden">Privacy</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="terms" 
                  className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <FileText className="h-4 w-4 hidden sm:inline-block" />
                  <span className="hidden sm:inline">Terms & Conditions</span>
                  <span className="sm:hidden">T & C</span>
                </TabsTrigger>
                <TabsTrigger 
                  value="disclaimer" 
                  className="flex items-center gap-2 px-6 py-3 data-[state=active]:bg-background data-[state=active]:shadow-sm"
                >
                  <AlertTriangle className="h-4 w-4 hidden sm:inline-block" />
                  <span>Disclaimer</span>
                </TabsTrigger>
              </TabsList>

              {/* Privacy Policy Content */}
              <TabsContent value="privacy" className="mt-8">
                <div className="bg-card border border-border rounded-lg shadow-sm p-8 space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold">Privacy Policy</h2>
                      <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </div>

                  <div className="prose prose-slate max-w-none space-y-6">
                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        1. Introduction
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        A K Chordia & Associates ("we," "our," or "us") is committed to protecting your privacy and ensuring the confidentiality of your personal and financial information. As a chartered accountancy firm, we understand the sensitive nature of the data we handle and maintain the highest standards of data protection in compliance with applicable Indian laws and regulations, including the Information Technology Act, 2000, and the Personal Data Protection Bill.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        2. Information We Collect
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        We collect information necessary to provide our professional services, including:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Personal identification details (name, PAN, Aadhaar, contact information)</li>
                        <li>Financial information (bank statements, tax returns, financial records)</li>
                        <li>Business information (company registration details, GST numbers, financial statements)</li>
                        <li>Communication records (emails, meeting notes, correspondence)</li>
                        <li>Website usage data (cookies, IP addresses, browsing patterns)</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        3. How We Use Your Information
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        We use collected information exclusively for:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Providing audit, tax, and advisory services as per our engagement</li>
                        <li>Complying with statutory and regulatory requirements (Income Tax Act, Companies Act, GST laws)</li>
                        <li>Preparing and filing returns, reports, and statutory documents</li>
                        <li>Communicating with you regarding our services and important updates</li>
                        <li>Improving our service delivery and client experience</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        4. Data Security & Confidentiality
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We implement robust security measures including encrypted storage, secure communication channels, access controls, and regular security audits. All team members are bound by strict confidentiality agreements. Your information is never shared with third parties except as required by law or with your explicit consent.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        5. Your Rights
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        You have the right to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Access and review your personal information</li>
                        <li>Request corrections to inaccurate data</li>
                        <li>Request deletion of information (subject to legal retention requirements)</li>
                        <li>Withdraw consent for data processing (where applicable)</li>
                        <li>File a complaint with relevant authorities if you believe your privacy rights have been violated</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        6. Data Retention
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We retain your information for the duration required by applicable laws (typically 6-8 years for audit and tax records) and as necessary to fulfill our professional obligations. After the retention period, data is securely destroyed in accordance with professional standards.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        7. Contact Us
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        For privacy-related inquiries or to exercise your rights, please contact us at <a href="/contact" className="text-primary hover:underline">our contact page</a> or write to our Data Protection Officer.
                      </p>
                    </section>
                  </div>
                </div>
              </TabsContent>

              {/* Terms & Conditions Content */}
              <TabsContent value="terms" className="mt-8">
                <div className="bg-card border border-border rounded-lg shadow-sm p-8 space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <FileText className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold">Terms & Conditions</h2>
                      <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </div>

                  <div className="prose prose-slate max-w-none space-y-6">
                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        1. Engagement Terms
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        By engaging A K Chordia & Associates for professional services, you agree to these terms. Our services are provided in accordance with the Institute of Chartered Accountants of India (ICAI) Code of Ethics and applicable professional standards. All engagements are subject to a formal engagement letter that outlines the specific scope and terms of service.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        2. Scope of Services
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        Our services include but are not limited to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Statutory and tax audits as per Companies Act and Income Tax Act</li>
                        <li>Tax planning, compliance, and representation before authorities</li>
                        <li>Business advisory and financial consulting</li>
                        <li>Accounting, bookkeeping, and MIS preparation</li>
                        <li>Corporate law and secretarial services</li>
                        <li>GST compliance and advisory</li>
                        <li>Company formation and incorporation services</li>
                      </ul>
                      <p className="text-muted-foreground leading-relaxed mt-3">
                        Services are provided based on information and documents provided by you. We rely on the accuracy and completeness of such information.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        3. Professional Engagement & Payment
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        All engagements are subject to a formal engagement letter that outlines the specific scope and terms of service. Payment terms are specified in the engagement letter. Invoices are due as per agreed terms, typically within 15-30 days. Late payments may incur interest charges as per applicable laws.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        We reserve the right to suspend services in case of non-payment after due notice, in accordance with professional standards and engagement terms.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        4. Client Responsibilities
                      </h3>
                      <p className="text-muted-foreground leading-relaxed mb-3">
                        You agree to:
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>Provide accurate, complete, and timely information and documents</li>
                        <li>Maintain proper books of accounts and records as required by law</li>
                        <li>Cooperate with our team and respond to queries promptly</li>
                        <li>Disclose all material facts relevant to the engagement</li>
                        <li>Comply with statutory requirements and deadlines</li>
                        <li>Make timely payments as per agreed terms</li>
                      </ul>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        5. Confidentiality & Professional Standards
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We maintain strict confidentiality of all client information in accordance with ICAI Code of Ethics. We will not disclose any information to third parties except as required by law, regulatory authorities, or with your explicit written consent. All team members are bound by confidentiality obligations.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        6. Limitation of Liability
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Our liability is limited to the scope of the specific engagement as outlined in the engagement letter. We are not liable for any indirect, consequential, or punitive damages. Our services are provided based on professional judgment and applicable standards, but we cannot guarantee specific outcomes or results.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        7. Termination
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Either party may terminate the engagement with written notice. Upon termination, you remain responsible for payment for services rendered and expenses incurred as per the engagement letter. We will return your documents and provide a handover as per professional standards.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        8. Governing Law
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in the jurisdiction where our principal office is located.
                      </p>
                    </section>
                  </div>
                </div>
              </TabsContent>

              {/* Disclaimer Content */}
              <TabsContent value="disclaimer" className="mt-8">
                <div className="bg-card border border-border rounded-lg shadow-sm p-8 space-y-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <AlertTriangle className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-semibold">Legal Disclaimer</h2>
                      <p className="text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    </div>
                  </div>

                  <div className="prose prose-slate max-w-none space-y-6">
                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        1. General Information
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        The information provided on this website and in our communications is for general informational purposes only. While we strive to ensure accuracy, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        2. Professional Advice
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        The content on this website does not constitute professional advice, tax advice, legal advice, or financial advice. Each situation is unique, and you should consult with qualified professionals before making any decisions. Our services are provided only through formal engagement letters, and advice is specific to the facts and circumstances of each engagement.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        3. Regulatory Compliance
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Tax laws, accounting standards, and regulatory requirements are subject to frequent changes. While we stay updated with current regulations, we cannot guarantee that all information reflects the most recent changes. You are responsible for verifying current requirements and seeking professional advice for your specific situation.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        4. Third-Party Links & Resources
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Our website may contain links to third-party websites or resources. We do not endorse or assume responsibility for the content, privacy policies, or practices of third-party sites. Accessing such links is at your own risk.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        5. No Guarantee of Results
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We do not guarantee specific outcomes, results, or savings from our services. Tax savings, compliance outcomes, and business results depend on various factors beyond our control, including changes in laws, business circumstances, and client actions.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        6. Limitation of Liability
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        To the maximum extent permitted by law, A K Chordia & Associates, its partners, employees, and associates shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from the use of information on this website or reliance on general communications.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        7. Professional Standards
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We are registered with the Institute of Chartered Accountants of India (ICAI) and adhere to all professional standards, codes of ethics, and regulatory requirements. However, professional standards and interpretations may evolve, and past practices may not reflect current requirements.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        8. Updates & Modifications
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        We reserve the right to modify, update, or remove any content on this website at any time without prior notice. This disclaimer may be updated periodically, and continued use of our website constitutes acceptance of any changes.
                      </p>
                    </section>

                    <section>
                      <h3 className="text-lg font-semibold mb-3">
                        9. Contact for Clarifications
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        If you have questions about this disclaimer or need clarification on any information, please <a href="/contact" className="text-primary hover:underline">contact us</a> for professional consultation.
                      </p>
                    </section>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  )
}

export default LegalPage

