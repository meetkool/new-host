import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  GraduationCap, 
  School, 
  Laptop, 
  Zap,
  Users,
  Clock,
  Award,
  TrendingUp,
  ArrowRight,
  BookOpen,
  Target,
  Trophy
} from 'lucide-react';

const Programs = () => {
  const navigate = useNavigate();

  const programTypes = [
    {
      id: 'classroom',
      title: 'Classroom Programs',
      description: 'Traditional classroom teaching with experienced faculty for Classes 9-12',
      icon: <GraduationCap className="w-12 h-12 text-blue-600" />,
      features: [
        'Daily live classes with expert faculty',
        'Regular doubt clearing sessions',
        'Comprehensive study material',
        'Weekly tests and assessments',
        'Small batch sizes for personalized attention'
      ],
      route: '/programs/classroom',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      id: 'integrated-school',
      title: 'Integrated School Programs',
      description: 'Combined school curriculum + JEE preparation for Classes 9-12',
      icon: <School className="w-12 h-12 text-green-600" />,
      features: [
        'Synchronized with school syllabus',
        'Board + JEE parallel preparation',
        'Phase-wise structured curriculum',
        'Regular parent-teacher meetings',
        'Flexible timing options'
      ],
      route: '/programs/integrated-school',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      id: 'online',
      title: 'Live Online Programs',
      description: 'Interactive live classes from anywhere with recorded lectures',
      icon: <Laptop className="w-12 h-12 text-purple-600" />,
      features: [
        'Live interactive sessions',
        'Access to recorded lectures',
        'Digital study material',
        'Online doubt solving forum',
        'Virtual classroom experience'
      ],
      route: '/programs/online',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      id: 'crash-course',
      title: 'Crash Courses',
      description: 'Intensive revision courses for Class 12 and droppers',
      icon: <Zap className="w-12 h-12 text-orange-600" />,
      features: [
        'Rapid revision of entire syllabus',
        'Focus on important topics',
        'Extensive mock tests',
        'Previous year question solving',
        'Exam strategy and time management'
      ],
      route: '/programs/crash-course',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    }
  ];

  const stats = [
    { number: '50,000+', text: 'Students Enrolled', icon: <Users className="w-6 h-6" /> },
    { number: '25+', text: 'Years of Excellence', icon: <Award className="w-6 h-6" /> },
    { number: '95%', text: 'Success Rate', icon: <Trophy className="w-6 h-6" /> },
    { number: '2000+', text: 'IIT/NIT Selections', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Programs
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Choose the right program for your JEE Main & Advanced preparation journey
            </p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <div className="flex justify-center mb-3 text-blue-200">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-blue-100">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Find Your Perfect Program
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer multiple program types to suit different learning needs and preferences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {programTypes.map((program) => (
              <Card 
                key={program.id} 
                className={`hover:shadow-2xl transition-all duration-300 border-2 ${program.borderColor} ${program.bgColor}`}
              >
                <CardHeader>
                  <div className="mb-4">
                    {program.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{program.title}</CardTitle>
                  <CardDescription className="text-base">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {program.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => navigate(program.route)}
                  >
                    Learn More <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Choose Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Choose the Right Program?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Classes 9-10</h3>
                <p className="text-gray-600">
                  Start with <strong>Foundation Integrated School Program</strong> to build strong basics while managing school studies
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Class 11</h3>
                <p className="text-gray-600">
                  Choose <strong>2-Year Classroom</strong> or <strong>Online Program</strong> for comprehensive JEE preparation with regular practice
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Class 12 / Dropper</h3>
                <p className="text-gray-600">
                  Opt for <strong>Crash Course</strong> for intensive revision and extensive test practice before exam
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not Sure Which Program to Choose?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Talk to our counselors and take our scholarship test to find the perfect fit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6"
              onClick={() => navigate('/scholarship-test')}
            >
              Take Scholarship Test
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6"
              onClick={() => window.location.href = 'tel:+919205321167'}
            >
              Talk to Counselor
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Programs;

