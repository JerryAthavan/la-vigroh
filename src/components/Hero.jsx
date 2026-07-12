function Hero(){
    return(
        <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center pt-32 pr-8 pb-16 pl-8 ">
            <div className="hero-grid"></div>
            <div className="hero-glow"></div>
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 text-gold text-sm px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                Global Tax Compliance Platform
            </div>
            <h1 className="font-['Playfair_Display',serif] text-[clamp(2.8rem,6vw,5.5rem)] font-bold leading-[1.1] max-w-[900px] mb-6 text-text">
                Tax compliance, <em className="text-gold italic">simplified</em><br/>for every country
            </h1>
            <p className="text-lg text-text-dim max-w-[560px] font-light leading-[1.75] mb-12">
                La Vigroh helps individuals and businesses navigate cross-border tax obligations
                 — from FBAR filings to VAT, GST, and beyond
                  — with clarity and confidence.
            </p>
            <div className="flex gap-4 flex-wrap justify-center">
                <a href="#products" className="bg-gold text-dark text-[0.9375rem] px-8 py-[0.875rem] rounded no-underline font-medium hover:bg-gold-light hover:-translate-y-0.5 transition-all duration-300 ease-in-out">Explore Products</a> 
                
                <a href="#how" className="border border-gold/40 text-gold font-normal text-base px-8 py-3.5 rounded no-underline hover:border-gold hover:bg-gold/6 transition-colors">See How It Works</a>
            </div>

        </section>
    );
}
export default Hero;