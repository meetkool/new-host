import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { 
  GraduationCap, 
  Award,
  BookOpen,
  Users,
  Star,
  CheckCircle2
} from 'lucide-react';

const Faculty = () => {
  const faculty = [
    {
      name: 'Dr. Rajesh Kumar',
      subject: 'Physics',
      qualification: 'IIT Delhi (Ph.D.), 15 years experience',
      specialization: 'Mechanics, Electromagnetism',
      achievements: ['500+ IIT selections', 'Author of 3 physics books', 'KVPY mentor'],
      image: null
    },
    {
      name: 'Prof. Anjali Sharma',
      subject: 'Chemistry',
      qualification: 'IIT Bombay (M.Tech), 12 years experience',
      specialization: 'Organic Chemistry, Physical Chemistry',
      achievements: ['400+ top rankers', 'Chemistry Olympiad coach', 'Research publications'],
      image: null
    },
    {
      name: 'Mr. Vikram Singh',
      subject: 'Mathematics',
      qualification: 'IIT Kanpur (B.Tech), 10 years experience',
      specialization: 'Calculus, Algebra, Coordinate Geometry',
      achievements: ['350+ IIT selections', 'IMO trainer', 'Problem-solving expert'],
      image: null
    },
    {
      name: 'Dr. Priya Menon',
      subject: 'Physics',
      qualification: 'IIT Madras (Ph.D.), 14 years experience',
      specialization: 'Modern Physics, Optics',
      achievements: ['450+ successful students', 'NTSE mentor', 'Educational innovator'],
      image: null
    },
    {
      name: 'Prof. Amit Patel',
      subject: 'Chemistry',
      qualification: 'IIT Kharagpur (M.Sc), 11 years experience',
      specialization: 'Inorganic Chemistry, Thermodynamics',
      achievements: ['380+ top rankers', 'Chemistry author', 'Research background'],
      image: null
    },
    {
      name: 'Mr. Deepak Verma',
      subject: 'Mathematics',
      qualification: 'IIT Roorkee (B.Tech), 13 years experience',
      specialization: 'Trigonometry, Probability, Statistics',
      achievements: ['420+ IIT selections', 'Math Olympiad coach', 'Conceptual teaching expert'],
      image: null
    }
  ];

  const strengths = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      title: 'IIT Alumni',
      description: 'All faculty members are from premier institutes like IITs'
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: 'Proven Track Record',
      description: '10+ years average teaching experience with excellent results'
    },
    {
      icon: <BookOpen className="w-8 h-8 text-purple-600" />,
      title: 'Subject Experts',
      description: 'Deep subject knowledge with research and publication experience'
    },
    {
      icon: <Users className="w-8 h-8 text-orange-600" />,
      title: 'Student-Friendly',
      description: 'Approachable, patient, and dedicated to student success'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-600 to-violet-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
          <p className="text-xl text-violet-100 max-w-3xl mx-auto">
            Learn from the best minds - IIT alumni and experienced educators
          </p>
        </div>
      </section>

      {/* Faculty Strengths */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Makes Our Faculty Special?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <div key={index} className="text-center">
                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {strength.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{strength.title}</h3>
                <p className="text-sm text-gray-600">{strength.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Faculty
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {faculty.map((teacher, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="pt-8">
                  <div className="bg-gradient-to-br from-violet-400 to-violet-600 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                    <GraduationCap className="w-20 h-20 text-white" />
                  </div>
                  <div className="text-center mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                    <Badge className="mb-3">{teacher.subject}</Badge>
                    <p className="text-sm text-gray-600 mb-2">{teacher.qualification}</p>
                    <p className="text-sm font-medium text-violet-600">{teacher.specialization}</p>
                  </div>
                  <div className="space-y-2 mt-4">
                    {teacher.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <Star className="w-4 h-4 text-yellow-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Approach */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Faculty Teaching Approach
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              'Conceptual clarity with real-world examples',
              'Interactive teaching with student participation',
              'Regular doubt clearing sessions',
              'Personalized attention to weak students',
              'Continuous performance monitoring',
              'Motivational counseling and guidance',
              'Problem-solving techniques and shortcuts',
              'Exam strategy and time management tips'
            ].map((approach, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                <CheckCircle2 className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{approach}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-violet-600 to-violet-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Learn from the Best
          </h2>
          <p className="text-xl text-violet-100 mb-8">
            Join our programs and get taught by IIT alumni and expert educators
          </p>
          <Button 
            size="lg"
            className="bg-white text-violet-600 hover:bg-gray-100 text-lg px-8"
          >
            View Programs
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Faculty;

