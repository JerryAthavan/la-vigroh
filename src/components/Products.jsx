import ProductCard from "./ProductCard";
const products = [
  { tag: "LIVE", icon: "🇺🇸", title: "UFile FBAR", description: "File FinCEN Form 114 (FBAR) in minutes. Designed for US taxpayers with foreign financial accounts — accurate, secure, and starting at $12/year.", linkText: "Get started →" },
  { tag: "COMING SOON", icon: "🇮🇳", title: "India ITR Filing", description: "Seamless Income Tax Return filing for NRIs and Indian residents with foreign income — with intelligent auto-import and DTAA optimization.", linkText: "Join waitlist →" },
  { tag: "COMING SOON", icon: "🌍", title: "VAT & GST Manager", description: "Track, calculate, and file VAT and GST obligations across the EU, UK, Australia, and India from a single dashboard.", linkText: "Join waitlist →" },
  { tag: "COMING SOON", icon: "💼", title: "CPA Connect", description: "Get matched with a licensed CPA or EA for expert review of your filings — fully integrated into the La Vigroh workflow.", linkText: "Join waitlist →" }
];
function Products(){
    return(
        <section id="products" className="font-['DM_Sans',sans-serif] bg-dark2 text-base py-16 px-6 md:py-24 md:px-16 leading-relaxed">
            <div className="text-gold text-xs tracking-widest mb-4">PRODUCTS</div>
            <h2 className="font-['Playfair_Display',serif] text-[clamp(2rem,4vw,3rem)] font-semibold text-text leading-tight mb-4">Every filling, covered.</h2>
            <p className="text-text-dim text-base font-light leading-[1.75] max-w-[520px] mb-14">Purpose-built tools for the most complex tax obligations — designed for expats, investors, and global businesses.</p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[1px] bg-white/5 border border-white/5 rounded-lg overflow-hidden">
                {products.map((product, index)=>(
                    <ProductCard
                    key={index}
                    tag={product.tag}
                    icon={product.icon}
                    title={product.title}
                    description={product.description}
                    linkText={product.linkText}
                    />
                ))}
            </div>
        </section>
    );
    
}
export default Products;