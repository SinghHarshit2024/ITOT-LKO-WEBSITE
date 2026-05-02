import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  X, 
  Zap, 
  Wrench, 
  Monitor, 
  Palette, 
  Search,
  ArrowRight,
  GraduationCap,
  Clock,
  BookOpen
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Course {
  name: string;
  duration: string;
  eligibility: string;
  description?: string;
  category: string;
  prospects: string[];
}

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      title: "IT & Digital Services",
      icon: Monitor,
      color: "blue",
      courses: [
        { 
          name: "Computer Software Application (CSA)", 
          duration: "1 Year", 
          eligibility: "10th/12th Pass",
          category: "IT & Digital Services",
          prospects: ["Software Trainer", "IT Coordinator", "Database Admin Assistant"],
          description: "Master the art of pedagogical software training. This course focuses on advanced software applications, database management, and programming fundamentals to prepare trainers for the IT sector."
        },
        { 
          name: "Computer Hardware and Networking Maintenance (CHNM)", 
          duration: "1 Year", 
          eligibility: "10th/12th Pass",
          category: "IT & Digital Services",
          prospects: ["Network Instructor", "System Admin", "Hardware Consultant"],
          description: "A comprehensive program covering computer hardware troubleshooting, network configuration, and system maintenance essential for modern IT infrastructure."
        },
        { 
          name: "Office Management", 
          duration: "1 Year", 
          eligibility: "10th/12th Pass",
          category: "IT & Digital Services",
          prospects: ["Admin Trainer", "Executive Assistant", "Office Manager"],
          description: "Focuses on administrative excellence, digital office tools, communication skills, and organizational management."
        },
        { 
          name: "Secretarial Practice", 
          duration: "1 Year", 
          eligibility: "10th/12th Pass",
          category: "IT & Digital Services",
          prospects: ["Language Instructor", "Personal Secretary", "Content Manager"],
          description: "Specialized training in secretarial duties, shorthand, and office correspondence specifically in the Hindi language."
        },
      ]
    },
    {
      title: "Electrical & Electronics",
      icon: Zap,
      color: "amber",
      courses: [
        { 
          name: "Electrician", 
          duration: "1 Year", 
          eligibility: "10th Pass + ITI", 
          category: "Electrical & Electronics",
          prospects: ["Electrical Instructor", "Maintenance Engineer", "Automation Expert"],
          description: "Advanced training in electrical systems, wiring, and industrial maintenance for specialized trainers." 
        },
        { 
          name: "Electronics Mechanic", 
          duration: "1 Year", 
          eligibility: "10th Pass + ITI", 
          category: "Electrical & Electronics",
          prospects: ["Electronic Lab In-charge", "R&D Assistant", "Service Trainer"],
          description: "Covers electronic circuits, component testing, and repair of modern consumer and industrial electronics." 
        },
        { 
          name: "Instrument Mechanic", 
          duration: "1 Year", 
          eligibility: "10th Pass + ITI", 
          category: "Electrical & Electronics",
          prospects: ["Process Control Expert", "Calibration Specialist", "Instrumentation Trainer"],
          description: "Training in process control instrumentation, calibration, and maintenance of industrial sensors." 
        },
        { 
          name: "RAC Mechanic", 
          duration: "1 Year", 
          eligibility: "10th Pass + ITI", 
          category: "Electrical & Electronics",
          prospects: ["HVAC Instructor", "Service Head", "Facility Manager"],
          description: "Advanced RAC systems training, covering both domestic and industrial cooling solutions." 
        },
      ]
    },
    {
      title: "Mechanical & Civil Works",
      icon: Wrench,
      color: "gray",
      courses: [
        { 
          name: "Fitter", 
          duration: "1 Year", 
          eligibility: "10th Pass + ITI", 
          category: "Mechanical & Civil Works",
          prospects: ["Workshop Instructor", "Assembly Expert", "Quality Control"],
          description: "Focuses on precision fitting, machinery maintenance, and industrial assembly techniques." 
        },
        { 
          name: "Turner", 
          duration: "1 Year", 
          eligibility: "10th Pass + ITI", 
          category: "Mechanical & Civil Works",
          prospects: ["Machining Trainer", "CNC Operator", "Tool Designer"],
          description: "Specialized training in lathe operations, metal shaping, and high-precision component manufacturing." 
        },
        { 
          name: "Draughtsman Civil", 
          duration: "1 Year", 
          eligibility: "10th Pass + ITI", 
          category: "Mechanical & Civil Works",
          prospects: ["CAD Instructor", "Architectural Assistant", "Planning In-charge"],
          description: "Techniques for civil engineering drawings, structural design, and CAD application." 
        },
        { 
          name: "Plumber", 
          duration: "1 Year", 
          eligibility: "10th Pass + ITI", 
          category: "Mechanical & Civil Works",
          prospects: ["Sanitation Trainer", "Site Supervisor", "Contractor"],
          description: "Training in modern sanitation systems, blueprint reading, and industrial plumbing solutions." 
        },
      ]
    },
    {
      title: "Creative & Lifestyle",
      icon: Palette,
      color: "rose",
      courses: [
        { 
          name: "Cosmetology", 
          duration: "1 Year", 
          eligibility: "10th Pass + ITI", 
          category: "Creative & Lifestyle",
          prospects: ["Beauty Trainer", "Salon Owner", "Skin Care Expert"],
          description: "Advanced beauty culture training, covering skin care, hair styling, and holistic wellness." 
        },
        { 
          name: "Dress Making", 
          duration: "1 Year", 
          eligibility: "10th Pass + ITI", 
          category: "Creative & Lifestyle",
          prospects: ["Fashion Pedagogy", "Apparel Designer", "Boutique Head"],
          description: "Specialized fashion design, pattern making, and garment construction for trainers." 
        },
        { 
          name: "Sewing Technology", 
          duration: "1 Year", 
          eligibility: "10th Pass + ITI", 
          category: "Creative & Lifestyle",
          prospects: ["Industrial Sewing Expert", "Production Manager", "Textile Trainer"],
          description: "Industrial sewing techniques, textile technology, and mass-production efficiency." 
        },
      ]
    }
  ];

  const allCourses = categories.flatMap(cat => cat.courses);
  const filteredCourses = allCourses.filter(course => 
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-24 bg-[#fdfdfc]">
      <div className="max-w-7xl mx-auto px-6">
        <header className="mb-20">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center md:text-left"
            >
              <span className="text-amber-500 font-bold uppercase tracking-widest text-[10px] md:text-xs mb-4 block">Craft Instructor Training Scheme (CITS)</span>
              <h1 className="text-4xl md:text-8xl font-bold tracking-tighter mb-8 leading-tight">
                Sharpening the <span className="text-amber-500 underline decoration-2 underline-offset-8">Instructors.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto md:mx-0 leading-relaxed">
                Our curriculum integrates industrial expertise with modern teaching methodology to produce master trainers for the global market.
              </p>
            </motion.div>
            
            <div id="search" className="relative group">
              <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-gray-400 group-focus-within:text-amber-500 transition-colors" />
              </div>
              <input 
                type="text" 
                placeholder="Search for a specific trade..." 
                className="w-full pl-14 md:pl-16 pr-6 md:pr-8 py-5 md:py-6 bg-white border border-gray-100 rounded-[32px] shadow-sm focus:ring-4 focus:ring-amber-500/10 focus:border-amber-500 outline-none transition-all text-base md:text-lg font-medium"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </header>

        {searchTerm ? (
          <div className="mb-32">
             <h2 className="text-2xl font-bold mb-10 text-gray-400 italic">Showing results for "{searchTerm}"</h2>
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
               {filteredCourses.map((course, idx) => (
                 <CourseCard key={idx} course={course} onOpen={() => setSelectedCourse(course)} />
               ))}
             </div>
             {filteredCourses.length === 0 && (
               <div className="text-center py-20 bg-gray-50 rounded-[40px] border border-dashed border-gray-200">
                  <p className="text-gray-400 font-bold text-xl">No trades found matching your search.</p>
               </div>
             )}
          </div>
        ) : (
          <div className="space-y-32">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between mb-12 border-b border-gray-50 pb-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-amber-500 rounded-3xl flex items-center justify-center text-black shadow-xl shadow-amber-500/10">
                      <cat.icon className="w-8 h-8" />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">{cat.title}</h2>
                      <p className="text-gray-400 font-medium uppercase tracking-widest text-[10px] mt-1">Specialized Trade Group</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center gap-2 text-gray-500 font-bold bg-gray-50 px-6 py-2 rounded-full border border-gray-100">
                    <GraduationCap className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-widest">{cat.courses.length} Programs</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {cat.courses.map((course, cIdx) => (
                    <CourseCard key={cIdx} course={course} onOpen={() => setSelectedCourse(course)} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-32 p-12 md:p-24 bg-black rounded-[60px] relative overflow-hidden text-center text-white">
            <div className="relative z-10">
              <h3 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Become a Certified <br /> Technical Mentor</h3>
              <p className="text-gray-400 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
                Join our CITS programs and unlock opportunities in Govt. ITIs and private industries as a specialized skill instructor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="px-10 py-5 bg-amber-500 text-black rounded-full font-bold hover:bg-white transition-all flex items-center justify-center gap-2 group">
                  Apply Online Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a href="#search" className="px-10 py-5 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all text-center">
                  Browse All Trades
                </a>
              </div>
            </div>
            {/* Background design */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] -mr-48 -mt-48 rounded-full" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-500/5 blur-[80px] -ml-32 -mb-32 rounded-full" />
        </div>
      </div>

      <AnimatePresence>
        {selectedCourse && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6 py-10">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-3xl bg-white rounded-3xl md:rounded-[48px] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
            >
              <div className="md:w-2/5 bg-amber-500 p-8 md:p-12 text-black flex flex-col justify-between">
                <div>
                   <GraduationCap className="w-12 h-12 md:w-16 md:h-16 mb-6 md:mb-8 opacity-40" />
                   <h4 className="text-3xl md:text-4xl font-bold tracking-tighter leading-none mb-6">Expert <br /> Pedagogy</h4>
                   <p className="font-medium text-black/70 leading-relaxed mb-auto text-sm md:text-base">
                     "Transforming vocational training into a high-impact teaching career."
                   </p>
                </div>
                <div className="hidden md:block space-y-4 pt-8">
                  <div className="bg-black/5 p-4 rounded-2xl border border-black/10">
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">Duration</p>
                    <p className="font-bold flex items-center gap-2"><Clock className="w-4 h-4" /> {selectedCourse.duration}</p>
                  </div>
                  <div className="bg-black/5 p-4 rounded-2xl border border-black/10">
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">Eligibility</p>
                    <p className="font-bold break-words">{selectedCourse.eligibility}</p>
                  </div>
                </div>
              </div>
              
              <div className="md:w-3/5 p-8 md:p-12 overflow-y-auto">
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-6 right-6 md:top-8 md:right-8 p-3 text-gray-400 hover:text-black hover:bg-gray-100 rounded-full transition-all z-20"
                >
                  <X className="w-6 h-6" />
                </button>
                
                <div className="relative">
                  <span className="text-amber-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">Program Specification</span>
                  <h3 className="text-3xl font-bold mb-8 tracking-tighter leading-tight text-black">{selectedCourse.name}</h3>
                  
                  <div className="space-y-10">
                    <p className="text-gray-600 leading-relaxed text-lg border-l-4 border-amber-500 pl-6 bg-amber-50/50 py-4">
                      {selectedCourse.description}
                    </p>
                    
                    <div>
                      <h5 className="font-bold text-black mb-6 flex items-center gap-3">
                        <span className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center text-xs">01</span>
                        Career Prospects
                      </h5>
                      <div className="grid grid-cols-1 gap-3">
                        {selectedCourse.prospects.map((p, i) => (
                          <div key={i} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                             <CheckCircle2 className="w-5 h-5 text-amber-500" />
                             <span className="font-bold text-gray-700">{p}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link 
                      to="/contact"
                      className="w-full py-5 bg-black text-white font-bold text-center rounded-3xl hover:bg-amber-500 hover:text-black transition-all block group"
                    >
                      Enroll for this Session <ArrowRight className="inline-block ml-2 group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface CourseCardProps {
  course: Course;
  onOpen: () => void;
  key?: any;
}

const CourseCard = ({ course, onOpen }: CourseCardProps) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group p-8 md:p-10 bg-white border border-gray-100 rounded-3xl md:rounded-[40px] hover:border-amber-500 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 flex flex-col justify-between"
  >
    <div>
      <div className="flex justify-between items-start mb-10">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-colors">
          <BookOpen className="w-6 h-6" />
        </div>
        <div className="bg-gray-100 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-gray-400 group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">
          Instructors Scheme
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-6 group-hover:text-amber-600 transition-colors uppercase tracking-tighter leading-tight text-black">{course.name}</h3>
      <div className="space-y-4 mb-10">
        <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
          <Clock className="w-5 h-5 text-amber-500 opacity-60" />
          <span>{course.duration}</span>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
          <GraduationCap className="w-5 h-5 text-amber-500 opacity-60" />
          <span className="truncate">{course.eligibility}</span>
        </div>
      </div>
    </div>
    <button 
      onClick={onOpen}
      className="w-full py-5 bg-gray-50 text-black font-bold text-sm rounded-3xl group-hover:bg-black group-hover:text-white transition-all flex items-center justify-center gap-2"
    >
      Program Details <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
    </button>
  </motion.div>
);

export default Courses;
