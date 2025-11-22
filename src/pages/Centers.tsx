import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Footer from '@/components/Footer';
import { 
  MapPin, 
  Phone,
  Mail,
  Clock,
  Navigation,
  Building
} from 'lucide-react';

const Centers = () => {
  const centers = [
    {
      city: 'Delhi',
      centers: [
        {
          name: 'Rohini Center',
          address: 'Sector 11, Rohini, Delhi - 110085',
          phone: '+91-9205321167',
          email: 'rohini@example.com',
          timings: 'Mon-Sat: 7:00 AM - 9:00 PM'
        },
        {
          name: 'Dwarka Center',
          address: 'Sector 10, Dwarka, Delhi - 110075',
          phone: '+91-9205321168',
          email: 'dwarka@example.com',
          timings: 'Mon-Sat: 7:00 AM - 9:00 PM'
        }
      ]
    },
    {
      city: 'Mumbai',
      centers: [
        {
          name: 'Andheri Center',
          address: 'Andheri West, Mumbai - 400053',
          phone: '+91-9205321169',
          email: 'andheri@example.com',
          timings: 'Mon-Sat: 7:00 AM - 9:00 PM'
        },
        {
          name: 'Thane Center',
          address: 'Thane West, Thane - 400601',
          phone: '+91-9205321170',
          email: 'thane@example.com',
          timings: 'Mon-Sat: 7:00 AM - 9:00 PM'
        }
      ]
    },
    {
      city: 'Bangalore',
      centers: [
        {
          name: 'Koramangala Center',
          address: 'Koramangala, Bangalore - 560034',
          phone: '+91-9205321171',
          email: 'koramangala@example.com',
          timings: 'Mon-Sat: 7:00 AM - 9:00 PM'
        },
        {
          name: 'Indiranagar Center',
          address: 'Indiranagar, Bangalore - 560038',
          phone: '+91-9205321172',
          email: 'indiranagar@example.com',
          timings: 'Mon-Sat: 7:00 AM - 9:00 PM'
        }
      ]
    },
    {
      city: 'Hyderabad',
      centers: [
        {
          name: 'Madhapur Center',
          address: 'Madhapur, Hyderabad - 500081',
          phone: '+91-9205321173',
          email: 'madhapur@example.com',
          timings: 'Mon-Sat: 7:00 AM - 9:00 PM'
        }
      ]
    },
    {
      city: 'Pune',
      centers: [
        {
          name: 'Kothrud Center',
          address: 'Kothrud, Pune - 411038',
          phone: '+91-9205321174',
          email: 'kothrud@example.com',
          timings: 'Mon-Sat: 7:00 AM - 9:00 PM'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white text-emerald-600 hover:bg-gray-100">
            <MapPin className="w-4 h-4 mr-1" />
            Find Us Near You
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Centers</h1>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Visit our state-of-the-art coaching centers across major cities in India
          </p>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10+</div>
              <div className="text-gray-600">Centers Nationwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">5</div>
              <div className="text-gray-600">Major Cities</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">100+</div>
              <div className="text-gray-600">Classrooms</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">50K+</div>
              <div className="text-gray-600">Students Enrolled</div>
            </div>
          </div>
        </div>
      </section>

      {/* Centers List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {centers.map((cityData, cityIndex) => (
              <div key={cityIndex}>
                <div className="flex items-center mb-6">
                  <Building className="w-8 h-8 text-emerald-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">{cityData.city}</h2>
                  <Badge className="ml-4" variant="secondary">
                    {cityData.centers.length} {cityData.centers.length === 1 ? 'Center' : 'Centers'}
                  </Badge>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {cityData.centers.map((center, centerIndex) => (
                    <Card key={centerIndex} className="hover:shadow-xl transition-shadow">
                      <CardContent className="pt-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">{center.name}</h3>
                        
                        <div className="space-y-3">
                          <div className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-gray-700">Address</div>
                              <div className="text-gray-600">{center.address}</div>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <Phone className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-gray-700">Phone</div>
                              <a href={`tel:${center.phone}`} className="text-emerald-600 hover:underline">
                                {center.phone}
                              </a>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <Mail className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-gray-700">Email</div>
                              <a href={`mailto:${center.email}`} className="text-emerald-600 hover:underline">
                                {center.email}
                              </a>
                            </div>
                          </div>

                          <div className="flex items-start space-x-3">
                            <Clock className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-gray-700">Timings</div>
                              <div className="text-gray-600">{center.timings}</div>
                            </div>
                          </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                          <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700">
                            <Navigation className="w-4 h-4 mr-2" />
                            Get Directions
                          </Button>
                          <Button variant="outline" className="flex-1 border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                            Visit Center
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Center Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Class Facilities
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              All our centers feature modern amenities for optimal learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              'Air-conditioned classrooms',
              'Digital smart boards',
              'Library and reading room',
              'Doubt-solving zones',
              'Computer lab access',
              'Cafeteria facility',
              'Security and CCTV',
              'Parent waiting area'
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-emerald-50 rounded-lg">
                <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visit Your Nearest Center
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Schedule a visit to see our facilities and meet our faculty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-emerald-600 hover:bg-gray-100 text-lg px-8"
            >
              Schedule Center Visit
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 text-lg px-8"
            >
              Download Brochure
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Centers;

