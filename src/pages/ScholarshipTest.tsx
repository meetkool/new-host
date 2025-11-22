import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  Gift,
  Trophy,
  Calendar,
  Clock,
  FileText,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const ScholarshipTest = () => {
  const navigate = useNavigate();

  const steps = [
    { step: '01', title: 'Register', desc: 'Fill the online form and pay registration fee of ₹500' },
    { step: '02', title: 'Get Admit Card', desc: 'Download your admit card with roll number and center details' },
    { step: '03', title: 'Appear for Test', desc: 'Take the test offline at your nearest center or online from home' },
    { step: '04', title: 'Get Scholarship', desc: 'Check results and avail scholarship up to 100% on tuition fee' }
  ];

  return (
    <div className="min-h-screen pt-16 font-sans bg-gray-50">
      {/* Hero Banner */}
      <section className="bg-[#0b3259] text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
          <div className="md:w-1/2">
             <div className="inline-block bg-[#19a951] text-black font-black text-sm px-3 py-1 mb-4 transform -rotate-2">
                NST 2025
             </div>
             <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
                National <br/>
                <span className="text-[#19a951]">Scholarship</span> Test
             </h1>
             <p className="text-xl text-white/90 mb-8 font-medium border-l-4 border-[#19a951] pl-4">
                Evaluate your potential & win up to 100% scholarship on our Classroom Programs.
             </p>
             <Button className="bg-white text-[#0b3259] hover:bg-gray-100 font-bold text-xl px-8 py-6 rounded shadow-lg">
                Register Now <ArrowRight className="ml-2" />
             </Button>
          </div>
          <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
             <div className="bg-white p-6 rounded-lg shadow-2xl transform rotate-3 w-80 text-center">
                <Gift className="w-20 h-20 text-[#0b3259] mx-auto mb-4" />
                <div className="text-4xl font-black text-gray-900 mb-1">₹ 10 Crore</div>
                <div className="text-sm text-gray-500 uppercase font-bold">Total Scholarship Pool</div>
             </div>
          </div>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#19a951_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </section>

      {/* Exam Details Strip */}
      <div className="bg-[#19a951] py-6 border-b-4 border-white">
         <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center md:justify-between items-center gap-6 text-black">
            <div className="flex items-center font-bold">
               <Calendar className="w-6 h-6 mr-2" />
               <span>Exam Date: 20th Oct 2024</span>
            </div>
            <div className="flex items-center font-bold">
               <Clock className="w-6 h-6 mr-2" />
               <span>Timing: 10:00 AM - 1:00 PM</span>
            </div>
            <div className="flex items-center font-bold">
               <FileText className="w-6 h-6 mr-2" />
               <span>Mode: Offline & Online</span>
            </div>
            <div className="flex items-center font-bold">
               <Trophy className="w-6 h-6 mr-2" />
               <span>Eligibility: Class 8 to 12</span>
            </div>
         </div>
      </div>

      {/* Process Steps */}
      <section className="py-16">
         <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-gray-900 mb-2">How It Works</h2>
               <div className="w-20 h-1 bg-[#0b3259] mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
               {steps.map((s, i) => (
                  <div key={i} className="bg-white p-6 rounded border-l-4 border-[#0b3259] shadow hover:shadow-lg transition-all group">
                     <div className="text-6xl font-black text-gray-100 group-hover:text-[#19a951] transition-colors mb-4 -mt-2">
                        {s.step}
                     </div>
                     <h3 className="text-xl font-bold text-gray-900 mb-2">{s.title}</h3>
                     <p className="text-sm text-gray-600">{s.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Syllabus Table */}
      <section className="py-16 bg-white border-t border-gray-200">
         <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-[#0b3259] mb-6 border-l-4 border-[#19a951] pl-4">Exam Syllabus</h2>
            <div className="grid md:grid-cols-3 gap-8">
               <Card className="border-t-4 border-[#0b3259]">
                  <CardHeader>
                     <CardTitle className="flex items-center">
                        <span className="w-3 h-3 bg-[#19a951] rounded-full mr-2"></span>
                        Physics
                     </CardTitle>
                  </CardHeader>
                  <CardContent>
                     <ul className="space-y-2 text-sm text-gray-600">
                        <li>Motion & Laws of Motion</li>
                        <li>Work, Energy & Power</li>
                        <li>Gravitation</li>
                        <li>Sound & Light</li>
                        <li>Electricity & Magnetism</li>
                     </ul>
                  </CardContent>
               </Card>
               <Card className="border-t-4 border-[#0b3259]">
                  <CardHeader>
                     <CardTitle className="flex items-center">
                        <span className="w-3 h-3 bg-[#19a951] rounded-full mr-2"></span>
                        Chemistry
                     </CardTitle>
                  </CardHeader>
                  <CardContent>
                     <ul className="space-y-2 text-sm text-gray-600">
                        <li>Matter in Our Surroundings</li>
                        <li>Atoms & Molecules</li>
                        <li>Structure of Atom</li>
                        <li>Chemical Reactions</li>
                        <li>Acids, Bases & Salts</li>
                     </ul>
                  </CardContent>
               </Card>
               <Card className="border-t-4 border-[#0b3259]">
                  <CardHeader>
                     <CardTitle className="flex items-center">
                        <span className="w-3 h-3 bg-[#19a951] rounded-full mr-2"></span>
                        Mathematics
                     </CardTitle>
                  </CardHeader>
                  <CardContent>
                     <ul className="space-y-2 text-sm text-gray-600">
                        <li>Number Systems</li>
                        <li>Polynomials & Algebra</li>
                        <li>Coordinate Geometry</li>
                        <li>Linear Equations</li>
                        <li>Triangles & Circles</li>
                     </ul>
                  </CardContent>
               </Card>
            </div>
         </div>
      </section>

      {/* Scholarship Slabs */}
      <section className="py-16 bg-gray-900 text-white">
         <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-[#19a951]">Scholarship Rewards</h2>
            <div className="overflow-hidden rounded-lg border border-gray-700">
               <table className="w-full text-left">
                  <thead className="bg-gray-800">
                     <tr>
                        <th className="p-4 text-center border-r border-gray-700">Rank</th>
                        <th className="p-4 text-center">Scholarship Waiver</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800 text-center">
                     <tr>
                        <td className="p-4 border-r border-gray-700 font-bold">Top 10</td>
                        <td className="p-4 text-[#19a951] font-black text-xl">100%</td>
                     </tr>
                     <tr>
                        <td className="p-4 border-r border-gray-700 font-bold">Rank 11 - 50</td>
                        <td className="p-4 text-[#19a951] font-black text-xl">90%</td>
                     </tr>
                     <tr>
                        <td className="p-4 border-r border-gray-700 font-bold">Rank 51 - 100</td>
                        <td className="p-4 text-[#19a951] font-black text-xl">75%</td>
                     </tr>
                     <tr>
                        <td className="p-4 border-r border-gray-700 font-bold">Rank 101 - 500</td>
                        <td className="p-4 text-[#19a951] font-black text-xl">50%</td>
                     </tr>
                  </tbody>
               </table>
            </div>
            <div className="mt-10">
               <Button 
                  className="bg-[#0b3259] hover:bg-[#0b3259]/90 text-white px-10 py-4 text-lg font-bold rounded uppercase tracking-widest"
                  onClick={() => window.location.href = '/register'} // Placeholder
               >
                  Register for NST
               </Button>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScholarshipTest;