
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface FooterProps {
    variant: 'primary' | 'default';
}

const Footer: React.FC<FooterProps> = ({ variant }) => {
    if (variant === 'primary') {
        return (
            <footer className="w-full bg-primary text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="flex flex-col sm:flex-row items-center gap-3">
                           <Logo />
                            <p className="text-sm font-medium">© 2024 5ATHVN. All rights reserved.</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <a className="hover:opacity-80 transition-opacity" href="https://www.instagram.com/ncnkbgbt/">Instagram</a>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

    return (
        <footer className="w-full bg-card-light dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-3">
                       <Logo className="size-5 text-[#111618] dark:text-white" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">© 2024 5ATHVN. All rights reserved.</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <a className="text-gray-500 dark:text-gray-400 hover:text-primary-story dark:hover:text-primary-story transition-colors" href="https://www.instagram.com/ncnkbgbt/">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
