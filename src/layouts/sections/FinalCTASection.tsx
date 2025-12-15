import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../../components/Button';
import { fadeInUp } from '../../utils/animations';

export const FinalCTASection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center space-y-8"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            Ready to Give Your Car<br />the Care It Deserves?
          </h2>
          <p className="text-lg lg:text-xl text-blue-100 max-w-2xl mx-auto">
            Book your appointment now and experience transparent, professional auto care with real-time updates and secure payments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button
              size="lg"
              variant="secondary"
              as="a"
              href="/book"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Book Your Slot Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              as="a"
              href="tel:+911234567890"
              className="border-white text-white hover:bg-white/10"
            >
              Call Us Today
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
