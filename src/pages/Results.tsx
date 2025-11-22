import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  Trophy, 
  Award,
  Star,
  TrendingUp,
  Users,
  Target,
  Medal
} from 'lucide-react';

const Results = () => {
  const navigate = useNavigate();

  const stats = [
    { number: '2,000+', text: 'IIT/NIT Selections', icon: <Trophy className="w-8 h-8" /> },
    { number: '95%', text: 'Success Rate', icon: <TrendingUp className="w-8 h-8" /> },
    { number: '150+', text: 'AIR Under 1000', icon: <Star className="w-8 h-8" /> },
    { number: '500+', text: 'AIR Under 5000', icon: <Medal className="w-8 h-8" /> }
  ];

  const toppers2024 = [
    { name: 'Arjun Sharma', air: 47, iit: 'IIT Bombay', branch: 'Computer Science' },
    { name: 'Priya Singh', air: 123, iit: 'IIT Delhi', branch: 'Electrical Engineering' },
    { name: 'Rahul Verma', air: 284, iit: 'IIT Kanpur', branch: 'Mechanical Engineering' },
    { name: 'Ananya Patel', air: 356, iit: 'IIT Madras', branch: 'Computer Science' },
    { name: 'Karan Malhotra', air: 412, iit: 'IIT Kharagpur', branch: 'Civil Engineering' },
    { name: 'Sneha Reddy', air: 578, iit: 'IIT Roorkee', branch: 'Chemical Engineering' }
  ];

  const yearwiseResults = [
    { year: '2024', selections: 487, under1000: 38, under100: 5 },
    { year: '2023', selections: 452, under1000: 35, under100: 4 },
    { year: '2022', selections: 418, under1000: 32, under100: 3 },
    { year: '2021', selections: 394, under1000: 29, under100: 3 }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-500 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white text-amber-600 hover:bg-gray-100">
            <Trophy className="w-4 h-4 mr-1" />
            Proven Track Record
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Results</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Celebrating the success of our students who made it to IITs and top engineering colleges
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-amber-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-amber-600">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Performers 2024 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Performers 2024
            </h2>
            <p className="text-xl text-gray-600">
              Congratulations to our star performers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {toppers2024.map((topper, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow border-2 border-amber-200">
                <CardContent className="pt-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{topper.name}</h3>
                      <Badge className="mt-2 bg-amber-600">AIR {topper.air}</Badge>
                    </div>
                    {index < 3 && (
                      <Trophy className={`w-8 h-8 ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : 'text-amber-600'}`} />
                    )}
                  </div>
                  <div className="space-y-2 text-gray-700">
                    <div className="flex items-center">
                      <Target className="w-4 h-4 mr-2 text-amber-600" />
                      <span className="font-semibold">{topper.iit}</span>
                    </div>
                    <div className="text-sm text-gray-600">{topper.branch}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Year-wise Results */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Year-wise Performance
            </h2>
          </div>

          <div className="space-y-4">
            {yearwiseResults.map((year, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-4 gap-4 items-center">
                    <div className="text-center md:text-left">
                      <div className="text-3xl font-bold text-amber-600">{year.year}</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{year.selections}</div>
                      <div className="text-sm text-gray-600">Total Selections</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{year.under1000}</div>
                      <div className="text-sm text-gray-600">AIR Under 1000</div>
                    </div>
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <div className="text-2xl font-bold text-gray-900">{year.under100}</div>
                      <div className="text-sm text-gray-600">AIR Under 100</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Factors */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Keys to Our Success
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8 text-amber-600" />,
                title: 'Expert Faculty',
                description: 'IIT alumni with 10+ years of teaching experience'
              },
              {
                icon: <Target className="w-8 h-8 text-blue-600" />,
                title: 'Focused Approach',
                description: 'Structured curriculum with regular assessments'
              },
              {
                icon: <Users className="w-8 h-8 text-green-600" />,
                title: 'Personal Attention',
                description: 'Small batches ensuring individual mentorship'
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-purple-600" />,
                title: 'Regular Testing',
                description: 'Comprehensive test series with detailed analysis'
              },
              {
                icon: <Trophy className="w-8 h-8 text-orange-600" />,
                title: 'Quality Material',
                description: 'Self-designed study material covering entire syllabus'
              },
              {
                icon: <Medal className="w-8 h-8 text-red-600" />,
                title: 'Success Culture',
                description: 'Motivating environment fostering excellence'
              }
            ].map((factor, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {factor.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{factor.title}</h3>
                  <p className="text-gray-600">{factor.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-amber-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Be Our Next Success Story
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Join our programs and achieve your IIT dream
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-amber-600 hover:bg-gray-100 text-lg px-8"
              onClick={() => navigate('/programs')}
            >
              Explore Programs
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-amber-600 text-lg px-8"
              onClick={() => navigate('/scholarship-test')}
            >
              Take Scholarship Test
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Results;

