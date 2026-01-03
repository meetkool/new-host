import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import {
   GraduationCap,
   Award,
   BookOpen,
   Users,
   Star,
   CheckCircle2,
   ArrowRight
} from 'lucide-react';

const Faculty = () => {
   const navigate = useNavigate();
   const faculty = [
      {
         name: 'ASW Sir',
         subject: 'Organic Chemistry',
         qualification: 'Senior Faculty',
         experience: '21 Years',
         specialization: 'Organic Chemistry',
         achievements: ['Expert in Mechanisms', 'Top Rank Producer'],
         image: '/images/ppl1.png'
      },
      {
         name: 'VKR Sir',
         subject: 'Mathematics',
         qualification: 'IIT Delhi',
         experience: '24 Years',
         specialization: 'Mathematics',
         achievements: ['Ex-FIITJEE', 'Olympiad Expert'],
         image: '/images/ppl2.png'
      },
      {
         name: 'NMS Sir',
         subject: 'Physics',
         qualification: 'IIT Kanpur',
         experience: '20 Years',
         specialization: 'Physics',
         achievements: ['Conceptual Mastery', 'Mentor of IITians'],
         image: '/images/ppl3.png'
      },
      {
         name: 'DS Sir',
         subject: 'Physical & Inorganic Chemistry',
         qualification: 'Senior Faculty',
         experience: '21 Years',
         specialization: 'Physical & Inorganic',
         achievements: ['Problem Solving Wizard', 'Result Oriented'],
         image: '/images/ppl4.png'
      },
      {
         name: 'Satish Gurjar',
         subject: 'ALL',
         qualification: 'Senior Faculty',
         experience: '10 Years',
         specialization: 'Physical & Inorganic',
         achievements: ['Problem Solving Wizard', 'Result Oriented'],
         image: '/images/sp-2.png'
      }
   ];

   return (
      <div className="min-h-screen pt-16 font-sans bg-gray-50">
         {/* Red Header */}
         <section className="bg-[#0b3259] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-end">
               <div>
                  <div className="flex items-center gap-2 mb-2">
                     <div className="h-1 w-10 bg-[#19a951]"></div>
                     <span className="text-[#19a951] font-bold uppercase tracking-widest text-sm">Academic Excellence</span>
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold">Our Faculty</h1>
               </div>
               <div className="hidden md:block">
                  <Users className="w-24 h-24 text-white/20" />
               </div>
            </div>
         </section>

         {/* Stats Row */}
         <section className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4">
               <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200">
                  <div className="p-6 text-center">
                     <div className="text-3xl font-black text-[#0b3259] mb-1">100%</div>
                     <div className="text-sm font-bold text-gray-500 uppercase">IITian / Expert Faculty</div>
                  </div>
                  <div className="p-6 text-center">
                     <div className="text-3xl font-black text-[#0b3259] mb-1">21+</div>
                     <div className="text-sm font-bold text-gray-500 uppercase">Avg Experience</div>
                  </div>
                  <div className="p-6 text-center">
                     <div className="text-3xl font-black text-[#0b3259] mb-1">5000+</div>
                     <div className="text-sm font-bold text-gray-500 uppercase">IIT Selections</div>
                  </div>
                  <div className="p-6 text-center">
                     <div className="text-3xl font-black text-[#0b3259] mb-1">24/7</div>
                     <div className="text-sm font-bold text-gray-500 uppercase">Doubt Support</div>
                  </div>
               </div>
            </div>
         </section>

         {/* Faculty Grid */}
         <section className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Mentors Who Shape Futures</h2>
                  <div className="w-20 h-1 bg-[#19a951] mx-auto"></div>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {faculty.map((teacher, index) => (
                     <div key={index} className="bg-white shadow-md hover:shadow-2xl transition-all duration-300 group rounded-xl overflow-hidden border border-gray-100 flex flex-col items-center text-center">
                        <div className="w-full aspect-[4/5] overflow-hidden bg-gray-100 relative">
                           <div className="absolute inset-0 bg-gradient-to-t from-[#0b3259]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                              <p className="text-white font-bold">{teacher.specialization}</p>
                           </div>
                           <img
                              src={teacher.image}
                              alt={teacher.name}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                           />
                        </div>

                        <div className="p-5 w-full bg-white relative">
                           <div className="absolute -top-6 left-0 right-0 flex justify-center">
                              <Badge className="bg-[#19a951] hover:bg-[#158f43] text-black border-none shadow-md">
                                 {teacher.subject}
                              </Badge>
                           </div>

                           <h3 className="text-xl font-bold text-[#0b3259] mt-3 mb-1">{teacher.name}</h3>
                           <p className="text-sm text-gray-500 font-semibold mb-3">{teacher.qualification}</p>

                           <div className="border-t border-gray-100 pt-3 flex justify-center items-center gap-2 text-sm text-gray-600">
                              <Star className="w-4 h-4 text-[#19a951] fill-current" />
                              <span className="font-bold">{teacher.experience} Exp</span>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         {/* Methodology Section - List Style */}
         <section className="py-16 bg-white border-t border-gray-200">
            <div className="max-w-5xl mx-auto px-4">
               <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/2">
                     <h3 className="text-2xl font-bold text-[#0b3259] mb-6 border-l-4 border-[#19a951] pl-4">
                        Teaching Methodology
                     </h3>
                     <div className="space-y-4">
                        {[
                           'Concept Building from Basic to Advanced',
                           'Daily Practice Problems (DPP) Discussion',
                           'Previous Year Questions (PYQ) Analysis',
                           'Personalized Doubt Clearing Sessions'
                        ].map((item, i) => (
                           <div key={i} className="flex items-center p-3 bg-gray-50 border-l-2 border-[#0b3259]">
                              <CheckCircle2 className="w-5 h-5 text-[#0b3259] mr-3" />
                              <span className="font-medium text-gray-800">{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="md:w-1/2">
                     <h3 className="text-2xl font-bold text-[#0b3259] mb-6 border-l-4 border-[#19a951] pl-4">
                        Faculty Selection Process
                     </h3>
                     <div className="space-y-4">
                        {[
                           'Written Test (Subject Knowledge)',
                           'Demo Lecture (Teaching Skills)',
                           'Personal Interview (Values & Vision)',
                           'Training & Orientation'
                        ].map((item, i) => (
                           <div key={i} className="flex items-center p-3 bg-gray-50 border-l-2 border-[#0b3259]">
                              <Users className="w-5 h-5 text-[#0b3259] mr-3" />
                              <span className="font-medium text-gray-800">{item}</span>
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </section>

         {/* Footer CTA */}
         <section className="bg-[#19a951] py-12 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-black mb-4 uppercase">
               Want to be guided by the best?
            </h2>
            <Button
               onClick={() => navigate('/programs')}
               className="bg-black text-white hover:bg-gray-800 px-8 py-4 text-lg font-bold rounded-none"
            >
               Explore Our Programs <ArrowRight className="ml-2" />
            </Button>
         </section>

         <Footer />
      </div>
   );
};

export default Faculty;