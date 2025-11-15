
import React from 'react';

interface LogoProps {
    className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = 'size-6' }) => (
    <div className={className}>
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_logo)">
                <path clipRule="evenodd" d="M24 0.757355L47.2426 24L24 47.2426L0.757355 24L24 0.757355ZM21 35.7574V12.2426L9.24264 24L21 35.7574Z" fill="currentColor" fillRule="evenodd"></path>
            </g>
            <defs>
                <clipPath id="clip0_logo"><rect fill="white" height="48" width="48"></rect></clipPath>
            </defs>
        </svg>
    </div>
);

export default Logo;
