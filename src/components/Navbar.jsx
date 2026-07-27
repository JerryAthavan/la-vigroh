import { useState } from "react";
import { Link } from "react-router-dom";
import useTheme from "../hooks/useTheme";
import logodark from "../assets/logo-dark-themed.png"
import logoLight from "../assets/logo-light-themed.png"
function Navbar(){
    const[isOpen, setIsOpen] = useState(false);
    const [isLight, setIsLight] = useTheme();
    return(
        <>
        <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between py-4 px-4 md:py-5 md:px-16 bg-dark/85 light:bg-light/85 backdrop-blur-md border-b border-white/5 light:border-black/10">
            
            <Link to="/" className="flex items-center gap-2 font-serif text-2xl font-bold text-gold tracking-[0.02em]">
            <img src={logodark} alt="La Vigroh Logo" className="w-9 h-9 light:hidden" />
            <img src={logoLight} alt="La Vigroh Logo" className="w-9 h-9 hidden light:block"/>
            La <span className="text-text light:text-light-text font-normal">Vigroh</span></Link>
            <ul className="hidden md:flex gap-10 list-none">
                <li><Link to="/#products" className="text-text-dim light:text-light-text-dim text-sm no-underline tracking-[0.04em] hover:text-gold transition-colors">Products</Link></li>
                <li><Link to="/#how" className="text-text-dim light:text-light-text-dim text-sm no-underline tracking-[0.04em] hover:text-gold transition-colors">How it works</Link></li>
                <li><Link to="/#contact" className="text-text-dim light:text-light-text-dim text-sm no-underline tracking-[0.04em] hover:text-gold transition-colors">Contact</Link></li>
                <li><Link to="/about" className="text-text-dim light:text-light-text-dim text-sm no-underline tracking-[0.04em] hover:text-gold transition-colors">About</Link></li>
            </ul>
            <Link to="/#contact" className="hidden md:block bg-gold text-dark py-2 px-6 rounded text-sm font-medium no-underline hover:bg-gold-light transition-colors">Get Started</Link>
            <button className="md:hidden text-text light:text-light-text text-2xl" aria-label="Toggle menu" onClick={()=> setIsOpen(!isOpen)}>{isOpen ? "✕":"☰"}</button>
            <button onClick={()=> setIsLight(!isLight)}
                className="relative w-14 h-7 rounded-full bg-dark3 light:bg-light3 border border-white/10 light:border-black/10 flex items-center px-1 transition-colors" 
                aria-label="Toggle theme">
                <svg className="absolute left-1.5 w-4 h-4 text-gold"
                fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5"/>
                    <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                <svg className="absolute right-1.5 w-4 h-4 text-gold" 
                fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
                </svg>
                {/* <span className="absolute left-1.5 text-xs">☀️</span>
                <span className="absolute right-1.5 text-xs">🌙</span> */}
                <span className={`relative w-5 h-5 rounded-full bg-gold transition-transform duration-300
                     ${isLight? "translate-x-7": "translate-x-0"}`}></span>
            </button>
            
        </nav>
        {isOpen && (
                <div className="fixed top-[72px] z-40 left-0 right-0 bg-dark/85 light:bg-light/85 backdrop-blur-md flex flex-col items-center gap-6 py-5 px-8 md:hidden border-b border-white/5 light:border-black/10 ">
                    <Link to="/#products" onClick={() => setIsOpen(false)} className="text-text-dim light:text-light-text-dim text-sm no-underline hover:text-gold">Products</Link>
                    <Link to="/#how" onClick={() => setIsOpen(false)} className="text-text-dim light:text-light-text-dim text-sm no-underline hover:text-gold">How it works</Link>
                    <Link to="/#contact" onClick={() => setIsOpen(false)} className="text-text-dim light:text-light-text-dim text-sm no-underline hover:text-gold">Contact</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="text-text-dim light:text-light-text-dim text-sm no-underline hover:text-gold">About Us</Link>
                    <Link to="/#contact" onClick={() => setIsOpen(false)} className="bg-gold text-dark py-2 px-6 rounded text-sm font-medium no-underline">Get Started</Link>
                </div>
                    )}
        </>
    );
}
export default Navbar;


