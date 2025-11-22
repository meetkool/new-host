import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  FileText,
  CheckCircle2,
  Download,
  Layers,
  Target,
  TrendingUp,
  BookMarked,
  Clipboard
} from 'lucide-react';

const StudyMaterial = () => {
  const navigate = useNavigate();

  const materials = [
    {
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      title: 'Theory Modules',
      description: 'Comprehensive theory covering all JEE topics with detailed explanations, formulas, and important points',
      features: [
        'Complete syllabus coverage',
        'Concept-wise organization',
        'Important formulas highlighted',
        'Solved examples included',
        'Tips and tricks sections'
      ]
    },
    {
      icon: <Clipboard className="w-12 h-12 text-green-600" />,
      title: 'Practice Workbooks',
      description: 'Extensive problem sets organized by difficulty level for thorough practice and concept reinforcement',
      features: [
        'Level-wise problems (Easy to Hard)',
        '5000+ practice questions',
        'Previous year JEE questions',
        'Detailed solutions provided',
        'Chapter-wise organization'
      ]
    },
    {
      icon: <FileText className="w-12 h-12 text-purple-600" />,
      title: 'DPP (Daily Practice Papers)',
      description: 'Daily assignments to ensure regular practice and consistent learning throughout the course',
      features: [
        'Topic-specific questions',
        'Mixed difficulty levels',
        'Time-bound practice',
        'Regular submission tracking',
        'Immediate feedback'
      ]
    },
    {
      icon: <BookMarked className="w-12 h-12 text-orange-600" />,
      title: 'Revision Modules',
      description: 'Quick revision notes with key formulas, concepts, and important points for exam preparation',
      features: [
        'Concise summary of topics',
        'Quick formula sheets',
        'Important questions marked',
        'Last-minute revision friendly',
        'Mobile-friendly format'
      ]
    }
  ];

  const subjects = [
    {
      name: 'Physics',
      modules: 25,
      topics: 45,
      questions: '2500+',
      color: 'bg-blue-50 border-blue-200'
    },
    {
      name: 'Chemistry',
      modules: 28,
      topics: 52,
      questions: '3000+',
      color: 'bg-green-50 border-green-200'
    },
    {
      name: 'Mathematics',
      modules: 30,
      topics: 48,
      questions: '2800+',
      color: 'bg-purple-50 border-purple-200'
    }
  ];

  const features = [
    'Self-designed by expert faculty',
    'Aligned with latest JEE pattern',
    'Progressive difficulty levels',
    'Regular content updates',
    'Digital + Print format available',
    'Video solutions for tough problems',
    'Mobile app access',
    'Bookmark and note-taking features'
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white text-teal-600 hover:bg-gray-100">
              <BookOpen className="w-4 h-4 mr-1" />
              Comprehensive & Well-Structured
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Study Material
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto">
              Self-designed, comprehensive study material covering the entire JEE syllabus
            </p>
          </div>
        </div>
      </section>

      {/* Material Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Study Material Components
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for complete JEE preparation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {materials.map((material, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mb-4">
                    {material.icon}
                  </div>
                  <CardTitle className="text-2xl mb-2">{material.title}</CardTitle>
                  <p className="text-gray-600">{material.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {material.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Subject-wise Breakdown */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Subject-wise Material
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subjects.map((subject, index) => (
              <Card key={index} className={`border-2 ${subject.color}`}>
                <CardContent className="pt-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">{subject.name}</h3>
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">{subject.modules}</div>
                      <div className="text-sm text-gray-600">Theory Modules</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">{subject.topics}</div>
                      <div className="text-sm text-gray-600">Topics Covered</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-3xl font-bold text-gray-900">{subject.questions}</div>
                      <div className="text-sm text-gray-600">Practice Questions</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-br from-teal-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Material Features
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-teal-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Material */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">View Sample Material</h2>
          <p className="text-lg text-gray-600 mb-8">
            Download sample chapters to see the quality of our study material
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {['Physics - Mechanics', 'Chemistry - Organic', 'Mathematics - Calculus'].map((sample, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <FileText className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-4">{sample}</h3>
                  <Button className="w-full" variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Complete Study Material
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Enroll in our programs to access the full study material package
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-teal-600 hover:bg-gray-100 text-lg px-8"
              onClick={() => navigate('/programs')}
            >
              View Programs
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-teal-600 text-lg px-8"
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

export default StudyMaterial;

