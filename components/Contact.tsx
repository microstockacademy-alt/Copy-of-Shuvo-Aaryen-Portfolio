import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { SectionContainer } from './SectionContainer';
import { Send, MapPin, Phone, Mail, Loader2, CheckCircle2, XCircle, X } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setLoading(true);
    setStatus('idle');

    // EmailJS Configuration
    // Service ID: service_1c67f35
    // Template ID: template_f5sfafc
    // Public Key: 1tQ547FfMOKj_F6NP
    
    try {
      await emailjs.sendForm(
        'service_1c67f35', 
        'template_f5sfafc', 
        formRef.current, 
        { publicKey: '1tQ547FfMOKj_F6NP' }
      );
      
      setStatus('success');
      setFormState({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SectionContainer id="contact" title="CONTACT">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="space-y-8 lg:col-span-1">
            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-yellow-500/30 transition-colors">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 mb-4">
                <MapPin size={24} />
              </div>
              <h4 className="text-white font-bold text-lg mb-1">Address</h4>
              <p className="text-gray-400 text-sm">123 Design Street, Creative City, NY 10012, USA</p>
            </div>
            
            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-yellow-500/30 transition-colors">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 mb-4">
                <Phone size={24} />
              </div>
              <h4 className="text-white font-bold text-lg mb-1">Phone</h4>
              <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
            </div>

            <div className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:border-yellow-500/30 transition-colors">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-full flex items-center justify-center text-yellow-500 mb-4">
                 <Mail size={24} />
              </div>
              <h4 className="text-white font-bold text-lg mb-1">Email</h4>
              <p className="text-gray-400 text-sm">hello@shuvoaaryen.com</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm text-gray-400 font-medium ml-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all placeholder-gray-600"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm text-gray-400 font-medium ml-1">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all placeholder-gray-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-400 font-medium ml-1">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all placeholder-gray-600"
                    placeholder="Project Inquiry"
                  />
              </div>

              <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400 font-medium ml-1">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-yellow-500/50 focus:ring-1 focus:ring-yellow-500/50 transition-all placeholder-gray-600 resize-none"
                    placeholder="Tell me a bit about your project..."
                  ></textarea>
              </div>

              {/* Status Messages - Error only inline */}
              {status === 'error' && (
                <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl flex items-center gap-3 text-red-500">
                  <XCircle size={20} />
                  <p className="text-sm">Something went wrong. Please try again later.</p>
                </div>
              )}

              <div className="flex items-center justify-between pt-4">
                <p className="text-xs text-gray-500 hidden sm:block">THANKS FOR YOUR PATIENCE!</p>
                <button 
                  type="submit" 
                  disabled={loading}
                  className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-full hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-all transform hover:-translate-y-1 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>Sending <Loader2 size={18} className="animate-spin" /></>
                  ) : (
                    <>Send Message <Send size={18} /></>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </SectionContainer>
      
      {/* Success Popup Portal */}
      {status === 'success' && createPortal(
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity duration-300">
           <div className="bg-[#1a1a1a] border border-green-500/30 rounded-2xl p-8 shadow-2xl flex flex-col items-center gap-4 max-w-sm w-full relative">
              {/* Decorative background glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-500/20 rounded-full blur-3xl pointer-events-none"></div>

              <button 
                onClick={() => setStatus('idle')}
                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
                aria-label="Close"
              >
                <X size={20} />
              </button>
              
              <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-2 shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                <CheckCircle2 size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-white text-center">Success!</h3>
              <p className="text-gray-300 text-center">Message sent successfully!</p>
              
              <button 
                onClick={() => setStatus('idle')}
                className="mt-2 px-8 py-2 bg-green-600 hover:bg-green-700 text-white font-medium rounded-full transition-all shadow-lg hover:shadow-green-500/20"
              >
                OK
              </button>
           </div>
        </div>,
        document.body
      )}
    </>
  );
};