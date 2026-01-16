import { 
  Laptop, 
  GraduationCap, 
  Coffee, 
  HeartPulse, 
  Factory, 
  Building2, 
  Sprout, 
  TrendingUp 
} from 'lucide-react';

interface Industry {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const industries: Industry[] = [
  {
    icon: <Laptop className="w-10 h-10 text-gray-500 dark:text-gray-400" />,
    title: 'Information Technology',
    description: 'Tech startups to enterprise software solutions'
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-gray-500 dark:text-gray-400" />,
    title: 'Educational Institutions',
    description: 'Schools, colleges, and e-learning platforms'
  },
  {
    icon: <Coffee className="w-10 h-10 text-gray-500 dark:text-gray-400" />,
    title: 'Hospitality & Leisure',
    description: 'Hotels, restaurants, and travel services'
  },
  {
    icon: <HeartPulse className="w-10 h-10 text-gray-500 dark:text-gray-400" />,
    title: 'Pharma & Healthcare',
    description: 'Medical facilities and pharmaceutical companies'
  },
  {
    icon: <Factory className="w-10 h-10 text-gray-500 dark:text-gray-400" />,
    title: 'Manufacturing & Trading',
    description: 'Production units and trading businesses'
  },
  {
    icon: <Building2 className="w-10 h-10 text-gray-500 dark:text-gray-400" />,
    title: 'Construction & Infrastructure',
    description: 'Real estate and infrastructure development'
  },
  {
    icon: <Sprout className="w-10 h-10 text-gray-500 dark:text-gray-400" />,
    title: 'Agrotechnology',
    description: 'Agriculture and agri-tech innovations'
  },
  {
    icon: <TrendingUp className="w-10 h-10 text-gray-500 dark:text-gray-400" />,
    title: 'Emerging Sectors',
    description: 'New-age businesses and innovative ventures'
  }
];

const IndustriesSection = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
            From startups to established enterprises, we support every stage of growth with industry-specific insight and expertise. We understand that every sector has its own regulatory landscape, financial complexities, and growth.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="max-w-7xl mx-auto px-0 sm:px-0 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 text-center hover:shadow-lg transition-shadow duration-300"
                style={{ borderRadius: '4px' }}
              >
                <div className="flex justify-center mb-4">
                  {industry.icon}
                </div>
                <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  {industry.title}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustriesSection;
