import React from 'react';
import { motion } from 'framer-motion';

const Letter = ({ guestName }) => {
    return (
        <motion.div
            className="bg-paper text-gray-800 w-full max-w-[90vw] md:max-w-[600px] lg:max-w-3xl max-h-[85vh] lg:max-h-[90vh] mx-auto shadow-2xl rounded-sm border border-gray-100 relative overflow-y-auto lg:overflow-hidden flex flex-col"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)' }} // Extra soft custom shadow
        >
            {/* Subtle paper texture noise if desired, or just clean off-white */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')]"></div>

            <div className="relative z-10 flex flex-col items-center text-center p-6 md:p-10 lg:p-12 lg:h-full lg:justify-center">
                {/* Header */}
                <div className="space-y-3 lg:space-y-4 shrink-0">
                    <p className="font-serif italic text-gray-500 text-base md:text-lg">Thân gửi,</p>
                    <h1 className="font-serif text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 tracking-wide">
                        {guestName || "Bạn và Người thương"}
                    </h1>
                </div>

                <div className="w-20 lg:w-24 h-[1px] bg-gray-300 my-4 lg:my-6 shrink-0"></div>

                {/* Body Text */}
                <div className="space-y-4 lg:space-y-6 font-sans text-base md:text-lg lg:text-xl leading-relaxed lg:leading-loose text-gray-700 max-w-2xl shrink-0">
                    <p>
                        Mình xin gửi đến bạn lời mời tham dự <strong className="font-serif text-gray-900">Lễ tốt nghiệp</strong> –
                        một dấu mốc quan trọng trong chặng đường học tập của mình.
                    </p>
                    <p>
                        Buổi lễ này không chỉ đánh dấu sự hoàn thành của một hành trình,
                        mà còn là dịp để chia sẻ niềm vui và những khoảnh khắc đáng nhớ
                        cùng những người quan trọng.
                    </p>
                </div>

                {/* Details Wrapper - elegant box */}
                <div className="w-full bg-gray-50/60 border border-gray-100 p-6 lg:p-8 rounded-lg my-6 lg:my-8 space-y-3 lg:space-y-4 shrink-0">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-12">
                        <div className="text-center">
                            <span className="block text-xs md:text-sm uppercase tracking-widest text-gray-500 mb-1 lg:mb-2">Thời gian</span>
                            <strong className="font-serif text-xl md:text-3xl text-gray-800">08:00</strong>
                            <div className="text-sm lg:text-base text-gray-600 mt-1">Ngày 17/01/2026</div>
                        </div>
                        <div className="hidden md:block w-[1px] h-12 lg:h-16 bg-gray-200"></div>
                        <div className="text-center">
                            <span className="block text-xs md:text-sm uppercase tracking-widest text-gray-500 mb-1 lg:mb-2">Địa điểm</span>
                            <strong className="font-serif text-xl md:text-3xl text-gray-800">Phòng 613</strong>
                            <div className="text-sm lg:text-base text-gray-600 mt-1">Cơ sở K7/25 Quang Trung</div>
                        </div>
                    </div>
                    <div className="pt-3 lg:pt-4 border-t border-gray-200/60 mt-3 lg:mt-4">
                        <span className="text-sm lg:text-lg font-medium text-gray-800">Sự kiện: Lễ Trao Bằng Tốt Nghiệp</span>
                    </div>
                </div>

                {/* Closing */}
                <div className="space-y-2 lg:space-y-3 pt-2 lg:pt-6 shrink-0">
                    <p className="text-gray-600 text-sm lg:text-lg italic">Rất mong có sự hiện diện của bạn!</p>
                    <p className="font-serif text-xl lg:text-3xl italic font-bold mt-4 lg:mt-6 text-gray-900">Văn Nam</p>
                </div>
            </div>
        </motion.div>
    );
};

export default Letter;
