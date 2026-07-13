import { useState } from "react";
import { Link } from "react-router-dom";
function Navbar(){
    const[isOpen, setIsOpen] = useState(false);
    return(
        <>
        <nav className="fixed top-0 left-0 right-0 z-100 flex items-center justify-between py-5 px-16 bg-dark/85 backdrop-blur-md border-b border-white/5">
            <div className="font-serif text-2xl font-bold text-gold tracking-[0.02em]">La <span className="text-text font-normal">Vigroh</span></div>
            <ul className="hidden md:flex gap-10 list-none">
                <li><Link to="/#products" className="text-text-dim text-sm no-underline tracking-[0.04em] hover:text-gold transition-colors">Products</Link></li>
                <li><Link to="/#how" className="text-text-dim text-sm no-underline tracking-[0.04em] hover:text-gold transition-colors">How it works</Link></li>
                <li><Link to="/#contact" className="text-text-dim text-sm no-underline tracking-[0.04em] hover:text-gold transition-colors">Contact</Link></li>
                <li><Link to="/about" className="text-text-dim text-sm no-underline tracking-[0.04em] hover:text-gold transition-colors">About</Link></li>
            </ul>
            <Link to="/#contact" className="hidden md:block bg-gold text-dark py-2 px-6 rounded text-sm font-medium no-underline hover:bg-gold-light transition-colors">Get Started</Link>
            <button className="md:hidden text-text text-2xl" aria-label="Toggle menu" onClick={()=> setIsOpen(!isOpen)}>{isOpen ? "✕":"☰"}</button>

            
        </nav>
        {isOpen && (
                <div className="fixed top-[72px] z-40 left-0 right-0 bg-dark/85 backdrop-blur-md flex flex-col items-center gap-6 py-5 px-8 md:hidden border-b border-white/5 ">
                    <Link to="/#products" onClick={() => setIsOpen(false)} className="text-text-dim text-sm no-underline hover:text-gold">Products</Link>
                    <Link to="/#how" onClick={() => setIsOpen(false)} className="text-text-dim text-sm no-underline hover:text-gold">How it works</Link>
                    <Link to="/#contact" onClick={() => setIsOpen(false)} className="text-text-dim text-sm no-underline hover:text-gold">Contact</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)} className="text-text-dim text-sm no-underline hover:text-gold">About Us</Link>
                    <Link to="/#contact" onClick={() => setIsOpen(false)} className="bg-gold text-dark py-2 px-6 rounded text-sm font-medium no-underline">Get Started</Link>
                </div>
                    )}
        </>
    );
}
export default Navbar;


