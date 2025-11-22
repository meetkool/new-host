import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  Laptop, 
  Video, 
  Clock,
  Users,
  Download,
  MessageCircle,
  CheckCircle2,
  Wifi,
  PlayCircle,
  BookOpen,
  Target,
  Calendar
} from 'lucide-react';

const OnlinePrograms = () => {
  const navigate = useNavigate();

  const programs = [
    {
      id: 1,
      title: 'Two-Year Live Online Program',
      subtitle: 'For Class 11 Students',
      duration: '2 Years',
      class: '11th',
      target: 'JEE Main & Advanced',
      schedule: 'Daily live classes (Mon-Sat)',
      price: '₹1,20,000',
      features: [
        'Live interactive classes daily',
        'Real-time doubt clearing during class',
        'Recorded lectures available 24/7',
        'Digital study material and notes',
        'Weekly online tests with instant results',
        'Mobile app + web platform access',
        'Online doubt forum with faculty',
        '50+ Full-length mock tests',
        'Performance analytics dashboard'
      ]
    },
    {
      id: 2,
      title: 'One-Year Live Online Program',
      subtitle: 'For Class 12 Students',
      duration: '1 Year',
      class: '12th',
      target: 'JEE Main & Advanced',
      schedule: 'Daily live classes (Mon-Sat)',
      price: '₹80,000',
      features: [
        'Intensive daily live sessions',
        'Complete syllabus coverage',
        'Live doubt sessions',
        'All lectures recorded and accessible',
        'Digital books and study material',
        'Daily practice assignments',
        'Weekly full-syllabus tests',
        '40+ Mock tests (JEE Main & Advanced)',
        'Dedicated student support team'
      ]
    },
    {
      id: 3,
      title: 'Foundation Online Program',
      subtitle: 'For Class 9 & 10 Students',
      duration: '1-2 Years',
      class: '9th-10th',
      target: 'JEE Foundation',
      schedule: '4 days/week',
      price: '₹40,000/year',
      features: [
        'Live foundation classes',
        'NCERT + Olympiad level preparation',
        'Recorded lecture library',
        'Interactive online sessions',
        'Monthly assessments',
        'Age-appropriate content',
        'Parent progress reports',
        'Gamified learning modules'
      ]
    }
  ];

  const features = [
    {
      icon: <Video className="w-8 h-8 text-[#0b3259]" />,
      title: 'Live Interactive Classes',
      description: 'Real-time teaching with two-way audio-video interaction'
    },
    {
      icon: <Download className="w-8 h-8 text-[#19a951]" />,
      title: 'Recorded Lectures',
      description: 'Access all recorded classes anytime, anywhere for revision'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[#0b3259]" />,
      title: '24/7 Doubt Support',
      description: 'Online doubt forum and dedicated support for query resolution'
    },
    {
      icon: <Laptop className="w-8 h-8 text-[#19a951]" />,
      title: 'Multi-Device Access',
      description: 'Study on laptop, tablet, or mobile - seamless experience'
    },
    {
      icon: <PlayCircle className="w-8 h-8 text-[#0b3259]" />,
      title: 'Practice Portal',
      description: 'Online assignments, quizzes, and practice tests'
    },
    {
      icon: <Target className="w-8 h-8 text-indigo-600" />,
      title: 'Progress Tracking',
      description: 'Detailed analytics of your performance and weak areas'
    }
  ];

  const platformFeatures = [
    'HD video streaming with minimal bandwidth',
    'Virtual whiteboard for live problem solving',
    'Chat window for instant queries',
    'Screen sharing for concept clarity',
    'Breakout rooms for group discussions',
    'Automatic attendance tracking',
    'Integrated test platform',
    'Mobile app for on-the-go learning'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0b3259] to-[#0b3259] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white text-[#0b3259] hover:bg-gray-100">
              <Wifi className="w-4 h-4 mr-1" />
              Learn From Anywhere
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Live Online Programs
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Experience classroom-quality teaching from the comfort of your home with live interactive sessions
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
                <CardHeader className="bg-gradient-to-r from-[#0b3259]/5 to-white">
                  <CardTitle className="text-2xl md:text-3xl">{program.title}</CardTitle>
                  <CardDescription className="text-lg">{program.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center">
                        <BookOpen className="w-5 h-5 mr-2 text-[#0b3259]" />
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
                        <div className="flex items-start">
                          <Laptop className="w-5 h-5 mr-3 text-gray-500 mt-0.5" />
                          <div>
                            <div className="font-medium">Mode</div>
                            <div className="text-sm text-gray-600">Live Online + Recorded</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-[#0b3259]/5 rounded-lg border border-[#0b3259]/20">
                        <div className="text-2xl font-bold text-[#0b3259]">{program.price}</div>
                        <div className="text-sm text-[#0b3259]">Complete program fee</div>
                        <div className="text-xs text-[#0b3259]/50 mt-1">30% discount vs classroom</div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div>
                      <h3 className="font-semibold text-lg mb-4 flex items-center">
                        <CheckCircle2 className="w-5 h-5 mr-2 text-[#19a951]" />
                        Key Features
                      </h3>
                      <div className="space-y-2">
                        {program.features.map((feature, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-5 h-5 bg-[#19a951] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
                      className="bg-[#0b3259] hover:bg-[#0b3259] text-white flex-1"
                      onClick={() => navigate('/scholarship-test')}
                    >
                      Enroll Now
                    </Button>
                    <Button 
                      size="lg"
                      variant="outline"
                      className="border-2 border-[#0b3259] text-[#0b3259] hover:bg-[#0b3259]/5 flex-1"
                    >
                      Free Demo Class
                    </Button>
                  </div>
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
              Why Choose Online Programs?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All the benefits of classroom learning, accessible from anywhere
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Platform Features */}
      <section className="py-16 bg-gradient-to-br from-[#0b3259]/5 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Advanced Learning Platform
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our proprietary learning platform is designed specifically for JEE aspirants, 
                providing a seamless and engaging online learning experience.
              </p>
              <div className="space-y-3">
                {platformFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-[#0b3259] mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-[#0b3259] to-[#0b3259] rounded-2xl flex items-center justify-center">
                <PlayCircle className="w-24 h-24 text-white" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-xl border border-white/80">
                <div className="text-sm text-gray-600">Live Class in Progress</div>
                <div className="flex items-center mt-2">
                  <Users className="w-4 h-4 text-[#0b3259] mr-2" />
                  <span className="font-semibold">245 Students Online</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">System Requirements</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Minimum Requirements</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Internet: 2 Mbps connection</p>
                <p>• Device: Smartphone/Tablet/Laptop</p>
                <p>• Browser: Chrome/Firefox/Safari (latest)</p>
                <p>• OS: Windows 10+, macOS 10.14+, Android 8+, iOS 12+</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Recommended Setup</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <p>• Internet: 5 Mbps+ for HD quality</p>
                <p>• Device: Laptop/Desktop with webcam</p>
                <p>• Headphones for better audio</p>
                <p>• Stable WiFi or broadband connection</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#0b3259] to-[#0b3259] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience Live Online Learning
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Attend a free demo class and see the difference yourself
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-[#0b3259] hover:bg-gray-100 text-lg px-8"
            >
              Book Free Demo Class
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#0b3259] text-lg px-8"
              onClick={() => navigate('/scholarship-test')}
            >
              Register for Program
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OnlinePrograms;

