
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


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
                <section className="relative w-full h-screen" id="hero">
                    <div className="absolute inset-0 bg-center bg-cover" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD48sRCLHrmB-6x9G-HBjr5l_EKM6YJpu2kmsg_2tu2fygId3ut3YPg-iQqc9I-wFeki1qxNHQEi5VTyAFCPIQtkRhXxcFd7nN425xCOKuUbo6Pp6ftI9X5jMpyVDQkbGJ8SjxJxUW2fI_Io_XebGsVmafhJvaH0oPTqggeKqSP4hDmh_DU0DPktfk-jmA3nu6U71WIVj10vQtr6iNml9tXYeUNp9bFNN8-bbSpyFFvcBZV_hdPbGpkp9KaiPJYPONyq5umfzQOdgQ")` }}>
                        <div className="absolute inset-0 bg-black/60"></div>
                    </div>
                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
                        <div className="flex flex-col gap-4 max-w-3xl">
                            <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">Nơi thanh xuân được cất giữ.</h1>
                            <p className="text-gray-200 text-lg font-normal leading-relaxed sm:text-xl">"Mười năm sau nhìn lại, hy vọng chúng ta vẫn là những người bạn thân thiết, cùng nhau cười nói về những ngày tháng điên rồ này."</p>
                        </div>
                    </div>
                </section>

                <section className="w-full bg-background-light dark:bg-background-dark py-12 sm:py-16 md:py-24" id="memories">
                    <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10">
                        <div className="flex flex-col items-center gap-6 sm:gap-8 text-center">
                            <div className="flex flex-col gap-3">
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Hành Trình Của Chúng Ta</h2>
                                <p className="text-subtext-light dark:text-subtext-dark text-base sm:text-lg leading-relaxed max-w-2xl">Mỗi khoảnh khắc là một mảnh ghép tạo nên câu chuyện đầy màu sắc của 5ATHVN. Cùng lật lại những trang ký ức đẹp nhất nhé!</p>
                            </div>
                            <Link to="/gallery" className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-accent text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 transition-colors">
                                <span className="material-symbols-outlined mr-2">photo_library</span>
                                <span className="truncate">Xem kỷ niệm</span>
                            </Link>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 sm:py-16 md:py-24" id="story">
                    <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
                        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                            <div className="lg:w-1/2">
                                <p>placeholder</p>
                            </div>
                            <div className="lg:w-1/2 flex flex-col gap-4">
                                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Câu chuyện 5ATHVN</h2>
                                <p className="text-subtext-light dark:text-subtext-dark text-base sm:text-lg leading-relaxed">5ATHVN không chỉ là một cái tên, mà là một gia đình được tạo nên từ những mảnh ghép cá tính, chung một nhịp đập và đam mê. Chúng tớ đã cùng nhau đi qua những ngày tháng sinh viên đáng nhớ, từ những buổi học căng thẳng đến những chuyến đi phượt ngẫu hứng, từ những lần ăn mừng chiến thắng nhỏ nhoi đến việc an ủi nhau lúc thất bại.</p>
                                <p className="text-subtext-light dark:text-subtext-dark text-base sm:text-lg leading-relaxed">Mỗi thành viên là một màu sắc riêng, nhưng khi ở bên nhau, chúng tớ tạo nên một bức tranh hoàn chỉnh - rực rỡ và sống động. Đây là nơi chúng tớ lưu giữ tất cả, để mai sau nhìn lại, thanh xuân vẫn vẹn nguyên như ngày đầu.</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full bg-card-light dark:bg-card-dark py-12 sm:py-16 md:py-24" id="contact">
                    <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center">
                        <div className="flex flex-col items-center gap-4">
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Theo Dõi Chúng Tớ</h2>
                            <p className="text-subtext-light dark:text-subtext-dark text-base sm:text-lg leading-relaxed max-w-2xl">Đừng bỏ lỡ bất kỳ khoảnh khắc nào! Kết nối với 5ATHVN trên các mạng xã hội để cập nhật những câu chuyện mới nhất nhé.</p>
                            <div className="flex items-center gap-6 mt-4">
                                <a className="text-subtext-light dark:text-subtext-dark hover:text-accent transition-colors" href="#"><svg aria-hidden="true" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg></a>
                                <a className="text-subtext-light dark:text-subtext-dark hover:text-accent transition-colors" href="#"><svg aria-hidden="true" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a>
                                <a className="text-subtext-light dark:text-subtext-dark hover:text-accent transition-colors" href="#"><svg aria-hidden="true" className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.013-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.345 2.525c.636-.247 1.363-.416 2.427-.465C9.83 2.013 10.185 2 12.315 2zM12 7a5 5 0 100 10 5 5 0 000-10zm0-2a7 7 0 110 14 7 7 0 010-14zm6.406-2.34a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z" fillRule="evenodd"></path></svg></a>
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
