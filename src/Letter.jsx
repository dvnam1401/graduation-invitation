import React from 'react';
import { motion } from 'framer-motion';

const Letter = ({ guestName }) => {
    // Stagger animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <motion.div
            className="bg-paper text-gray-800 w-full max-w-[90vw] md:max-w-[600px] lg:max-w-3xl max-h-[85vh] lg:max-h-[90vh] mx-auto shadow-2xl rounded-sm border border-gray-100 relative overflow-y-auto lg:overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{
                opacity: 1,
                y: 0,
                // Subtle living breathing effect on shadow/scale
                boxShadow: [
                    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
                    '0 30px 60px -12px rgba(0, 0, 0, 0.12)',
                    '0 25px 50px -12px rgba(0, 0, 0, 0.15)'
                ]
            }}
            transition={{
                duration: 0.8,
                delay: 0.2,
                boxShadow: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                }
            }}
        >
            {/* Subtle paper texture noise if desired, or just clean off-white */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

            <motion.div
                className="relative z-10 flex flex-col items-center text-center p-6 md:p-8 lg:p-10 lg:h-full lg:justify-center"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                {/* Header */}
                <motion.div className="space-y-2 lg:space-y-3 shrink-0" variants={itemVariants}>
                    <p className="font-serif italic text-gray-500 text-base md:text-lg">Thân gửi,</p>
                    <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-wide">
                        {guestName || "Bạn và Người thương"}
                    </h1>
                </motion.div>

                <motion.div className="w-20 lg:w-24 h-[1px] bg-gray-300 my-3 lg:my-5 shrink-0" variants={itemVariants}></motion.div>

                {/* Body Text */}
                <motion.div className="space-y-3 lg:space-y-4 font-sans text-sm md:text-base lg:text-lg leading-relaxed text-gray-700 max-w-2xl shrink-0" variants={itemVariants}>
                    <p>
                        Mình xin trân trọng gửi đến bạn lời mời tham dự <strong className="font-serif text-gray-900 text-base lg:text-lg">Lễ tốt nghiệp</strong> –
                        một dấu mốc <strong className="font-semibold text-gray-800">đặc biệt</strong> trong chặng đường học tập của mình.
                    </p>

                    <p>
                        Buổi lễ này không chỉ đánh dấu sự hoàn thành của một hành trình nỗ lực,
                        mà còn là dịp để chia sẻ niềm vui và những khoảnh khắc hạnh phúc
                        cùng những người <strong className="font-semibold text-gray-800">thân yêu nhất</strong>.
                    </p>

                    <p>
                        Hy vọng bạn có thể sắp xếp thời gian quý báu để đến <span className="font-medium text-amber-700">chung vui</span> và ghi lại những kỷ niệm đẹp cùng mình.
                    </p>
                </motion.div>

                {/* Details Wrapper - elegant box */}
                <motion.div className="w-full bg-gray-50/60 border border-gray-100 p-4 lg:p-6 rounded-lg my-3 lg:my-5 space-y-3 shrink-0" variants={itemVariants}>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
                        <div className="text-center">
                            <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Thời gian</span>
                            <strong className="font-serif text-xl md:text-2xl lg:text-3xl text-gray-800">10:00</strong>
                            <div className="text-sm text-gray-600 mt-1">Ngày 17/01/2026</div>
                        </div>
                        <div className="hidden md:block w-[1px] h-10 lg:h-12 bg-gray-200"></div>
                        <div className="text-center">
                            <span className="block text-xs uppercase tracking-widest text-gray-500 mb-1">Địa điểm</span>
                            <strong className="font-serif text-xl md:text-2xl lg:text-3xl text-gray-800">Đại học Duy Tân</strong>
                            <div className="text-sm text-gray-600 mt-1">Cơ sở 03 Quang Trung</div>
                            <a
                                href="https://maps.app.goo.gl/CCPZAHbQQc6X3RAaA"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 mt-2 px-3 py-1 bg-white border border-gray-200 rounded-full text-xs text-gray-600 hover:text-gray-900 hover:border-gray-400 transition-colors shadow-sm"
                                aria-label="Mở vị trí trên Google Maps"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                Xem bản đồ
                            </a>
                        </div>
                    </div>
                    <div className="pt-3 border-t border-gray-200/60 mt-3">
                        <span className="text-sm lg:text-base font-medium text-gray-800">Sự kiện: Lễ Trao Bằng Tốt Nghiệp</span>
                    </div>
                </motion.div>

                {/* Closing */}
                <motion.div className="space-y-1 pt-2 shrink-0 pb-2" variants={itemVariants}>
                    <p className="text-gray-600 text-sm lg:text-lg italic">Rất mong có sự hiện diện của bạn!</p>
                    <p className="font-serif text-xl lg:text-3xl italic font-bold mt-2 lg:mt-4 text-gray-900">Văn Nam</p>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Letter;
