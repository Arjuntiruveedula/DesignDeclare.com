import React, { useEffect, useState } from 'react';
import { Plus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import DonationSection from '../pages/dummy'; // Make sure path is correct

const FloatingMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (isOpen || showModal) {
      html.style.overflow = 'hidden';
      body.style.overflow = 'hidden';
    } else {
      html.style.overflow = '';
      body.style.overflow = '';
    }

    return () => {
      html.style.overflow = '';
      body.style.overflow = '';
    };
  }, [isOpen, showModal]);

  const toggleMenu = () => {
    if (isOpen) {
      setShowContent(false);
      setTimeout(() => setIsOpen(false), 300);
    } else {
      setIsOpen(true);
      setTimeout(() => setShowContent(true), 400);
    }
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black/30 backdrop-blur-sm transition-opacity duration-500"
          onClick={toggleMenu}
        />
      )}

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut', delay: 4 }}
        className="fixed bottom-4 right-5 z-20 border border-black bg-gray-200 text-black max-sm:left-4 md:bottom-6 md:right-6 overflow-hidden"
      >
        <div
          className="transition-all duration-500 ease-in-out"
          style={{ width: isOpen ? '25rem' : '13rem' }}
        >
          <div className="flex h-full flex-col">
            <button
              type="button"
              aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
              className="flex h-12 w-full items-center justify-between border-b border-black px-3 hover:bg-orange-600 hover:text-white transition-all duration-500"
              onClick={toggleMenu}
            >
              <span className="text-2xl">Menu</span>
              <span className="flex aspect-square h-full items-center justify-center border-l border-black">
                <Plus
                  className={`size-8 transition-transform duration-500 ${
                    isOpen ? 'rotate-45' : 'rotate-0'
                  }`}
                  strokeWidth={1.5}
                />
              </span>
            </button>

            <section
              role="dialog"
              aria-labelledby="menu-title"
              tabIndex={-1}
              className={`transition-all duration-500 ease-in-out ${
                showContent ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}
            >
              <h2 id="menu-title" className="sr-only">Menu</h2>
              <nav className="flex flex-col text-2xl" aria-label="Menu">
                <a
                  className="group relative flex h-12 w-full items-center gap-x-3 border-t border-black px-3 transition-colors hover:bg-orange-600 hover:text-white hover:underline"
                  href="/"
                >
                  <svg className="w-5" viewBox="0 0 22 23" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 10.75L11 2L21 10.75V22H1V10.75Z" />
                  </svg>
                  Home
                </a>
                <a
                  className="group relative flex h-12 w-full items-center gap-x-3 border-t border-black px-3 transition-colors hover:bg-orange-600 hover:text-white hover:underline"
                  href="/about"
                >
                  <svg className="w-5" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="9" y="9" width="4" height="12" />
                    <rect x="9" y="1" width="4" height="4" />
                  </svg>
                  About
                </a>
                <a
                  className="group relative flex h-12 w-full items-center gap-x-3 border-t border-black px-3 transition-colors hover:bg-orange-600 hover:text-white hover:underline"
                  href="/latest"
                >
                  <svg className="w-5" viewBox="0 0 20 22" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="4.375" y1="5.556" x2="11.125" y2="5.556" />
                    <line x1="4.375" y1="10.002" x2="11.125" y2="10.002" />
                    <line x1="4.375" y1="14.447" x2="11.125" y2="14.447" />
                    <path d="M14.5 5.44188C16 5.44188 19 5.44188 19 5.44188C19 5.44188 19 14.3322 19 18.7774C19 19.3669 18.7629 19.9322 18.341 20.349C17.919 20.7658 17.3467 21 16.75 21M16.75 21C16.1533 21 15.581 20.7658 15.159 20.349C14.7371 19.9322 14.5 19.3669 14.5 18.7774C14.5 13.5924 14.5 1.00281 14.5 1.00281L1 1C1 1 1 12.8506 1 17.6661C1 18.5503 1.35558 19.3983 1.98851 20.0235C2.62145 20.6487 3.47989 21 4.375 21H16.75Z" />
                  </svg>
                  Latest
                </a>
                <a
                  className="group relative flex h-12 w-full items-center gap-x-3 border-t border-black px-3 transition-colors hover:bg-orange-600 hover:text-white hover:underline"
                  href="/contact"
                >
                  <svg className="w-5" viewBox="0 0 22 18" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="1" y="1" width="20" height="16" />
                    <path d="M21 2L11 10L1 2" />
                  </svg>
                  Contact
                </a>

                {/* Trigger Modal */}
                <button
                  type="button"
                  onClick={() => setShowModal(true)}
                  className="flex h-12 w-full items-center gap-x-3 border-t border-black px-3 transition-colors hover:bg-orange-600 hover:text-white text-left hover:underline"
                >
                  <svg className="w-5" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1.6684 7.66667H20.3351M1.6684 14.3333H20.3351M10.4441 1C8.57223 3.99957 7.57986 7.46429 7.57986 11C7.57986 14.5357 8.57223 18.0004 10.4441 21M11.5556 1C13.4274 3.99957 14.4198 7.46429 14.4198 11C14.4198 14.5357 13.4274 18.0004 11.5556 21M1 11C1 12.3132 1.25866 13.6136 1.7612 14.8268C2.26375 16.0401 3.00035 17.1425 3.92893 18.0711C4.85752 18.9997 5.95991 19.7363 7.17317 20.2388C8.38642 20.7413 9.68678 21 11 21C12.3132 21 13.6136 20.7413 14.8268 20.2388C16.0401 19.7363 17.1425 18.9997 18.0711 18.0711C18.9997 17.1425 19.7363 16.0401 20.2388 14.8268C20.7413 13.6136 21 12.3132 21 11C21 8.34784 19.9464 5.8043 18.0711 3.92893C16.1957 2.05357 13.6522 1 11 1C8.34784 1 5.8043 2.05357 3.92893 3.92893C2.05357 5.8043 1 8.34784 1 11Z" />
                  </svg>
                  <span>Choose Global Chapter</span>
                </button>
              </nav>
            </section>

            <a
              href="/#declaration"
              className="group relative flex h-12 w-full items-center gap-x-3 border-t border-black px-3 transition-colors hover:bg-orange-600 hover:text-white"
            >
              <span className="text-2xl">Declare Now</span>
            </a>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {showModal && <DonationSection onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
};

export default FloatingMenu;
