import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  FileText, 
  Clock,
  Target,
  TrendingUp,
  CheckCircle2,
  BarChart,
  Award,
  Users,
  Zap,
  Brain,
  Trophy,
  Calendar
} from 'lucide-react';

const TestSeries = () => {
  const navigate = useNavigate();

  const testSeries = [
    {
      id: 1,
      title: 'JEE Main Test Series 2025',
      subtitle: 'Complete Test Series for JEE Main',
      totalTests: 40,
      fullLength: 25,
      partTests: 15,
      validity: '12 months',
      price: '₹5,000',
      features: [
        '25 Full-length mock tests (JEE Main pattern)',
        '15 Part tests (Physics, Chemistry, Maths)',
        'Detailed solutions with video explanations',
        'All India rank and percentile',
        'Performance analytics dashboard',
        'Weak area identification',
        'Previous year papers analysis',
        'Comparison with toppers',
        'Mobile app access',
        'Instant result declaration'
      ],
      popular: true
    },
    {
      id: 2,
      title: 'JEE Advanced Test Series 2025',
      subtitle: 'Advanced Level Test Series',
      totalTests: 30,
      fullLength: 20,
      partTests: 10,
      validity: '10 months',
      price: '₹6,000',
      features: [
        '20 Full-length JEE Advanced mock tests',
        '10 Part tests (subject-wise)',
        'IIT-level complex problems',
        'Detailed performance reports',
        'All India rank prediction',
        'Topic-wise analytics',
        'Time management insights',
        'Comparison with IIT aspirants',
        'Expert mentorship sessions',
        'Previous 15 years paper pattern'
      ],
      popular: false
    },
    {
      id: 3,
      title: 'Complete JEE Test Series 2025',
      subtitle: 'Main + Advanced Combined',
      totalTests: 70,
      fullLength: 45,
      partTests: 25,
      validity: '12 months',
      price: '₹9,000',
      features: [
        '45 Full-length tests (Main + Advanced)',
        '25 Part tests across all subjects',
        'Progressive difficulty levels',
        'Comprehensive analytics',
        'Dual exam preparation',
        'Weekly test schedule',
        'Detailed solution PDFs',
        'Live doubt-solving sessions',
        'Personalized improvement plan',
        'Best value for serious aspirants'
      ],
      popular: true
    },
    {
      id: 4,
      title: 'Foundation Test Series',
      subtitle: 'For Class 9-10 Students',
      totalTests: 24,
      fullLength: 12,
      partTests: 12,
      validity: '12 months',
      price: '₹3,000',
      features: [
        '12 Full syllabus foundation tests',
        '12 Chapter-wise tests',
        'Age-appropriate difficulty',
        'NCERT + Olympiad level questions',
        'Detailed performance reports',
        'Parent dashboard access',
        'Concept clarity feedback',
        'Olympiad preparation included',
        'Monthly progress reports',
        'Early JEE exposure'
      ],
      popular: false
    }
  ];

  const features = [
    {
      icon: <BarChart className="w-8 h-8 text-blue-600" />,
      title: 'Advanced Analytics',
      description: 'Detailed performance metrics, weak area analysis, and personalized recommendations'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'All India Ranking',
      description: 'Compare your performance with thousands of JEE aspirants across India'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-600" />,
      title: 'AI-Powered Insights',
      description: 'Smart recommendations based on your performance patterns and weak areas'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: 'Instant Results',
      description: 'Get your scores, solutions, and detailed analysis immediately after submission'
    }
  ];

  const benefits = [
    'Exam-like environment and interface',
    'Adaptive difficulty based on performance',
    'Topic-wise and chapter-wise analysis',
    'Time management training',
    'Accuracy improvement tracking',
    'Comparison with top rankers',
    'Regular test reminders',
    'Downloadable solution PDFs'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white text-indigo-600 hover:bg-gray-100">
              <Trophy className="w-4 h-4 mr-1" />
              Assessment & Practice
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Test Series 2025
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Practice with India's most comprehensive test series featuring advanced analytics and All India ranking
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold mb-1">50,000+</div>
              <div className="text-sm text-indigo-100">Active Test Takers</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold mb-1">70+</div>
              <div className="text-sm text-indigo-100">Mock Tests Available</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold mb-1">95%</div>
              <div className="text-sm text-indigo-100">Accuracy Rate</div>
            </div>
            <div className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-lg">
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-indigo-100">Available Access</div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Series Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Test Series
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select the test series that matches your exam preparation needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testSeries.map((series) => (
              <Card 
                key={series.id} 
                className={`hover:shadow-2xl transition-shadow ${series.popular ? 'border-2 border-indigo-500 ring-4 ring-indigo-100' : ''}`}
              >
                <CardHeader className={series.popular ? 'bg-gradient-to-r from-indigo-50 to-white' : ''}>
                  {series.popular && (
                    <Badge className="w-fit mb-3 bg-indigo-600 hover:bg-indigo-700">
                      Most Popular
                    </Badge>
                  )}
                  <CardTitle className="text-2xl">{series.title}</CardTitle>
                  <CardDescription className="text-base">{series.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {/* Test Details */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <FileText className="w-6 h-6 mx-auto mb-1 text-indigo-600" />
                      <div className="font-bold text-lg">{series.totalTests}</div>
                      <div className="text-xs text-gray-600">Total Tests</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Clock className="w-6 h-6 mx-auto mb-1 text-green-600" />
                      <div className="font-bold text-lg">{series.validity}</div>
                      <div className="text-xs text-gray-600">Validity</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <Target className="w-6 h-6 mx-auto mb-1 text-blue-600" />
                      <div className="font-bold text-lg">{series.fullLength}</div>
                      <div className="text-xs text-gray-600">Full Length</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <BarChart className="w-6 h-6 mx-auto mb-1 text-purple-600" />
                      <div className="font-bold text-lg">{series.partTests}</div>
                      <div className="text-xs text-gray-600">Part Tests</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 flex items-center">
                      <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
                      What's Included
                    </h4>
                    <div className="space-y-2">
                      {series.features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                          <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-3xl font-bold text-indigo-700">{series.price}</div>
                      <div className="text-sm text-gray-600">One-time payment</div>
                    </div>
                  </div>
                  <Button 
                    className={`w-full ${series.popular ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-blue-600 hover:bg-blue-700'} text-white`}
                    size="lg"
                  >
                    Subscribe Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Advanced Testing Platform
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the most sophisticated test series platform in India
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-br from-indigo-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Additional Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Schedule */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Test Schedule (Sample)</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-600" />
                    <div>
                      <div className="font-medium">Weekly Tests</div>
                      <div className="text-sm text-gray-600">Every Sunday, 9:00 AM</div>
                    </div>
                  </div>
                  <Badge variant="secondary">Full Length</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-green-600" />
                    <div>
                      <div className="font-medium">Part Tests</div>
                      <div className="text-sm text-gray-600">Every Wednesday, 6:00 PM</div>
                    </div>
                  </div>
                  <Badge variant="secondary">Subject Wise</Badge>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    <div>
                      <div className="font-medium">Grand Tests</div>
                      <div className="text-sm text-gray-600">Monthly, First Sunday</div>
                    </div>
                  </div>
                  <Badge variant="secondary">All India Rank</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Practicing Today
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of students preparing for JEE with our test series
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8"
            >
              Subscribe to Test Series
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 text-lg px-8"
            >
              Take Free Sample Test
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TestSeries;

