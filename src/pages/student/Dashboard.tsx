import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { 
  BookOpen, 
  FileText, 
  BarChart,
  Trophy,
  Calendar,
  Clock,
  TrendingUp,
  Target,
  Award,
  LogOut
} from 'lucide-react';

const StudentDashboard = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: <FileText className="w-6 h-6" />, label: 'Tests Attempted', value: '45', color: 'bg-[#0b3259]/5 text-[#0b3259]' },
    { icon: <Trophy className="w-6 h-6" />, label: 'Current Rank', value: '1,234', color: 'bg-[#19a951]/5 text-[#19a951]' },
    { icon: <Target className="w-6 h-6" />, label: 'Accuracy', value: '78%', color: 'bg-[#0b3259]/5 text-[#0b3259]' },
    { icon: <TrendingUp className="w-6 h-6" />, label: 'Improvement', value: '+12%', color: 'bg-[#19a951]/5 text-[#19a951]' }
  ];

  const upcomingTests = [
    { name: 'JEE Main Full Test 25', date: '2025-01-15', time: '09:00 AM', duration: '3 hours' },
    { name: 'Physics Part Test 10', date: '2025-01-17', time: '06:00 PM', duration: '1.5 hours' },
    { name: 'Mathematics Part Test 8', date: '2025-01-19', time: '06:00 PM', duration: '1.5 hours' }
  ];

  const recentTests = [
    { name: 'JEE Main Full Test 24', score: '245/300', rank: '1,234', percentile: '98.2' },
    { name: 'Chemistry Part Test 9', score: '89/100', rank: '856', percentile: '99.1' },
    { name: 'Physics Part Test 9', score: '72/100', rank: '2,145', percentile: '96.8' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <BookOpen className="w-8 h-8 text-[#0b3259]" />
              <div>
                <h1 className="text-2xl font-bold">Student Portal</h1>
                <p className="text-sm text-gray-600">Welcome back, Arjun!</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" onClick={() => navigate('/')}>
                Home
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
        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Button 
            className="bg-[#0b3259] hover:bg-[#0b3259]/90 h-auto py-4"
            onClick={() => navigate('/student/tests')}
          >
            <FileText className="w-5 h-5 mr-2" />
            View Tests
          </Button>
          <Button 
            variant="outline"
            className="h-auto py-4"
            onClick={() => navigate('/student/analytics')}
          >
            <BarChart className="w-5 h-5 mr-2" />
            Analytics
          </Button>
          <Button variant="outline" className="h-auto py-4">
            <BookOpen className="w-5 h-5 mr-2" />
            Study Material
          </Button>
          <Button variant="outline" className="h-auto py-4">
            <Award className="w-5 h-5 mr-2" />
            My Progress
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Upcoming Tests */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-[#0b3259]" />
                Upcoming Tests
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTests.map((test, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-2">{test.name}</div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(test.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {test.time}
                        </span>
                      </div>
                      <Badge variant="secondary">{test.duration}</Badge>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline" onClick={() => navigate('/student/tests')}>
                View All Tests
              </Button>
            </CardContent>
          </Card>

          {/* Recent Performance */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Trophy className="w-5 h-5 mr-2 text-[#19a951]" />
                Recent Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTests.map((test, index) => (
                  <div key={index} className="p-4 bg-gray-50 rounded-lg">
                    <div className="font-semibold text-gray-900 mb-3">{test.name}</div>
                    <div className="grid grid-cols-3 gap-4 text-center text-sm">
                      <div>
                        <div className="text-lg font-bold text-[#0b3259]">{test.score}</div>
                        <div className="text-gray-600">Score</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-[#19a951]">{test.rank}</div>
                        <div className="text-gray-600">AIR</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-[#0b3259]">{test.percentile}</div>
                        <div className="text-gray-600">%ile</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-4" variant="outline" onClick={() => navigate('/student/analytics')}>
                Detailed Analytics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;

