import { Eye, Target, Brain, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Eye className="w-6 h-6" />,
    title: 'Financial Insights',
    description: 'Our platform provides valuable insights to help you optimize your financial strategy and make informed business decisions'
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Automated Compliance',
    description: 'Our platform offers automatic tracking to simplify your compliance processes and ensure timely regulatory adherence'
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'Professional Advisory',
    description: 'CA advisors that provide personalized recommendations and insights tailored to your business needs'
  },
  {
    icon: <Calendar className="w-6 h-6" />,
    title: 'Tax Planning',
    description: 'Tax planning capabilities lets you view, manage & track all your tax obligations and deadlines efficiently'
  }
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-background dark:bg-gray-900">
      <div className="px-0 sm:px-0 lg:px-8 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            Beyond Numbers, Building Futures
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
            Partner with a trusted CA firm that combines decades of experience with modern solutions. 
            Experience professional financial services designed to support your business needs.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Side - CTA Card */}
          <div className="lg:col-span-1 bg-gray-50 dark:bg-gray-800 rounded-lg p-8 lg:p-10 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 dark:text-white mb-8">
                Professional services for your business needs
              </h3>
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Experience professional services tailored to your needs. Get guidance from experienced 
                Chartered Accountants who understand your business requirements.
              </p>
            </div>
            <Link to="/contact" className="w-full sm:w-auto">
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium px-8 py-6 rounded-lg text-base shadow-sm"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Right Side - Features Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-primary dark:text-blue-400">
                  {feature.icon}
                </div>
                
                {/* Title */}
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                
                {/* Description */}
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
