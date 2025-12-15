import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Section } from '../../components/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { supabase } from '../../lib/supabase';
import { injectJSONLD, removeJSONLD } from '../../utils/seo';

interface Testimonial {
  id: string;
  customer_name: string;
  quote: string;
  rating: number;
  car_model: string;
  city: string;
}

export const TestimonialsSection = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      if (!supabase) {
        // Fallback testimonials if Supabase is not configured
        const fallbackTestimonials: Testimonial[] = [
          {
            id: '1',
            customer_name: 'Rajesh Kumar',
            quote: 'Excellent service! They fixed my car quickly and the pricing was very transparent. Highly recommend!',
            rating: 5,
            car_model: 'Honda City',
            city: 'Bangalore',
          },
          {
            id: '2',
            customer_name: 'Priya Sharma',
            quote: 'Professional team and great customer service. My car runs like new after their service.',
            rating: 5,
            car_model: 'Maruti Swift',
            city: 'Bangalore',
          },
          {
            id: '3',
            customer_name: 'Amit Patel',
            quote: 'Best auto care service in Bangalore. They use genuine parts and the work quality is outstanding.',
            rating: 5,
            car_model: 'Hyundai Creta',
            city: 'Bangalore',
          },
        ];
        setTestimonials(fallbackTestimonials);
        return;
      }

      const { data } = await supabase
        .from('testimonials')
        .select('*')
        .eq('featured', true)
        .order('created_at', { ascending: false })
        .limit(5);

      if (data) {
        setTestimonials(data);

        const reviewSchema = {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          itemListElement: data.map((testimonial, index) => ({
            '@type': 'Review',
            position: index + 1,
            author: {
              '@type': 'Person',
              name: testimonial.customer_name,
            },
            reviewRating: {
              '@type': 'Rating',
              ratingValue: testimonial.rating,
              bestRating: 5,
            },
            reviewBody: testimonial.quote,
          })),
        };

        const script = injectJSONLD(reviewSchema);
        return () => removeJSONLD(script);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <Section id="testimonials" className="py-16 lg:py-24 bg-white">
      <motion.div variants={staggerContainer} className="space-y-12">
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-slate-600">
            Real feedback from satisfied customers across India
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={fadeInUp}
              className="bg-slate-50 rounded-xl p-6 lg:p-8 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />

              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-slate-300'
                    }`}
                  />
                ))}
              </div>

              <p className="text-slate-700 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              <div className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-900">
                  {testimonial.customer_name}
                </p>
                <p className="text-sm text-slate-600">
                  {testimonial.car_model} • {testimonial.city}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};
