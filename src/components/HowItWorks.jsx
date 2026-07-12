function HowItWorks(){
    const stepsArr = [{number:"01", title: "Create your account", description: "Sign up in under a minute. Your data is encrypted end-to-end and never sold."},
                    {number:"02", title: "Answer guided questions", description: "Our smart wizard asks only what's relevant to your situation — no jargon, no confusion"},
                    {number:"03", title: "Review your filing", description: "See a plain-English summary before anything is submitted. Optionally add CPA review."},
                    {number:"04", title: "Submit & stay compliant", description: "We file directly with the relevant authority and send reminders before each deadline."}
    ]
    return(
        <section id="how" className="bg-dark py-[4rem] px-[1.5rem] border-t border-white/5 border-b border-white/5 md:py-24 md:px-16">
            <div className="text-gold text-xs tracking-[0.14em] mb-4">
                PROCESS
            </div>
            <h2 className="font-['Playfair_Display',serif] leading-[1.2]  text-text text-[clamp(2rem,4vw,3rem)] font-semibold mb-4">
                From signup to submitted <br /> in four steps.
            </h2>
            <p className="text-text-dim text-base max-w-[520px] font-normal leading-[1.75] mb-14">
                No forms lost in email chains. 
                No confusing government portals. 
                Just a clean, guided experience.
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-8 rounded-lg overflow-hidden">
                {stepsArr.map((steps, index)=>(
                    <div key={index}>
                        <div className="text-gold/12 font-bold text-[3.5rem] font-['Playfair_Display',serif] leading-none mb-4">{steps.number}</div>
                        <h3 className="text-text font-medium mb-2 text-base">{steps.title}</h3>
                        <p className="text-text-dim leading-[1.65] text-sm">{steps.description}</p>
                    </div>

                ))}
                
            </div>
        </section>

    );
}
export default HowItWorks;