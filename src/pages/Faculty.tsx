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
         image: '/images/ppl1.png',
         bio: '"ASW Sir" (Amitabh Shrivastava) is a highly esteemed educator in the field of Organic Chemistry, renowned for his extensive teaching experience that spans over 21 years. He specializes in teaching Organic Chemistry for competitive exams, specifically catering to JEE (Mains and Advanced) and NEET aspirants'
      },
      {
         name: 'VKR Sir',
         subject: 'Mathematics',
         qualification: 'IIT Delhi',
         experience: '24 Years',
         specialization: 'Mathematics',
         achievements: ['Ex-FIITJEE', 'Olympiad Expert'],
         image: '/images/ppl2.png',
         bio: 'Vinay Kumar, popularly known as VKR Sir, is a highly regarded mathematics educator specializing in IIT-JEE preparation. He graduated with a B.Tech from IIT Delhi (Mechanical Engineering, 1998). He is the founder of VKR Mathematics Classes (established in May 2007) and is recognized as one of the top individual mathematics faculties in Kota, Rajasthan.'
      },
      {
         name: 'NMS Sir',
         subject: 'Physics',
         qualification: 'IIT Kanpur',
         experience: '20 Years',
         specialization: 'Physics',
         achievements: ['James Bond of Physics', 'Mentor of IITians'],
         image: '/images/ppl3.png',
         bio: 'NMS Sir refers to Neel Mani Srivastava, a prominent Physics educator and an alumnus IIT Kanpur. He is widely known by his name, James Bond of Physics for his unique and engaging teaching style. With over 19 years of experience, he has served as a senior faculty member and head of department at major coaching institutes including Allen Career Institute (Kota), Narayana, and Unacademy. He has mentored more than 50,000 students, including over 500 who secured ranks in the Top 500 of the JEE Advanced.',
         imageStyle: { objectPosition: 'center 35%' }
      },
      {
         name: 'DS Sir',
         subject: 'Physical & Inorganic Chemistry',
         qualification: 'Senior Faculty',
         experience: '21 Years',
         specialization: 'Physical & Inorganic',
         achievements: ['Problem Solving Wizard', 'Result Oriented'],
         image: '/images/ppl4.png',
         bio: 'DS Sir (Dheerendra Srivastava), a veteran educator with over 20 years of experience at top institutes like Resonance and Bansal Classes, offers comprehensive chemistry batches focused on numerical mastery and conceptual clarity.'
      },
      {
         name: 'Satish Gurjar',
         subject: 'ALL',
         qualification: 'Senior Faculty',
         experience: '10 Years',
         specialization: 'Physical & Inorganic',
         achievements: ['Problem Solving Wizard', 'Result Oriented'],
         image: '/images/sp-2.png',
         bio: 'A versatile senior faculty member with a decade of experience. Dedicated to providing comprehensive guidance and fostering a strong foundation in science for aspiring students.'
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
                     <div className="text-3xl font-black text-[#0b3259] mb-1">20+</div>
                     <div className="text-sm font-bold text-gray-500 uppercase">Avg Experience</div>
                  </div>
                  <div className="p-6 text-center">
                     <div className="text-3xl font-black text-[#0b3259] mb-1">1000+</div>
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

               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {faculty.map((teacher, index) => (
                     <div key={index} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 group rounded-2xl overflow-hidden border border-gray-100 flex flex-col">
                        <div className="relative h-80 overflow-hidden bg-gray-100">
                           <div className="absolute inset-0 bg-gradient-to-t from-[#0b3259] via-transparent to-transparent opacity-60 z-10"></div>
                           <img
                              src={teacher.image}
                              alt={teacher.name}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                              style={teacher.imageStyle}
                           />
                           <div className="absolute bottom-4 left-4 z-20">
                              <Badge className="bg-[#19a951] text-black border-none font-bold mb-1">
                                 {teacher.subject}
                              </Badge>
                              <h3 className="text-2xl font-bold text-white shadow-black drop-shadow-md">{teacher.name}</h3>
                           </div>
                        </div>

                        <div className="p-6 flex flex-col flex-grow">
                           <div className="flex items-center gap-2 mb-4 text-sm text-gray-500 font-medium">
                              <GraduationCap className="w-4 h-4 text-[#0b3259]" />
                              <span>{teacher.qualification}</span>
                              <span className="mx-1">•</span>
                              <Star className="w-4 h-4 text-[#19a951]" />
                              <span>{teacher.experience} Exp.</span>
                           </div>

                           <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                              {teacher.bio}
                           </p>

                           <div className="pt-4 border-t border-gray-100">
                              <div className="flex flex-wrap gap-2">
                                 {teacher.achievements.map((achievement, i) => (
                                    <span key={i} className="text-xs font-bold text-[#0b3259] bg-blue-50 px-2 py-1 rounded">
                                       {achievement}
                                    </span>
                                 ))}
                              </div>
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