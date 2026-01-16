import { ArrowRight } from "lucide-react";

const newsArticles = [
  {
    title: "New GST Compliance Rules for 2025: What Businesses Need to Know",
    description: "Understanding the latest GST amendments and their impact on your business operations and compliance requirements.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop"
  },
  {
    title: "Income Tax Updates: Key Changes in the Latest Budget",
    description: "Comprehensive analysis of new tax slabs, deductions, and implications for individuals and corporations.",
    image: "https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Digital Transformation in Accounting: Embracing Cloud Solutions",
    description: "How modern accounting software and cloud-based tools are revolutionizing financial management and reporting.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  },
  {
    title: "Startup Compliance Guide: Essential Steps for New Businesses",
    description: "A complete roadmap for startups to navigate company formation, registration, and ongoing compliance requirements.",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800&h=600&fit=crop"
  }
];

const NewsInsightsSection = () => {
  return (
    <section className="py-20 bg-background dark:bg-gray-900">
      <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          {/* Mobile: Header and Learn More Button - Same Line */}
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Articles & Insights
            </h2>
            <a href="/articles" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <span className="text-sm font-medium">View All</span>
              <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </a>
          </div>
          
          {/* Desktop: Original Layout */}
          <div className="hidden lg:flex items-center justify-between">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
                Articles & Insights
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-400 max-w-3xl">
                Stay informed with the latest updates in taxation, compliance, and financial regulations. 
                Professional insights to help you navigate the changing business landscape.
              </p>
            </div>
            <a href="/articles" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors flex-shrink-0">
              <span className="text-sm font-medium">View All</span>
              <div className="w-7 h-7 bg-primary rounded-full flex items-center justify-center">
                <ArrowRight className="h-4 w-4 text-white" />
              </div>
            </a>
          </div>
          
          {/* Mobile: Description Paragraph */}
          <p className="text-sm text-gray-600 dark:text-gray-400 lg:hidden">
            Stay informed with the latest updates in taxation, compliance, and financial regulations. 
            Professional insights to help you navigate the changing business landscape.
          </p>
        </div>

        {/* News Cards */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsArticles.map((article, index) => (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 cursor-pointer overflow-hidden"
                style={{ borderRadius: '4px' }}
              >
                {/* Image */}
                <div className="relative w-full h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                
                {/* Content Area */}
                <div className="p-5 relative">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white leading-tight mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-12 line-clamp-3">
                    {article.description}
                  </p>
                  
                  {/* Circular Arrow Icon */}
                  <div className="absolute bottom-4 right-4">
                    <div className="w-8 h-8 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <ArrowRight className="h-4 w-4 text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsInsightsSection;
