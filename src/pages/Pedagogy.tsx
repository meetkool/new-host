import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  Brain,
  CheckCircle2,
  Users,
  TrendingUp,
  Target,
  BarChart,
  Award,
  Lightbulb,
  Repeat
} from 'lucide-react';

const Pedagogy = () => {
  const navigate = useNavigate();

  const teachingApproach = [
    {
      icon: <Lightbulb className="w-12 h-12 text-yellow-600" />,
      title: 'Concept Clarity First',
      description: 'We focus on building strong conceptual understanding before moving to problem solving. Every topic is explained from fundamentals with real-world applications.'
    },
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: 'Structured Curriculum',
      description: 'Our syllabus is carefully designed with progressive difficulty levels, ensuring students build knowledge systematically from basics to advanced concepts.'
    },
    {
      icon: <Repeat className="w-12 h-12 text-green-600" />,
      title: 'Practice & Revision',
      description: 'Regular practice sessions and multiple revision cycles ensure long-term retention and mastery of concepts through spaced repetition.'
    },
    {
      icon: <BarChart className="w-12 h-12 text-purple-600" />,
      title: 'Continuous Assessment',
      description: 'Weekly tests and regular assessments help track progress, identify weak areas, and adjust learning strategies for optimal results.'
    }
  ];

  const learningCycle = [
    { step: '1', title: 'Teach', description: 'Concept explanation with examples', color: 'bg-blue-600' },
    { step: '2', title: 'Practice', description: 'Guided problem solving', color: 'bg-green-600' },
    { step: '3', title: 'Test', description: 'Regular assessments', color: 'bg-orange-600' },
    { step: '4', title: 'Analyze', description: 'Performance feedback', color: 'bg-purple-600' },
    { step: '5', title: 'Revise', description: 'Targeted improvement', color: 'bg-red-600' },
    { step: '6', title: 'Master', description: 'Concept mastery achieved', color: 'bg-indigo-600' }
  ];

  const classroomFeatures = [
    'Interactive board teaching with visual aids',
    'Small batch sizes (25-30 students)',
    'Doubt clearing after every class',
    'Regular parent-teacher meetings',
    'Individual attention to each student',
    'Peer learning and group discussions',
    'Competitive yet collaborative environment',
    'Regular motivation and counseling sessions'
  ];

  const testingSystem = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
      title: 'Chapter Tests',
      description: 'After completing each chapter to ensure concept clarity'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-green-600" />,
      title: 'Part Tests',
      description: 'Subject-wise tests covering multiple chapters'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-orange-600" />,
      title: 'Full Tests',
      description: 'Complete syllabus tests in JEE Main/Advanced pattern'
    },
    {
      icon: <CheckCircle2 className="w-8 h-8 text-purple-600" />,
      title: 'Mock Tests',
      description: 'Exact JEE simulation with All India ranking'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Pedagogy
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              A proven teaching methodology that has helped thousands of students crack JEE
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Teaching Philosophy
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We believe in deep understanding, not rote learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teachingApproach.map((approach, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                    {approach.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{approach.title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed">{approach.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Cycle */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our 6-Step Learning Cycle
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to ensure complete mastery of every topic
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {learningCycle.map((step, index) => (
              <div key={index} className="text-center">
                <div className={`${step.color} text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4 shadow-lg`}>
                  {step.step}
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classroom Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Classroom Experience
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We create an environment that promotes active learning, encourages questions, 
                and fosters healthy competition while maintaining a collaborative spirit.
              </p>
              <div className="space-y-3">
                {classroomFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-2xl flex items-center justify-center">
                <Users className="w-48 h-48 text-white opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testing System */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Testing System
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Regular assessments at every level of learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testingSystem.map((test, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {test.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{test.title}</h3>
                  <p className="text-sm text-gray-600">{test.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Tracking */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center">
                <BarChart className="w-48 h-48 text-white opacity-20" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Performance Analytics
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Every test result is analyzed in detail to provide actionable insights. Students 
                  receive personalized feedback on:
                </p>
                <div className="space-y-3">
                  {[
                    'Topic-wise performance and weak areas',
                    'Comparison with batch and All India toppers',
                    'Time management and accuracy metrics',
                    'Question-wise difficulty analysis',
                    'Personalized improvement recommendations',
                    'Progress tracking over time'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <TrendingUp className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Approach */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Faculty-Student Interaction
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-8 h-8 text-blue-600" />,
                title: 'Mentorship',
                description: 'Every student gets a dedicated mentor for personalized guidance and support'
              },
              {
                icon: <Award className="w-8 h-8 text-green-600" />,
                title: 'Expertise',
                description: 'Learn from IIT alumni and experienced faculty with 10+ years of teaching'
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600" />,
                title: 'Accessibility',
                description: 'Faculty available beyond class hours for doubt solving and career guidance'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8">
                  <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-indigo-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Our Teaching Methodology
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Attend a demo class and see the difference yourself
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 text-lg px-8"
            >
              Book Demo Class
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-indigo-600 text-lg px-8"
              onClick={() => navigate('/programs')}
            >
              View Programs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pedagogy;

