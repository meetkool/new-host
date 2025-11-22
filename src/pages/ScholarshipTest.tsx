import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { 
  Trophy,
  Award,
  Calendar,
  Clock,
  Users,
  BookOpen,
  Target,
  CheckCircle2,
  Sparkles,
  Gift,
  Star,
  TrendingUp,
  FileText,
  Download,
  Phone,
  Mail
} from 'lucide-react';

const ScholarshipTest = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    class: '',
    school: '',
    city: ''
  });

  const scholarshipSlabs = [
    { rank: 'Top 50', scholarship: '90%', amount: 'Up to ₹1,62,000' },
    { rank: '51-100', scholarship: '75%', amount: 'Up to ₹1,35,000' },
    { rank: '101-200', scholarship: '60%', amount: 'Up to ₹1,08,000' },
    { rank: '201-500', scholarship: '50%', amount: 'Up to ₹90,000' },
    { rank: '501-1000', scholarship: '40%', amount: 'Up to ₹72,000' },
    { rank: '1001-2000', scholarship: '25%', amount: 'Up to ₹45,000' },
  ];

  const testDetails = [
    {
      icon: <Calendar className="w-6 h-6 text-blue-600" />,
      label: 'Test Date',
      value: 'Every Sunday',
      detail: 'Multiple dates available'
    },
    {
      icon: <Clock className="w-6 h-6 text-green-600" />,
      label: 'Duration',
      value: '2-3 Hours',
      detail: 'Varies by class'
    },
    {
      icon: <BookOpen className="w-6 h-6 text-purple-600" />,
      label: 'Subjects',
      value: 'PCM',
      detail: 'Physics, Chemistry, Mathematics'
    },
    {
      icon: <Users className="w-6 h-6 text-orange-600" />,
      label: 'Eligibility',
      value: 'Class 8-12',
      detail: 'All students eligible'
    }
  ];

  const syllabus = {
    'Class 8-10': [
      'NCERT syllabus (Physics, Chemistry, Mathematics)',
      'Basic problem-solving aptitude',
      'Logical reasoning questions',
      'Mental ability questions'
    ],
    'Class 11': [
      'Class 11 Physics (up to syllabus covered)',
      'Class 11 Chemistry (up to syllabus covered)',
      'Class 11 Mathematics (up to syllabus covered)',
      'Basic aptitude and reasoning'
    ],
    'Class 12 / Dropper': [
      'Complete JEE Main syllabus',
      'Physics: All topics from Class 11 & 12',
      'Chemistry: Physical, Organic, Inorganic',
      'Mathematics: All JEE Main topics',
      'JEE level problem solving'
    ]
  };

  const benefits = [
    {
      icon: <Gift className="w-8 h-8 text-blue-600" />,
      title: 'Huge Scholarships',
      description: 'Win up to 90% scholarship on program fees'
    },
    {
      icon: <Trophy className="w-8 h-8 text-yellow-600" />,
      title: 'All India Ranking',
      description: 'Compare yourself with thousands of aspirants nationwide'
    },
    {
      icon: <FileText className="w-8 h-8 text-green-600" />,
      title: 'Detailed Analysis',
      description: 'Get comprehensive performance report and weak area analysis'
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: 'Admission Priority',
      description: 'Direct admission to programs based on your rank'
    },
    {
      icon: <Award className="w-8 h-8 text-orange-600" />,
      title: 'Prizes & Rewards',
      description: 'Top rankers receive special prizes and recognition'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-indigo-600" />,
      title: 'Free Counseling',
      description: 'One-on-one career counseling session with experts'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Registration successful! You will receive further details on your email.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-500 via-yellow-600 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-white text-yellow-600 hover:bg-gray-100 animate-bounce">
              <Sparkles className="w-4 h-4 mr-1" />
              Win Up to 90% Scholarship
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              National Scholarship Test 2025
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto mb-8">
              Take India's biggest scholarship test and win scholarships worth lakhs!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-white text-yellow-600 hover:bg-gray-100 text-lg px-10 py-6 font-bold"
                onClick={() => document.getElementById('register-form')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Trophy className="mr-2" />
                Register Now - Free!
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-yellow-600 text-lg px-10 py-6 font-bold"
                onClick={() => document.getElementById('scholarship-slabs')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Scholarship Slabs
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            {testDetails.map((detail, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="bg-gray-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {detail.icon}
                  </div>
                  <div className="font-semibold text-gray-600 text-sm mb-1">{detail.label}</div>
                  <div className="text-xl font-bold text-gray-900 mb-1">{detail.value}</div>
                  <div className="text-xs text-gray-500">{detail.detail}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Scholarship Slabs */}
      <section id="scholarship-slabs" className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Scholarship Slabs
            </h2>
            <p className="text-xl text-gray-600">
              Rewards based on your All India Rank
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {scholarshipSlabs.map((slab, index) => (
              <Card 
                key={index} 
                className={`hover:shadow-2xl transition-all ${index === 0 ? 'border-4 border-yellow-400 ring-4 ring-yellow-100' : ''}`}
              >
                {index === 0 && (
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-center py-2 font-bold flex items-center justify-center">
                    <Star className="w-4 h-4 mr-2" />
                    Top Rankers
                    <Star className="w-4 h-4 ml-2" />
                  </div>
                )}
                <CardHeader className="text-center">
                  <div className="text-4xl font-bold text-gray-300 mb-2">#{slab.rank}</div>
                  <div className="text-5xl font-bold text-yellow-600 mb-2">{slab.scholarship}</div>
                  <CardDescription className="text-lg font-semibold text-gray-700">
                    Scholarship
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <div className="text-sm text-gray-600">Scholarship Value</div>
                    <div className="text-2xl font-bold text-green-700">{slab.amount}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              * Scholarship amounts are indicative and based on 2-Year Classroom Program (₹1,80,000)
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Take This Test?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Syllabus Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Test Syllabus
            </h2>
            <p className="text-xl text-gray-600">
              Class-wise syllabus for the scholarship test
            </p>
          </div>

          <div className="space-y-6">
            {Object.entries(syllabus).map(([className, topics]) => (
              <Card key={className}>
                <CardHeader>
                  <CardTitle className="text-xl">{className}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {topics.map((topic, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="border-2">
              <Download className="w-4 h-4 mr-2" />
              Download Detailed Syllabus PDF
            </Button>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section id="register-form" className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Register for Free
            </h2>
            <p className="text-xl text-gray-600">
              Fill in your details to register for the National Scholarship Test
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Mobile Number *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="10-digit mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="class">Current Class *</Label>
                    <select
                      id="class"
                      name="class"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      value={formData.class}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select your class</option>
                      <option value="8">Class 8</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                      <option value="dropper">Dropper</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="school">School Name *</Label>
                    <Input
                      id="school"
                      name="school"
                      placeholder="Your school name"
                      value={formData.school}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City *</Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="Your city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-yellow-600 hover:bg-yellow-700 text-white text-lg py-6">
                  <Trophy className="mr-2" />
                  Register for Scholarship Test
                </Button>

                <p className="text-sm text-gray-600 text-center">
                  By registering, you agree to receive test details and updates via email/SMS
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-6">Need Help?</h3>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-5 h-5 text-blue-600" />
              <span className="text-lg">+91-9205321167</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-lg">scholarship@example.com</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ScholarshipTest;

