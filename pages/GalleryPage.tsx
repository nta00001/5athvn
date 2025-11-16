
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import type { GalleryImage } from '../types';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const GalleryPage: React.FC = () => {
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                setLoading(true);
                const res = await fetch('/api/get-images');
                if (!res.ok) {
                    throw new Error(`Failed to fetch: ${res.statusText}`);
                }
                const data = await res.json();
                setImages(data.images);
                setError(null);
            } catch (err: any) {
                setError(err.message);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    const slides = images.map((image) => ({
        src: image.url,
    }));

    const openLightbox = (imageIndex: number) => {
        setIndex(imageIndex);
        setOpen(true);
    };

    return (
        <div className="relative flex min-h-screen w-full flex-col text-[#111618] dark:text-gray-200">
            <Header variant="opaque" activePage="gallery" />
            <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="flex flex-col gap-8 md:gap-12">
                    <div className="flex flex-col items-center text-center gap-2">
                        <p className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#111618] dark:text-white">Thư viện Kỷ niệm</p>
                        <p className="text-base font-normal leading-normal text-gray-500 dark:text-gray-400 max-w-xl">Cùng nhìn lại những khoảnh khắc đáng nhớ của 5ATHVN qua từng bức ảnh. Đây là nơi lưu giữ những kỷ niệm vui vẻ, những chuyến đi và sự kiện đã gắn kết chúng ta.</p>
                    </div>

                    {loading && <div className="text-center">Đang tải thư viện ảnh...</div>}
                    {error && <div className="text-center text-red-500">Lỗi: {error}</div>}
                    
                    {!loading && !error && (
                        <div className="masonry-grid">
                            {images.map((image, idx) => (
                                <div key={image.fileId} onClick={() => openLightbox(idx)} className="cursor-pointer">
                                    <img src={image.url} alt={image.name || 'Gallery image'} className="rounded-xl w-full h-auto object-cover" />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </main>
            <Footer variant="default" />

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={slides}
            />
        </div>
    );
};

export default GalleryPage;
