import { motion } from 'motion/react';
import { 
  Target, 
  History, 
  Award, 
  ShieldCheck, 
  GraduationCap, 
  Building2, 
  Cpu, 
  Lightbulb,
  CheckCircle2,
  Users
} from 'lucide-react';

const About = () => {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#fdfdfc]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-6 block">Our Heritage & Future</span>
              <h1 className="text-4xl md:text-8xl font-bold tracking-tighter mb-10 leading-[0.9] px-4 md:px-0">
                Pioneering Technical Training in <span className="text-amber-500 underline decoration-2 underline-offset-8">Lucknow.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                The Institute of Training of Trainers (ITOT) Lucknow stands as a beacon of vocational excellence, transforming technical skillsets into pedagogical mastery.
              </p>
            </motion.div>
          </div>
        </div>
        
        {/* Subtle background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -z-10 translate-x-1/2 blur-[100px] rounded-full" />
      </section>

      {/* Intro Image Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="aspect-square md:aspect-[16/9] rounded-3xl md:rounded-[40px] overflow-hidden shadow-2xl relative group"
              >
                <img src="/Images/college.jpeg" className="w-full h-full object-cover md:grayscale md:group-hover:grayscale-0 md:group-hover:scale-110 transition-all duration-700" alt="Campus" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </motion.div>
            </div>
            <div className="md:col-span-4">
              <div className="bg-amber-500 p-8 md:p-12 rounded-3xl md:rounded-[40px] text-black">
                <p className="text-4xl font-black mb-4">30+</p>
                <p className="font-bold tracking-tight text-xl leading-tight">Years of preparing <br /> world-class <br /> technical educators.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History & Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-start">
            <div className="space-y-12">
              <div>
                <div className="flex items-center gap-3 mb-6 text-amber-500">
                  <History className="w-6 h-6" />
                  <span className="font-bold uppercase tracking-widest text-xs">Our Journey</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight text-black">A Legacy Built on Skill</h2>
                <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                  <p>
                    Established with a vision to standardize vocational training across Uttar Pradesh, ITOT Lucknow has evolved into a premier institute under the Directorate of Training and Employment (UP).
                  </p>
                  <p>
                    From humble beginnings as a small training center, we have grown into a multi-trade campus with state-of-the-art labs and a faculty comprised of industry veterans and certified pedagogical experts.
                  </p>
                  <p>
                    Our institution played a pivotal role in the implementation of the National Skills Qualifications Framework (NSQF) in the region, ensuring our trainees are competitive on a national stage.
                  </p>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <ShieldCheck className="w-10 h-10 text-amber-500 mb-4" />
                  <h4 className="font-bold text-xl mb-2 text-black">NCVT Affiliated</h4>
                  <p className="text-gray-500 text-sm">Recognized by the National Council for Vocational Training.</p>
                </div>
                <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <Award className="w-10 h-10 text-amber-500 mb-4" />
                  <h4 className="font-bold text-xl mb-2 text-black">ISO Certified</h4>
                  <p className="text-gray-500 text-sm">Maintaining international standards in training quality.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-black text-white p-8 md:p-10 rounded-3xl md:rounded-[40px]">
                    <Target className="w-12 h-12 text-amber-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                    <p className="text-gray-400 text-sm leading-relaxed italic">
                      "To be a global center of excellence in vocational pedagogy, fostering a new generation of trainers who inspire industrial innovation."
                    </p>
                  </div>
                  <div className="bg-amber-100 p-8 md:p-10 rounded-3xl md:rounded-[40px] border border-amber-200">
                    <GraduationCap className="w-12 h-12 text-amber-600 mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-black">Our Mission</h3>
                    <p className="text-amber-800/80 text-sm leading-relaxed font-medium">
                      To deliver competency-based educational programs that blend technical mastery with advanced instructional techniques.
                    </p>
                  </div>
                </div>
                <div className="pt-0 md:pt-12 space-y-6">
                  <div className="bg-gray-100 p-8 md:p-10 rounded-3xl md:rounded-[40px]">
                    <Users className="w-12 h-12 text-amber-500 mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-black">Our Impact</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      Successfully training over 10,000 instructors who are now shaping the future of ITIs across India.
                    </p>
                  </div>
                  <div className="bg-amber-500 p-8 md:p-10 rounded-3xl md:rounded-[40px]">
                    <CheckCircle2 className="w-12 h-12 text-black mb-6" />
                    <h3 className="text-2xl font-bold mb-4 text-black">Goal 2030</h3>
                    <p className="text-black/80 text-sm leading-relaxed font-bold italic">
                      Achieving 100% digitization of our training modules and industrial lab facilities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-24 bg-[#f9f9f7]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 text-black">
            <span className="text-amber-500 font-bold uppercase tracking-widest text-xs mb-4 block">World Class Facilities</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Superior Infrastructure</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
             {[
               { icon: Building2, title: "Modern Campus", desc: "Sprawling campus with eco-friendly architecture and smart classrooms." },
               { icon: Cpu, title: "Advanced Labs", desc: "Equipped with latest PLCs, CNC machines, and diagnostic equipment." },
               { icon: Lightbulb, title: "Innovation Hub", desc: "Dedicated space for student research and technical experimentation." },
               { icon: ShieldCheck, title: "Secure Stay", desc: "Separate secure hostels for men and women with all basic amenities." }
             ].map((item, i) => (
               <div key={i} className="bg-white p-10 rounded-[32px] border border-gray-100 hover:shadow-xl transition-all group">
                 <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center text-amber-500 mb-6 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                   <item.icon className="w-6 h-6" />
                 </div>
                 <h4 className="font-bold text-xl mb-4 text-black">{item.title}</h4>
                 <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-black rounded-[60px] p-12 md:p-24 text-white overflow-hidden relative">
            <div className="grid md:grid-cols-2 gap-20 relative z-10">
              <div>
                 <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 max-w-md">Our Core Values</h2>
                 <p className="text-gray-400 text-lg leading-relaxed italic">"The DNA of our institution that defines every decision and action."</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="border-l-2 border-amber-500 pl-6">
                    <p className="font-bold text-xl mb-1">Integrity</p>
                    <p className="text-gray-500 text-sm">Transparency in every action.</p>
                  </div>
                  <div className="border-l-2 border-amber-500 pl-6">
                    <p className="font-bold text-xl mb-1">Excellence</p>
                    <p className="text-gray-500 text-sm">Continuous pursuit of quality.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="border-l-2 border-amber-500 pl-6">
                    <p className="font-bold text-xl mb-1">Innovation</p>
                    <p className="text-gray-500 text-sm">Redefining training methods.</p>
                  </div>
                  <div className="border-l-2 border-amber-500 pl-6">
                    <p className="font-bold text-xl mb-1">Commitment</p>
                    <p className="text-gray-500 text-sm">Dedicated to our trainees.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background design elements */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 blur-[100px] -mr-48 -mb-48 rounded-full" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
