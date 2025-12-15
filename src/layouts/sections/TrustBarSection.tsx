import { motion } from 'framer-motion';
import { Star, Users, Calendar, Award } from 'lucide-react';
import { fadeInUp, staggerContainerFast } from '../../utils/animations';

const trustBadges = [
  {
    icon: Star,
    text: '4.8★ Google',
    label: 'Google rating'
  },
  {
    icon: Users,
    text: '10k+ Vehicles',
    label: 'Vehicles serviced'
  },
  {
    icon: Calendar,
    text: '12+ Years',
    label: 'Years in service'
  },
  {
    icon: Award,
    text: 'Certified Techs',
    label: 'Certified technicians'
  }
];

export const TrustBarSection = () => {
  return (
    <section className="py-8 bg-slate-100 border-y border-slate-200">
      <motion.div
        variants={staggerContainerFast}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {trustBadges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-center justify-center space-x-3 bg-white rounded-lg px-4 py-3 shadow-sm"
              >
                <Icon className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <p className="font-bold text-slate-900 text-sm lg:text-base">
                    {badge.text}
                  </p>
                  <p className="text-xs text-slate-600 hidden sm:block">
                    {badge.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
