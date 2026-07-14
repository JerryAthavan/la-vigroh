function AboutUs() {
  const values = [
    { title: "Clarity first", description: "Tax law is complex enough. We translate it into plain language, so you always know what's happening and why." },
    { title: "Built for global life", description: "Whether you're an expat, a remote worker, or running a business across borders, compliance shouldn't hold you back." },
    { title: "Security by default", description: "Your financial data is encrypted end-to-end and never sold. Full stop." },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-dark light:bg-light pt-32 pb-16 px-6 md:pt-40 md:pb-24 md:px-16 text-center">
        <div className="text-gold text-xs tracking-widest mb-4">ABOUT US</div>
        <h1 className="font-serif text-[clamp(2.2rem,5vw,3.5rem)] font-bold text-text light:text-light-text max-w-2xl mx-auto mb-6">
          Built by people who've filed taxes in three countries — badly.
        </h1>
        <p className="text-text-dim light:text-light-text-dim max-w-xl mx-auto leading-relaxed">
          La Vigroh started as a frustration with confusing government portals, and became a platform trusted by expats and businesses across 36+ countries.
        </p>
      </section>

      {/* Story */}
      <section className="bg-dark2 light:bg-light2 py-16 px-6 md:py-24 md:px-16 border-t border-white/5 light:border-black/10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-text light:text-light-text text-3xl font-serif font-semibold mb-6">Our story</h2>
          <p className="text-text-dim light:text-light-text-dim leading-relaxed mb-4">
            We built La Vigroh after watching too many talented people lose hours — and sometimes thousands of dollars — to confusing, outdated tax filing systems that were never designed for a global, mobile workforce.
          </p>
          <p className="text-text-dim light:text-light-text-dim leading-relaxed">
            Today, our platform helps individuals and businesses navigate FBAR, ITR, VAT, GST, and more — with the same clarity you'd expect from a great product, not a government form.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-dark light:bg-light border-t border-white/5 light:border-black/10 py-16 px-6 md:py-24 md:px-16">
        <h2 className="text-text light:text-light-text text-3xl font-serif font-semibold text-center mb-14">What we stand for</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div key={index} className="text-left">
              <h3 className="text-text light:text-light-text font-serif text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-text-dim light:text-light-text-dim text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutUs;