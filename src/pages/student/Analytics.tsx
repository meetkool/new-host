import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { BookOpen, TrendingUp, Target, Award, BarChart, LogOut } from 'lucide-react';

const StudentAnalytics = () => {
  const navigate = useNavigate();

  const subjectPerformance = [
    { subject: 'Physics', score: 82, accuracy: 78, trend: '+5%' },
    { subject: 'Chemistry', score: 89, accuracy: 85, trend: '+8%' },
    { subject: 'Mathematics', score: 74, accuracy: 71, trend: '+3%' }
  ];

  const weakTopics = [
    { topic: 'Thermodynamics', subject: 'Physics', score: 45 },
    { topic: 'Electrochemistry', subject: 'Chemistry', score: 52 },
    { topic: 'Vectors & 3D', subject: 'Mathematics', score: 48 }
  ];

  const strongTopics = [
    { topic: 'Mechanics', subject: 'Physics', score: 92 },
    { topic: 'Organic Chemistry', subject: 'Chemistry', score: 95 },
    { topic: 'Algebra', subject: 'Mathematics', score: 88 }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <BarChart className="w-8 h-8 text-[#0b3259]" />
              <h1 className="text-2xl font-bold">Performance Analytics</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/student/dashboard')}>
                Dashboard
              </Button>
              <Button variant="ghost">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Subject-wise Performance */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Target className="w-5 h-5 mr-2 text-[#0b3259]" />
              Subject-wise Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {subjectPerformance.map((subject, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-gray-900">{subject.subject}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className="text-gray-600">Average: {subject.score}%</span>
                      <span className="text-[#19a951] font-medium">{subject.trend}</span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-[#0b3259] h-3 rounded-full transition-all" 
                      style={{ width: `${subject.score}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Weak Topics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <TrendingUp className="w-5 h-5 mr-2 text-[#19a951]" />
                Topics to Improve
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {weakTopics.map((topic, index) => (
                  <div key={index} className="p-4 bg-[#19a951]/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{topic.topic}</h4>
                      <span className="text-[#19a951] font-bold">{topic.score}%</span>
                    </div>
                    <div className="text-sm text-gray-600">{topic.subject}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Strong Topics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-[#19a951]" />
                Strong Topics
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {strongTopics.map((topic, index) => (
                  <div key={index} className="p-4 bg-[#19a951]/5 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{topic.topic}</h4>
                      <span className="text-[#19a951] font-bold">{topic.score}%</span>
                    </div>
                    <div className="text-sm text-gray-600">{topic.subject}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentAnalytics;

