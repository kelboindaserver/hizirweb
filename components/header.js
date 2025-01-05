import Link from "next/link";
import {useRouter} from "next/router";
import { useState, useEffect } from 'react';

export default function Header(){
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const closeMenu = () => {
            if (isOpen) setIsOpen(false);
        };

        document.addEventListener('click', closeMenu);
        return () => document.removeEventListener('click', closeMenu);
    }, [isOpen]);

    const handleButtonClick = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    const handleMenuClick = (e) => {
        e.stopPropagation();
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className="md:py-5 pt-6  bg-blue-900 sticky top-0 z-50">
            <div className="lg:flex flex-col lg:flex-row justify-around items-center space-y-4">
                <div className="flex justify-between items-center px-4">
                    <Link href="/">
                        <div className="flex items-center space-x-3">
                            <img src="/logo.PNG" alt="logo" className="h-10 rounded-lg hover:opacity-85 transition" />
                            <h1 className="font-extrabold text-white hover:text-yellow-500 transition duration-100 text-2xl">Hızır Vinç</h1>
                        </div>
                    </Link>

                    <button 
                        onClick={handleButtonClick}
                        className="lg:hidden flex flex-col justify-center items-center w-8 h-8"
                    >
                        <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`} />
                        <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`bg-white block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`} />
                    </button>
                </div>

                <div 
                    onClick={handleMenuClick}
                    className={`lg:flex lg:flex-row flex-col items-center justify-between lg:space-x-5 lg:space-y-0 space-y-4 text-lg
                    transition-all duration-300 ease-in-out overflow-hidden
                    ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 lg:max-h-full opacity-0 lg:opacity-100'}`}
                >
                    <Link href="#about" onClick={handleLinkClick}>
                        <h1 className="font-bold text-white hover:text-yellow-500 transition duration-200 text-center my-4">Hakkımızda</h1>
                    </Link>
                    <Link href="#about" onClick={handleLinkClick}>
                        <h1 className="font-bold text-white hover:text-yellow-500 transition duration-200 text-center my-4">Vinçlerimiz</h1>
                    </Link>
                    <Link href="#about" onClick={handleLinkClick}>
                        <h1 className="font-bold text-white hover:text-yellow-500 transition duration-200 text-center my-4">Referanslarımız</h1>
                    </Link>
                </div>
            </div>
        </nav>
    );
}