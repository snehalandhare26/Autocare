import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { Section } from '../../components/Section';
import { fadeInUp, staggerContainer } from '../../utils/animations';
import { supabase } from '../../lib/supabase';
import { injectJSONLD, removeJSONLD } from '../../utils/seo';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export const FAQSection = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const fetchFAQs = async () => {
      if (!supabase) {
        // Fallback FAQs if Supabase is not configured
        const fallbackFAQs: FAQ[] = [
          {
            id: '1',
            question: 'What services do you offer?',
            answer: 'We offer comprehensive auto repair and car care services including engine diagnostics, brake repair, oil changes, tire services, and more.',
            category: 'general',
          },
          {
            id: '2',
            question: 'How long does a typical service take?',
            answer: 'Most services can be completed within 2-4 hours. Complex repairs may take longer, and we\'ll provide an estimated timeline when you book.',
            category: 'general',
          },
          {
            id: '3',
            question: 'Do you use OEM parts?',
            answer: 'Yes, we use genuine OEM parts for all repairs to ensure the highest quality and maintain your vehicle\'s warranty.',
            category: 'parts',
          },
        ];
        setFaqs(fallbackFAQs);
        return;
      }

      const { data } = await supabase
        .from('faqs')
        .select('*')
        .eq('active', true)
        .order('display_order', { ascending: true });

      if (data) {
        setFaqs(data);

        const faqSchema = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.map((faq) => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        };

        const script = injectJSONLD(faqSchema);
        return () => removeJSONLD(script);
      }
    };

    fetchFAQs();
  }, []);

  return (
    <Section id="faq" className="py-16 lg:py-24 bg-white">
      <motion.div variants={staggerContainer} className="space-y-12">
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Everything you need to know about our services
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              variants={fadeInUp}
              className="bg-slate-50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-100 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-white" />
                  ) : (
                    <Plus className="w-5 h-5 text-white" />
                  )}
                </div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
};
