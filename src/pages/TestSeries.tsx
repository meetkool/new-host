import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Clock,
  Target,
  BarChart,
  CheckCircle2,
  Zap,
  Calendar,
  Trophy
} from 'lucide-react';

const TestSeries = () => {
  const navigate = useNavigate();

  const plans = [
    {
      id: 1,
      title: 'JEE Main 2025',
      subtitle: 'Comprehensive Practice',
      price: '₹4,999',
      tests: '25 Full + 15 Part',
      features: ['NTA Pattern Interface', 'Video Solutions', 'AIR Prediction'],
      recommended: false
    },
    {
      id: 2,
      title: 'JEE Advanced 2025',
      subtitle: 'Level Up Your Prep',
      price: '₹5,999',
      tests: '20 Full + 10 Part',
      features: ['Complex Problems', 'Detailed Analytics', 'Peer Comparison'],
      recommended: false
    },
    {
      id: 3,
      title: 'Ultimate Combo',
      subtitle: 'Main + Advanced',
      price: '₹8,999',
      tests: '45 Full + 25 Part',
      features: ['All Test Access', 'Priority Support', 'Mentor Guidance'],
      recommended: true
    }
  ];

  return (
    <div className="min-h-screen pt-16 font-sans bg-gray-50">
      {/* Header */}
      <section className="bg-[#0b3259] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-4xl font-extrabold mb-2">All India Test Series</h1>
            <p className="text-yellow-100 text-lg">Benchmark your preparation against the best brains in the country</p>
          </div>
          <div className="mt-6 md:mt-0 flex gap-4">
             <div className="text-center bg-white/10 p-3 rounded backdrop-blur-sm border border-white/20">
                <div className="text-2xl font-bold text-[#19a951]">50k+</div>
                <div className="text-xs">Students</div>
             </div>
             <div className="text-center bg-white/10 p-3 rounded backdrop-blur-sm border border-white/20">
                <div className="text-2xl font-bold text-[#19a951]">95%</div>
                <div className="text-xs">Accuracy</div>
             </div>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card key={plan.id} className={`relative overflow-hidden border-2 ${plan.recommended ? 'border-[#19a951] shadow-2xl scale-105 z-10' : 'border-gray-200 shadow-md'} hover:shadow-xl transition-all`}>
                {plan.recommended && (
                  <div className="bg-[#19a951] text-black text-center py-1 text-xs font-bold uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardHeader className="bg-white border-b border-gray-100 pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plan.title}</CardTitle>
                  <p className="text-sm text-gray-500">{plan.subtitle}</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-black text-[#0b3259]">{plan.price}</span>
                    <span className="text-gray-400 text-sm block mt-1">Inclusive of taxes</span>
                  </div>
                  
                  <div className="bg-gray-50 p-3 rounded mb-6 text-center border border-gray-200">
                     <span className="font-bold text-gray-800">{plan.tests}</span>
                     <span className="text-xs text-gray-500 block">Total Tests Included</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-center text-sm text-gray-600">
                        <CheckCircle2 className="w-4 h-4 text-[#19a951] mr-3 flex-shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Button className={`w-full font-bold text-lg py-6 ${plan.recommended ? 'bg-[#0b3259] hover:bg-blue-700' : 'bg-gray-800 hover:bg-gray-900'}`}>
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white border-t border-gray-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our AITS?</h2>
               <div className="w-20 h-1 bg-[#19a951] mx-auto"></div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[
                  { icon: <Zap className="w-8 h-8" />, title: 'Real Exam Feel', desc: 'NTA pattern interface with exact same difficulty level' },
                  { icon: <BarChart className="w-8 h-8" />, title: 'Micro Analysis', desc: 'Question-wise analysis identifying strong & weak areas' },
                  { icon: <Trophy className="w-8 h-8" />, title: 'All India Rank', desc: 'Compete with thousands of serious aspirants nationwide' },
                  { icon: <Target className="w-8 h-8" />, title: 'Error Analysis', desc: 'Understand where you lost marks - concepts or silly mistakes' }
               ].map((item, idx) => (
                  <div key={idx} className="text-center p-6 border border-gray-100 rounded-lg hover:border-[#19a951] transition-colors group">
                     <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#19a951] transition-colors">
                        <div className="text-[#0b3259] group-hover:text-black">{item.icon}</div>
                     </div>
                     <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                     <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Test Schedule Table */}
      <section className="py-16 bg-gray-50">
         <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-2xl font-bold mb-6 text-[#0b3259] border-l-4 border-[#19a951] pl-4">Upcoming Test Schedule</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden border border-gray-200">
               <table className="w-full text-left">
                  <thead className="bg-gray-800 text-white">
                     <tr>
                        <th className="p-4">Date</th>
                        <th className="p-4">Test Name</th>
                        <th className="p-4">Type</th>
                        <th className="p-4 text-right">Status</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                     {[
                        { date: '15 Oct 2024', name: 'AITS - Part Test 1', type: 'JEE Main', status: 'Live' },
                        { date: '22 Oct 2024', name: 'AITS - Part Test 2', type: 'JEE Advanced', status: 'Upcoming' },
                        { date: '29 Oct 2024', name: 'AITS - Full Test 1', type: 'JEE Main', status: 'Upcoming' },
                        { date: '05 Nov 2024', name: 'AITS - Full Test 2', type: 'JEE Advanced', status: 'Upcoming' }
                     ].map((row, i) => (
                        <tr key={i} className="hover:bg-green-50">
                           <td className="p-4 font-semibold text-gray-700">{row.date}</td>
                           <td className="p-4 font-bold text-[#0b3259]">{row.name}</td>
                           <td className="p-4"><Badge variant="outline" className="border-gray-400">{row.type}</Badge></td>
                           <td className="p-4 text-right">
                              {row.status === 'Live' ? (
                                 <span className="text-green-600 font-bold flex items-center justify-end gap-1">
                                    <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span> Live
                                 </span>
                              ) : (
                                 <span className="text-gray-400 font-medium">Upcoming</span>
                              )}
                           </td>
                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestSeries;