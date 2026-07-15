import { useState, useRef } from "react";
import emailjs from '@emailjs/browser'
function ContactSection(){
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[message, setMessage] = useState("");
    const emailRef = useRef(null);
    const messageRef = useRef(null);
    const [status, setStatus] = useState("idle");
    const [honeypot, setHoneypot] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if(honeypot){
            console.log("Bot detected, submission blocked");
            return;
        }
        emailjs.send(
            "service_vp94qe8",
            "template_gdphxb9",
            {name: name, email: email, message: message},
            "tA-pl39Dyi2Ob2q5A"
        )
        .then(()=>{
            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");
        })
        .catch((error)=>{
            console.log("Email send failed:", error);
            setStatus("error");
        });
        
    };
    return(
        <section id="contact"
        className=" scroll-mt-7 bg-dark2 light:bg-light2 py-16 px-6 md:py-24 md:px-16 border-t border-white/5 light:border-black/10">
            <div className="max-w-xl mx-auto text-center">
                <div className="text-gold text-sm tracking-widest mb-4">Contact</div>
                <h2 className="text-text light:text-light-text text-4xl font-serif font-semibold mb-4">Get in touch</h2>
                <p className="text-text-dim light:text-light-text-dim mb-10">Have a question or need help with a filing?
                     Send us a message and we'll get bact to you within 24 hours.</p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-left">
                    <div>
                        <label className="block text-sm text-text-dim light:text-light-text-dim mb-2">Name</label>
                        <input className="w-full bg-dark3 light:bg-light3 border border-white/10 light:border-black/15 rounded
                        px-4 py-3 text-text light:text-light-text placeholder:text-text-dim/50 light:placeholder:text-light-text-dim/70 
                        focus:outline-none focus:border-gold " 
                        type="text" required value={name} placeholder="your name"
                         onChange={(e)=> setName(e.target.value)} 
                         onKeyDown={(e)=>{
                            if(e.key === "Enter"){
                                e.preventDefault();
                                emailRef.current.focus();
                            }
                         }}/>
                         <input type="text" value={honeypot} onChange={(e)=>setHoneypot(e.target.value)}
                         className="absolute -left-[9999px]"
                         tabIndex="-1"
                         autoComplete="off" />
                    </div>
                    <div>
                        <label className="block text-sm text-text-dim light:text-light-text-dim mb-2">Email</label>
                        <input className="w-full bg-dark3 light:bg-light3 border border-white/10 light:border-black/15
                        rounded px-4 py-3 text-text light:text-light-text placeholder:text-text-dim/50 light:placeholder:text-light-text-dim/70 focus:outline-none focus:border-gold"
                        type="email" required value={email} onChange={(e)=> setEmail(e.target.value)} 
                        placeholder="you@example.com" ref={emailRef}
                        onKeyDown={(e)=> {
                            if(e.key ==="Enter"){
                                e.preventDefault();
                                messageRef.current.focus();
                            }
                        }}  />
                    </div>
                    <div>
                        <label className="block text-sm text-text-dim light:text-light-text-dim mb-2">Message</label>
                        <textarea className="w-full bg-dark3 light:bg-light3 border border-white/10 light:border-black/15 rounded
                        px-4 py-3 text-text light:text-light-text placeholder:text-text-dim/50 light:placeholder:text-light-text-dim/70 focus:outline-none focus:border-gold resize-none"
                         rows="5" required value={message} onChange={(e)=> setMessage(e.target.value)}
                          placeholder="How can we help?" ref={messageRef}></textarea>
                    </div>
                    <button type="submit"
                    className="bg-gold text-dark py-3.5 rounded no-underline font-medium
                    hover:bg-gold-light transition-colors"
                    >Send Message</button>
                </form>
                {status === "success" && (
                    <p className="text-gold text-sm mt-6">Thanks! We'll get back to you within 24 hours</p>
                )}
                {status === "error" && (
                    <p>Something went wrong. Please try again or email us directly.</p>
                )}
            </div>
        </section>

    );
}
export default ContactSection;