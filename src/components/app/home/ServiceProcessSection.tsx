import { CheckCircle } from 'lucide-react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  items: string[];
}

const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Analysis',
    description: 'We analyze your current financial processes and identify optimization opportunities.',
    items: [
      'Financial process review',
      'Compliance gap analysis',
      'Risk assessment',
      'Opportunity identification'
    ]
  },
  {
    number: '02',
    title: 'Strategy Development',
    description: 'Create customized solutions aligned with your business goals and industry requirements.',
    items: [
      'Customized service plan',
      'Timeline planning',
      'Resource allocation'
    ]
  },
  {
    number: '03',
    title: 'Implementation',
    description: 'Execute the plan with minimal disruption to your ongoing business operations.',
    items: [
      'Regular progress updates',
      'Milestone reporting',
      'Quality control',
      'Technical support'
    ]
  },
  {
    number: '04',
    title: 'Ongoing Support',
    description: 'Continuous monitoring, optimization, and support to ensure sustained success.',
    items: [
      'Performance monitoring',
      'Regular reviews',
      'Compliance updates',
      'Continuous optimization'
    ]
  }
];

const ServiceProcessSection = () => {
  return (
    <section className="py-20" style={{ backgroundColor: '#f5f8ff' }}>
      <div className="px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Our Service Process
          </h2>
          <p className="text-base text-foreground leading-relaxed">
            We follow a structured, transparent process to ensure successful service delivery with clear communication, quality control, and comprehensive documentation.
          </p>
        </div>

        {/* Process Cards Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="rounded-lg px-4 py-8 flex flex-col"
                style={{ borderRadius: '4px' }}
              >
                {/* Step Number */}
                <div className="mb-5">
                  <span className="text-5xl font-bold text-primary leading-none">
                    {step.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-5 leading-relaxed">
                  {step.description}
                </p>

                {/* Items List */}
                <ul className="space-y-2.5">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessSection;

