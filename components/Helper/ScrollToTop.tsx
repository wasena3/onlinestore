'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {

    const [isVisible, setIsVisible] = useState(false);
    // Show Hide functionality - button appears when user scrolls down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else
                setIsVisible(false);
        };

        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Scroll to top functionality
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }
    return (
        <div className='fixed bottom-4 animate-pulse right-4'>
            {isVisible && (
                <button
                    className="bg-blue-500 text-white p-4 rounded-full w-12 h-12 flex items-center 
                    justify-center focus:outline-none"
                    onClick={scrollToTop}
                >
                    <FaArrowUp />
                </button>
            )}
        </div>
    )
}

export default ScrollToTop