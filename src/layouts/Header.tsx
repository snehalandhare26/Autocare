import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Wrench } from 'lucide-react';
import { Button } from '../components/Button';
import { siteConfig } from '../config/seo';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Wrench className="w-6 h-6 text-blue-600" />
              <span className="text-xl lg:text-2xl font-bold text-slate-900">
                {siteConfig.name}
              </span>
            </a>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center space-x-2 text-slate-700 hover:text-blue-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">{siteConfig.phone}</span>
            </a>
            <Button size="sm" as="a" href="/book">Book Service</Button>
          </div>

          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200 bg-white"
          >
            <div className="px-4 py-4 space-y-3">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block py-2 text-slate-700 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center space-x-2 py-2 text-slate-700 hover:text-blue-600 transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span className="font-medium">{siteConfig.phone}</span>
              </a>
              <Button fullWidth as="a" href="/book">Book Service</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
