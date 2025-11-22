import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  Zap, 
  Clock,
  Target,
  TrendingUp,
  CheckCircle2,
  AlertCircle,
  Calendar,
  BookOpen,
  FileText,
  Award,
  Users,
  Rocket
} from 'lucide-react';

const CrashCourses = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: 1,
      title: 'JEE Main Crash Course',
      subtitle: 'For Class 12 & Droppers',
      duration: '3-4 Months',
      startDate: 'December - January',
      target: 'JEE Main',
      schedule: 'Daily classes (Mon-Sun)',
      price: '₹60,000',
      features: [
        'Rapid revision of complete syllabus',
        'Focus on high-weightage topics',
        'Formula sheets and quick revision notes',
        '100+ Previous year questions solved',
        'Daily practice assignments',
        '25+ Full-length mock tests',
        'Time management strategies',
        'Answer writing techniques',
        'Weekly performance analysis',
        'Last-minute tips and tricks'
      ],
      intensity: 'High',
      recommended: ['Board exams completed students', 'Droppers wanting quick revision']
    },
    {
      id: 2,
      title: 'JEE Advanced Crash Course',
      subtitle: 'For JEE Main Qualified Students',
      duration: '2 Months',
      startDate: 'Post JEE Main',
      target: 'JEE Advanced',
      schedule: 'Daily classes (Mon-Sun)',
      price: '₹50,000',
      features: [
        'Advanced level problem solving',
        'Topic-wise intensive practice',
        'Complex problem-solving strategies',
        'Previous 10 years JEE Advanced papers',
        'Tricky questions practice',
        '20+ JEE Advanced level mock tests',
        'Detailed solution discussions',
        'Time-bound practice sessions',
        'Weak area identification & improvement',
        'Rank prediction and counseling'
      ],
      intensity: 'Very High',
      recommended: ['JEE Main qualified aspirants', 'Students targeting IIT']
    },
    {
      id: 3,
      title: 'Complete JEE Crash Course',
      subtitle: 'For Class 12 & Droppers',
      duration: '6 Months',
      startDate: 'October - November',
      target: 'JEE Main & Advanced',
      schedule: 'Daily classes (Mon-Sun)',
      price: '₹90,000',
      features: [
        'Complete syllabus in fast-track mode',
        'Dual focus: JEE Main + Advanced',
        'Conceptual clarity with speed',
        'Extensive problem-solving practice',
        'Board exam pattern preparation',
        '50+ Mock tests (Main + Advanced)',
        'Weekly tests and assessments',
        'Revision classes before exams',
        'Study material and practice sheets',
        'Post-JEE counseling support'
      ],
      intensity: 'Very High',
      recommended: ['Serious aspirants needing intensive prep', 'Droppers with foundation']
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-[#19a951]" />,
      title: 'Rapid Learning',
      description: 'Cover entire syllabus in record time with focused teaching'
    },
    {
      icon: <Target className="w-8 h-8 text-[#0b3259]" />,
      title: 'Focused Approach',
      description: 'Emphasis on high-yield topics and exam-oriented preparation'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-[#19a951]" />,
      title: 'Score Improvement',
      description: 'Strategic preparation for maximum score in minimum time'
    },
    {
      icon: <Rocket className="w-8 h-8 text-[#0b3259]" />,
      title: 'Intensive Practice',
      description: 'Daily problem-solving and extensive mock test series'
    }
  ];

  const intensityLevels = {
    'High': 'border-[#19a951] bg-[#19a951]/5 text-[#19a951]',
    'Very High': 'border-[#0b3259] bg-[#0b3259]/5 text-[#0b3259]'
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#19a951] to-[#19a951] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white text-[#19a951] hover:bg-gray-100">
              <Zap className="w-4 h-4 mr-1" />
              Intensive Fast-Track Preparation
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Crash Courses
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Intensive revision and practice programs designed for last-minute preparation and score maximization
            </p>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-[#19a951]/5 border-b border-[#19a951]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start space-x-4">
            <AlertCircle className="w-6 h-6 text-[#19a951] flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-[#19a951] mb-2">Who Should Join Crash Courses?</h3>
              <p className="text-[#19a951]">
                Crash courses are ideal for students who have already completed the JEE syllabus and need 
                intensive revision, practice, and exam strategy. Not recommended for students who haven't 
                covered the basics. Consider our regular programs if you need comprehensive teaching.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {programs.map((program) => (
              <Card key={program.id} className="hover:shadow-2xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-[#19a951]/5 to-white">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <Badge 
                      className={`border-2 ${intensityLevels[program.intensity as keyof typeof intensityLevels]}`}
                      variant="outline"
                    >
                      <Zap className="w-3 h-3 mr-1" />
                      {program.intensity} Intensity
                    </Badge>
                    <Badge variant="secondary" className="bg-[#0b3259]/10 text-[#0b3259]">
                      Starts: {program.startDate}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">{program.title}</CardTitle>
                  <CardDescription className="text-lg">{program.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-[#19a951]" />
                        Program Details
                      </h3>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-start">
                          <Clock className="w-5 h-5 mr-3 text-gray-500 mt-0.5" />
                          <div>
                            <div className="font-medium">Duration</div>
                            <div className="text-sm text-gray-600">{program.duration}</div>
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
                          <Target className="w-5 h-5 mr-3 text-gray-500 mt-0.5" />
                          <div>
                            <div className="font-medium">Target Exam</div>
                            <div className="text-sm text-gray-600">{program.target}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-[#19a951]/5 rounded-lg border border-[#19a951]/20 mb-6">
                        <div className="text-2xl font-bold text-[#19a951]">{program.price}</div>
                        <div className="text-sm text-[#19a951]">Complete course fee</div>
                      </div>

                      {/* Recommended For */}
                      <div>
                        <h4 className="font-semibold mb-3 flex items-center text-sm">
                          <Users className="w-4 h-4 mr-2 text-[#19a951]" />
                          Recommended For
                        </h4>
                        <div className="space-y-2">
                          {program.recommended.map((rec, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <CheckCircle2 className="w-4 h-4 text-[#19a951]/50 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{rec}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-[#19a951]" />
                        What's Included
                      </h3>
                      <div className="space-y-2">
                        {program.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-[#19a951]/50 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                      className="bg-[#19a951] hover:bg-[#19a951] text-white flex-1"
                      onClick={() => navigate('/scholarship-test')}
                    >
                      Enroll Now
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-[#19a951] text-[#19a951] hover:bg-[#19a951]/5 flex-1"
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
              Why Choose Crash Courses?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Maximize your score with focused, intensive preparation
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

      {/* Study Schedule Example */}
      <section className="py-16 bg-gradient-to-br from-[#19a951]/5 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Typical Daily Schedule</h2>
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#19a951]/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-[#19a951]" />
                    <span className="font-medium">Morning Session</span>
                  </div>
                  <span className="text-sm text-gray-600">9:00 AM - 12:00 PM | Theory & Concepts</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#0b3259]/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-[#0b3259]" />
                    <span className="font-medium">Afternoon Session</span>
                  </div>
                  <span className="text-sm text-gray-600">1:00 PM - 4:00 PM | Problem Solving</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-[#19a951]/5 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-[#19a951]" />
                    <span className="font-medium">Evening Session</span>
                  </div>
                  <span className="text-sm text-gray-600">5:00 PM - 8:00 PM | Tests & Doubt Clearing</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#19a951] to-[#19a951] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Intensive Preparation?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Limited seats available - Enroll now to secure your spot
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-[#19a951] hover:bg-gray-100 text-lg px-8"
              onClick={() => navigate('/scholarship-test')}
            >
              Enroll for Crash Course
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#19a951] text-lg px-8"
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

export default CrashCourses;

