import { useState, useRef } from "react";
import { Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // EmailJS credentials yahan lagayein
    emailjs
      .sendForm(
        "service_ivqcc4k",   // Apni Service ID yahan dalein
        "template_2d8dydd",  // Apni Template ID yahan dalein
        formRef.current!,
        "O03aYVuu9zd6gXQ3H"    // Apni Public Key yahan dalein
      )
      .then(
        () => {
          setLoading(false);
          setFormSubmitted(true);
          formRef.current?.reset(); // Form khali karne ke liye
          setTimeout(() => setFormSubmitted(false), 5000);
        },
        (error) => {
          setLoading(false);
          setError("Something went wrong. Please try again later.");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <div className= "bg-slate-50 min-h-screen">
          <Navbar />
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col justify-between">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full grid lg:grid-cols-12 gap-12 items-center my-auto">
        
        {/* Left Column: Premium Text & Branding */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.25em] text-emerald-700 mb-4">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              We’d Love to <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-green-500">
                Hear From You
              </span>
            </h1>
            <p className="mt-4 text-slate-600 leading-relaxed font-medium">
              Have a book suggestion, facing an issue with a download, or just want to say Hi? Drop us a message and it will land straight in our inbox.
            </p>
          </div>

          {/* Info Blocks */}
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/60 shadow-xs">
              <div className="p-3 rounded-xl bg-slate-50 text-emerald-600">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Email Us</p>
                <p className="text-sm font-semibold text-slate-700">support@urdukitabain.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/60 shadow-xs">
              <div className="p-3 rounded-xl bg-slate-50 text-amber-500">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Response Time</p>
                <p className="text-sm font-semibold text-slate-700">Within 24 Hours</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Premium Light Card Form */}
        <div className="lg:col-span-7">
          <div className="relative bg-white border border-slate-200/80 rounded-3xl p-6 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] overflow-hidden">
            
            {/* Background decorative soft glow */}
            <div className="absolute -top-24 -right-24 h-48 w-48 bg-emerald-500/5 blur-3xl rounded-full" />
            
            {formSubmitted ? (
              // Success State Animation
              <div className="text-center py-12 space-y-4">
                <div className="mx-auto h-16 w-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-full flex items-center justify-center shadow-md">
                  <CheckCircle2 size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Sent!</h3>
                <p className="text-slate-500 max-w-sm mx-auto text-sm font-medium">
                   Your message has been sent directly to our email. We will reply to you very soon!
                </p>
              </div>
            ) : (
              // Actual Form
              <form ref={formRef} onSubmit={sendEmail} className="space-y-6 relative z-10">
                
                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm font-medium">
                    {error}
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      name="user_name" // Template variable name matching
                      required
                      placeholder="John Doe" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 outline-none focus:border-emerald-600 focus:bg-white transition-all font-medium placeholder:text-slate-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      name="user_email" // Template variable name matching
                      required
                      placeholder="you@example.com" 
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 outline-none focus:border-emerald-600 focus:bg-white transition-all font-medium placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    required
                    placeholder="Book request, feedback, etc." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 outline-none focus:border-emerald-600 focus:bg-white transition-all font-medium placeholder:text-slate-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Your Message</label>
                  <textarea 
                    rows={4}
                    name="message"
                    required
                    placeholder="Write your thoughts here..." 
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-slate-800 outline-none focus:border-emerald-600 focus:bg-white transition-all font-medium placeholder:text-slate-400 resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  disabled={loading}
                  className="w-full group flex items-center justify-center gap-2 rounded-xl bg-linear-to-r from-emerald-600 to-green-600 py-4 font-bold text-white shadow-md hover:from-emerald-700 hover:to-green-700 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <Send size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />}
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
    <Footer/>
    </div>
  );
}
