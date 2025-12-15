import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Button } from './Button';

const CONSENT_KEY = 'cookie-consent';

export const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-2xl border border-slate-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-start sm:items-center gap-3 flex-1">
                <Cookie className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1 sm:mt-0" />
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900 mb-1">
                    We use cookies
                  </h3>
                  <p className="text-sm text-slate-600">
                    We use cookies to enhance your browsing experience and analyze our traffic.
                    By clicking "Accept", you consent to our use of cookies.{' '}
                    <a href="/privacy" className="text-blue-600 hover:underline">
                      Learn more
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleDecline}
                  className="flex-1 sm:flex-none"
                >
                  Decline
                </Button>
                <Button
                  size="sm"
                  onClick={handleAccept}
                  className="flex-1 sm:flex-none"
                >
                  Accept
                </Button>
              </div>

              <button
                onClick={handleDecline}
                className="absolute top-4 right-4 sm:relative sm:top-0 sm:right-0 text-slate-400 hover:text-slate-600 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
