
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroImage from '../asset/430629486_934969994661088_1536439897098959619_n.jpg';
import StorySectionImage from '../asset/387627692_868867708110514_2760425483494268781_n_l78g4x.jpg';


const HomePage: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative flex w-full flex-col group/design-root overflow-x-hidden">
            <Header variant={isScrolled ? 'opaque' : 'transparent'} activePage="home" />
            <main className="flex flex-col">
                <section
                    className="relative w-full h-[55vh] sm:h-[75vh] md:h-screen pt-20 sm:pt-0"
                    id="hero"
                >
                    <div
                        className="absolute inset-0 bg-center bg-cover"
                        style={{ backgroundImage: `url(${HeroImage})` }}
                    >
                        <div className="absolute inset-0 bg-black/50 sm:bg-black/60"></div>
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4
                    -translate-y-6 sm:-translate-y-10 md:-translate-y-12">

                        <div className="flex flex-col gap-3 max-w-xl">
                            <h1 className="text-lg sm:text-3xl md:text-5xl font-black leading-tight tracking-tight">
                                Nơi thanh xuân được cất giữ.
                            </h1>
                            <p className="text-gray-200 text-xs sm:text-base md:text-lg leading-relaxed">
                                "Mười năm sau nhìn lại, hy vọng chúng ta vẫn là những người bạn thân thiết,
                                cùng nhau cười nói về những ngày tháng điên rồ này."
                            </p>
                        </div>
                    </div>
                </section>




                <section className="w-full bg-background-light dark:bg-background-dark py-12 sm:py-16 md:py-24" id="memories">
                    <div className="max-w-xl md:max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
                        <div className="flex flex-col items-center gap-6 sm:gap-8 text-center">
                            <div className="flex flex-col gap-3">
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Hành Trình Của Chúng Ta</h2>
                                <p className="text-subtext-light dark:text-subtext-dark text-base sm:text-lg leading-relaxed max-w-2xl">Mỗi khoảnh khắc là một mảnh ghép tạo nên câu chuyện đầy màu sắc của 5ATHVN. Cùng lật lại những trang ký ức đẹp nhất nhé!</p>
                            </div>
                            <Link to="/gallery" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white text-base font-bold leading-normal tracking-[0.015em] hover:from-blue-600 hover:to-blue-800 transition-colors">
                                <span className="material-symbols-outlined mr-2">photo_library</span>
                                <span className="truncate">Xem kỷ niệm</span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 sm:py-16 md:py-24" id="story">
                    <div className="max-w-xl md:max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
                        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                            <div className="lg:w-1/2">
                                <img src={StorySectionImage} alt="A handwritten note about 5ATHVN" className="rounded-lg shadow-lg w-full h-auto object-cover" />
                            </div>
                            <div className="lg:w-1/2 flex flex-col gap-4">
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Câu chuyện 5ATHVN</h2>
                                <p className="text-subtext-light dark:text-subtext-dark text-base sm:text-lg leading-relaxed">5ATHVN không chỉ là một cái tên, mà là một gia đình được tạo nên từ những mảnh ghép cá tính, chung một nhịp đập và đam mê. Chúng tớ đã cùng nhau đi qua những ngày tháng sinh viên đáng nhớ, từ những buổi làm ma căng thẳng đến những chuyến đi chơi ngẫu hứng, từ những lần bị trừ tiền cùng nhau đến việc nghỉ cùng 1 thời điểm.</p>
                                <p className="text-subtext-light dark:text-subtext-dark text-base sm:text-lg leading-relaxed">Mỗi thành viên là một màu sắc riêng, nhưng khi ở bên nhau, chúng tớ tạo nên một bức tranh hoàn chỉnh - rực rỡ và sống động. Đây là nơi chúng tớ lưu giữ tất cả, để mai sau nhìn lại, thanh xuân vẫn vẹn nguyên như ngày đầu.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full bg-card-light dark:bg-card-dark py-12 sm:py-16 md:py-24" id="contact">
                    <div className="max-w-xl md:max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
                        <div className="flex flex-col items-center gap-4">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Theo Dõi Chúng Tớ</h2>
                            <p className="text-subtext-light dark:text-subtext-dark text-base sm:text-lg leading-relaxed max-w-2xl">Đừng bỏ lỡ bất kỳ khoảnh khắc nào! Kết nối với 5ATHVN trên các mạng xã hội để cập nhật những câu chuyện mới nhất nhé.</p>
                            <div className="flex items-center gap-6 mt-4">
                                <a className="text-subtext-light dark:text-subtext-dark hover:text-accent transition-colors" href="https://www.instagram.com/ncnkbgbt/"><svg aria-hidden="true" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.83 2.013 10.185 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-2.34a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fillRule="evenodd"></path></svg></a>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer variant="primary" />
        </div>
    );
};

export default HomePage;
