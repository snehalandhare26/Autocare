import { motion } from 'framer-motion';
import { Wrench, Zap, Wind, Disc, Paintbrush, CircleDot } from 'lucide-react';
import { Section } from '../../components/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const services = [
  {
    id: 1,
    icon: Wrench,
    title: 'General Service',
    description: 'Comprehensive maintenance including oil change, filter replacement, and multi-point inspection.'
  },
  {
    id: 2,
    icon: Zap,
    title: 'Engine Diagnostics',
    description: 'Advanced diagnostics using latest tools to identify and resolve engine issues quickly.'
  },
  {
    id: 3,
    icon: Wind,
    title: 'AC Repair',
    description: 'Complete AC service, gas refill, compressor repair, and cooling system maintenance.'
  },
  {
    id: 4,
    icon: Disc,
    title: 'Brake & Suspension',
    description: 'Brake pad replacement, disc resurfacing, suspension repair, and alignment services.'
  },
  {
    id: 5,
    icon: Paintbrush,
    title: 'Body & Paint',
    description: 'Dent removal, scratch repair, full body paint, and detailing services for a showroom finish.'
  },
  {
    id: 6,
    icon: CircleDot,
    title: 'Tyres & Balancing',
    description: 'Tyre replacement, wheel alignment, balancing, rotation, and pressure monitoring.'
  },
];

export const ServicesSection = () => {
  return (
    <Section id="services" className="py-16 lg:py-24 bg-white">
      <motion.div variants={staggerContainer} className="space-y-12">
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Complete Auto Care Services
          </h2>
          <p className="text-lg text-slate-600">
            From routine maintenance to complex repairs, we handle all your vehicle needs with expertise and care.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={service.id}
                href="#contact"
                variants={fadeInUp}
                className="bg-slate-50 rounded-xl p-6 lg:p-8 hover:shadow-lg hover:scale-[1.02] transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <span className="text-blue-600 font-medium hover:underline inline-flex items-center">
                  Learn More →
                </span>
              </motion.a>
            );
          })}
        </motion.div>
      </motion.div>
    </Section>
  );
};
