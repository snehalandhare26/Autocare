import { motion } from 'framer-motion';
import { Section } from '../../components/Section';
import { fadeInUp, slideInLeft, slideInRight } from '../../utils/animations';

export const AboutSection = () => {
  return (
    <Section id="about" className="py-16 lg:py-24 bg-slate-50">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <img
            src="https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Modern auto repair facility"
            className="w-full rounded-2xl shadow-xl"
            loading="lazy"
          />
        </motion.div>

        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">
            Modern Auto Care You Can Trust
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Since 2011, AutoCare Plus has been Bangalore's premier choice for professional auto repair and maintenance. Our state-of-the-art facility combines cutting-edge diagnostic equipment with skilled technicians to deliver exceptional service every time.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            We believe in complete transparency. Every service begins with a thorough diagnostic, followed by a detailed estimate you can review and approve online. Our secure Stripe payment system and real-time updates ensure you're always informed about your vehicle's status.
          </p>
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 gap-6 pt-6"
          >
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600">10k+</p>
              <p className="text-slate-600">Vehicles Serviced</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-bold text-blue-600">12+</p>
              <p className="text-slate-600">Years Experience</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
};
