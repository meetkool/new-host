import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  School, 
  Laptop, 
  Zap,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  HelpCircle
} from 'lucide-react';

const Programs = () => {
  const navigate = useNavigate();

  const programTypes = [
    {
      id: 'classroom',
      title: 'Classroom Programs',
      description: 'Comprehensive offline coaching for JEE Main & Advanced',
      icon: <GraduationCap className="w-10 h-10 text-[#0b3259]" />,
      features: ['Live Lectures', 'Physical Study Material', 'Doubt Classes'],
      route: '/programs/classroom',
      color: 'border-t-4 border-[#0b3259]'
    },
    {
      id: 'integrated-school',
      title: 'Integrated School',
      description: 'School + Coaching synchronized curriculum',
      icon: <School className="w-10 h-10 text-[#0b3259]" />,
      features: ['Saves Time', 'Board Prep', 'JEE Foundation'],
      route: '/programs/integrated-school',
      color: 'border-t-4 border-[#19a951]'
    },
    {
      id: 'online',
      title: 'Live Online',
      description: 'Interactive online classes for remote learning',
      icon: <Laptop className="w-10 h-10 text-[#0b3259]" />,
      features: ['Recorded Sessions', 'Digital Material', 'Online Tests'],
      route: '/programs/online',
      color: 'border-t-4 border-[#10B981]'
    },
    {
      id: 'crash-course',
      title: 'Crash Courses',
      description: 'Short-term intensive booster courses',
      icon: <Zap className="w-10 h-10 text-[#0b3259]" />,
      features: ['Quick Revision', 'Mock Tests', 'Exam Strategy'],
      route: '/programs/crash-course',
      color: 'border-t-4 border-orange-500'
    }
  ];

  return (
    <div className="min-h-screen pt-16 font-sans">
      {/* Red Header Banner */}
      <section className="bg-[#0b3259] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">Academic Programs</h1>
            <p className="text-green-100 text-lg">Meticulously designed courses for every stage of preparation</p>
          </div>
          <div className="mt-6 md:mt-0 bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20">
             <div className="text-3xl font-black text-[#19a951]">100%</div>
             <div className="text-sm text-white/90">Syllabus Coverage</div>
          </div>
        </div>
      </section>

      {/* Program Cards Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programTypes.map((program) => (
              <Card key={program.id} className={`bg-white shadow-md hover:shadow-xl transition-all ${program.color} rounded-lg overflow-hidden group`}>
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start mb-4">
                    <div className="bg-gray-50 p-3 rounded-full group-hover:bg-green-50 transition-colors">
                      {program.icon}
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#0b3259] transition-colors" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900">{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 h-10">{program.description}</p>
                  <ul className="space-y-2 mb-6">
                    {program.features.map((feat, i) => (
                      <li key={i} className="flex items-center text-xs font-medium text-gray-500">
                        <CheckCircle2 className="w-3 h-3 text-[#19a951] mr-2" /> {feat}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className="w-full bg-white border border-gray-300 text-gray-700 hover:bg-[#0b3259] hover:text-white hover:border-[#0b3259] transition-all font-bold"
                    onClick={() => navigate(program.route)}
                  >
                    View Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison / Selection Table */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Which Program is Right for You?</h2>
            <div className="w-24 h-1 bg-[#19a951] mx-auto mt-4"></div>
          </div>

          <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#333] text-white">
                  <th className="p-4 font-bold text-lg border-r border-gray-600">Criteria</th>
                  <th className="p-4 font-bold text-[#19a951] border-r border-gray-600">Classroom</th>
                  <th className="p-4 font-bold text-[#19a951] border-r border-gray-600">Integrated</th>
                  <th className="p-4 font-bold text-[#19a951]">Online</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900 bg-gray-50">Target Audience</td>
                  <td className="p-4 text-gray-700">Class 11, 12 & Droppers</td>
                  <td className="p-4 text-gray-700">Class 9 to 12</td>
                  <td className="p-4 text-gray-700">Remote Students</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900 bg-gray-50">Mode</td>
                  <td className="p-4 text-gray-700">Offline Center</td>
                  <td className="p-4 text-gray-700">School Campus</td>
                  <td className="p-4 text-gray-700">Live Digital</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900 bg-gray-50">Focus</td>
                  <td className="p-4 text-gray-700">Pure JEE Prep</td>
                  <td className="p-4 text-gray-700">Board + JEE</td>
                  <td className="p-4 text-gray-700">Flexible Prep</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900 bg-gray-50">Study Material</td>
                  <td className="p-4 text-gray-700">Printed Hard Copy</td>
                  <td className="p-4 text-gray-700">Printed + School Books</td>
                  <td className="p-4 text-gray-700">Digital (PDFs)</td>
                </tr>
                 <tr className="hover:bg-gray-50">
                  <td className="p-4 font-semibold text-gray-900 bg-gray-50">Cost</td>
                  <td className="p-4 text-gray-700">High</td>
                  <td className="p-4 text-gray-700">Premium</td>
                  <td className="p-4 text-gray-700">Affordable</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Scholarship Banner */}
      <section className="py-16 bg-[#19a951] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="text-black md:w-2/3">
             <h2 className="text-4xl font-black mb-4 uppercase italic">
               Don't Let Fees Stop You!
             </h2>
             <p className="text-xl font-medium mb-6">
               Appear for our National Scholarship Test and get up to <span className="bg-[#0b3259] text-white px-2 py-1">100% Waiver</span> on tuition fees.
             </p>
             <div className="flex gap-4">
               <Button 
                onClick={() => navigate('/scholarship-test')}
                className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-bold rounded-none uppercase tracking-wider"
               >
                 Register for NST
               </Button>
               <Button 
                variant="outline"
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-6 text-lg font-bold rounded-none uppercase tracking-wider bg-transparent"
               >
                 Download Syllabus
               </Button>
             </div>
           </div>
           <div className="md:w-1/3 flex justify-center">
              <Award className="w-48 h-48 text-[#0b3259] opacity-80" />
           </div>
        </div>
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;