import {
  TrendingUp,
  FileText,
  Users,
  Target
} from 'lucide-react';

interface Advantage {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const advantages: Advantage[] = [
  {
    icon: <TrendingUp className="w-5 h-5 text-white" />,
    title: 'Experience',
    description: 'Years of experience in taxation, auditing, and financial advisory helping businesses achieve their goals.'
  },
  {
    icon: <FileText className="w-5 h-5 text-white" />,
    title: 'Tax Services',
    description: 'Our qualified CAs stay updated with latest tax laws, ensuring compliance and supporting your requirements.'
  },
  {
    icon: <Users className="w-5 h-5 text-white" />,
    title: 'Client-Centric Approach',
    description: 'Building long-term relationships with tailored solutions that meet your unique business needs.'
  },
  {
    icon: <Target className="w-5 h-5 text-white" />,
    title: 'Comprehensive Services',
    description: 'Complete range of CA services from accounting to financial planning, all under one roof.'
  }
];

const AboutUsSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 scroll-mt-24">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            Excellence You Can Trust
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400">
            Your dedicated partner in financial success. We combine expertise with unwavering commitment to deliver exceptional results and trusted guidance.
          </p>
        </div>

        {/* Content Grid */}
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Image */}
            <div className="order-2 lg:order-1 lg:h-[450px]">
              <div className="relative w-full h-full min-h-[350px] lg:min-h-0 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2011&auto=format&fit=crop"
                  alt="A K Chordia & Associates - Chartered Accountants"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Side - Advantages Grid */}
            <div className="order-1 lg:order-2 lg:h-[450px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 h-full min-h-[350px] lg:min-h-0">
                {advantages.map((advantage, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 p-4 hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700 flex flex-col"
                    style={{ borderRadius: '4px' }}
                  >
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-3 flex-shrink-0">
                      {advantage.icon}
                    </div>
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

