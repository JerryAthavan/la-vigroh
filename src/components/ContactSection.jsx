import { useState } from "react";
function ContactSection(){
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", {name, email, message});
        alert(`Thanks ${name}, we'll get back to you soon!`);
        setName("");
        setEmail("");
        setMessage("");
    };
    return(
        <section id="contact"
        className="bg-dark2 py-16 px-6 md:py-24 md:px-16 border-t border-white/5">
            <div className="max-w-xl mx-auto text-center">
                <div className="text-gold text-sm tracking-widest mb-4">Contact</div>
                <h2 className="text-text text-4xl font-serif font-semibold mb-4">Get in touch</h2>
                <p className="text-text-dim mb-10">Have a question or need help with a filing?
                     Send us a message and we'll get bact to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                    <div>
                        <label className="block text-sm text-text-dim mb-2">Name</label>
                        <input className="w-full bg-dark3 border border-white/10 rounded
                        px-4 py-3 text-text placeholder:text-text-dim/50 
                        focus:outline-none focus:border-gold" 
                        type="text" value={name} placeholder="your name" onChange={(e)=> setName(e.target.value)} />
                    </div>
                    <div>
                        <label className="block text-sm text-text-dim mb-2">Email</label>
                        <input className="w-full bg-dark3 border border-white/10 
                        rounded px-4 py-3 text-text placeholder:text-text-dim/50 focus:outline-none focus:border-gold"
                        type="email" value={email} onChange={(e)=> setEmail(e.target.value)} placeholder="you@example.com" />
                    </div>
                    <div>
                        <label className="block text-sm text-text-dim mb-2">Message</label>
                        <textarea className="w-full bg-dark3 border border-white/10 rounded
                        px-4 py-3 text-text placeholder:text-text-dim/50 focus:outline-none focus:border-gold resize-none"
                         rows="5" value={message} onChange={(e)=> setMessage(e.target.value)} placeholder="How can we help?"></textarea>
                    </div>
                    <button type="submit"
                    className="bg-gold text-dark py-3.5 rounded no-underline font-medium
                    hover:bg-gold-light transition-colors"
                    >Send Message</button>
                </form>
            </div>
        </section>

    );
}
export default ContactSection;