import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  Users, 
  Clock, 
  BookOpen, 
  Trophy,
  CheckCircle2,
  Calendar,
  Target,
  ArrowRight
} from 'lucide-react';

const ClassroomPrograms = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: 1,
      title: 'Two-Year Classroom Program',
      subtitle: 'For Class 11 Students',
      duration: '2 Years',
      target: 'JEE Main & Advanced 2026',
      schedule: 'Weekdays / Weekends',
      price: '₹ 2,40,000',
      features: [
        'Complete Syllabus Coverage (Class 11 & 12)',
        'Concept Building to Advanced Problem Solving',
        'Regular Tests (Weekly & Monthly)',
        'Doubt Clearing & Personalized Attention'
      ],
      color: 'border-t-4 border-[#0b3259]'
    },
    {
      id: 2,
      title: 'One-Year Classroom Program',
      subtitle: 'For Class 12 Students',
      duration: '1 Year',
      target: 'JEE Main & Advanced 2025',
      schedule: 'Intensive Schedule',
      price: '₹ 1,45,000',
      features: [
        'Rapid Syllabus Coverage & Revision',
        'Focus on High Weightage Topics',
        'All India Test Series Included',
        'Previous Year Question Analysis'
      ],
      color: 'border-t-4 border-[#19a951]'
    },
    {
      id: 3,
      title: 'Foundation Program',
      subtitle: 'For Class 9 & 10 Students',
      duration: '1-2 Years',
      target: 'Olympiads & JEE Foundation',
      schedule: 'After School Hours',
      price: '₹ 85,000',
      features: [
        'Strong Foundation in Science & Maths',
        'NTSE & Olympiad Preparation',
        'Analytical Skill Development',
        'School Exam Support'
      ],
      color: 'border-t-4 border-black'
    }
  ];

  return (
    <div className="min-h-screen pt-16 font-sans bg-gray-50">
      {/* Header */}
      <section className="bg-[#0b3259] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
             <div>
                <h1 className="text-4xl font-extrabold mb-2">Classroom Programs</h1>
                <p className="text-yellow-100 text-lg">The Gold Standard in JEE Preparation</p>
             </div>
             <div className="hidden md:block bg-white/10 px-6 py-3 rounded border border-white/20">
                <div className="text-sm font-bold uppercase tracking-wider mb-1 text-[#19a951]">Admissions Open</div>
                <div className="text-2xl font-bold">Session 2025-26</div>
             </div>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program) => (
              <div key={program.id} className={`bg-white rounded shadow-md hover:shadow-2xl transition-all duration-300 group ${program.color} flex flex-col`}>
                <div className="p-6 flex-grow">
                   <div className="mb-4">
                      <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{program.subtitle}</span>
                      <h3 className="text-2xl font-bold text-gray-900 mt-1 group-hover:text-[#0b3259] transition-colors">{program.title}</h3>
                   </div>
                   
                   <div className="space-y-4 mb-6 border-t border-b border-gray-100 py-4">
                      <div className="flex justify-between text-sm">
                         <span className="text-gray-500 flex items-center"><Clock className="w-4 h-4 mr-2" /> Duration</span>
                         <span className="font-bold text-gray-900">{program.duration}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                         <span className="text-gray-500 flex items-center"><Target className="w-4 h-4 mr-2" /> Target</span>
                         <span className="font-bold text-gray-900 text-right">{program.target}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                         <span className="text-gray-500 flex items-center"><Calendar className="w-4 h-4 mr-2" /> Schedule</span>
                         <span className="font-bold text-gray-900">{program.schedule}</span>
                      </div>
                   </div>

                   <div className="mb-6">
                      <h4 className="font-bold text-sm mb-3 text-gray-700">Key Highlights:</h4>
                      <ul className="space-y-2">
                         {program.features.map((feat, i) => (
                            <li key={i} className="flex items-start text-sm text-gray-600">
                               <CheckCircle2 className="w-4 h-4 text-[#19a951] mr-2 mt-0.5 flex-shrink-0" />
                               {feat}
                            </li>
                         ))}
                      </ul>
                   </div>
                </div>
                
                <div className="p-6 bg-gray-50 border-t border-gray-100 mt-auto">
                   <div className="flex justify-between items-center mb-4">
                      <div className="text-2xl font-black text-[#0b3259]">{program.price}</div>
                      <div className="text-xs text-gray-500">*Scholarships Available</div>
                   </div>
                   <Button className="w-full bg-black hover:bg-gray-800 text-white font-bold">
                      Enquire Now
                   </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantage Section */}
      <section className="py-16 bg-white border-t border-gray-200">
         <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">The Classroom Advantage</h2>
               <div className="w-20 h-1 bg-[#0b3259] mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
               {[
                  { icon: <Users className="w-8 h-8" />, title: 'Peer Learning', desc: 'Competitive environment with like-minded peers.' },
                  { icon: <BookOpen className="w-8 h-8" />, title: 'Disciplined Study', desc: 'Fixed schedule ensures regularity and discipline.' },
                  { icon: <Trophy className="w-8 h-8" />, title: 'Personal Care', desc: 'Teachers identify and work on individual weaknesses.' },
                  { icon: <Target className="w-8 h-8" />, title: 'Face-to-Face', desc: 'Immediate doubt resolution and interaction.' }
               ].map((item, idx) => (
                  <div key={idx} className="text-center p-6 border border-gray-100 rounded hover:border-[#19a951] transition-colors">
                     <div className="text-[#0b3259] bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        {item.icon}
                     </div>
                     <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                     <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="bg-[#19a951] py-12 text-center">
         <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-black text-black mb-6 uppercase">Don't Miss the Opportunity</h2>
            <div className="flex justify-center gap-4">
               <Button 
                  onClick={() => navigate('/scholarship-test')}
                  className="bg-[#0b3259] hover:bg-blue-700 text-white px-8 py-4 text-lg font-bold rounded shadow-lg"
               >
                  Apply for Admission Test
               </Button>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClassroomPrograms;