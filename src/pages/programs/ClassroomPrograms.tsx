import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
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
  GraduationCap,
  FileText,
  TrendingUp
} from 'lucide-react';

const ClassroomPrograms = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: 1,
      title: 'Two-Year Classroom Program',
      subtitle: 'For Class 11 Students',
      duration: '2 Years',
      class: '11th',
      target: 'JEE Main & Advanced',
      batchSize: '25-30 students',
      schedule: '6 days/week, 4-5 hours/day',
      price: '₹1,80,000',
      features: [
        'Complete syllabus coverage for Classes 11 & 12',
        '300+ hours of classroom instruction',
        'Weekly tests and monthly assessments',
        'Comprehensive study material and workbooks',
        'Doubt clearing sessions after each class',
        'Regular parent-teacher meetings',
        '50+ Mock tests (JEE Main & Advanced)',
        'Performance analytics and personalized feedback'
      ],
      highlights: ['Most Popular', 'Best for Serious Aspirants']
    },
    {
      id: 2,
      title: 'One-Year Classroom Program',
      subtitle: 'For Class 12 Students',
      duration: '1 Year',
      class: '12th',
      target: 'JEE Main & Advanced',
      batchSize: '25-30 students',
      schedule: '6 days/week, 5-6 hours/day',
      price: '₹1,20,000',
      features: [
        'Rapid coverage of entire JEE syllabus',
        '200+ hours of intensive classroom teaching',
        'Weekly full syllabus tests',
        'Revision modules and summary notes',
        'Focus on problem-solving techniques',
        'Regular doubt sessions',
        '40+ Mock tests (JEE Main & Advanced)',
        'Exam strategy and time management'
      ],
      highlights: ['Intensive Course']
    },
    {
      id: 3,
      title: 'Foundation Classroom Program',
      subtitle: 'For Class 9 & 10 Students',
      duration: '1-2 Years',
      class: '9th-10th',
      target: 'JEE Foundation',
      batchSize: '20-25 students',
      schedule: '4 days/week, 2-3 hours/day',
      price: '₹60,000/year',
      features: [
        'Strong conceptual foundation building',
        'NCERT + Advanced problem solving',
        'Monthly tests and assessments',
        'Age-appropriate study material',
        'Focus on Maths, Physics, Chemistry',
        'Regular progress tracking',
        'Olympiad preparation included',
        'Smooth transition to JEE preparation'
      ],
      highlights: ['Early Start Advantage']
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Small Batch Size',
      description: 'Limited students per batch ensures personalized attention and doubt clearing'
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-green-600" />,
      title: 'Expert Faculty',
      description: 'Learn from IIT alumni and experienced educators with proven track record'
    },
    {
      icon: <FileText className="w-8 h-8 text-purple-600" />,
      title: 'Comprehensive Material',
      description: 'Self-designed study material, practice sheets, and workbooks'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: 'Regular Testing',
      description: 'Weekly chapter tests, monthly cumulative tests, and full mock tests'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white text-blue-600 hover:bg-gray-100">
              Premium Classroom Experience
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Classroom Programs
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Traditional classroom coaching with face-to-face interaction, regular doubt clearing, and personalized mentorship
            </p>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {programs.map((program) => (
              <Card key={program.id} className="hover:shadow-2xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-white">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {program.highlights.map((highlight, index) => (
                      <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-700">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">{program.title}</CardTitle>
                  <CardDescription className="text-lg">{program.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Program Details */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center">
                        <Target className="w-5 h-5 mr-2 text-blue-600" />
                        Program Details
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Clock className="w-5 h-5 mr-3 text-gray-500 mt-0.5" />
                          <div>
                            <div className="font-medium">Duration</div>
                            <div className="text-sm text-gray-600">{program.duration}</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Users className="w-5 h-5 mr-3 text-gray-500 mt-0.5" />
                          <div>
                            <div className="font-medium">Batch Size</div>
                            <div className="text-sm text-gray-600">{program.batchSize}</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Calendar className="w-5 h-5 mr-3 text-gray-500 mt-0.5" />
                          <div>
                            <div className="font-medium">Schedule</div>
                            <div className="text-sm text-gray-600">{program.schedule}</div>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Trophy className="w-5 h-5 mr-3 text-gray-500 mt-0.5" />
                          <div>
                            <div className="font-medium">Target Exam</div>
                            <div className="text-sm text-gray-600">{program.target}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="text-2xl font-bold text-green-700">{program.price}</div>
                        <div className="text-sm text-green-600">Complete program fee</div>
                      </div>
                    </div>

                    {/* Right Column - Features */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-green-600" />
                        Key Features
                      </h3>
                      <div className="space-y-2">
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
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Button 
                      size="lg"
                      className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
                      onClick={() => navigate('/scholarship-test')}
                    >
                      Apply Now
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 flex-1"
                      onClick={() => window.location.href = 'tel:+919205321167'}
                    >
                      Get Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Classroom Programs?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the best of traditional teaching with modern pedagogy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your JEE Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Take our scholarship test to get up to 90% scholarship and admission
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8"
              onClick={() => navigate('/scholarship-test')}
            >
              Register for Scholarship Test
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8"
              onClick={() => navigate('/centers')}
            >
              Find Nearest Center
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ClassroomPrograms;

