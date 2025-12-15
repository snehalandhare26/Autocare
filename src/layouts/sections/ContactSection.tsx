import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Car, Navigation } from 'lucide-react';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';
import { fadeInUp, staggerContainer } from '../../utils/animations';

export const ContactSection = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Auto Service Road, Koramangala, Bangalore - 560034',
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 98765 43210',
      href: 'tel:+919876543210',
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'contact@autocare.com',
      href: 'mailto:contact@autocare.com',
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon-Sat: 9:00 AM - 7:00 PM, Sun: 10:00 AM - 5:00 PM',
    },
  ];

  const additionalInfo = [
    {
      icon: Car,
      title: 'Free Parking',
      content: 'Ample parking space available for all vehicle types',
    },
    {
      icon: Navigation,
      title: 'Service Radius',
      content: 'We serve customers within 20km radius',
    },
  ];

  return (
    <Section id="contact" className="py-16 lg:py-24 bg-slate-50">
      <motion.div variants={staggerContainer} className="space-y-12">
        <motion.div variants={fadeInUp} className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Visit Our Service Center
          </h2>
          <p className="text-lg text-slate-600">
            Drop by or schedule an appointment. We're here to help with all your automotive needs.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-slate-200 rounded-2xl overflow-hidden aspect-video lg:aspect-[21/9]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6396350173775!2d77.62710731482223!3d12.934515990882814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae144ed898fc47%3A0x1681f38e8c4095bd!2sKoramangala%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AutoCare Service Center Location"
          />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div variants={fadeInUp} className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h3>
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">
                      {item.title}
                    </h4>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-slate-600">{item.content}</p>
                    )}
                  </div>
                </div>
              );
            })}

            <div className="pt-6 space-y-4">
              {additionalInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-start space-x-3 text-sm">
                    <Icon className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-slate-900">{item.title}</p>
                      <p className="text-slate-600">{item.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send Us a Message</h3>
            <form className="bg-white rounded-2xl p-6 lg:p-8 shadow-lg space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your requirements"
                  required
                ></textarea>
              </div>
              <Button type="submit" fullWidth size="lg">
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
};
