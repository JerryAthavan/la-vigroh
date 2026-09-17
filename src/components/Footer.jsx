import { Link } from "react-router-dom";
import logodark from "../assets/logo-dark-themed.png"
import logoLight from "../assets/logo-light-themed.png"
function Footer(){
    return(
        <footer className="font-['DM_Sans',sans-serif] bg-dark light:bg-light py-10 md:py-12 px-6 md:px-16 border-t border-white/5 light:border-black/10">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-8 flex-wrap">
                
                <div className="font-['Playfair_Display',serif] text-xl text-gold text-center lg:text-left flex gap-2">
                    <img src={logodark} alt="La Vigroh Logo" className="w-9 h-9 light:hidden" />
                    <img src={logoLight} alt="La Vigroh Logo" className="w-9 h-9 hidden light:block"/>
                    La<span className="text-text light:text-light-text font-normal">Vigroh</span></div>
                <div className="grid grid-cols-2 lg:flex gap-x-8 gap-y-4 lg:gap-8 text-center lg:text-left">
                    <Link to="/#products" className="text-muted light:text-light-muted text-[0.8rem] no-underline tracking-wide hover:text-gold transition-colors">Products</Link>
                    <Link to="/about" className="text-muted light:text-light-muted text-[0.8rem] no-underline tracking-wide hover:text-gold transition-colors">About Us</Link>
                    <a href="#" className="text-muted light:text-light-muted text-[0.8rem] no-underline tracking-wide hover:text-gold transition-colors">Pricing</a>
                    <a href="#" className="text-muted light:text-light-muted text-[0.8rem] no-underline tracking-wide hover:text-gold transition-colors">Resources</a>
                    <a href="#" className="text-muted light:text-light-muted text-[0.8rem] no-underline tracking-wide hover:text-gold transition-colors">Privacy Policy</a>
                    <a href="#" className="text-muted light:text-light-muted text-[0.8rem] no-underline tracking-wide hover:text-gold transition-colors">Terms of Service</a>
                    <Link to="/#contact" className="text-muted light:text-light-muted text-[0.8rem] no-underline tracking-wide hover:text-gold transition-colors">Contact</Link>
                </div>
            </div>
            <p className="text-xs text-muted light:text-light-muted mt-6 text-center">© 2026 La Vigroh. All rights reserved. La Vigroh is not a law firm or CPA firm. Tax advice is provided by licensed professionals through the platform.</p>
        </footer>
    );

}
export default Footer;