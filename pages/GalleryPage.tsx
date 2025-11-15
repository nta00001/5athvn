
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { galleryImages } from '../constants';

const GalleryPage: React.FC = () => {
    return (
        <div className="relative flex min-h-screen w-full flex-col text-[#111618] dark:text-gray-200">
             <Header variant="opaque" activePage="gallery" />
            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="flex flex-col gap-8 md:gap-12">
                    <div className="flex flex-col items-center text-center gap-2">
                        <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#111618] dark:text-white">Thư viện Kỷ niệm</p>
                        <p className="text-base font-normal leading-normal text-gray-500 dark:text-gray-400 max-w-xl">Cùng nhìn lại những khoảnh khắc đáng nhớ của 5ATHVN qua từng bức ảnh. Đây là nơi lưu giữ những kỷ niệm vui vẻ, những chuyến đi và sự kiện đã gắn kết chúng ta.</p>
                    </div>
                    <div className="masonry-grid">
                        {galleryImages.map((image, index) => (
                            <div key={index}>
                                <img alt={image.alt} className="rounded-xl w-full h-auto object-cover" src={image.src} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
            <Footer variant="default" />
        </div>
    );
};

export default GalleryPage;
