import Navbar from '@/components/app/shared/Navbar'
import FooterSection from '@/components/app/shared/Footer'
import { useState } from 'react'

const galleryItems = [
  {
    id: 1,
    title: 'Office Spaces',
    description: 'Our modern workspace designed for collaboration and excellence',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    category: 'Workspace',
    span: 'col-span-12 sm:col-span-6 lg:col-span-3'
  },
  {
    id: 2,
    title: 'Team Collaboration',
    description: 'Our dedicated team working together to deliver exceptional service',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
    category: 'Team',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6'
  },
  {
    id: 3,
    title: 'Professional Meetings',
    description: 'Engaging in professional consultations to understand business requirements',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    category: 'Events',
    span: 'col-span-12 sm:col-span-6 lg:col-span-3'
  },
  {
    id: 4,
    title: 'Training Sessions',
    description: 'Continuous learning and professional development programs',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    category: 'Training',
    span: 'col-span-12 sm:col-span-6 lg:col-span-6'
  },
  {
    id: 5,
    title: 'Awards & Recognition',
    description: 'Celebrating excellence and achievements in professional services',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    category: 'Achievements',
    span: 'col-span-12 sm:col-span-6 lg:col-span-3'
  },
  {
    id: 6,
    title: 'Community Events',
    description: 'Active participation in community and professional gatherings',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
    category: 'Events',
    span: 'col-span-12 sm:col-span-6 lg:col-span-3'
  },
]

const GalleryPage = () => {
  const [, setHoveredId] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main className="pt-16">
        {/* Header Section */}
        <section className="bg-background pt-14 pb-10 lg:pt-18 lg:pb-12">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-0">
            <div className="text-center space-y-4">
              <p className="text-xs uppercase tracking-[0.45em] text-primary font-semibold">Inside the practice</p>
              <h1 className="text-3xl font-semibold sm:text-4xl lg:text-4xl text-foreground">
                Moments from our studio life
              </h1>
              <p className="mx-auto max-w-5xl text-sm sm:text-base lg:text-lg text-muted-foreground">
                A curated glimpse into the spaces, people, and touchpoints that shape every client engagement.
              </p>
            </div>
          </div>
        </section>

        {/* Bento Grid Gallery */}
        <section className="bg-background pb-14 lg:pb-20">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-10 lg:px-0">
            <div className="grid grid-cols-12 auto-rows-[240px] sm:auto-rows-[270px] lg:auto-rows-[310px] gap-4 grid-flow-dense !rounded-none">
              {galleryItems.map((item, index) => (
                <div
                  key={item.id}
                  className={`group relative overflow-hidden !rounded-none h-full w-full cursor-pointer transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-2xl ${item.span}`}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  }}
                  onMouseEnter={() => setHoveredId(item.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  {/* Image */}
                  <div className="absolute inset-0 !rounded-none">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 !rounded-none"
                      loading="lazy"
                    />
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700" />

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end px-5 lg:px-6 pt-24 pb-2 lg:pb-3 z-10 pointer-events-none">
                    <h3 className="mt-auto text-sm sm:text-base lg:text-lg xl:text-xl font-semibold text-white leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/40 rounded-2xl lg:rounded-3xl transition-all duration-700 shadow-[0_0_0_1px_rgba(255,255,255,0.1)] group-hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)]" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <style>{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </main>
      <FooterSection />
    </div>
  )
}

export default GalleryPage

