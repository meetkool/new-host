import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
  CheckCircle2,
  BookOpen
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
      icon: <Target className="w-10 h-10 text-[#0b3259]" />,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of teaching and student development'
    },
    {
      icon: <Heart className="w-10 h-10 text-[#0b3259]" />,
      title: 'Student-Centric',
      description: 'Every decision we make prioritizes student success and well-being'
    },
    {
      icon: <Lightbulb className="w-10 h-10 text-[#0b3259]" />,
      title: 'Innovation',
      description: 'Continuously evolving our teaching methods with latest educational technology'
    },
    {
      icon: <Shield className="w-10 h-10 text-[#0b3259]" />,
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
    <div className="min-h-screen bg-white pt-16 font-sans text-gray-800">
      {/* Hero Section - Red Banner Style */}
      <section className="bg-[#0b3259] text-white py-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-green-500/20 rounded-full -ml-24 -mb-24"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-2/3">
              <Badge className="bg-[#19a951] text-black hover:bg-green-600 border-none mb-4 text-sm font-bold px-3 py-1">
                SINCE 2000
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                About <span className="text-[#19a951]">Us</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-2xl font-medium">
                Empowering students to achieve their IIT dreams with a legacy of trust, excellence, and results.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-white p-4 rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform">
                 <Trophy className="w-32 h-32 text-[#0b3259]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Yellow Cards */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-[#19a951] border-none shadow-lg hover:shadow-xl transition-all text-center py-6 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 w-16 h-16 bg-white/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150"></div>
                <CardContent className="p-0 relative z-10">
                  <div className="flex justify-center mb-3 text-[#0b3259]">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-black text-black mb-1">{stat.number}</div>
                  <div className="text-sm md:text-base font-bold text-black/80 uppercase tracking-wide">{stat.text}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section - Text Heavy with Side Graphic */}
      <section className="py-20 relative">
        {/* Winding Path Background (Simulated) */}
        <div className="absolute inset-0 z-0 opacity-5 pointer-events-none overflow-hidden">
           <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 C30,10 70,10 100,0 L100,100 L0,100 Z" fill="#000" />
           </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="lg:w-1/2">
              <div className="inline-block border-b-4 border-[#0b3259] mb-6">
                 <h2 className="text-3xl md:text-4xl font-bold text-gray-900 pb-2">
                  Our Journey & Legacy
                </h2>
              </div>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
                <p>
                  <span className="text-4xl float-left mr-2 mt-[-10px] font-black text-[#0b3259]">F</span>
                  ounded in 2000, we started with a simple yet powerful vision: to make quality JEE coaching 
                  accessible to every aspiring engineer in India. What began as a small coaching center with 
                  just 30 students has grown into one of India's premier JEE preparation institutes.
                </p>
                <p>
                  Our journey has been marked by continuous innovation in teaching methodologies, investment 
                  in technology, and an unwavering commitment to student success. Today, we're proud to have 
                  helped thousands of students achieve their dreams of studying at IITs and other premier institutions.
                </p>
                <div className="bg-gray-50 border-l-4 border-[#0b3259] p-6 my-6 rounded-r-lg italic text-gray-600">
                  "Success is not just about clearing an exam; it's about building the character and discipline required to excel in life."
                </div>
                <p>
                  With experienced faculty, comprehensive study material, advanced testing systems, and personalized 
                  mentorship, we provide everything a JEE aspirant needs to succeed. Our success rate speaks for itself, 
                  but our true pride lies in the countless lives we've transformed.
                </p>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="bg-gray-100 p-8 rounded-xl border-2 border-gray-200">
                <h3 className="text-xl font-bold text-[#0b3259] mb-6 flex items-center">
                  <TrendingUp className="w-6 h-6 mr-2" />
                  Growth Milestones
                </h3>
                <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active mb-8 last:mb-0">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-[#19a951] text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                         <div className="w-3 h-3 bg-[#0b3259] rounded-full"></div>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-slate-200 shadow-sm">
                        <div className="flex items-center justify-between space-x-2 mb-1">
                          <div className="font-bold text-slate-900">{milestone.year}</div>
                        </div>
                        <div className="text-slate-500 text-sm">{milestone.event}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - Grid */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core <span className="text-[#0b3259] underline decoration-green-400 underline-offset-4">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-2xl transition-shadow border-t-4 border-[#0b3259] bg-white h-full">
                <CardContent className="pt-8 pb-6">
                  <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-[#0b3259]">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission - Boxed Style */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#0b3259] text-white p-10 rounded-xl relative overflow-hidden shadow-xl">
               <div className="absolute top-0 right-0 -mr-10 -mt-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
               <div className="flex items-center mb-6">
                 <Target className="w-10 h-10 text-[#19a951] mr-4" />
                 <h3 className="text-3xl font-bold">Our Mission</h3>
               </div>
               <p className="text-lg leading-relaxed text-gray-200">
                 To provide world-class JEE coaching that empowers students with knowledge, skills, 
                 and confidence to excel in competitive exams and build successful careers in engineering 
                 and technology.
               </p>
            </div>

            <div className="bg-[#0b3259] text-white p-10 rounded-xl relative overflow-hidden shadow-xl">
               <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-40 h-40 bg-green-400/20 rounded-full blur-2xl"></div>
               <div className="flex items-center mb-6">
                 <Lightbulb className="w-10 h-10 text-[#19a951] mr-4" />
                 <h3 className="text-3xl font-bold">Our Vision</h3>
               </div>
               <p className="text-lg leading-relaxed text-gray-100">
                 To be India's most trusted and innovative JEE coaching institute, recognized for 
                 transforming lives through quality education, personalized mentorship, and 
                 technology-driven learning solutions.
               </p>
            </div>
          </div>
        </div>
      </section>

      {/* Did You Know Banner */}
      <section className="py-12 bg-[#0b3259] text-white">
         <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Do You Know That Excellence is a Habit?
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8 font-light">
              90% of our students who started in Class 9th have secured a rank in Top 5000 in JEE Advanced. Early start gives you the edge!
            </p>
            <Button 
              className="bg-[#19a951] text-black hover:bg-white hover:text-[#0b3259] font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-colors"
              onClick={() => navigate('/programs')}
            >
              Explore Integrated Programs
            </Button>
         </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;