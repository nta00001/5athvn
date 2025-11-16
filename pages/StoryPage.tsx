
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { timelineEvents } from '../constants';
import type { TimelineEvent } from '../types';

const TimelineItem: React.FC<{ event: TimelineEvent; isReversed: boolean }> = ({ event, isReversed }) => {
    const content = (
        <>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-medium mb-1">{event.date}</p>
            <h3 className="text-[#111618] dark:text-white text-xl font-bold">{event.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{event.description}</p>
        </>
    );

    const image = <img src={event.imageUrl} alt={event.imgAlt} className="w-full h-auto object-cover rounded-xl shadow-lg aspect-[4/3]" />;
    
    return (
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-x-12 items-start">
             <div className={`md:text-right ${isReversed ? 'md:order-3' : 'md:order-1'}`}>{isReversed ? image : content}</div>
             <div className="hidden md:flex items-center justify-center relative row-span-2 md:order-2">
                 <div className="absolute h-full w-0.5 bg-primary-story/30 dark:border-primary-story/50"></div>
                 <div className="relative z-10 flex h-6 w-6 items-center justify-center rounded-full bg-primary-story ring-8 ring-background-light dark:ring-background-dark"></div>
             </div>
             <div className={`mt-4 md:mt-0 ${isReversed ? 'md:order-1 md:text-right' : 'md:order-3'}`}>{isReversed ? content : image}</div>
        </div>
    );
};

const StoryPage: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col text-[#111618] dark:text-gray-100">
            <Header variant="opaque" activePage="story" />
            <main className="flex flex-1 justify-center py-5">
                <div className="layout-content-container flex flex-col max-w-4xl flex-1 px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-primary-story font-bold text-base uppercase tracking-wider mb-2">Our Story</h1>
                        <h2 className="text-[#111618] dark:text-white text-4xl sm:text-5xl font-extrabold leading-tight tracking-tighter">Hành Trình Của 5ATHVN</h2>
                        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">Từ những người bạn, chúng tôi đã cùng nhau tạo nên một hành trình đầy ắp kỷ niệm. Đây là câu chuyện của 5ATHVN.</p>
                    </div>

                    <div className="relative border-l-2 border-primary-story/30 dark:border-primary-story/50 ml-6 sm:ml-0 space-y-16 py-8">
                        {/* Mobile timeline dot */}
                        <div className="absolute -left-[1.6rem] top-8 h-6 w-6 rounded-full bg-primary-story ring-8 ring-background-light dark:ring-background-dark md:hidden"></div>
                        
                        {timelineEvents.map((event, index) => (
                            <TimelineItem key={index} event={event} isReversed={index % 2 !== 0} />
                        ))}
                    </div>
                    
                    <div className="text-center mt-12 mb-20">
                        <span className="material-symbols-outlined text-primary-story text-5xl">celebration</span>
                        <h2 className="text-[#111618] dark:text-white tracking-tight text-3xl font-bold leading-tight px-4 pb-3 pt-4">Và hành trình vẫn tiếp diễn...</h2>
                        <p className="text-gray-700 dark:text-gray-300 text-base font-normal leading-relaxed pb-8 pt-1 px-4 max-w-2xl mx-auto">5ATHVN sẽ không ngừng viết tiếp câu chuyện này bằng những kỷ niệm và chuyến đi mới. Điều tuyệt vời nhất vẫn còn ở phía trước!</p>
                        <Link to="/gallery" className="flex mx-auto min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary-story text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors shadow-lg shadow-primary-story/30">
                            <span className="truncate">Xem Thư Viện Ảnh</span>
                        </Link>
                    </div>
                </div>
            </main>
            <Footer variant="default" />
        </div>
    );
};

export default StoryPage;
