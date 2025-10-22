"use client";
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = React.useState(false);
  const [showSettings, setShowSettings] = React.useState(false);
  const [preferences, setPreferences] = React.useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  React.useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem('cookie-consent', JSON.stringify(allAccepted));
    setPreferences(allAccepted);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptNecessary = () => {
    const necessaryOnly = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem('cookie-consent', JSON.stringify(necessaryOnly));
    setPreferences(necessaryOnly);
    setShowBanner(false);
    setShowSettings(false);
  };

  const savePreferences = () => {
    localStorage.setItem('cookie-consent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowSettings(false);
  };

  if (!showBanner) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-0 left-0 right-0 z-50 p-4"
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="rounded-2xl border bg-white/95 dark:bg-neutral-900/95 backdrop-blur-lg shadow-2xl p-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
          >
            {!showSettings ? (
              <>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Cookie className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">Souhlas s používáním cookies</h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
                      Tyto webové stránky používají soubory cookies k zajištění nejlepšího zážitku na našich webových stránkách. 
                      Některé cookies jsou nezbytné pro fungování webu, zatímco jiné nám pomáhají analyzovat návštěvnost a vylepšovat naše služby.
                    </p>
                    <div className="flex flex-wrap gap-3">
                      <Button onClick={acceptAll} className="rounded-xl">
                        Přijmout vše
                      </Button>
                      <Button onClick={acceptNecessary} variant="outline" className="rounded-xl">
                        Pouze nezbytné
                      </Button>
                      <Button onClick={() => setShowSettings(true)} variant="outline" className="rounded-xl">
                        Nastavení
                      </Button>
                    </div>
                  </div>
                  <button
                    onClick={acceptNecessary}
                    className="flex-shrink-0 p-2 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold mb-2">Nastavení cookies</h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    Vyberte, které typy cookies chcete povolit:
                  </p>
                </div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-between p-4 rounded-xl border bg-neutral-50 dark:bg-neutral-800/50">
                    <div>
                      <div className="font-medium text-sm">Nezbytné cookies</div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                        Nutné pro základní fungování webu. Nelze vypnout.
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.necessary}
                      disabled
                      className="h-5 w-5 rounded"
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl border hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors cursor-pointer"
                    onClick={() => setPreferences({...preferences, analytics: !preferences.analytics})}
                  >
                    <div>
                      <div className="font-medium text-sm">Analytické cookies</div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                        Pomáhají nám pochopit, jak návštěvníci používají web.
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                      className="h-5 w-5 rounded"
                    />
                  </div>
                  <div className="flex items-center justify-between p-4 rounded-xl border hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors cursor-pointer"
                    onClick={() => setPreferences({...preferences, marketing: !preferences.marketing})}
                  >
                    <div>
                      <div className="font-medium text-sm">Marketingové cookies</div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                        Používají se k zobrazování relevantních reklam.
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                      className="h-5 w-5 rounded"
                    />
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button onClick={savePreferences} className="rounded-xl flex-1">
                    Uložit nastavení
                  </Button>
                  <Button onClick={() => setShowSettings(false)} variant="outline" className="rounded-xl">
                    Zpět
                  </Button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
