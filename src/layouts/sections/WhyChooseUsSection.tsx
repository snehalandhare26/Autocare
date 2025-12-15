import { motion } from 'framer-motion';
import { Section } from '../../components/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const features = [
  {
    id: 1,
    title: 'Transparent Pricing',
    description: 'No hidden fees. Get detailed estimates before any work begins. Approve and pay securely through Stripe.'
  },
  {
    id: 2,
    title: 'OEM Quality Parts',
    description: 'We use only genuine OEM parts to ensure longevity and performance. Every part comes with warranty.'
  },
  {
    id: 3,
    title: 'Expert Technicians',
    description: 'Our certified technicians undergo regular training and have extensive experience with all major brands.'
  },
  {
    id: 4,
    title: 'Real-Time Updates',
    description: 'Stay informed with live updates on your vehicle status, diagnostic results, and service progress.'
  },
  {
    id: 5,
    title: 'Fast Turnaround',
    description: 'Most services completed same-day. We value your time and work efficiently without compromising quality.'
  },
  {
    id: 6,
    title: 'Comprehensive Warranty',
    description: '6-month or 10,000 km warranty on all repairs. Drive with confidence knowing we stand behind our work.'
  }
];

export const WhyChooseUsSection = () => {
  return (
    <Section id="why-choose-us" className="py-16 lg:py-24 bg-white">
      <motion.div variants={staggerContainer} className="space-y-12">
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Why Choose AutoCare Plus?
          </h2>
          <p className="text-lg text-slate-600">
            Experience the difference of professional auto care backed by transparency, quality, and customer satisfaction
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={fadeInUp}
              className="flex space-x-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};
