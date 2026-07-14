import { Link } from "react-router-dom";
function Footer(){
    return(
        <footer className="font-['DM_Sans',sans-serif] bg-dark light:bg-light py-12 px-16 border-t border-white/5 light:border-black/10">
            <div className="flex justify-between items-center gap-6 flex-wrap">
                <div className="font-['Playfair_Display',serif] text-xl text-gold">La Vigroh</div>
                <div className="flex gap-8 flex-wrap">
                    <Link to="/#products" className="text-muted light:text-light-muted text-[0.8rem] no-underline tracking-wide hover:text-gold transition-colors">Products</Link>
                    <Link to="/about" className="text-muted light:text-light-muted text-[0.8rem] no-underline tracking-wide hover:text-gold transition-colors">About Us</Link>
                    <a href="#" className="text-muted light:text-light-muted text-[0.8rem] no-underline tracking-wide hover:text-gold transition-colors">Pricing</a>
                    <a href="#" className="text-muted light:text-light-muted text-[0.8rem] no-underline tracking-wide hover:text-gold transition-colors">Resources</a>
                    <a href="#" className="text-muted light:text-light-muted text-[0.8rem] no-underline tracking-wide hover:text-gold transition-colors">Privacy Policy</a>
                    <a href="#" className="text-muted light:text-light-muted text-[0.8rem] no-underline tracking-wide hover:text-gold transition-colors">Terms of Service</a>
                    <Link to="/#contact" className="text-muted light:text-light-muted text-[0.8rem] no-underline tracking-wide hover:text-gold transition-colors">Contact</Link>
                </div>
            </div>
            <p className="text-xs text-muted light:text-light-muted mt-6 text-center">© 2025 La Vigroh. All rights reserved. La Vigroh is not a law firm or CPA firm. Tax advice is provided by licensed professionals through the platform.</p>
        </footer>
    );

}
export default Footer;