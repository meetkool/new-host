import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Trophy, ChevronRight } from 'lucide-react';
import Logo from '@/components/Logo';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProgramsOpen, setIsProgramsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Smart scroll behavior - hide on scroll down, show on scroll up
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      // Throttle scroll events for better performance
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const currentScrollY = window.scrollY;
        
        // Show navbar if at top of page
        if (currentScrollY < 10) {
          setIsVisible(true);
        } 
        // Show navbar when scrolling up (with minimum threshold to avoid jittery behavior)
        else if (currentScrollY < lastScrollY - 5) {
          setIsVisible(true);
        } 
        // Hide navbar when scrolling down (only if scrolled past initial section)
        else if (currentScrollY > lastScrollY + 5 && currentScrollY > 100) {
          setIsVisible(false);
          setIsProgramsOpen(false); // Close dropdown when hiding
          setIsMenuOpen(false); // Close mobile menu when hiding
        }
        
        setLastScrollY(currentScrollY);
      }, 10); // 10ms throttle
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [lastScrollY]);

  const megaMenuData = [
    {
      title: "CLASSROOM PROGRAMS",
      path: "/programs/classroom",
      items: [
        "Class VI", "Class VII", "Class VIII", "Class IX", "Class X", 
        "Class XI", "Class XII", "Class XII Pass", 
        "Crash Courses For JEE Main & Advanced"
      ]
    },
    {
      title: "INTEGRATED SCHOOL PROGRAMS",
      path: "/programs/integrated-school",
      items: ["Class IX", "Class XI"]
    },
    {
      title: "NON CLASSROOM PROGRAMS", 
      path: "/programs/online",
      items: ["Class IX", "Class X", "Class XI", "Class XII", "Class XII Pass"]
    }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border transition-transform duration-300 ease-in-out ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`font-medium transition-smooth ${
                isActive('/') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Home
            </Link>

            {/* Programs Dropdown (Mega Menu) */}
            <div className="relative group">
              <button
                onClick={() => setIsProgramsOpen(!isProgramsOpen)}
                className={`flex items-center space-x-1 font-medium transition-smooth ${
                  location.pathname.startsWith('/programs') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                <span>Programs</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isProgramsOpen ? 'rotate-180' : ''}`} />
              </button>

              {isProgramsOpen && (
                <>
                  {/* Backdrop to close on click outside */}
                  <div className="fixed inset-0 z-40 bg-transparent" onClick={() => setIsProgramsOpen(false)}></div>
                  
                  {/* Mega Menu - Fixed positioning to ensure responsiveness and centering on viewport */}
                  <div className="fixed top-16 left-1/2 transform -translate-x-1/2 w-[95vw] max-w-[1000px] z-50 px-4">
                    <div className="bg-white border border-border rounded-b-xl shadow-2xl p-6 md:p-8">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {megaMenuData.map((section, index) => (
                        <div key={index} className="space-y-4 border-r last:border-r-0 border-gray-100 pr-4">
                          <Link 
                            to={section.path}
                            className="flex items-center justify-between text-[#113B55] font-bold text-sm tracking-wider hover:text-red-700 uppercase mb-4"
                            onClick={() => setIsProgramsOpen(false)}
                          >
                            {section.title}
                            <ChevronRight className="w-4 h-4" />
                          </Link>
                          <ul className="space-y-3">
                            {section.items.map((item, idx) => (
                              <li key={idx}>
                                <Link
                                  to={`${section.path}?class=${item.replace(/\s+/g, '-').toLowerCase()}`}
                                  className="text-gray-600 hover:text-[#113B55] text-sm font-medium transition-colors block py-1"
                                  onClick={() => setIsProgramsOpen(false)}
                                >
                                  {item}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                </>
              )}
            </div>

            <Link
              to="/test-series"
              className={`font-medium transition-smooth ${
                isActive('/test-series') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Test Series
            </Link>

            <Link
              to="/results"
              className={`font-medium transition-smooth ${
                isActive('/results') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Results
            </Link>

            <Link
              to="/faculty"
              className={`font-medium transition-smooth ${
                isActive('/faculty') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Faculty
            </Link>

            <Link
              to="/about-us"
              className={`font-medium transition-smooth ${
                isActive('/about-us') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              About Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-3">
            <Button 
              variant="outline"
              size="sm"
              onClick={() => window.location.href = '/student/login'}
            >
              Student Login
            </Button>
            <Button 
              variant="hero" 
              size="lg"
              onClick={() => window.location.href = '/scholarship-test'}
            >
              <Trophy className="w-4 h-4 mr-2" />
              Scholarship Test
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in h-[calc(100vh-64px)] overflow-y-auto">
            <div className="flex flex-col space-y-4 pb-20">
              <Link to="/" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              
              {/* Mobile Programs Accordion */}
              <div className="space-y-2">
                <div className="font-medium py-2 text-primary">Programs</div>
                <div className="pl-4 space-y-4 border-l-2 border-gray-100 ml-1">
                  {megaMenuData.map((section, index) => (
                    <div key={index} className="space-y-2">
                      <div className="text-[#113B55] font-bold text-xs uppercase">{section.title}</div>
                      <ul className="space-y-2">
                        {section.items.map((item, idx) => (
                          <li key={idx}>
                            <Link
                              to={`${section.path}?class=${item.replace(/\s+/g, '-').toLowerCase()}`}
                              className="text-gray-600 text-sm block"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/test-series" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Test Series
              </Link>
              <Link to="/results" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Results
              </Link>
              <Link to="/faculty" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Faculty
              </Link>
              <Link to="/about-us" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                About Us
              </Link>
              <Link to="/student/login" className="font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                Student Login
              </Link>
              <Button 
                variant="hero" 
                size="lg" 
                className="mt-4"
                onClick={() => {
                  window.location.href = '/scholarship-test';
                  setIsMenuOpen(false);
                }}
              >
                <Trophy className="w-4 h-4 mr-2" />
                Scholarship Test
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
