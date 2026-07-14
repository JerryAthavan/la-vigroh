function ProductCard({tag, icon, title, description, linkText}){
    return(
        <>
        <div className="bg-dark3 light:bg-light3 p-10 text-left hover:bg-dark4 light:hover:bg-light4 transition-colors">
            <div className="inline-block bg-gold/10 light:bg-gold/15 text-gold-dim text-xs px-2 py-0.5 rounded-full mb-4">
                {tag}
            </div>
            <div className="w-11 h-11 rounded-md bg-gold/10 light:bg-gold/15 border border-gold/20 flex items-center justify-center text-xl mb-6 ">
                {icon}
            </div>
            <h3 className="font-['Playfair_Display',serif] text-[1.25rem] font-[600] text-text light:text-light-text mb-2">
                {title}
            </h3>
            <p className="text-[0.9rem] text-text-dim light:text-light-text-dim leading-[1.65] mb-6">
                {description}
            </p>
            <a href="#contact" className="text-[0.8rem] tracking-[0.06rem] text-gold no-underline hover:text-gold-light transition-colors">
                {linkText}
            </a>
        </div>
        </>

    );
}
export default ProductCard;