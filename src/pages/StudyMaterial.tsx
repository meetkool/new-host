import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  Book, 
  Download, 
  FileText, 
  CheckCircle2, 
  Layers,
  BookOpen
} from 'lucide-react';

const StudyMaterial = () => {
  const navigate = useNavigate();

  const materials = [
    {
      title: 'Physics Modules',
      desc: 'Comprehensive theory, solved examples, and graded exercises covering Mechanics to Modern Physics.',
      type: 'Hard Copy + PDF',
      color: 'border-l-4 border-[#0b3259]'
    },
    {
      title: 'Chemistry Modules',
      desc: 'In-depth coverage of Physical, Organic, and Inorganic Chemistry with reaction mechanisms.',
      type: 'Hard Copy + PDF',
      color: 'border-l-4 border-[#19a951]'
    },
    {
      title: 'Mathematics Modules',
      desc: 'Theory and extensive problem sets for Algebra, Calculus, Coordinate Geometry, and more.',
      type: 'Hard Copy + PDF',
      color: 'border-l-4 border-black'
    },
    {
      title: 'Question Banks',
      desc: 'Chapter-wise previous year questions (PYQs) of last 40 years with detailed solutions.',
      type: 'Practice Book',
      color: 'border-l-4 border-gray-500'
    },
    {
      title: 'Rank Booster Package',
      desc: 'Special collection of 1000+ challenging problems for final revision and rank improvement.',
      type: 'Revision Kit',
      color: 'border-l-4 border-[#0b3259]'
    },
    {
      title: 'Formula Handbooks',
      desc: 'Concise summary of all important formulas and key concepts for quick revision.',
      type: 'Pocket Book',
      color: 'border-l-4 border-[#19a951]'
    }
  ];

  return (
    <div className="min-h-screen pt-16 font-sans bg-gray-50">
      {/* Header */}
      <section className="bg-[#0b3259] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">Comprehensive Study Material</h1>
            <p className="text-yellow-100 text-lg">Self-sufficient content designed by IIT alumni</p>
          </div>
          <BookOpen className="w-20 h-20 text-white/20 hidden md:block" />
        </div>
      </section>

      {/* Material Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.map((item, idx) => (
              <div key={idx} className={`bg-white p-6 shadow hover:shadow-xl transition-shadow rounded-r ${item.color}`}>
                <div className="flex justify-between items-start mb-4">
                   <div className="bg-gray-100 p-2 rounded">
                      <Book className="w-6 h-6 text-gray-700" />
                   </div>
                   <Badge variant="secondary" className="text-xs font-normal">{item.type}</Badge>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">{item.desc}</p>
                <Button variant="link" className="p-0 text-[#0b3259] font-bold h-auto">
                   View Sample
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white border-t border-gray-200">
         <div className="max-w-5xl mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-gray-900">Why Our Material is Sufficient</h2>
               <div className="w-16 h-1 bg-[#19a951] mx-auto mt-2"></div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
               <div className="flex gap-4">
                  <Layers className="w-10 h-10 text-[#0b3259] flex-shrink-0" />
                  <div>
                     <h3 className="font-bold text-lg mb-1">Graded Difficulty</h3>
                     <p className="text-sm text-gray-600">
                        Exercises divided into Level 1 (Basic), Level 2 (JEE Main), and Level 3 (JEE Advanced).
                     </p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <FileText className="w-10 h-10 text-[#19a951] flex-shrink-0" />
                  <div>
                     <h3 className="font-bold text-lg mb-1">Detailed Solutions</h3>
                     <p className="text-sm text-gray-600">
                        Step-by-step solutions for every question to ensure concept application is understood.
                     </p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <CheckCircle2 className="w-10 h-10 text-black flex-shrink-0" />
                  <div>
                     <h3 className="font-bold text-lg mb-1">Error Free</h3>
                     <p className="text-sm text-gray-600">
                        Content rigorously reviewed by experts to ensure zero errors and ambiguity.
                     </p>
                  </div>
               </div>
               <div className="flex gap-4">
                  <Download className="w-10 h-10 text-gray-500 flex-shrink-0" />
                  <div>
                     <h3 className="font-bold text-lg mb-1">Digital Access</h3>
                     <p className="text-sm text-gray-600">
                        Access all material on our mobile app anytime, anywhere for flexible learning.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-[#19a951] text-center">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-black mb-6">Want to check the quality first?</h2>
            <div className="flex justify-center gap-4">
               <Button className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-none font-bold">
                  Download Free Sample PDF
               </Button>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default StudyMaterial;