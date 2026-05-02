import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock, 
  MessageSquare,
  Globe,
  ArrowRight,
  User,
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  const contactOptions = [
    {
      icon: Phone,
      title: "Call Direct",
      info: "+91 522 232 XXXX",
      subInfo: "Mon-Sat, 9am - 5pm",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: Mail,
      title: "Email Support",
      info: "info@itotlucknow.edu.in",
      subInfo: "Response within 24hrs",
      color: "bg-amber-50 text-amber-600"
    },
    {
      icon: MessageCircle,
      title: "Admission Inquiry",
      info: "admissions@itot.in",
      subInfo: "For prospective students",
      color: "bg-green-50 text-green-600"
    }
  ];

  return (
    <div className="bg-[#fdfdfc] overflow-x-hidden">
      {/* Hero Header */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-6 block">Contact Us</span>
            <h1 className="text-4xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-10 text-black px-4 md:px-0">
              Let's craft your <span className="text-amber-500 underline decoration-2 underline-offset-8">career</span> path together.
            </h1>
            <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
              Whether you're a prospective student or a recruitment partner, we're here to provide the support and information you need.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12">
            
            {/* Contact Details & Options */}
            <div className="lg:col-span-4 space-y-8">
              <div className="grid gap-4">
                {contactOptions.map((opt, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-8 bg-white border border-gray-100 rounded-[32px] hover:shadow-xl hover:shadow-amber-500/5 transition-all group"
                  >
                    <div className={`w-12 h-12 ${opt.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <opt.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-2">{opt.title}</h4>
                    <p className="text-xl font-bold text-black mb-1">{opt.info}</p>
                    <p className="text-gray-400 text-sm font-medium">{opt.subInfo}</p>
                  </motion.div>
                ))}
              </div>

              <div className="p-8 bg-black rounded-[32px] text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-4 tracking-tight">Visit Campus</h4>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start">
                      <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Institute of Training of Trainers (ITOT), Kapurthala Road, Aliganj, Lucknow, UP 226024
                      </p>
                    </div>
                    <div className="flex gap-4 items-start">
                      <Clock className="w-5 h-5 text-amber-500 flex-shrink-0 mt-1" />
                      <p className="text-gray-400 text-sm">
                        Office Hours: Mon - Sat <br />
                        9:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 blur-[40px] -mr-16 -mt-16 rounded-full" />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white p-6 md:p-16 rounded-3xl md:rounded-[60px] border border-gray-100 shadow-2xl shadow-gray-200/40 relative overflow-hidden h-full"
              >
                <AnimatePresence mode="wait">
                  {status === 'success' ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="h-full flex flex-col items-center justify-center text-center py-20"
                    >
                      <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8">
                        <CheckCircle2 className="w-12 h-12" />
                      </div>
                      <h3 className="text-4xl font-bold mb-4 tracking-tighter text-black">Message Received!</h3>
                      <p className="text-gray-500 text-lg max-w-md mx-auto mb-10 leading-relaxed">
                        Thank you for reaching out. We've received your inquiry and our team will get back to you within 24 hours.
                      </p>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="px-12 py-5 bg-black text-white rounded-full font-bold hover:bg-amber-500 hover:text-black transition-all"
                      >
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="mb-12">
                         <h3 className="text-3xl font-bold tracking-tighter text-black mb-4">Send a Message</h3>
                         <p className="text-gray-400 font-medium">Fill out the form below and we'll connect with you shortly.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="relative group">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">Your Name</label>
                            <div className="relative">
                              <User className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-amber-500 transition-colors" />
                              <input 
                                required
                                type="text"
                                placeholder="Enter your full name" 
                                className="w-full pl-14 md:pl-16 pr-6 md:pr-8 py-4 md:py-5 bg-gray-50 rounded-3xl border border-transparent focus:bg-white focus:border-amber-500 focus:shadow-[0_0_0_4px_rgba(245,158,11,0.1)] transition-all outline-none text-black font-medium"
                                value={formData.name}
                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                              />
                            </div>
                          </div>
                          <div className="relative group">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">Email Address</label>
                            <div className="relative">
                              <Mail className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-amber-500 transition-colors" />
                              <input 
                                required
                                type="email"
                                placeholder="name@example.com" 
                                className="w-full pl-14 md:pl-16 pr-6 md:pr-8 py-4 md:py-5 bg-gray-50 rounded-3xl border border-transparent focus:bg-white focus:border-amber-500 focus:shadow-[0_0_0_4px_rgba(245,158,11,0.1)] transition-all outline-none text-black font-medium"
                                value={formData.email}
                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="relative group">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">Subject of Inquiry</label>
                          <div className="relative">
                            <HelpCircle className="absolute left-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-300 group-focus-within:text-amber-500 transition-colors" />
                            <input 
                              required
                              type="text"
                              placeholder="What is this regarding?" 
                              className="w-full pl-14 md:pl-16 pr-6 md:pr-8 py-4 md:py-5 bg-gray-50 rounded-3xl border border-transparent focus:bg-white focus:border-amber-500 focus:shadow-[0_0_0_4px_rgba(245,158,11,0.1)] transition-all outline-none text-black font-medium"
                              value={formData.subject}
                              onChange={(e) => setFormData({...formData, subject: e.target.value})}
                            />
                          </div>
                        </div>

                        <div className="relative group">
                          <label className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3 block">Detailed Message</label>
                          <div className="relative">
                            <MessageSquare className="absolute left-6 top-6 w-5 h-5 text-gray-300 group-focus-within:text-amber-500 transition-colors" />
                            <textarea 
                              required
                              rows={5}
                              placeholder="How can we help you today?" 
                              className="w-full pl-14 md:pl-16 pr-6 md:pr-8 py-4 md:py-5 bg-gray-50 rounded-3xl border border-transparent focus:bg-white focus:border-amber-500 focus:shadow-[0_0_0_4px_rgba(245,158,11,0.1)] transition-all outline-none text-black font-medium resize-none"
                              value={formData.message}
                              onChange={(e) => setFormData({...formData, message: e.target.value})}
                            />
                          </div>
                        </div>

                        <button 
                          disabled={status === 'submitting'}
                          type="submit"
                          className="w-full py-6 bg-amber-500 text-black font-black text-lg rounded-[28px] hover:bg-black hover:text-white transition-all duration-500 flex items-center justify-center gap-4 disabled:opacity-50 group"
                        >
                          {status === 'submitting' ? (
                            <span className="flex items-center gap-3">
                              Processing Inquiry...
                            </span>
                          ) : (
                            <>
                              Send Inquiry <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </>
                          )}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[60px] overflow-hidden group shadow-2xl h-[500px]">
             <div className="absolute inset-0 bg-gray-100 animate-pulse" />
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.0763!2d80.9388!3d26.9003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957d478143a57%3A0xe9c3167a5035f8fc!2sGovernment+Institute+of+Training+of+Trainers+(ITOT)%2C+Aliganj%2C+Lucknow!5e0!3m2!1sen!2sin!4v1714591500000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="ITOT Lucknow Location"
                className="relative z-10 grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute top-10 right-10 z-20 bg-white/90 backdrop-blur px-8 py-6 rounded-3xl border border-white/20 shadow-xl hidden md:block">
                 <p className="text-[10px] font-black uppercase tracking-widest text-amber-600 mb-2">Campus Entrance</p>
                 <p className="font-bold text-black border-b border-gray-100 pb-4 mb-4">Beside ITI Aliganj</p>
                 <div className="flex items-center gap-3 text-xs text-gray-500">
                    <Globe className="w-4 h-4" />
                    <span>Open to public visits</span>
                 </div>
              </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
