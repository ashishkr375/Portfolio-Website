import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

import useAlert from '../hooks/useAlert.js';
import Alert from '../components/Alert.jsx';

const Contact = () => {
  const formRef = useRef();
  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'Ashish Kumar',
          from_email: form.email,
          to_email: 'ashishk.dd22.cs@nitp.ac.in',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: 'Message Transmission Successful.',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({ name: '', email: '', message: '' });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);
          showAlert({
            show: true,
            text: 'Transmission Failed. Check Logs.',
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space py-24 bg-[#050505] relative overflow-hidden" id="contact">
      {/* Alert Overlay */}
      <div className="absolute top-10 left-0 right-0 z-50 flex justify-center">
         {alert.show && <Alert {...alert} />}
      </div>

      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* LEFT COLUMN: INFO & STATUS */}
          <div className="flex flex-col justify-center pt-10">
            
            {/* Header */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-4 px-4 py-1 border border-orange-500/20 bg-orange-500/5 w-fit">
                <div className="w-1.5 h-1.5 bg-orange-500 rounded-none animate-pulse" />
                <span className="text-orange-500 font-mono text-[10px] uppercase tracking-[0.2em] font-bold">
                  Secure_Uplink
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white uppercase tracking-tight leading-none mb-6">
                Let's <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
                  Collaborate
                </span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-md border-l-2 border-white/10 pl-6">
                Looking to build a new platform, improve existing infrastructure, or bring a unique technical project to life? I am ready to engineer the solution.
              </p>
            </div>

            {/* System Status Panel (Decorative) */}
            <div className="hidden lg:block bg-[#0a0a0a] border border-white/10 p-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-[length:250%_250%] animate-shine pointer-events-none"></div>
              
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-white/5">
                <span className="text-[10px] font-mono text-gray-500">CONNECTION_STATUS</span>
                <div className="flex gap-1">
                  <span className="w-1 h-3 bg-green-500 opacity-50"></span>
                  <span className="w-1 h-3 bg-green-500 opacity-75"></span>
                  <span className="w-1 h-3 bg-green-500"></span>
                </div>
              </div>
              
              <div className="space-y-2 font-mono text-[10px] text-gray-400">
                <div className="flex justify-between">
                  <span>> ENCRYPTION</span>
                  <span className="text-orange-500">AES-256</span>
                </div>
                <div className="flex justify-between">
                  <span>> LATENCY</span>
                  <span className="text-green-500">12ms</span>
                </div>
                <div className="flex justify-between">
                  <span>> PORT</span>
                  <span>443 [OPEN]</span>
                </div>
                <div className="flex justify-between">
                  <span>> AVAILABLE</span>
                  <span className="text-blue-400">TRUE</span>
                </div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: THE FORM (TERMINAL STYLE) */}
          <div className="relative group">
            {/* Decorative Backdrop */}
            <div className="absolute -inset-1 bg-gradient-to-b from-orange-500/20 to-transparent opacity-20 blur-sm group-hover:opacity-40 transition-opacity duration-500"></div>
            
            <div className="relative bg-[#0a0a0a] border border-white/10 flex flex-col">
              
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-[#0f0f0f]">
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                  Transmission_Interface
                </span>
                <div className="flex gap-1.5">
                  <div className="w-2 h-2 bg-red-500/20 border border-red-500/50" />
                  <div className="w-2 h-2 bg-yellow-500/20 border border-yellow-500/50" />
                  <div className="w-2 h-2 bg-green-500/20 border border-green-500/50" />
                </div>
              </div>

              {/* Form Area */}
              <form ref={formRef} onSubmit={handleSubmit} className="p-6 md:p-8 space-y-6">
                
                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">
                    Identity_Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#050505] border border-white/10 p-3 text-sm text-white font-mono focus:border-orange-500 focus:outline-none focus:bg-[#0c0c0c] transition-colors placeholder:text-gray-800"
                    placeholder="ENTER_FULL_NAME"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">
                    Return_Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#050505] border border-white/10 p-3 text-sm text-white font-mono focus:border-orange-500 focus:outline-none focus:bg-[#0c0c0c] transition-colors placeholder:text-gray-800"
                    placeholder="ENTER_EMAIL_ADDRESS"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">
                    Data_Packet
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full bg-[#050505] border border-white/10 p-3 text-sm text-white font-mono focus:border-orange-500 focus:outline-none focus:bg-[#0c0c0c] transition-colors placeholder:text-gray-800 resize-none"
                    placeholder="INPUT_MESSAGE_CONTENT..."
                  />
                </div>

                <button 
                  className="w-full bg-white text-black font-bold text-sm uppercase py-4 hover:bg-orange-500 hover:text-black transition-all duration-300 relative overflow-hidden group/btn"
                  type="submit" 
                  disabled={loading}
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                       <span className="w-2 h-2 bg-black rounded-full animate-ping"></span>
                       TRANSMITTING...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2 relative z-10">
                      INITIALIZE_TRANSMISSION
                      <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="square" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </span>
                  )}
                </button>

              </form>
              
              {/* Footer Info */}
              <div className="px-6 py-2 border-t border-white/10 bg-[#050505] flex justify-between text-[9px] font-mono text-gray-600">
                 <span>SECURE_SSL: TRUE</span>
                 <span>PROTOCOL: SMTP</span>
              </div>

            </div>
            
            {/* Corner Markers for the Form */}
            <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-white/20 group-hover:border-orange-500 transition-colors z-20" />
            <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-white/20 group-hover:border-orange-500 transition-colors z-20" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-white/20 group-hover:border-orange-500 transition-colors z-20" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-white/20 group-hover:border-orange-500 transition-colors z-20" />
          </div>

        </div>
      </div>

      <style jsx global>{`
        @keyframes shine {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        .animate-shine {
          animation: shine 4s infinite linear;
        }
      `}</style>
    </section>
  );
};

export default Contact;