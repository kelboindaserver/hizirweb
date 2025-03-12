import Link from "next/link";
import {useRouter} from "next/router";
import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

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
        <nav className="md:py-2 pb-2 pt-6 bg-black/20 backdrop-blur-xl fixed w-full z-10">
            <div className="lg:flex flex-col lg:flex-row justify-around items-center lg:space-y-2 space-y-4">
                <div className="flex justify-between items-center px-4">
                    <Link href="/">
                        <div className="flex items-center space-x-3">
                            <img src="/logo.PNG" alt="logo" className="h-8 lg:h-8 rounded-lg hover:opacity-85 transition" />
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
                    <ScrollLink 
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={handleLinkClick}
                        className="cursor-pointer"
                    >
                        <h1 className="font-bold text-white hover:text-blue-700 transition duration-200 text-center my-4">Hakkımızda</h1>
                    </ScrollLink>
                    
                    <ScrollLink 
                        to="cranes"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={handleLinkClick}
                        className="cursor-pointer"
                    >
                        <h1 className="font-bold text-white hover:text-blue-700 transition duration-200 text-center my-4">Vinçlerimiz</h1>
                    </ScrollLink>
                    
                    <ScrollLink 
                        to="references"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        onClick={handleLinkClick}
                        className="cursor-pointer"
                    >
                        <h1 className="font-bold text-white hover:text-blue-700 transition duration-200 text-center my-4">Referanslarımız</h1>
                    </ScrollLink>
                </div>
            </div>
        </nav>
    );
}