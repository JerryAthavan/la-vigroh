function Stats(){
    const stats = [{num:"$12", label: "Starting price per year"},
                    {num:"36+", label: "Countries supported"},
                    {num:"100%", label: "FinCEN-compliant filing"},
                    {num:"24h", label: "Average filing time"}
    ]
    return(
        <section className="bg-dark light:bg-light border-t border-white/5 light:border-black/10 py-16 px-6 md:py-24 md:px-16">
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] text-center gap-12">
                {stats.map((stat, index)=>(
                <div key={index} >
                <div className="font-['Playfair_Display',serif] text-5xl font-bold text-gold leading-none mb-2">
                    {stat.num}
                </div>
                <div className="text-sm text-text-dim light:text-light-text-dim">
                    {stat.label}
                </div>
            </div>
            ))}
            </div>
        </section>
    );
}
export default Stats;

