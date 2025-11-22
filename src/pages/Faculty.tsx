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
      name: 'Dr. Rajesh Kumar',
      subject: 'Physics',
      qualification: 'IIT Delhi (Ph.D.)',
      experience: '15+ Years',
      specialization: 'Mechanics & Electromagnetism',
      achievements: ['500+ IIT Selections', 'Author of 3 Books'],
      id: 'FAC001'
    },
    {
      name: 'Prof. Anjali Sharma',
      subject: 'Chemistry',
      qualification: 'IIT Bombay (M.Tech)',
      experience: '12+ Years',
      specialization: 'Organic & Physical Chemistry',
      achievements: ['400+ Top Rankers', 'Olympiad Coach'],
      id: 'FAC002'
    },
    {
      name: 'Mr. Vikram Singh',
      subject: 'Mathematics',
      qualification: 'IIT Kanpur (B.Tech)',
      experience: '10+ Years',
      specialization: 'Calculus & Algebra',
      achievements: ['350+ IIT Selections', 'IMO Trainer'],
      id: 'FAC003'
    },
    {
      name: 'Dr. Priya Menon',
      subject: 'Physics',
      qualification: 'IIT Madras (Ph.D.)',
      experience: '14+ Years',
      specialization: 'Optics & Modern Physics',
      achievements: ['NTSE Mentor', 'Innovation Award'],
      id: 'FAC004'
    },
    {
      name: 'Prof. Amit Patel',
      subject: 'Chemistry',
      qualification: 'IIT Kharagpur (M.Sc)',
      experience: '11+ Years',
      specialization: 'Inorganic Chemistry',
      achievements: ['Research Papers', 'Top Rated Faculty'],
      id: 'FAC005'
    },
    {
      name: 'Mr. Deepak Verma',
      subject: 'Mathematics',
      qualification: 'IIT Roorkee (B.Tech)',
      experience: '13+ Years',
      specialization: 'Trigonometry & Vectors',
      achievements: ['Math Olympiad Coach', 'Best Teacher Award'],
      id: 'FAC006'
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
                 <div className="text-sm font-bold text-gray-500 uppercase">IITian Faculty</div>
              </div>
              <div className="p-6 text-center">
                 <div className="text-3xl font-black text-[#0b3259] mb-1">15+</div>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((teacher, index) => (
              <div key={index} className="bg-white shadow-md hover:shadow-2xl transition-all duration-300 group rounded-lg overflow-hidden border border-gray-100">
                <div className="h-2 bg-[#0b3259]"></div>
                <div className="p-6">
                   <div className="flex justify-between items-start mb-6">
                      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center border-2 border-gray-200 group-hover:border-[#19a951] transition-colors">
                         <GraduationCap className="w-10 h-10 text-gray-400 group-hover:text-[#0b3259]" />
                      </div>
                      <Badge variant="outline" className="text-[#0b3259] border-[#0b3259] bg-blue-50">
                         {teacher.subject}
                      </Badge>
                   </div>
                   
                   <h3 className="text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                   <p className="text-sm text-gray-500 mb-4 font-medium">{teacher.qualification}</p>
                   
                   <div className="space-y-3 border-t border-gray-100 pt-4">
                      <div className="flex items-center text-sm">
                         <Star className="w-4 h-4 text-[#19a951] mr-2" />
                         <span className="text-gray-700 font-semibold">Exp: {teacher.experience}</span>
                      </div>
                      <div className="flex items-center text-sm">
                         <BookOpen className="w-4 h-4 text-[#19a951] mr-2" />
                         <span className="text-gray-600">{teacher.specialization}</span>
                      </div>
                      <div className="flex items-start text-sm">
                         <Award className="w-4 h-4 text-[#19a951] mr-2 mt-0.5" />
                         <span className="text-gray-600 italic">{teacher.achievements[0]}</span>
                      </div>
                   </div>
                </div>
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-100 flex justify-between items-center">
                   <span className="text-xs font-mono text-gray-400">ID: {teacher.id}</span>
                   <span className="text-[#0b3259] text-xs font-bold cursor-pointer hover:underline">VIEW PROFILE</span>
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