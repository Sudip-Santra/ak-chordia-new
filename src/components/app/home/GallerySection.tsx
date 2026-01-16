
const galleryItems = [
  {
    id: 1,
    title: 'Office Spaces',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 2,
    title: 'Team Collaboration',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 3,
    title: 'Professional Meetings',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 4,
    title: 'Training Sessions',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
  },
];

const GallerySection = () => {
  return (
    <section className="pb-20 bg-background dark:bg-gray-900">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header - Centered */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            Moments from our studio life
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A curated glimpse into the spaces, people, and touchpoints that shape our professional practice.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="group relative overflow-hidden h-[22rem] cursor-pointer transition-all duration-700 ease-out hover:scale-[1.02] hover:shadow-2xl !rounded-none"
                style={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                }}
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
      </div>

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
    </section>
  );
};

export default GallerySection;

