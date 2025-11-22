import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  Trophy, 
  Award,
  TrendingUp,
  ArrowRight,
  Medal,
  Star,
  Users
} from 'lucide-react';

const Results = () => {
  const navigate = useNavigate();

  const toppers = [
    { name: 'Arjun Sharma', rank: 'AIR 47', course: 'IIT Bombay (CSE)', image: null },
    { name: 'Priya Singh', rank: 'AIR 123', course: 'IIT Delhi (Elec)', image: null },
    { name: 'Rahul Verma', rank: 'AIR 284', course: 'IIT Kanpur (Mech)', image: null },
    { name: 'Ananya Patel', rank: 'AIR 356', course: 'IIT Madras (CSE)', image: null },
    { name: 'Karan Malhotra', rank: 'AIR 412', course: 'IIT Kharagpur (Civil)', image: null },
    { name: 'Sneha Reddy', rank: 'AIR 578', course: 'IIT Roorkee (Chem)', image: null }
  ];

  const rankings = [
    { year: 2024, total: 487, under500: 25, under1000: 58 },
    { year: 2023, total: 452, under500: 22, under1000: 51 },
    { year: 2022, total: 418, under500: 19, under1000: 45 },
    { year: 2021, total: 394, under500: 15, under1000: 40 }
  ];

  return (
    <div className="min-h-screen pt-16 font-sans bg-white">
      {/* Celebration Header */}
      <section className="bg-gradient-to-r from-[#0b3259] to-[#0b3259] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#19a951] rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-20 -mt-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
           <Badge className="bg-[#19a951] text-black hover:bg-green-400 mb-6 px-4 py-2 text-sm font-bold tracking-wider uppercase">
             Unstoppable Performance
           </Badge>
           <h1 className="text-5xl md:text-7xl font-black mb-6">
             Hall of <span className="text-[#19a951]">Fame</span>
           </h1>
           <p className="text-2xl text-white/90 font-light max-w-2xl mx-auto">
             Celebrating the relentless spirit and outstanding achievements of our students.
           </p>
        </div>
      </section>

      {/* Key Highlights Strip */}
      <div className="bg-[#19a951] py-8">
         <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-8 md:gap-16 text-black">
            <div className="flex items-center gap-4">
               <Trophy className="w-12 h-12 text-[#0b3259]" />
               <div>
                  <div className="text-3xl font-black">2000+</div>
                  <div className="text-sm font-bold uppercase">IIT Selections</div>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <Award className="w-12 h-12 text-[#0b3259]" />
               <div>
                  <div className="text-3xl font-black">150+</div>
                  <div className="text-sm font-bold uppercase">Top 100 AIR</div>
               </div>
            </div>
            <div className="flex items-center gap-4">
               <TrendingUp className="w-12 h-12 text-[#0b3259]" />
               <div>
                  <div className="text-3xl font-black">95%</div>
                  <div className="text-sm font-bold uppercase">Success Rate</div>
               </div>
            </div>
         </div>
      </div>

      {/* Toppers Grid */}
      <section className="py-16">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
               <h2 className="text-4xl font-bold text-[#0b3259] mb-2">JEE Advanced 2024 Toppers</h2>
               <div className="w-24 h-1 bg-[#19a951] mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {toppers.map((student, i) => (
                  <div key={i} className="bg-white border-2 border-gray-100 rounded-xl overflow-hidden hover:border-[#19a951] transition-all shadow-lg group">
                     <div className="bg-[#19a951] p-4 flex justify-between items-center">
                        <span className="text-black font-black text-2xl">{student.rank}</span>
                        <Star className="text-black w-6 h-6 fill-current" />
                     </div>
                     <div className="p-6 text-center">
                        <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 border-4 border-white shadow-md group-hover:scale-105 transition-transform">
                           {/* Placeholder for student image */}
                           <div className="w-full h-full flex items-center justify-center text-gray-400">
                              <Users className="w-12 h-12" />
                           </div>
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{student.name}</h3>
                        <p className="text-gray-600 font-medium">{student.course}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>

      {/* Detailed Analysis Table */}
      <section className="py-16 bg-gray-50">
         <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-[#0b3259]">
               <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
                  <Medal className="w-6 h-6 text-[#19a951] mr-3" />
                  Year-wise Selection Analysis
               </h3>
               <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                     <thead>
                        <tr className="bg-gray-100">
                           <th className="p-4 font-bold border-b-2 border-gray-200">Year</th>
                           <th className="p-4 font-bold border-b-2 border-gray-200 text-center">Total Selections</th>
                           <th className="p-4 font-bold border-b-2 border-gray-200 text-center">AIR Under 500</th>
                           <th className="p-4 font-bold border-b-2 border-gray-200 text-center">AIR Under 1000</th>
                        </tr>
                     </thead>
                     <tbody>
                        {rankings.map((row, idx) => (
                           <tr key={idx} className="hover:bg-green-50 transition-colors">
                              <td className="p-4 border-b border-gray-100 font-bold text-[#0b3259]">{row.year}</td>
                              <td className="p-4 border-b border-gray-100 text-center font-semibold">{row.total}</td>
                              <td className="p-4 border-b border-gray-100 text-center">{row.under500}</td>
                              <td className="p-4 border-b border-gray-100 text-center">{row.under1000}</td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white text-center">
         <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-[#19a951]">Start Your Journey to Success</h2>
            <p className="text-gray-400 mb-8 text-lg">
               Join the league of toppers. Enroll in our comprehensive classroom programs today.
            </p>
            <Button 
               onClick={() => navigate('/programs')}
               className="bg-[#0b3259] hover:bg-[#0b3259] text-white px-10 py-4 text-lg font-bold rounded-full"
            >
               View Courses <ArrowRight className="ml-2" />
            </Button>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default Results;