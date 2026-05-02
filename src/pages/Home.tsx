import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  BookOpen, 
  Users, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Calendar, 
  Quote, 
  GraduationCap, 
  Building2,
  Clock,
  MapPin,
  Plus,
  Minus,
  ShieldCheck,
  Zap,
  Globe,
  Utensils,
  Coffee,
  Briefcase,
  History,
  Lightbulb
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const images = [
    {
      url: "/Images/college.jpeg",
      title: "ITOT Lucknow Main Campus"
    },
    {
      url: "/Images/img1.jpeg",
      title: "State Level Competition"
    },
    {
      url: "/Images/img2.jpeg",
      title: "Workshop Training"
    },
    {
      url: "/Images/img3.jpeg",
      title: "Student Activities"
    },
    {
      url: "/Images/img4.jpeg",
      title: "Campus Building"
    },
    {
      url: "/Images/img5.jpeg",
      title: "Annual Function"
    },
    {
      url: "/Images/img6.jpeg",
      title: "Practical Training"
    }
  ];

  const testimonials = [
    {
      name: "Amit Kumar",
      role: "Current CITS Student",
      content: "The pedagogical training here is top-notch. I feel confident about my future as a technical instructor.",
      avatar: "AK"
    },
    {
      name: "Priya Sharma",
      role: "Alumni, ITI Instructor",
      content: "ITOT Lucknow provided me with the bridge I needed between my technical skills and teaching ability.",
      avatar: "PS"
    },
    {
      name: "Rahul Verma",
      role: "Electrical Trade Student",
      content: "The workshop facilities and hands-on training are better than any other institute in the region.",
      avatar: "RV"
    }
  ];

  const faqs = [
    {
      question: "What is CITS and how is it different from normal ITI training?",
      answer: "CITS (Craft Instructor Training Scheme) is specifically designed for those who wish to become instructors in ITIs. While ITI focuses on vocational skills, CITS focuses on pedagogical skills (teaching methodologies) alongside advanced technical training."
    },
    {
      question: "How can I apply for admission at ITOT Lucknow?",
      answer: "Admissions are typically handled through the All India Common Entrance Test (AICET) conducted by DGT. Keep an eye on our website and official DGT portals for admission notifications usually released in the summer."
    },
    {
      question: "Are there any hostel facilities available for outstation students?",
      answer: "Yes, ITOT Lucknow provides separate hostel facilities for both male and female trainees within the campus premises, subject to availability."
    },
    {
      question: "What trades are currently offered at the institute?",
      answer: "We offer several popular trades including CSA (Computer Software Application), CHNM (Computer Hardware & Network Maintenance), Electrician, and more. Each trade is equipped with modern infrastructure."
    },
    {
      question: "Is the certification from ITOT Lucknow valid across India?",
      answer: "Absolutely. The National Craft Instructor Certificate (NCIC) awarded after completion is recognized by both State and Central Governments across all ITIs in India."
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section with Slider */}
      <section className="relative h-[90vh] flex items-center justify-center bg-black overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.6, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <img 
              src={images[currentIndex].url} 
              alt={images[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 z-30 p-4 rounded-full bg-black/40 text-white hover:bg-amber-500 hover:text-black transition-all md:left-8 opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 z-30 p-4 rounded-full bg-black/40 text-white hover:bg-amber-500 hover:text-black transition-all md:right-8 opacity-0 group-hover:opacity-100 focus:opacity-100"
          aria-label="Next slide"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-amber-500 text-black text-xs font-bold uppercase tracking-widest mb-6">
              Empowering Future Educators
            </span>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight mb-8">
              ITOT <span className="text-amber-500 underline decoration-2 underline-offset-8">Lucknow</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
              Transforming skilled technicians into master educators through industry-leading pedagogical training and advanced technical education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about" className="px-8 py-4 bg-amber-500 text-black rounded-full font-bold hover:bg-white transition-all flex items-center justify-center gap-2 group shadow-xl shadow-amber-500/20">
                Explore Institute <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/courses" className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-bold border border-white/20 hover:bg-white/20 transition-all flex items-center justify-center">
                View Programs
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-amber-500' : 'bg-white/40'}`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: BookOpen, label: "Programs Offered", value: "15+" },
              { icon: Users, label: "Students Trained", value: "1200+" },
              { icon: Award, label: "Success Rate", value: "98%" },
              { icon: Building2, label: "Years of Legacy", value: "30+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 text-center bg-gray-50 rounded-3xl"
              >
                <stat.icon className="w-8 h-8 text-amber-500 mx-auto mb-4" />
                <h3 className="text-4xl font-bold mb-1 tracking-tighter">{stat.value}</h3>
                <p className="text-gray-500 uppercase tracking-widest text-[10px] font-bold">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Affiliations & Accreditations */}
      <section className="py-12 border-y border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {[
              { name: "NCVT", icon: ShieldCheck, full: "National Council for Vocational Training" },
              { name: "DGT", icon: Zap, full: "Directorate General of Training" },
              { name: "UP GOVT", icon: Building2, full: "Government of Uttar Pradesh" },
              { name: "SKILL INDIA", icon: Globe, full: "Skill India Mission" }
            ].map((brand, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-black">
                  <brand.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-black text-xl tracking-tighter leading-none">{brand.name}</p>
                  <p className="text-[10px] uppercase font-bold text-gray-500">{brand.full}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message from Desk Section */}
      <section className="py-24 bg-[#fdfdfb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] bg-gray-200 rounded-[40px] overflow-hidden">
                <img 
                  src="/Images/img4.jpeg" 
                  alt="Principal Desk"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-amber-500 p-12 rounded-[40px] hidden md:block text-black">
                <Quote className="w-12 h-12 mb-4" />
                <p className="font-bold text-xl leading-tight">
                  "Excellence is <br />not a destination, <br />it is a continuous <br />journey."
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-6 block">From the Principal's Desk</span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight">
                Nurturing the Next Generation of Master Educators
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed text-lg text-balance">
                <p>
                  At ITOT Lucknow, we believe that the quality of technical education is directly proportional to the quality of its instructors. Our mission is to bridge the gap between technical expertise and instructional excellence.
                </p>
                <p>
                  By integrating advanced pedagogical theories with hands-on workshop experience, we ensure that our trainees are not just masters of their craft, but true mentors who can inspire the next wave of industrial talent.
                </p>
              </div>
              <Link to="/about" className="mt-10 inline-flex items-center gap-3 font-bold text-black border-b-2 border-black pb-1 hover:text-amber-600 hover:border-amber-600 transition-all">
                Learn More About Our Vision <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 text-black">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Why Choose ITOT Lucknow?</h2>
            <p className="text-gray-500 text-lg italic serif">"A legacy of skill-based excellence in the heart of Uttar Pradesh"</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { 
                icon: GraduationCap, 
                title: "Pedagogical Excellence", 
                desc: "Learn advanced teaching methodologies specifically designed for technical vocational training." 
              },
              { 
                icon: CheckCircle2, 
                title: "NSQF Compliant", 
                desc: "All our training modules are strictly aligned with National Skills Qualifications Framework standards." 
              },
              { 
                icon: Clock, 
                title: "Hands-on Workshops", 
                desc: "Spend 70% of your training time in state-of-the-art workshops with modern industrial machinery." 
              },
              { 
                icon: MapPin, 
                title: "Strategic Location", 
                desc: "Located in the state capital, providing easy access to numerous industrial hubs and ITIs." 
              },
              { 
                icon: Award, 
                title: "Certified Instructors", 
                desc: "Learn from subject matter experts with decades of industrial and teaching experience." 
              },
              { 
                icon: Building2, 
                title: "Career Placement", 
                desc: "Dedicated placement cell providing assistance for roles in Govt. ITIs and private industries." 
              }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-10 border border-gray-100 rounded-3xl hover:border-amber-200 transition-colors bg-gray-50/50"
              >
                <feature.icon className="w-10 h-10 text-amber-500 mb-6" />
                <h3 className="text-xl font-bold mb-4 text-black">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Life at ITOT Section - Bento Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-6 auto-rows-[240px] md:auto-rows-[300px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-gray-50 rounded-[40px] p-12 flex flex-col justify-end relative overflow-hidden group border border-gray-100 shadow-sm"
            >
              <img src="/Images/img1.jpeg" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 grayscale transition-all duration-700 group-hover:scale-105" alt="Life" />
              <div className="relative z-10">
                <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Campus Life</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter text-black max-w-xl leading-none">
                  More Than Just A Classroom
                </h2>
                <p className="text-gray-600 mt-6 max-w-lg text-lg">
                  Experience a vibrant community of skill-seekers. From technical competitions to cultural celebrations, we nurture holistic growth.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 bg-amber-500 rounded-[40px] p-10 flex flex-col items-center justify-center text-center text-black"
            >
              <Zap className="w-16 h-16 mb-6 animate-pulse" />
              <h3 className="text-3xl font-bold tracking-tighter leading-none mb-4">Hands-On Practice</h3>
              <p className="font-medium opacity-80">70% of our curriculum is dedicated to live workshop exercises.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 bg-black rounded-[40px] overflow-hidden relative group"
            >
              <img src="/Images/img2.jpeg" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" alt="Workshop" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-10 flex flex-col justify-end">
                <p className="text-white font-bold tracking-tight">Advanced Labs</p>
                <p className="text-gray-400 text-sm">Working with industrial standards</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-[#fdfdfc] rounded-[40px] border border-gray-100 p-12 flex flex-col md:flex-row items-center gap-10 group shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 grid grid-cols-2 gap-4">
                <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-700 transition-transform group-hover:rotate-6">
                  <Utensils className="w-8 h-8" />
                </div>
                <div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 transition-transform group-hover:-rotate-6">
                  <Coffee className="w-8 h-8" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold tracking-tighter text-black mb-4">Hostel & Recreation</h3>
                <p className="text-gray-500 leading-relaxed max-w-xl mb-6">
                  A premium living experience with nutritious mess and cafeteria for a comfortable stay.
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  {['24/7 Security', 'Common Room', 'Medical Room', 'Playground'].map((item) => (
                    <span key={item} className="px-4 py-1.5 bg-gray-50 text-gray-600 text-xs font-bold rounded-full border border-gray-100 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-100 transition-colors cursor-default">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses Preview */}
      <section className="py-24 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 text-black">
            <div className="max-w-2xl">
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Specialized Training</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Industry Level <br /> Technical Courses</h2>
            </div>
            <Link to="/courses" className="text-sm font-bold border-b-2 border-black pb-1 hover:text-amber-600 hover:border-amber-600 transition-all uppercase tracking-widest">
              View All Courses
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {['Computer Software Application', 'Computer Hardware & Networking', 'Electrician Trade'].map((course, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-[32px] shadow-sm border border-gray-100 group cursor-pointer"
              >
                <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-8 font-bold text-2xl group-hover:bg-amber-500 group-hover:text-black transition-colors">
                  0{idx + 1}
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-amber-600 transition-colors tracking-tight text-black">{course}</h3>
                <p className="text-gray-500 mb-8 leading-relaxed">
                  Comprehensive training module designed to meet the rigorous technological demands of the current industry 4.0 standards.
                </p>
                <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-bold text-black group-hover:gap-4 transition-all">
                  Full Details <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Testimonials Column */}
            <div className="bg-amber-500 rounded-[40px] p-12 relative overflow-hidden">
              <div className="relative z-10">
                <Quote className="w-16 h-16 text-black/10 absolute -top-4 -left-4" />
                <h2 className="text-3xl font-bold text-black mb-12 relative text-center">Student Stories</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {testimonials.map((t, i) => (
                    <div key={i} className={`bg-white/90 backdrop-blur-sm p-8 rounded-3xl relative ${i === 2 ? 'md:col-span-2' : ''}`}>
                      <p className="text-gray-800 italic mb-6 leading-relaxed">"{t.content}"</p>
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center font-bold text-xs">
                          {t.avatar}
                        </div>
                        <div>
                          <p className="font-bold text-sm text-black">{t.name}</p>
                          <p className="text-xs text-gray-500 font-medium">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full blur-2xl -ml-24 -mb-24" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#f9f9f7]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20 text-black">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Help Center</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Frequently Asked <br /> Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`rounded-[32px] overflow-hidden border transition-all duration-300 ${activeFaq === idx ? 'border-amber-500 bg-white shadow-xl shadow-amber-500/5' : 'border-gray-200 bg-white/50 hover:bg-white'}`}
              >
                <button 
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                  className="w-full px-8 py-8 flex items-center justify-between text-left group"
                >
                  <span className={`text-xl font-bold tracking-tight transition-colors ${activeFaq === idx ? 'text-amber-600' : 'text-black'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${activeFaq === idx ? 'bg-amber-500 text-black rotate-180' : 'bg-gray-100 text-gray-400 group-hover:bg-amber-50 text-amber-500'}`}>
                    {activeFaq === idx ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {activeFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-8 text-gray-600 leading-relaxed text-lg border-t border-gray-50 pt-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-500 font-medium">Still have questions? <Link to="/contact" className="text-amber-500 font-bold hover:underline">Contact our support team</Link></p>
          </div>
        </div>
      </section>

      {/* Closing CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-50 rounded-[60px] p-12 md:p-24 text-center border border-gray-100 flex flex-col items-center">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-8">
              <GraduationCap className="w-8 h-8 text-amber-500" />
            </div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-3xl text-black">
              Ready to Shape the <br /> Future of Skill Education?
            </h2>
            <p className="text-gray-500 text-lg mb-12 max-w-xl">
              Admissions for the upcoming session are now open. Contact our counselors or visit the campus for a guided session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-10 py-5 bg-black text-white rounded-full font-bold hover:bg-amber-500 hover:text-black transition-all flex items-center justify-center gap-3">
                Connect with Us <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/gallery" className="px-10 py-5 bg-white text-black border border-gray-200 rounded-full font-bold hover:bg-gray-50 transition-all">
                Explore Gallery
              </Link>
            </div>
            <div className="mt-16 flex items-center gap-8 justify-center opacity-40 text-black">
              <Building2 className="w-12 h-12" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
