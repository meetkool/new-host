import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  School, 
  BookOpen, 
  Target,
  Calendar,
  Clock,
  CheckCircle2,
  GraduationCap,
  TrendingUp,
  Users,
  Sparkles
} from 'lucide-react';

const IntegratedSchoolPrograms = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: 1,
      title: 'Integrated School Program - Phase 1',
      subtitle: 'For Class 9 & 10 Students',
      duration: '2 Years (Class 9-10)',
      phase: 'Foundation Phase',
      target: 'NCERT + JEE Foundation',
      schedule: '3-4 days/week, 2-3 hours/day',
      price: '₹70,000/year',
      features: [
        'Synchronized with school curriculum',
        'NCERT chapter-wise teaching',
        'JEE foundation concepts introduced',
        'Monthly school-pattern tests',
        'Olympiad preparation included',
        'Focus on conceptual clarity',
        'Regular school exam preparation support',
        'Parent-teacher meetings every quarter'
      ],
      outcomes: [
        'Strong foundation in PCM',
        'High scores in school exams',
        'Early exposure to JEE concepts',
        'Develops problem-solving skills'
      ]
    },
    {
      id: 2,
      title: 'Integrated School Program - Phase 2',
      subtitle: 'For Class 11 Students',
      duration: '1 Year (Class 11)',
      phase: 'Intermediate Phase',
      target: 'CBSE Board + JEE Main/Advanced',
      schedule: '5 days/week, 3-4 hours/day',
      price: '₹1,00,000/year',
      features: [
        'Dual focus: Board + JEE preparation',
        'Complete Class 11 syllabus coverage',
        'Weekly tests (Board + JEE pattern)',
        'Separate study material for Board & JEE',
        'Doubt clearing after each session',
        'NCERT line-by-line coverage',
        'JEE-level problem solving',
        'Regular performance tracking'
      ],
      outcomes: [
        'Excellent board exam scores',
        'Strong JEE foundation',
        'Time management skills',
        'Confidence in handling both exams'
      ]
    },
    {
      id: 3,
      title: 'Integrated School Program - Phase 3',
      subtitle: 'For Class 12 Students',
      duration: '1 Year (Class 12)',
      phase: 'Advanced Phase',
      target: 'CBSE Board + JEE Main/Advanced',
      schedule: '6 days/week, 4-5 hours/day',
      price: '₹1,20,000/year',
      features: [
        'Intensive Board + JEE preparation',
        'Complete Class 12 syllabus',
        'Board-pattern mock tests',
        'JEE Main & Advanced test series',
        'Revision modules for both exams',
        'Previous year questions practice',
        'Exam strategy and time management',
        'Post-board JEE crash course included'
      ],
      outcomes: [
        '90%+ board exam scores',
        'JEE Main qualification',
        'Competitive JEE Advanced rank',
        'Multiple exam handling expertise'
      ]
    }
  ];

  const advantages = [
    {
      icon: <School className="w-8 h-8 text-blue-600" />,
      title: 'School Curriculum Aligned',
      description: 'Perfectly synchronized with your school syllabus and exam pattern'
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: 'Dual Benefit',
      description: 'Excel in both Board exams and JEE without compromising either'
    },
    {
      icon: <Clock className="w-8 h-8 text-purple-600" />,
      title: 'Flexible Timing',
      description: 'Classes scheduled after school hours or on weekends'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
      title: 'Gradual Progression',
      description: 'Phase-wise curriculum from foundation to advanced level'
    }
  ];

  const phases = [
    {
      phase: 'Phase 1',
      class: 'Class 9-10',
      focus: 'Foundation Building',
      description: 'Build strong conceptual foundation while maintaining excellent school performance',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      phase: 'Phase 2',
      class: 'Class 11',
      focus: 'Parallel Preparation',
      description: 'Simultaneous preparation for Board and JEE with balanced focus',
      color: 'bg-green-50 border-green-200'
    },
    {
      phase: 'Phase 3',
      class: 'Class 12',
      focus: 'Intensive Training',
      description: 'Final year intensive preparation for both Board exams and JEE',
      color: 'bg-orange-50 border-orange-200'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white text-green-600 hover:bg-gray-100">
              <Sparkles className="w-4 h-4 mr-1" />
              Best of Both Worlds
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Integrated School Programs
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Excel in school exams while building a strong foundation for JEE - No compromise needed
            </p>
          </div>
        </div>
      </section>

      {/* Phase Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three-Phase Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A structured pathway from Class 9 to Class 12
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {phases.map((phaseInfo, index) => (
              <Card key={index} className={`border-2 ${phaseInfo.color}`}>
                <CardHeader>
                  <div className="text-4xl font-bold text-gray-300 mb-2">{index + 1}</div>
                  <CardTitle className="text-xl">{phaseInfo.phase}</CardTitle>
                  <CardDescription className="text-base font-semibold">{phaseInfo.class}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-3">
                    <Badge variant="secondary">{phaseInfo.focus}</Badge>
                  </div>
                  <p className="text-sm text-gray-600">{phaseInfo.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {programs.map((program) => (
              <Card key={program.id} className="hover:shadow-2xl transition-shadow">
                <CardHeader className="bg-gradient-to-r from-green-50 to-white">
                  <Badge className="w-fit mb-3" variant="secondary">
                    {program.phase}
                  </Badge>
                  <CardTitle className="text-2xl md:text-3xl">{program.title}</CardTitle>
                  <CardDescription className="text-lg">{program.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-green-600" />
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
                            <div className="font-medium">Target</div>
                            <div className="text-sm text-gray-600">{program.target}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                        <div className="text-2xl font-bold text-green-700">{program.price}</div>
                        <div className="text-sm text-green-600">Annual program fee</div>
                      </div>

                      {/* Expected Outcomes */}
                      <div className="mt-6">
                        <h4 className="font-semibold mb-3 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2 text-green-600" />
                          Expected Outcomes
                        </h4>
                        <div className="space-y-2">
                          {program.outcomes.map((outcome, index) => (
                            <div key={index} className="flex items-start space-x-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span className="text-sm text-gray-700">{outcome}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
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
                      className="bg-green-600 hover:bg-green-700 text-white flex-1"
                      onClick={() => navigate('/scholarship-test')}
                    >
                      Apply Now
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-green-600 text-green-600 hover:bg-green-50 flex-1"
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

      {/* Advantages Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Integrated School Programs?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {advantage.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-sm text-gray-600">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start Your Dual-Success Journey
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Balance school excellence with JEE preparation from early on
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-green-600 hover:bg-gray-100 text-lg px-8"
              onClick={() => navigate('/scholarship-test')}
            >
              Register for Scholarship Test
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-green-600 text-lg px-8"
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

export default IntegratedSchoolPrograms;

