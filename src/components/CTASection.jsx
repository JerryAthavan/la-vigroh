

function CTASection(){
    
    return(
        <section id="cta" className="bg-dark2 light:bg-light2 text-center border-t border-white/5 light:border-black/10 px-6 py-16 md:px-16 md:py-24">
            <h2 className="text-text light:text-light-text text-[clamp(2rem,4vw,3rem)] font-['Playfair_Display',serif] font-semibold leading-[1.2] mb-4">Ready to simplify your taxes?</h2>
            <p className="text-text-dim light:text-light-text-dim mb-10 font-light font-['DM_Sans',sans-serif]">Join thousands of expats and global citizens who file with confidence.</p>
            <a href="#contact" className="bg-gold font-['DM_Sans',sans-serif] text-dark py-3.5 px-8 rounded text-sm font-medium no-underline hover:bg-gold-light transition-colors" >Start filing today</a>
        </section>
    );
}
export default CTASection;