import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Brain,
  CheckCircle2,
  Users,
  Target,
  BarChart,
  Repeat,
  ArrowRight,
  Lightbulb
} from 'lucide-react';

const Pedagogy = () => {
  const navigate = useNavigate();

  const phases = [
    {
      id: 1,
      title: 'Concept Building',
      desc: 'Focus on fundamental clarity through interactive lectures and real-life examples.',
      color: 'bg-[#19a951]'
    },
    {
      id: 2,
      title: 'Application',
      desc: 'Applying concepts to solve problems ranging from basic to advanced levels.',
      color: 'bg-[#0b3259]'
    },
    {
      id: 3,
      title: 'Testing',
      desc: 'Regular assessment through chapter-wise, part-syllabus, and full-syllabus tests.',
      color: 'bg-black'
    },
    {
      id: 4,
      title: 'Analysis',
      desc: 'Deep dive into test performance to identify and rectify weak areas.',
      color: 'bg-gray-500'
    },
    {
      id: 5,
      title: 'Remedial',
      desc: 'Personalized doubt clearing and extra classes for topics needing attention.',
      color: 'bg-[#19a951]'
    }
  ];

  return (
    <div className="min-h-screen pt-16 font-sans bg-gray-50">
      {/* Header */}
      <section className="bg-[#0b3259] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#19a951] rounded-full -mr-32 -mt-32 opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-block border-2 border-[#19a951] text-[#19a951] px-4 py-1 mb-6 font-bold tracking-widest uppercase text-sm">
             Scientific Approach
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6">
            Our Teaching <span className="text-[#19a951]">Pedagogy</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto font-light">
            A systematic, proven methodology designed to transform potential into performance.
          </p>
        </div>
      </section>

      {/* Learning Cycle Steps */}
      <section className="py-20">
         <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-gray-900 mb-2">The 5-Step Success Formula</h2>
               <div className="w-20 h-1 bg-[#0b3259] mx-auto"></div>
            </div>

            <div className="grid md:grid-cols-5 gap-4 relative">
               {/* Connecting Line (Desktop) */}
               <div className="hidden md:block absolute top-12 left-0 w-full h-1 bg-gray-200 -z-10"></div>
               
               {phases.map((phase) => (
                  <div key={phase.id} className="text-center group">
                     <div className={`w-24 h-24 ${phase.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg border-4 border-white relative z-10 transition-transform group-hover:scale-110`}>
                        <span className={`text-3xl font-black ${phase.color === 'bg-[#19a951]' ? 'text-black' : 'text-white'}`}>
                           {phase.id}
                        </span>
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">{phase.title}</h3>
                     <p className="text-sm text-gray-600 px-2">{phase.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Key Pillars Grid */}
      <section className="py-16 bg-white border-t border-gray-200">
         <div className="max-w-6xl mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
               <div className="space-y-8">
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center flex-shrink-0 text-[#0b3259]">
                        <Brain className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Cognitive Development</h3>
                        <p className="text-gray-600">
                           We focus on developing analytical thinking and problem-solving skills rather than rote memorization.
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-green-50 rounded flex items-center justify-center flex-shrink-0 text-yellow-600">
                        <Target className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Exam Temperament</h3>
                        <p className="text-gray-600">
                           Regular testing builds the psychological resilience needed to handle high-pressure exam situations.
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <div className="w-12 h-12 bg-blue-50 rounded flex items-center justify-center flex-shrink-0 text-blue-600">
                        <Repeat className="w-6 h-6" />
                     </div>
                     <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Spaced Repetition</h3>
                        <p className="text-gray-600">
                           Systematic revision cycles ensure that concepts are retained in long-term memory.
                        </p>
                     </div>
                  </div>
               </div>
               
               <div className="bg-gray-100 p-8 rounded-xl border-l-8 border-[#19a951]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Why It Works</h3>
                  <ul className="space-y-4">
                     {[
                        'Personalized Attention (Student-Teacher Ratio 25:1)',
                        'Scientific Study Material Design',
                        'Error Analysis & Feedback Loop',
                        'Pattern-Proof Preparation',
                        'Consistent Motivation & Counseling'
                     ].map((item, i) => (
                        <li key={i} className="flex items-center text-gray-700 font-medium">
                           <CheckCircle2 className="w-5 h-5 text-[#0b3259] mr-3 flex-shrink-0" />
                           {item}
                        </li>
                     ))}
                  </ul>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-center text-white">
         <div className="max-w-3xl mx-auto px-4">
            <Lightbulb className="w-16 h-16 text-[#19a951] mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Ready to Experience Difference?</h2>
            <p className="text-gray-400 mb-8">
               Join a free demo class and see our unique teaching methodology in action.
            </p>
            <Button 
               onClick={() => navigate('/programs')}
               className="bg-[#0b3259] hover:bg-blue-700 text-white px-10 py-4 text-lg font-bold rounded-full uppercase tracking-widest"
            >
               Explore Programs
            </Button>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pedagogy;