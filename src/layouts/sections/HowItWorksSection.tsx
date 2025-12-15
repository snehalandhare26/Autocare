import { motion } from 'framer-motion';
import { Calendar, ClipboardCheck, CreditCard, ThumbsUp } from 'lucide-react';
import { Section } from '../../components/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const steps = [
  {
    number: 1,
    icon: Calendar,
    title: 'Book',
    description: 'Schedule your appointment online in seconds. Choose your preferred date and time.',
  },
  {
    number: 2,
    icon: ClipboardCheck,
    title: 'Check-in & Diagnose',
    description: 'Drop off your vehicle. Our technicians perform thorough diagnostics within hours.',
  },
  {
    number: 3,
    icon: CreditCard,
    title: 'Approve & Pay',
    description: 'Review detailed estimate, approve work, and pay securely via UPI or Stripe.',
  },
  {
    number: 4,
    icon: ThumbsUp,
    title: 'Pickup & Feedback',
    description: 'Collect your serviced vehicle and share your experience. Get reminders for next service.',
  },
];

export const HowItWorksSection = () => {
  return (
    <Section id="how-it-works" className="py-16 lg:py-24 bg-slate-50">
      <motion.div variants={staggerContainer} className="space-y-12">
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-slate-600">
            Simple, transparent process from booking to pickup
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 transform -translate-y-1/2" />

          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10"
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  variants={fadeInUp}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow relative"
                  whileHover={{ y: -4 }}
                >
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl mb-4 mx-auto">
                    {step.number}
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 text-center">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-center text-sm">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};
