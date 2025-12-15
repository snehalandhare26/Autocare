import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Phone, CreditCard, Clock, Award } from 'lucide-react';
import { Button } from '../../components/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';

const FloatingPart = ({ delay, x, y }: { delay: number; x: string; y: string }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className="absolute w-12 h-12 bg-slate-100 rounded-lg shadow-lg"
      style={{ left: x, top: y }}
      animate={shouldReduceMotion ? {} : {
        y: [0, -20, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    />
  );
};

export const HeroSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeInUp} className="space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Trusted Car Care. Transparent Pricing. Fast Turnaround.
            </h1>
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed">
              Diagnostics within hours, approvals & payments via Stripe, live updates, and reminders—all from one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" as="a" href="/book">
                Book Appointment
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" as="a" href="#services">
                View Services
              </Button>
              <Button variant="outline" size="lg" as="a" href="tel:+911234567890">
                <Phone className="w-5 h-5" />
                Call Now
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                <CreditCard className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">UPI / Stripe</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                <Clock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">Same-day</span>
              </div>
              <div className="flex items-center space-x-2 bg-white rounded-lg px-3 py-2 shadow-sm">
                <Award className="w-5 h-5 text-blue-600 flex-shrink-0" />
                <span className="text-xs font-medium text-slate-700">OEM Parts</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="relative"
          >
            <motion.div
              className="relative z-10"
              animate={shouldReduceMotion ? {} : {
                rotateY: [-1, 1, -1],
                rotateX: [-0.5, 0.5, -0.5],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{ perspective: 1000 }}
            >
              <img
                src="https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Premium sports car"
                className="w-full h-auto drop-shadow-2xl"
                loading="eager"
                fetchPriority="high"
                width="1200"
                height="800"
              />
            </motion.div>

            <FloatingPart delay={0} x="10%" y="20%" />
            <FloatingPart delay={1} x="80%" y="15%" />
            <FloatingPart delay={2} x="15%" y="75%" />
            <FloatingPart delay={1.5} x="75%" y="70%" />
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none" />
    </section>
  );
};
