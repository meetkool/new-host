import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  Award, 
  Users, 
  Trophy,
  TrendingUp,
  Target,
  Heart,
  Lightbulb,
  Shield,
  BookOpen,
  GraduationCap
} from 'lucide-react';

const AboutUs = () => {
  const navigate = useNavigate();

  const stats = [
    { number: '25+', text: 'Years of Excellence', icon: <Award className="w-8 h-8" /> },
    { number: '50,000+', text: 'Students Enrolled', icon: <Users className="w-8 h-8" /> },
    { number: '2,000+', text: 'IIT/NIT Selections', icon: <Trophy className="w-8 h-8" /> },
    { number: '95%', text: 'Success Rate', icon: <TrendingUp className="w-8 h-8" /> }
  ];

  const values = [
    {
      icon: <Target className="w-12 h-12 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of teaching and student development'
    },
    {
      icon: <Heart className="w-12 h-12 text-red-600" />,
      title: 'Student-Centric',
      description: 'Every decision we make prioritizes student success and well-being'
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-yellow-600" />,
      title: 'Innovation',
      description: 'Continuously evolving our teaching methods with latest educational technology'
    },
    {
      icon: <Shield className="w-12 h-12 text-green-600" />,
      title: 'Integrity',
      description: 'Transparent processes and honest guidance in every student interaction'
    }
  ];

  const milestones = [
    { year: '2000', event: 'Founded with a vision to transform JEE preparation' },
    { year: '2005', event: 'Expanded to 5 cities with 10+ centers' },
    { year: '2010', event: 'Launched online learning platform' },
    { year: '2015', event: 'Achieved 1000+ IIT selections milestone' },
    { year: '2020', event: 'Introduced AI-powered personalized learning' },
    { year: '2025', event: '50,000+ students enrolled, 25+ years of excellence' }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering students to achieve their IIT dreams for over 25 years
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-700 text-lg leading-relaxed">
                <p>
                  Founded in 2000, we started with a simple yet powerful vision: to make quality JEE coaching 
                  accessible to every aspiring engineer in India. What began as a small coaching center with 
                  just 30 students has grown into one of India's premier JEE preparation institutes.
                </p>
                <p>
                  Our journey has been marked by continuous innovation in teaching methodologies, investment 
                  in technology, and an unwavering commitment to student success. Today, we're proud to have 
                  helped thousands of students achieve their dreams of studying at IITs and other premier institutions.
                </p>
                <p>
                  With experienced faculty, comprehensive study material, advanced testing systems, and personalized 
                  mentorship, we provide everything a JEE aspirant needs to succeed. Our success rate speaks for itself, 
                  but our true pride lies in the countless lives we've transformed.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-64 h-64 text-white opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              Key milestones in our 25+ year history
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {milestone.year}
                </div>
                <div className="flex-1 pt-4">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
                    <p className="text-lg text-gray-700">{milestone.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold">Our Mission</h3>
                </div>
                <p className="text-xl text-blue-100 leading-relaxed">
                  To provide world-class JEE coaching that empowers students with knowledge, skills, 
                  and confidence to excel in competitive exams and build successful careers in engineering 
                  and technology.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-600 to-green-800 text-white">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-center mb-6">
                  <div className="bg-white/20 p-3 rounded-full mr-4">
                    <Lightbulb className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-bold">Our Vision</h3>
                </div>
                <p className="text-xl text-green-100 leading-relaxed">
                  To be India's most trusted and innovative JEE coaching institute, recognized for 
                  transforming lives through quality education, personalized mentorship, and 
                  technology-driven learning solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Students Choose Us
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8 text-blue-600" />,
                title: 'Proven Pedagogy',
                description: 'Time-tested teaching methods with continuous innovation'
              },
              {
                icon: <Users className="w-8 h-8 text-green-600" />,
                title: 'Expert Faculty',
                description: 'IIT alumni and experienced educators with deep subject knowledge'
              },
              {
                icon: <Target className="w-8 h-8 text-purple-600" />,
                title: 'Personalized Attention',
                description: 'Small batch sizes ensuring individual focus on every student'
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-orange-600" />,
                title: 'Track Record',
                description: '95% success rate with 2000+ IIT/NIT selections'
              },
              {
                icon: <Award className="w-8 h-8 text-red-600" />,
                title: 'Comprehensive Material',
                description: 'Self-designed study material covering entire JEE syllabus'
              },
              {
                icon: <Trophy className="w-8 h-8 text-indigo-600" />,
                title: 'Regular Testing',
                description: 'Extensive test series with detailed performance analytics'
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful students who chose us for their JEE preparation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8"
              onClick={() => navigate('/programs')}
            >
              Explore Programs
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8"
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

export default AboutUs;

