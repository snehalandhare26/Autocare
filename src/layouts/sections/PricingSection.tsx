import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const packages = [
  {
    name: 'Basic Service',
    price: '₹2,499',
    description: 'Essential maintenance for regular upkeep',
    features: [
      'Engine oil replacement',
      'Oil filter change',
      'Visual inspection',
      'Tyre pressure check',
      'Fluid top-ups',
    ],
  },
  {
    name: 'Comprehensive Service',
    price: '₹4,999',
    description: 'Complete service for optimal performance',
    features: [
      'Everything in Basic',
      'Air filter replacement',
      'Spark plug cleaning',
      'Brake inspection',
      'AC performance check',
      'Battery health test',
      'Wheel alignment check',
    ],
    popular: true,
  },
  {
    name: 'Full Diagnostic',
    price: '₹7,999',
    description: 'Advanced diagnostics and repairs',
    features: [
      'Everything in Comprehensive',
      'Complete ECU scan',
      'Transmission check',
      'Suspension diagnostics',
      'Exhaust system check',
      'Detailed report with recommendations',
    ],
  },
];

export const PricingSection = () => {
  return (
    <Section id="pricing" className="py-16 lg:py-24 bg-slate-50">
      <motion.div variants={staggerContainer} className="space-y-12">
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Transparent Pricing
          </h2>
          <p className="text-lg text-slate-600">
            No hidden charges. Clear pricing for quality service. Final price confirmed via detailed estimate.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {packages.map((pkg) => (
            <motion.div
              key={pkg.name}
              variants={fadeInUp}
              className={`relative bg-white rounded-2xl p-8 ${
                pkg.popular
                  ? 'ring-2 ring-blue-600 shadow-xl scale-105'
                  : 'shadow-lg'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-slate-600 text-sm mb-4">{pkg.description}</p>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-slate-900">
                    {pkg.price}
                  </span>
                  <span className="text-slate-600 ml-2">onwards</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.popular ? 'primary' : 'outline'}
                fullWidth
                as="a"
                href="/book"
              >
                Book Now
              </Button>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="bg-blue-50 rounded-xl p-6 text-center"
        >
          <p className="text-slate-700 mb-4">
            Prices shown are indicative. Final pricing will be provided after diagnostics via detailed estimate and Stripe approval.
          </p>
          <Button variant="outline" as="a" href="/pricing">
            View Full Pricing
            <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
};
