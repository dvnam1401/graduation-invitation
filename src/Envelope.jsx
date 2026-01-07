import React from 'react';
import { motion } from 'framer-motion';

const Envelope = ({ onClick }) => {
    return (
        <motion.div
            className="relative w-[80vw] max-w-[400px] md:max-w-none md:w-[50vw] lg:w-[40vw] aspect-[1.6] cursor-pointer perspective-1000 group mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            whileHover={{ scale: 1.02 }}
            onClick={onClick}
        >
            {/* Shadow */}
            <div className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-[90%] h-[15%] bg-black/20 blur-2xl rounded-[100%] transition-all group-hover:bg-black/25"></div>

            {/* Envelope Body (Back) */}
            <div className="absolute inset-0 bg-[#e0c097] rounded-md shadow-2xl overflow-hidden">
                {/* Subtle pattern */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            </div>

            {/* Letter Preview (Inside) */}
            <motion.div
                className="absolute bottom-2 left-4 right-4 h-[80%] bg-white rounded-sm shadow-sm z-10"
                initial={{ y: 0 }}
            >
                <div className="p-6 md:p-10 space-y-3 opacity-50">
                    <div className="h-3 md:h-4 bg-gray-200 w-1/3 rounded"></div>
                    <div className="h-3 md:h-4 bg-gray-200 w-full rounded"></div>
                    <div className="h-3 md:h-4 bg-gray-200 w-2/3 rounded"></div>
                </div>
            </motion.div>

            {/* Envelope Front (Left/Right/Bottom Flaps using clip-path) */}
            <div className="absolute inset-0 z-20 pointer-events-none">
                {/* Bottom */}
                <div className="absolute bottom-0 w-full h-full bg-[#e6c8a0] shadow-md transition-colors group-hover:bg-[#ebd0ab]"
                    style={{ clipPath: 'polygon(0% 100%, 50% 50%, 100% 100%)' }}></div>
                {/* Left */}
                <div className="absolute left-0 w-full h-full bg-[#dcb98d]"
                    style={{ clipPath: 'polygon(0% 0%, 50% 50%, 0% 100%)' }}></div>
                {/* Right */}
                <div className="absolute right-0 w-full h-full bg-[#d5b386]"
                    style={{ clipPath: 'polygon(100% 0%, 50% 50%, 100% 100%)' }}></div>
            </div>

            {/* Top Flap (The one that opens) */}
            <motion.div
                className="absolute top-0 w-full h-full z-30 origin-top"
                initial={{ rotateX: 0 }}
                whileHover={{ rotateX: 15 }} // Subtle lift on hover
                transition={{ duration: 0.3 }}
            >
                <div className="w-full h-full bg-[#cfaa7b] shadow-sm transition-all"
                    style={{ clipPath: 'polygon(0% 0%, 50% 50%, 100% 0%)' }}>
                </div>
            </motion.div>

            {/* "Click to Open" Hint */}
            <div className="absolute -top-16 left-0 right-0 text-center animate-bounce">
                <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-6 py-2 rounded-full text-base md:text-lg font-medium shadow-lg tracking-wide">
                    Nhấn để mở thư
                </span>
            </div>
        </motion.div>
    );
};

export default Envelope;
