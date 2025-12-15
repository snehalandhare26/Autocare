import { motion, useReducedMotion } from 'framer-motion';
import { Section } from '../../components/Section';
import { fadeInUp } from '../../utils/animations';

const showcaseImages = [
  {
    src: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Engine diagnostic and repair',
    title: 'Engine Diagnostics'
  },
  {
    src: 'https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Gearbox maintenance',
    title: 'Gearbox Service'
  },
  {
    src: 'https://images.pexels.com/photos/13368260/pexels-photo-13368260.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'ECU scanning and diagnostics',
    title: 'ECU Scanning'
  },
  {
    src: 'https://images.pexels.com/photos/13368372/pexels-photo-13368372.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Brake pad replacement',
    title: 'Brake Service'
  },
  {
    src: 'https://images.pexels.com/photos/279949/pexels-photo-279949.jpeg?auto=compress&cs=tinysrgb&w=800',
    alt: 'Spark plug maintenance',
    title: 'Spark Plugs'
  },
];

export const ShowcaseSection = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <Section className="py-16 lg:py-24 bg-slate-900 text-white">
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Precision Work, Every Detail
        </h2>
        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
          State-of-the-art equipment and expert technicians ensure quality service
        </p>
      </motion.div>

      <div className="lg:hidden space-y-6">
        {showcaseImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ delay: index * 0.1 }}
            className="relative aspect-video rounded-xl overflow-hidden"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <p className="text-white font-semibold text-lg p-6">{image.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="hidden lg:block overflow-x-auto scrollbar-hide -mx-4 sm:-mx-6 lg:-mx-8">
        <div className="flex space-x-6 px-4 sm:px-6 lg:px-8 pb-4">
          {showcaseImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: index * 0.1 }}
              className="relative flex-shrink-0 w-80 aspect-video rounded-xl overflow-hidden group cursor-pointer"
              whileHover={shouldReduceMotion ? {} : { scale: 1.05 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end transition-opacity group-hover:opacity-90">
                <p className="text-white font-semibold text-lg p-6">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};
