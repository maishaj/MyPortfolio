import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic (Formspree, EmailJS, etc.)
    //console.log("Form Submitted:", formData);
    toast.success("Your message is sent!")
    e.target.reset();
  };

  return (
    <section id="contact" className="bg-[#030303] py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="text-[10px] font-mono text-blue-500 tracking-[0.5em] uppercase mb-4">
              Contact Me
            </span>
            <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
             className="text-5xl text-left md:text-6xl font-black text-white tracking-tighter"
            >
              Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Talk.</span>
            </motion.h2>
            <p className="text-zinc-500 text-lg font-light mb-12 max-w-md italic">
              Have a project in mind or just want to say hi? Feel free to reach out via email or the form.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 rounded-2xl text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                  <FiMail size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Email</p>
                  <a href="mailto:yourname@email.com" className="text-[16px] md:xl lg:xl font-bold text-white hover:text-blue-500 transition-colors tracking-tight">maishajannat388@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 rounded-2xl text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                  <FiPhone size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Phone / WhatsApp</p>
                  <a href="tel:+8801XXXXXXXXX" className="text-[16px] md:xl lg:xl font-bold text-white hover:text-emerald-500 transition-colors tracking-tight">+880 1304935063</a>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-white/5 rounded-2xl text-zinc-400">
                  <FiMapPin size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest">Location</p>
                  <p className="text-[16px] md:xl lg:xl font-bold text-white tracking-tight">Sylhet, Bangladesh</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT PART: Message Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white/[0.02] border border-white/5 p-8 md:p-10 rounded-[2.5rem] backdrop-blur-xl relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-3 mt-2 text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-3 mt-2 text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500/50 transition-all"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest ml-1">Message</label>
                  <textarea 
                    rows="4"
                    placeholder="How can I help you?"
                    className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-3 mt-2 text-white placeholder:text-zinc-700 focus:outline-none focus:border-blue-500/50 transition-all resize-none"
                  />
                </div>
                <div className="flex justify-start"> 
               <button 
                type="submit"
                className="mx-auto group relative flex items-center justify-center gap-3 px-10 py-4 bg-white text-black font-black text-[10px] uppercase tracking-[0.2em] rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] hover:-translate-y-1 active:scale-95"
                >
                <span>Send Message</span>
                <FiSend size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 text-blue-600" />
                </button>
              </div>
              </form>
            </div>
            
            {/* Background Glow for Form */}
            <div className="absolute -inset-4 bg-blue-500/5 blur-3xl -z-10 rounded-full" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;