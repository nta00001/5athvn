
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

type Page = 'home' | 'gallery' | 'story';

interface HeaderProps {
    variant: 'transparent' | 'opaque';
    activePage: Page;
}

const NavItem: React.FC<{ to: string; pageName: Page; activePage: Page; baseTextColor: string; activeTextColor: string; children: React.ReactNode; isMobile?: boolean }> = ({ to, pageName, activePage, baseTextColor, activeTextColor, children, isMobile }) => {
    const isActive = pageName === activePage;
    const mobileClasses = isMobile ? 'text-2xl font-bold' : 'text-sm font-medium';
    return (
        <NavLink to={to} className={`${mobileClasses} leading-normal transition-colors ${isActive ? activeTextColor : `${baseTextColor} hover:opacity-80 dark:hover:text-primary-story`}`}>
            {children}
        </NavLink>
    );
};


const Header: React.FC<HeaderProps> = ({ variant, activePage }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isTransparent = variant === 'transparent' && !isMenuOpen;

    const headerClasses = `fixed md:sticky top-0 z-50 w-full transition-colors duration-300 ${isTransparent ? 'bg-transparent text-white' : 'bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800'}`;
    const navTextColor = isTransparent ? 'text-white' : 'text-gray-600 dark:text-gray-300';
    const activeTextColor = isTransparent ? 'text-white font-bold' : 'text-primary-story font-bold';
    const logoTextColor = isTransparent ? 'text-white' : 'text-primary-story';
    const titleTextColor = isTransparent ? 'text-white' : 'text-[#111618] dark:text-white';

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <>
            <header className={headerClasses}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-8 py-4 h-16">
                        <NavLink className="flex items-center gap-3" to="/">
                            <div className={isMenuOpen ? 'text-primary-story' : logoTextColor}>
                                <Logo />
                            </div>
                            <h2 className={`text-xl font-bold tracking-[-0.015em] ${isMenuOpen ? 'text-[#111618] dark:text-white' : titleTextColor}`}>5ATHVN</h2>
                        </NavLink>
                        <div className="hidden md:flex flex-1 justify-end items-center gap-8">
                            <nav className="flex items-center gap-9">
                                <NavItem to="/" pageName="home" activePage={activePage} baseTextColor={navTextColor} activeTextColor={activeTextColor}>Trang chủ</NavItem>
                                <NavItem to="/gallery" pageName="gallery" activePage={activePage} baseTextColor={navTextColor} activeTextColor={activeTextColor}>Xem ảnh</NavItem>
                                <NavItem to="/story" pageName="story" activePage={activePage} baseTextColor={navTextColor} activeTextColor={activeTextColor}>Câu chuyện</NavItem>
                            </nav>
                        </div>
                        <div className="flex items-center gap-4 md:hidden">
                            <button onClick={toggleMenu} className={`flex items-center justify-center size-10 rounded-full hover:bg-black/10 dark:hover:bg-white/10 transition-colors ${isMenuOpen ? 'text-primary' : ''}`}>
                                <span className="material-symbols-outlined">{isMenuOpen ? 'close' : 'menu'}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            {isMenuOpen && (
                <div className="fixed inset-0 z-40 bg-background-light dark:bg-background-dark md:hidden">
                    <div className="flex flex-col items-center justify-center h-full gap-8">
                        <nav className="flex flex-col items-center gap-8">
                            <NavItem to="/" pageName="home" activePage={activePage} baseTextColor="text-gray-600 dark:text-gray-300" activeTextColor="text-primary-story" isMobile onClick={toggleMenu}>Trang chủ</NavItem>
                            <NavItem to="/gallery" pageName="gallery" activePage={activePage} baseTextColor="text-gray-600 dark:text-gray-300" activeTextColor="text-primary-story" isMobile onClick={toggleMenu}>Xem ảnh</NavItem>
                            <NavItem to="/story" pageName="story" activePage={activePage} baseTextColor="text-gray-600 dark:text-gray-300" activeTextColor="text-primary-story" isMobile onClick={toggleMenu}>Câu chuyện</NavItem>
                        </nav>
                    </div>
                </div>
            )}
        </>
    );
};

export default Header;
