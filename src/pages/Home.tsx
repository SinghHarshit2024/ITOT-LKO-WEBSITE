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

  const leadershipMessages = [
    {
      role: "Director",
      name: "Dr. S.P. Vishwakarma",
      quote: "Quality training is the cornerstone of sustainable industrial growth. Our commitment at ITOT is to produce instructors who don't just teach, but transform the vocational landscape.",
      image: "/Images/img4.jpeg"
    },
    {
      role: "Deputy Director",
      name: "Smt. Anjali Singh",
      quote: "Innovation in vocational pedagogy is not just about tools, it's about the mindset of excellence. We nurture that mindset every day at our campus through hands-on learning.",
      image: "/Images/img6.jpeg"
    },
    {
      role: "Assistant Director",
      name: "Shri Rajesh Kumar",
      quote: "Bridging the gap between traditional skills and Industry 4.0 demands a pedagogical shift that we facilitate through rigorous workshop interactions and modern teaching methodologies.",
      image: "/Images/img2.jpeg"
    }
  ];

  const dignitaries = [
    {
      role: "Prime Minister of India",
      name: "Shri Narendra Modi",
      image: "/Images/img3.jpeg"
    },
    {
      role: "Chief Minister of UP",
      name: "Shri Yogi Adityanath",
      image: "/Images/img5.jpeg"
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
      {/* Hero Section with Modern Split Layout */}
      <section id="hero-section" className="relative min-h-[80vh] lg:h-[85vh] flex items-center bg-[#0d0f1a] overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-500/5 skew-x-12 translate-x-24 hidden lg:block" />
        
        <div className="relative z-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-16 items-center w-full py-12 lg:py-0">
          
          {/* Content Column - Appears below image on mobile */}
          <div className="text-left order-2 lg:order-1 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3 mb-4 lg:mb-6">
                <div className="w-8 lg:w-12 h-[1px] bg-amber-500" />
                <span className="text-amber-500 text-[9px] lg:text-[10px] font-black uppercase tracking-[0.3em] lg:tracking-[0.4em]">
                  Empowering Future Educators
                </span>
              </div>
              
              <h1 id="hero-title" className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-black text-white leading-[1.2] lg:leading-[1.1] tracking-tighter mb-4 lg:mb-6 uppercase">
                STATE STAFF TRAINING <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-300">& RESEARCH Centre</span>
                <div className="text-xs md:text-base text-gray-400 mt-2 font-bold tracking-widest leading-none">"ITOT, ALIGANJ, LUCKNOW"</div>
              </h1>
              
              <p className="text-gray-400 text-xs md:text-sm lg:text-base max-w-md mb-6 lg:mb-10 font-medium leading-relaxed">
                Transforming skilled technicians into master educators through <span className="text-white font-semibold">industry-leading pedagogical training</span> and advanced technical education.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-3 lg:gap-4 mb-8 lg:mb-10">
                <Link 
                  to="/about" 
                  id="btn-explore"
                  className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-amber-500 text-black rounded-lg lg:rounded-xl text-[10px] lg:text-[11px] font-black uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-3 group shadow-xl shadow-amber-500/10"
                >
                  Explore Institute <ArrowRight className="w-3.5 h-3.5 lg:w-4 lg:h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/courses" 
                  id="btn-programs"
                  className="w-full sm:w-auto px-6 lg:px-8 py-3 lg:py-4 bg-white/5 backdrop-blur-md text-white border border-white/10 rounded-lg lg:rounded-xl text-[10px] lg:text-[11px] font-black uppercase tracking-widest hover:bg-white/10 transition-all flex items-center justify-center"
                >
                  View Programs
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Image Column - Appears on top on mobile */}
          <div className="relative flex flex-col items-center lg:items-end justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-[420px] aspect-square"
            >
              {/* Decorative Accent for Mobile Visibility */}
              <div className="absolute -inset-2 lg:-inset-4 border border-amber-500/20 rounded-2xl lg:rounded-[32px] pointer-events-none" />
              
              {/* Main Image Container */}
              <div id="hero-image-container" className="relative h-full w-full rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl group/img border border-white/10 bg-gray-900">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <img 
                      src={images[currentIndex].url} 
                      alt={images[currentIndex].title}
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    
                    {/* Floating Label - Hidden on very small screens to save space */}
                    <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
                      <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-black/40 backdrop-blur-md border border-white/10 p-3 rounded-lg lg:rounded-xl"
                      >
                        <p className="text-amber-500 text-[7px] lg:text-[8px] font-black uppercase tracking-widest mb-0.5 lg:mb-1">Campus Snapshot</p>
                        <p className="text-white font-bold text-[10px] lg:text-xs leading-tight tracking-tight">{images[currentIndex].title}</p>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
            
            {/* Slide Indicators - Below Image Container */}
            <div className="flex items-center justify-center gap-3 mt-8 lg:mt-10 w-full lg:max-w-[420px]">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1 lg:h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 lg:w-12 bg-amber-500' : 'w-2 lg:w-3 bg-white/20 hover:bg-white/40'}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Government Dignitaries Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-6 block"
            >
              Visionary Patronage
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-black leading-tight mb-8"
            >
              Under the Resolute Guidance of Our Leadership
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-600 text-lg leading-relaxed"
            >
              Government ITOT Lucknow is privileged to operate under the transformative vision of the State and Union government, committed to scaling new heights in vocational training and instructor excellence.
            </motion.p>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32">
            {dignitaries.map((leader, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-8 border-gray-50 mb-6 group-hover:border-amber-500/20 transition-all duration-500 shadow-xl relative">
                  <div className="absolute inset-0 bg-amber-500/5 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-amber-500 font-bold uppercase tracking-[0.2em] text-[10px] block">{leader.role}</span>
                  <h3 className="text-2xl md:text-3xl font-black tracking-tighter text-black">{leader.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
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
          <div className="flex flex-wrap items-center justify-center gap-x-8 md:gap-x-12 gap-y-10 md:gap-24 opacity-100 transition-all duration-500">
            {[
              { name: "NCVT", icon: ShieldCheck, full: "Council" },
              { name: "DGT", icon: Zap, full: "Training" },
              { name: "UP GOVT", icon: Building2, full: "UP Govt" },
              { name: "SKILL INDIA", icon: Globe, full: "Mission" }
            ].map((brand, i) => (
              <div key={i} className="flex flex-col md:flex-row items-center gap-3 justify-center min-w-[120px] md:min-w-0">
                <div className="w-10 h-10 md:w-10 md:h-10 bg-amber-500/10 md:bg-amber-500 rounded-full flex items-center justify-center text-amber-600 md:text-black flex-shrink-0 transition-all">
                  <brand.icon className="w-5 h-5 md:w-5 md:h-5" />
                </div>
                <div className="text-center md:text-left">
                  <p className="font-black text-lg md:text-xl tracking-tighter leading-none text-black">{brand.name}</p>
                  <p className="text-[9px] md:text-[10px] uppercase font-bold text-gray-500 mt-1">{brand.full}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Administrative Leadership Section */}
      <section className="py-24 bg-[#fdfdfb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-6 block"
            >
              Our Leadership
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold tracking-tighter text-black leading-tight"
            >
              Messages from the <br /> Administrative Desk
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipMessages.map((leader, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="bg-white rounded-[40px] overflow-hidden border border-gray-100 shadow-sm transition-all group"
              >
                <div className="p-6 pb-0">
                  <div className="aspect-[3/4] relative overflow-hidden rounded-[32px] shadow-lg">
                    <img 
                      src={leader.image} 
                      alt={leader.role}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <p className="text-amber-500 font-bold uppercase tracking-widest text-[9px] mb-1">{leader.role}</p>
                      <p className="text-white font-bold text-lg tracking-tight leading-none">{leader.name}</p>
                    </div>
                  </div>
                </div>
                <div className="p-8 relative min-h-[180px] flex flex-col justify-center">
                  <Quote className="w-8 h-8 text-amber-500/10 absolute top-6 right-8 rotate-180" />
                  <p className="text-gray-600 leading-relaxed italic relative z-10">
                    "{leader.quote}"
                  </p>
                </div>
              </motion.div>
            ))}
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
          <div className="grid lg:grid-cols-12 gap-6 auto-rows-min md:auto-rows-[300px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-8 bg-gray-50 rounded-[40px] p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group border border-gray-100 shadow-sm min-h-[350px] md:min-h-0"
            >
              <img src="/Images/img1.jpeg" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 md:transition-all md:duration-700 md:group-hover:scale-105" alt="Life" />
              <div className="relative z-10">
                <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">Campus Life</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-black max-w-xl leading-none">
                  More Than Just A Classroom
                </h2>
                <p className="text-gray-600 mt-6 max-w-lg text-base md:text-lg">
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
              <img src="/Images/img2.jpeg" className="w-full h-full object-cover opacity-80 md:transition-transform md:duration-700 md:group-hover:scale-110" alt="Workshop" />
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
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 text-black">
            <div className="max-w-2xl">
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block text-center md:text-left">Specialized Training</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-center md:text-left">Industry Level <br /> Technical Courses</h2>
            </div>
            <Link to="/courses" className="w-full md:w-auto text-center md:text-left text-sm font-bold border-b-2 border-black pb-1 hover:text-amber-600 hover:border-amber-600 transition-all uppercase tracking-widest">
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
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 px-4">Frequently Asked <br /> Questions</h2>
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
