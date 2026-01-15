import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Envelope from './Envelope';
import Letter from './Letter';
import FloatingParticles from './FloatingParticles';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [guestName, setGuestName] = useState('');

  useEffect(() => {
    // Get guest name from URL parameters
    const params = new URLSearchParams(window.location.search);
    const guest = params.get('guest');
    if (guest) {
      setGuestName(guest);
    }
  }, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="min-h-screen h-screen w-full relative overflow-hidden flex items-center justify-center">
      {/* Ambient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #f5f5f0 0%, #e0e0e0 100%)",
        }}
        animate={{
          background: [
            "linear-gradient(135deg, #f5f5f0 0%, #e0e0e0 100%)",
            "linear-gradient(135deg, #f0f0eb 0%, #e8e8e8 100%)",
            "linear-gradient(135deg, #f5f5f0 0%, #e0e0e0 100%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      {/* Subtle Noise Overlay for Texture */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-multiply"></div>

      <FloatingParticles />

      <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                y: 100,
                transition: { duration: 0.5 }
              }}
              className="flex flex-col items-center"
            >
              <Envelope onClick={handleOpen} />
              <motion.p
                className="mt-8 text-gray-500 font-serif italic text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Bạn có một lời mời...
              </motion.p>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              className="w-full flex flex-col items-center z-10 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Letter guestName={guestName} />

              {/* Optional Replay/Close button could go here, but for now just the letter */}
              <motion.div
                className="mt-4 lg:mt-6 text-center z-20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
              >
                <button
                  onClick={() => window.location.reload()}
                  className="text-gray-400 hover:text-gray-600 text-sm font-sans underline decoration-gray-300 underline-offset-4"
                >
                  Đóng lại & Xem lại
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
