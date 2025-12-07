import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Footer from '@/components/Footer';
import { HeroSection, radiusCalculators, HeroContentBuilder } from '@/components/hero';
import { 
  BookOpen, 
  Users, 
  Award, 
  TrendingUp,
  Globe,
  Mail,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Home as HomeIcon,
  FileText,
  ShieldCheck,
  Heart,
  FlaskConical,
  CheckCircle2, 
  Star, 
  Shield, 
  Target, 
  Zap,
  MonitorPlay,
  Calendar,
  Calculator,
  Dna,
  Leaf
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { BRANDING } from '@/config/branding';
import IMAGES from '@/utils/images';

const Home = () => {
  const navigate = useNavigate();
  // Carousel API state management
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  
  // Courses API state management
  const [courses, setCourses] = useState<any[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Email state for CTA section
  const [email, setEmail] = useState('');

  // Trailblazers State
  const [activeTab, setActiveTab] = useState("JEE Advanced 2025");

  const trailblazersData: Record<string, any[]> = {
    "JEE Advanced 2025": [
      { rank: 36, name: "Advay Mayank", program: "Three Year Classroom Program (X-XII)", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=400&h=400&fit=crop" },
      { rank: 37, name: "Karmanya Gupta", program: "Rankers Study Material (RSM) (XI-XII)", img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&fit=crop" },
      { rank: 45, name: "Ramit Goyal", program: "Two Year Live Interactive Online Classroom Program under eSchool (XI-XII)", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
      { rank: 52, name: "Sarthak Jain", program: "Four Year Classroom Program", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=400&h=400&fit=crop" },
      { rank: 68, name: "Ananya Singh", program: "Two Year Classroom Program", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop" },
      { rank: 89, name: "Rahul Verma", program: "One Year Classroom Program", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop" }
    ],
    "JEE MAIN 2025": [
      { rank: 12, name: "Priya Sharma", program: "Two Year Classroom Program", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop" },
      { rank: 45, name: "Amit Patel", program: "Rankers Study Material", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" },
      { rank: 88, name: "Sneha Gupta", program: "Integrated School Program", img: "https://images.unsplash.com/photo-1554151228-14d9def656ec?w=400&h=400&fit=crop" },
      { rank: 102, name: "Rajesh Kumar", program: "Two Year Classroom Program", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop" },
      { rank: 150, name: "Meera Reddy", program: "One Year Classroom Program", img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop" }
    ],
    "JEE ADVANCED 2024": [
      { rank: 1, name: "Aravind S.", program: "Four Year Classroom Program", img: IMAGES.students.studying },
      { rank: 2, name: "Meera K.", program: "Two Year Classroom Program", img: IMAGES.students.celebrating },
      { rank: 3, name: "Vikram R.", program: "Rankers Study Material", img: IMAGES.students.discussion },
      { rank: 8, name: "Aditya M.", program: "Integrated School Program", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" }
    ],
    "JEE MAIN 2024": [
      { rank: 5, name: "Arjun Singh", program: "Two Year Classroom Program", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop" },
      { rank: 18, name: "Zara Khan", program: "Integrated School Program", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop" },
      { rank: 29, name: "Kabir Das", program: "Rankers Study Material", img: "https://images.unsplash.com/photo-1521119989659-a83eee488058?w=400&h=400&fit=crop" }
    ],
    "OLYMPIADS 2024": [
      { rank: "Gold", name: "Ishaan Vi", program: "Junior Rankers", img: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&h=400&fit=crop" },
      { rank: "Silver", name: "Riya Sen", program: "Foundation Program", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop" },
      { rank: "Gold", name: "Dev Kumar", program: "Junior Science", img: "https://images.unsplash.com/photo-1595152772835-219638901822?w=400&h=400&fit=crop" }
    ]
  };

  // School Programs State
  const [activeProgramTab, setActiveProgramTab] = useState("Foundation (6-10)");

  const schoolProgramsData: Record<string, any[]> = {
    "Foundation (6-10)": [
      { subject: "Mathematics", icon: Calculator },
      { subject: "Science", icon: FlaskConical },
      { subject: "Social Studies", icon: Globe },
      { subject: "English", icon: BookOpen }
    ],
    "Class 11": [
      { subject: "Physics", icon: Zap },
      { subject: "Chemistry", icon: FlaskConical },
      { subject: "Mathematics", icon: Calculator },
      { subject: "Biology", icon: Dna }
    ],
    "Class 12": [
      { subject: "Physics", icon: Zap },
      { subject: "Chemistry", icon: FlaskConical },
      { subject: "Mathematics", icon: Calculator },
      { subject: "Biology", icon: Dna }
    ],
    "NEET/JEE": [
      { subject: "Physics", icon: Zap },
      { subject: "Chemistry", icon: FlaskConical },
      { subject: "Mathematics (JEE)", icon: Calculator },
      { subject: "Zoology (NEET)", icon: Dna },
      { subject: "Botany (NEET)", icon: Leaf }
    ]
  };
  
  const heroSlides = [
    {
      id: 1,
      title: "Get Certified. Get Ahead.",
      stats: [
        { number: "8,000,000", text: "Careers advanced" },
        { number: "1,500", text: "Live classes every month" },
        { number: "85%", text: "Report career success" }
      ],
      buttons: [
        { text: "Explore Programs", style: "primary", url: "/programs", isExternal: false },
        { text: "Student Login", style: "outline", url: "/student/login", isExternal: false }
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&h=600&fit=crop"
    },
    {
      id: 2,
      title: "Master In-Demand Skills with Expert Training",
      stats: [
        { number: "2,000+", text: "Industry experts" },
        { number: "500+", text: "Certification programs" },
        { number: "92%", text: "Job placement rate" }
      ],
      buttons: [
        { text: "Browse Programs", style: "primary", url: "/programs", isExternal: false },
        { text: "Free Demo Class", style: "outline", url: "/scholarship-test", isExternal: false }
      ],
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop"
    },
    {
      id: 3,
      title: "Transform Your Skills, Transform Your Life",
      stats: [
        { number: "50,000+", text: "Students enrolled" },
        { number: "₹99", text: "Starting price for live courses" },
        { number: "100%", text: "Practical learning approach" }
      ],
      buttons: [
        { text: "Get Started Now", style: "primary", url: "/scholarship-test", isExternal: false },
        { text: "View Success Stories", style: "outline", url: "/results", isExternal: false }
      ],
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&h=600&fit=crop"
    }
  ];

  // Carousel API effect
  useEffect(() => {
    if (!carouselApi) return;

    const updateCarouselState = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
      setTotalItems(carouselApi.scrollSnapList().length);
    };

    updateCarouselState();
    carouselApi.on("select", updateCarouselState);

    return () => {
      carouselApi.off("select", updateCarouselState); // Clean up on unmount
    };
  }, [carouselApi]);

  // Auto-rotate carousel
  useEffect(() => {
    if (!carouselApi) return;
    
    const interval = setInterval(() => {
      carouselApi.scrollNext();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [carouselApi]);

  const scrollToIndex = (index: number) => {
    carouselApi?.scrollTo(index);
  };

  // Dynamic course categories
  const [courseCategories, setCourseCategories] = useState<string[]>([]);

  // Manual categorization function
  const categorizeCourse = (courseName: string): string => {
    const name = courseName.toLowerCase();
    
    if (name.includes('soft skills') || name.includes('communication') || name.includes('leadership')) {
      return 'Soft Skills & Leadership';
    }
    if (name.includes('spanish') || name.includes('language') || name.includes('english')) {
      return 'Languages';
    }
    if (name.includes('instagram') || name.includes('social media') || name.includes('facebook') || name.includes('twitter')) {
      return 'Social Media Marketing';
    }
    if (name.includes('content') || name.includes('design') || name.includes('creative')) {
      return 'Content & Design';
    }
    if (name.includes('linkedin') || name.includes('job') || name.includes('career') || name.includes('networking')) {
      return 'Career Development';
    }
    if (name.includes('wellness') || name.includes('nutrition') || name.includes('health') || name.includes('fitness')) {
      return 'Health & Wellness';
    }
    if (name.includes('astrology') || name.includes('vedic') || name.includes('spiritual')) {
      return 'Astrology & Spirituality';
    }
    if (name.includes('bootcamp') || name.includes('coding') || name.includes('programming') || name.includes('development')) {
      return 'Technology & Programming';
    }
    if (name.includes('marketing') || name.includes('business') || name.includes('sales')) {
      return 'Marketing & Business';
    }
    
    return 'Other';
  };

  // Fetch courses from API
  const fetchCourses = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://l2happapi.akamai.net.in/get/folder_courses?start=0&parent_id=-1', {
        headers: {
          'accept': '*/*',
          'accept-language': 'en-GB,en-US;q=0.9,en;q=0.8',
          'auth-key': 'appxapi',
          'client-service': 'Appx',
          'device-type': '',
          'dnt': '1',
          'origin': 'https://l2h.akamai.net.in',
          'priority': 'u=1, i',
          'referer': 'https://l2h.akamai.net.in/',
          'sec-ch-ua': '"Not?A_Brand";v="99", "Chromium";v="130"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"Windows"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-site',
          'sec-gpc': '1',
          'source': 'website',
          'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36'
        }
      });

      if (response.ok) {
        const data = await response.json();
        const coursesData = data.data || [];
        setCourses(coursesData);
        setFilteredCourses(coursesData);
        
        // Extract categories dynamically
        const categories = new Set<string>();
        coursesData.forEach((course: any) => {
          // Check if API provides categories field
          if (course.categories && course.categories.trim()) {
            categories.add(course.categories.trim());
          } else {
            // Use manual categorization
            const category = categorizeCourse(course.course_name);
            categories.add(category);
          }
        });
        
        // Convert Set to sorted array with "Other" at the end
        const categoriesArray = Array.from(categories);
        const otherIndex = categoriesArray.indexOf('Other');
        let sortedCategories;
        
        if (otherIndex !== -1) {
          // Remove "Other" from the array, sort the rest, then add "Other" at the end
          const withoutOther = categoriesArray.filter(cat => cat !== 'Other');
          sortedCategories = [...withoutOther.sort(), 'Other'];
        } else {
          // No "Other" category, just sort normally
          sortedCategories = categoriesArray.sort();
        }
        
        setCourseCategories(sortedCategories);
        
      } else {
        console.error('Failed to fetch courses');
        // Fallback to empty array
        setCourses([]);
        setFilteredCourses([]);
        setCourseCategories([]);
      }
    } catch (error) {
      console.error('Error fetching courses:', error);
      setCourses([]);
      setFilteredCourses([]);
      setCourseCategories([]);
    } finally {
      setLoading(false);
    }
  };

  // Filter courses by category
  const filterCourses = (category: string) => {
    if (category === 'all') {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter((course: any) => {
        // Check if API provides categories field
        if (course.categories && course.categories.trim()) {
          return course.categories.trim() === category;
        } else {
          // Use manual categorization
          const courseCategory = categorizeCourse(course.course_name);
          return courseCategory === category;
        }
      });
      setFilteredCourses(filtered);
    }
  };

  // Load courses on component mount
  useEffect(() => {
    fetchCourses();
  }, []);

  // Filter courses when category changes
  useEffect(() => {
    filterCourses(selectedCategory);
  }, [selectedCategory, courses]);

  // Configuration using Builder Pattern - easily customizable
  const customHeroContent = new HeroContentBuilder()
    .setBadge("ACHIEVE YOUR IIT DREAM")
    .setTitle(["INDIA'S PREMIER", "IIT JEE COACHING", "INSTITUTE"])
    .setSubtitle("Master JEE Main & Advanced with expert faculty, comprehensive study material, and advanced test series.")
    .setCTA("START YOUR IIT JOURNEY TODAY")
    .build();

  // Event handler - Dependency Inversion
  const handleCtaClick = () => {
    // Could be injected as a dependency for better testability
    console.log('CTA clicked - redirect to courses');
    // navigate('/courses');
  };

  const toppers = [
    { rank: 37, name: 'Rohan Gupta', program: '2 Year Classroom', img: '/images/2.png' },
    { rank: 45, name: 'Aditya Kumar', program: '4 Year Integrated', img: '/images/3.png' },
    { rank: 50, name: 'Sneha Sharma', program: '2 Year Classroom', img: '/images/4.png' }
  ];

  const usps = [
    { icon: Users, title: 'Personalized Attention', desc: 'Individual mentorship for every student to track progress.' },
    { icon: BookOpen, title: 'Comprehensive Material', desc: 'Research-based study material aligned with latest patterns.' },
    { icon: Zap, title: 'Concept Clarity', desc: 'Focus on building strong fundamentals from ground up.' },
    { icon: TrendingUp, title: 'Performance Analysis', desc: 'Detailed analytics to identify and improve weak areas.' },
    { icon: Star, title: 'Competitive Environment', desc: 'Healthy competition with top brains from across the country.' },
    { icon: Award, title: 'Expert Faculty', desc: 'Learn from IITians and industry veterans.' }
  ];

  const rankers = [
    { rank: 1, name: "Aravind S.", img: IMAGES.students.studying },
    { rank: 2, name: "Meera K.", img: IMAGES.students.celebrating },
    { rank: 3, name: "Vikram R.", img: IMAGES.students.discussion }
  ];

  const methodologySteps = [
    { id: 1, title: "Diagnostics Through Admission Tests", desc: `${BRANDING.name} Scholarship Cum Admission Tests provide a 360-degree scientific diagnosis of student's analytical skills, IQ, and aptitude.`, icon: FileText },
    { id: 2, title: "Pattern-Proof Teaching", desc: "We prepare students to be ready for any change in the pattern of the targeted exams. This makes their preparation rock solid.", icon: ShieldCheck },
    { id: 3, title: "Best Team of Faculty", desc: `${BRANDING.name} has a pool of very competent, full-time faculty members ensuring students get highly effective teachers.`, icon: Users },
    { id: 4, title: "Total Success Approach", desc: "We prepare our students comprehensively not only for engineering entrance exams but also for school milestones like NTSE, INSPIRE, etc.", icon: Award },
    { id: 5, title: "Bedrock of Values", desc: "We are 100% transparent & truthful. Our value system is uncompromised. Our institute will help students imbibe a good value system.", icon: Heart },
    { id: 6, title: "Research & Development", desc: "Our team ensures that our teaching methodology, study material, and program structure are constantly up to date.", icon: FlaskConical }
  ];

  return (
    <div className="min-h-screen bg-white font-sans pt-16">
      
      {/* SECTION 1: TOP BANNER (Yellow) */}
      <div className="bg-[#19a951] py-6 px-4 text-center relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-wide mb-3">
            BUILT UPON 10 YEARS OF EXCELLENCE
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mt-2 text-sm md:text-base font-bold text-white/90">
            <span className="flex items-center gap-2"><Star className="w-5 h-5 fill-current" /> Unmatched Legacy</span>
            <span className="flex items-center gap-2"><CheckCircle2 className="w-5 h-5" /> On a Mission to Educate 10 Million Students</span>
            <span className="flex items-center gap-2"><Shield className="w-5 h-5" /> Trusted by Parents</span>
          </div>
        </div>
      </div>

      {/* SECTION 2: HERO (Red Background with Toppers) */}
      <div className="relative bg-[#0b3259] pt-16 pb-32 px-4 overflow-hidden">
        {/* Curve at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-white" style={{ clipPath: "ellipse(70% 100% at 50% 100%)" }}></div>
        
        <Carousel setApi={setCarouselApi} className="w-full relative z-10" opts={{ loop: true }}>
          <CarouselContent>
            <CarouselItem>
              <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  <div className="text-white space-y-8 text-center lg:text-left">
                    <Badge className="bg-[#19a951] text-black hover:bg-[#0E312C] border-none px-4 py-1.5 text-sm font-bold tracking-wider">
                      ADMISSIONS OPEN 2025-26
                    </Badge>
                    <h1 className="text-4xl md:text-6xl font-black leading-tight">
                      A Legacy of <br/>
                      <span className="text-[#19a951] relative">
                        Excellence
                        <svg className="absolute w-full h-3 -bottom-1 left-0 text-white opacity-30" viewBox="0 0 100 10" preserveAspectRatio="none">
                          <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                        </svg>
                      </span> & Commitment
                    </h1>
                    <p className="text-lg md:text-xl text-white/90 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                      Quality Education from K–12 to Competitive Exams — Delivered with Purpose, Precision, and Personalization. Udaan for every Student's future success.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                      <Button 
                        className="bg-[#19a951] text-black hover:bg-white hover:text-[#0b3259] font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-all transform hover:scale-105"
                        onClick={() => navigate('/programs')}
                      >
                        Enroll Now
                      </Button>
                      <Button 
                        variant="outline" 
                        className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0b3259] font-bold text-lg px-8 py-6 rounded-full hover:shadow-lg transition-all"
                        onClick={() => navigate('/scholarship-test')}
                      >
                        Scholarship Test
                      </Button>
                    </div>
                  </div>

                  {/* Topper Cards (Floating) */}
                  <div className="relative mt-8 lg:mt-0">
                    <div className="flex justify-center items-end gap-4 md:gap-6">
                      {toppers.map((t, i) => (
                        <div key={i} className={`bg-white p-3 rounded-xl shadow-2xl transform transition-transform hover:-translate-y-2 duration-300 ${i === 1 ? 'mb-12 scale-110 z-10' : 'opacity-90'}`}>
                          <div className="relative">
                            <img src={t.img} alt={t.name} className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg mx-auto mb-3 border-4 border-[#19a951]" />
                            <div className="absolute -top-3 -right-3 bg-[#0b3259] text-white w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold text-xs md:text-sm shadow-md border-2 border-white">
                              {t.rank}
                            </div>
                          </div>
                          <div className="text-center">
                            <div className="text-xl md:text-2xl font-black text-[#0b3259]">AIR {t.rank}</div>
                            <div className="font-bold text-gray-900 text-xs md:text-sm line-clamp-1">{t.name}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
            
            {/* Second Slide - Areas of Focus with Device Mockup */}
            <CarouselItem>
              <div className="max-w-7xl mx-auto min-h-[500px] md:h-[600px] flex items-center justify-center relative overflow-hidden px-4 py-8">
                
                <div className="relative z-10 w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                   
                   {/* Left Side - Text Content */}
                   <div className="relative bg-white rounded-[2rem] p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-gray-100/50 overflow-hidden">
                      {/* Decorative accent */}
                      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#19a951] via-[#0b3259] to-[#19a951] rounded-l-[2rem]"></div>
                      
                      {/* Title with elegant styling */}
                      <div className="mb-10 pl-4">
                        <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] leading-tight font-serif italic text-[#0b3259] tracking-tight">
                          Areas where we Focus
                        </h2>
                        <div className="w-16 h-1 bg-[#19a951] mt-4 rounded-full"></div>
                      </div>
                      
                      {/* Focus areas with refined styling */}
                      <ul className="space-y-4 mb-10 pl-4">
                        {[
                          { text: "K–12 School Learning", sub: "(Classes 1–12)" },
                          { text: "JEE", sub: "(Main & Advanced)" },
                          { text: "NEET", sub: "(UG)" },
                          { text: "UPSC / Civil Services", sub: "Foundation" },
                          { text: "Olympiads & NTSE", sub: "" },
                          { text: "Skill Development", sub: "for Students" }
                        ].map((item, idx) => (
                          <li key={idx} className="flex items-center gap-4 group">
                            <span className="w-2.5 h-2.5 bg-[#19a951] rounded-full shrink-0 group-hover:scale-125 transition-transform duration-300"></span>
                            <span className="text-base md:text-lg text-gray-800 font-medium">
                              {item.text}
                              {item.sub && <span className="text-gray-500 font-normal ml-1">{item.sub}</span>}
                            </span>
                          </li>
                        ))}
                      </ul>
                      
                      {/* Faculties From Section - Refined */}
                      <div className="border-t-2 border-gray-100 pt-8 pl-4">
                        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-6">Faculties from</h3>
                        <div className="flex flex-wrap items-end gap-5 md:gap-8">
                          {/* IIT Bombay */}
                          <div className="flex flex-col items-center group cursor-pointer">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 p-2">
                              <img src="/images/iitb.png" alt="IIT Bombay" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xs font-bold text-gray-600 mt-2 tracking-wide">IIT,B</span>
                          </div>
                          {/* IIT Delhi */}
                          <div className="flex flex-col items-center group cursor-pointer">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 p-2">
                              <img src="/images/iitd.png" alt="IIT Delhi" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xs font-bold text-gray-600 mt-2 tracking-wide">IIT,D</span>
                          </div>
                          {/* IIITL */}
                          <div className="flex flex-col items-center group cursor-pointer">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 p-2">
                              <img src="/images/IIITl.png" alt="IIITL" className="w-full h-full object-contain" />
                            </div>
                            <span className="text-xs font-bold text-gray-600 mt-2 tracking-wide">IIITL</span>
                          </div>
                          {/* KOTA */}
                          <div className="flex flex-col items-center group cursor-pointer">
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                              <span className="text-sm font-black text-white tracking-widest">KOTA</span>
                            </div>
                          </div>
                        </div>
                      </div>
                   </div>

                   {/* Right Side - Device Mockups */}
                   <div className="relative h-[350px] md:h-[450px] lg:h-[500px]">
                      
                      {/* Laptop - Main device at top */}
                      <div className="absolute top-0 right-0 w-[85%] md:w-[90%] z-10">
                        <div className="relative">
                          <img src="/images/laptop.png" alt="Laptop Frame" className="w-full relative z-10 drop-shadow-2xl" />
                          <div className="absolute top-[10%] left-[11.2%] w-[76%] h-[72%] z-20 overflow-hidden flex items-center justify-center rounded-sm">
                            <img src="/images/certificate.png" alt="Certificate" className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>

                      {/* Tablet - Bottom left, overlapping laptop */}
                      <div className="absolute bottom-0 left-0 w-[45%] md:w-[40%] z-30 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                        <div className="bg-gray-900 p-2 md:p-3 rounded-xl md:rounded-2xl shadow-2xl">
                          <div className="bg-gray-800 rounded-lg overflow-hidden aspect-[4/5] relative border border-gray-700">
                            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-black/30 rounded-full z-10"></div>
                            <img src="/images/tykknb.jpeg" alt="Award Ceremony" className="w-full h-full object-cover" />
                          </div>
                        </div>
                      </div>

                      {/* Phone - Bottom right, overlapping laptop */}
                      <div className="absolute bottom-4 right-0 w-[25%] md:w-[22%] z-40 transform rotate-6 hover:rotate-0 transition-transform duration-500">
                        <img src="/images/phone.png" alt="Phone" className="w-full drop-shadow-2xl rounded-[1.3rem]" />
                      </div>
                   </div>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="absolute top-1/2 left-4 md:left-12 z-20 hidden md:block">
            <CarouselPrevious className="bg-white/10 hover:bg-white/20 border-white/20 text-white" />
          </div>
          <div className="absolute top-1/2 right-4 md:right-12 z-20 hidden md:block">
            <CarouselNext className="bg-white/10 hover:bg-white/20 border-white/20 text-white" />
          </div>
        </Carousel>
      </div>

      {/* SECTION 3: TRAILBLAZERS (New Tabbed Section) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Our Recent</h3>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900">Trailblazers</h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Left Sidebar - Tabs */}
            <div className="lg:w-1/4 space-y-2">
              {Object.keys(trailblazersData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`w-full text-left px-6 py-4 rounded-lg text-sm font-bold uppercase transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-[#19a951] text-black shadow-md translate-x-2'
                      : 'text-gray-500 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  {tab}
                </button>
              ))}
              
              <div className="pt-8">
                <Button 
                  className="w-full bg-[#0b3259] hover:bg-[#0E312C] text-white font-bold py-6 rounded-full"
                  onClick={() => navigate('/results')}
                >
                  Learn from our toppers
                </Button>
              </div>
            </div>

            {/* Right Content - Carousel */}
            <div className="lg:w-3/4">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {trailblazersData[activeTab].map((student, index) => (
                    <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="bg-white rounded-2xl overflow-hidden shadow-lg group hover:shadow-xl transition-shadow h-full border border-gray-100">
                        {/* Card Header with Yellow/Orange Gradient */}
                        <div className="h-48 bg-gradient-to-br from-[#19a951] to-[#0b3259] relative p-4">
                          <div className="text-sm font-medium text-black/80 mb-1">All India Rank</div>
                          <div className="text-6xl font-black text-[#0b3259] leading-none mb-4">
                            {student.rank}
                          </div>
                          
                          {/* Student Image */}
                          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6 w-32 h-32">
                            <div className="w-full h-full rounded-full border-4 border-white overflow-hidden shadow-md bg-gray-200">
                              <img 
                                src={student.img} 
                                alt={student.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                          </div>
                        </div>

                        {/* Card Body */}
                        <div className="pt-10 pb-6 px-6 text-center">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{student.name}</h3>
                          <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                            {student.program}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="hidden md:block">
                  <CarouselPrevious className="-left-4" />
                  <CarouselNext className="-right-4" />
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: UNIQUELY DIFFERENT */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
              {BRANDING.name} Coaching is <span className="text-[#0b3259] relative inline-block">Uniquely Different</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg font-medium">
              A rigorous scientific approach that transforms average students into achievers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {usps.map((usp, i) => (
              <div key={i} className="flex gap-5 items-start group p-4 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="bg-[#E8E1DD] p-4 rounded-full group-hover:bg-[#19a951] transition-colors duration-300 shrink-0 shadow-sm">
                  <usp.icon className="w-8 h-8 text-[#0b3259]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{usp.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{usp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PROGRAMS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Programs Designed<br/>to Help You Win
              </h2>
              <div className="h-1.5 w-24 bg-[#0b3259] rounded-full"></div>
            </div>
            <Button variant="link" className="text-[#0b3259] font-bold text-lg group" onClick={() => navigate('/programs')}>
              View All Programs <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Classroom Programs', color: 'bg-[#0b3259]', img: '/images/Programs-4.jpeg', sub: 'For Class 6 to 12' },
              { title: 'Integrated School', color: 'bg-[#19a951]', img: '/images/nbn.jpeg', sub: 'School + Coaching' },
              { title: 'Rank Improvement', color: 'bg-[#0b3259]', img: '/images/Programs-2.jpeg', sub: 'Crash Courses' },
              { title: 'Droppers Program', color: 'bg-[#19a951]', img: '/images/Programs_3.jpeg', sub: 'For NEET & JEE Aspirants • Duration: 3 Months' }
            ].map((p, i) => (
              <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer h-full flex flex-col" onClick={() => navigate('/programs')}>
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                  <img src={p.img} alt={p.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-[#0b3259] transition-colors">{p.title}</h3>
                  <p className="text-gray-500 font-medium mb-6">{p.sub}</p>
                  <div className="mt-auto flex items-center text-[#0b3259] font-bold uppercase tracking-wider text-sm">
                    Know More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: eSCHOOL BANNER */}
      <section className="py-12 bg-[#E8E1DD]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-2">
                Elite Academy eSchool
              </h2>
              <p className="text-black/80 font-bold text-lg">
                Bringing the classroom experience to your home. Live Interactive Classes.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <MonitorPlay className="w-16 h-16 text-[#0b3259]" />
              <Button className="bg-[#0b3259] text-white hover:bg-black hover:text-white font-bold px-8 py-6 text-lg rounded-full shadow-lg">
                Explore eSchool
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: UPCOMING OPPORTUNITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Upcoming Diagnostic Cum<br/>Scholarship Opportunities
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-l-8 border-[#0b3259] shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Talent Reward Exam (FTRE)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Calendar className="w-5 h-5 text-[#0b3259]" />
                  <span>25th December 2025</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Class 5 to 11</Badge>
                  <Button size="sm" className="bg-[#0b3259] hover:bg-black text-white" onClick={() => navigate('/scholarship-test')}>Register Now</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-8 border-black shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="text-xl font-bold">Escape Velocity Test</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Calendar className="w-5 h-5 text-black" />
                  <span>Every Sunday</span>
                </div>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary">Class 11 & 12</Badge>
                  <Button size="sm" className="bg-black hover:bg-[#0b3259] text-white" onClick={() => navigate('/scholarship-test')}>Register Now</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 8: METHODOLOGY (Snake Layout) */}
      <section className="py-20 bg-[#E8E1DD] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-black text-[#19a951] font-bold px-4 py-1 rounded mb-4">OUR SECRET SAUCE</div>
            <h2 className="text-3xl md:text-5xl font-black text-[#0b3259] mb-6">
              Our Methodology
            </h2>
            <Card className="bg-white/90 backdrop-blur max-w-2xl mx-auto border-none shadow-lg">
              <CardContent className="p-6">
                <p className="text-black font-medium text-lg">
                  No other coaching institute or individual teacher can match {BRANDING.name}'s unparalleled system of excellence!
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-0 relative">
            {/* Central Line - The "Path" */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-3 bg-[#0b3259] md:-translate-x-1/2 rounded-full"></div>

            {methodologySteps.map((step, i) => (
              <div key={i} className={`flex items-center gap-6 md:gap-0 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} relative pb-12`}>
                
                {/* Empty half for desktop layout */}
                <div className="hidden md:block md:w-1/2"></div>

                {/* Center Point on Line */}
                <div className="absolute left-8 md:left-1/2 w-8 h-8 bg-[#19a951] border-4 border-[#0b3259] rounded-full z-20 transform -translate-x-1/2 md:translate-x-[-50%]"></div>
                
                {/* Connecting Arm */}
                <div className={`hidden md:block absolute top-1/2 h-2 bg-[#0b3259] w-16 z-0 ${i % 2 === 0 ? 'left-1/2 ml-4' : 'right-1/2 mr-4'}`}></div>

                {/* Content Card */}
                <div className={`flex-1 md:w-1/2 pl-20 md:pl-0 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-xl border-b-8 border-[#0b3259] relative group hover:transform hover:scale-105 transition-all duration-300">
                    {/* Icon Bubble */}
                    <div className="absolute -top-8 left-8 bg-white p-3 rounded-xl shadow-lg border-2 border-[#19a951]">
                      <step.icon className="w-8 h-8 text-[#0b3259]" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mt-4 mb-3">{step.title}</h3>
                    <p className="text-gray-600 font-medium text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>

              </div>
            ))}
            
            <div className="text-center pt-8 relative z-30">
               <Button className="bg-[#0b3259] hover:bg-[#0E312C] text-white px-8 py-2 rounded-full text-sm font-bold shadow-lg">
                 Read more
               </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: Prayozan Section */}
      <section className="bg-[#0E312C] py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Prayozan</h2>
              <div className="text-lg text-white/90 mb-8 leading-relaxed space-y-4">
                <p>
                  Prayozan is India's leading education enterprise dedicated to transforming how students learn, grow, and achieve success. From K-12 students and aspirants of India's toughest competitive exams, including <strong className="text-[#19a951]">JEE</strong>, <strong className="text-[#19a951]">NEET</strong>, <strong className="text-[#19a951]">IIT</strong>, <strong className="text-[#19a951]">UPSC</strong>, <strong className="text-[#19a951]">Olympiads</strong>, and more to create a learning experience that is personal, engaging, and impactful.
                </p>
                <p>
                  Our team consists of experienced educators from IITs, NITs, AIIMS, and top universities who bring deep subject expertise and student-centered teaching methodologies.
                </p>
              </div>
              <Button className="bg-[#19a951] text-black hover:bg-white hover:text-[#0b3259] rounded-full px-8 py-6 font-bold text-lg shadow-lg">
                Know More
              </Button>
            </div>
            
            <div className="md:w-1/2 relative">
               <div className="absolute inset-0 bg-[#19a951]/20 rounded-lg transform rotate-3 scale-105"></div>
               <img 
                 src="/images/tykknb.jpeg" 
                 alt="Prayozan Team" 
                 className="relative rounded-lg shadow-2xl w-full object-cover border-4 border-[#19a951]/30"
               />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9.5: School Programs (New) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Structured Curriculum for Every Stage
            </h2>
            <div className="h-1.5 w-24 bg-[#0b3259] rounded-full mx-auto"></div>
          </div>

          <div className="flex flex-col items-center">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(schoolProgramsData).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveProgramTab(tab)}
                  className={`px-6 py-3 rounded-full text-sm md:text-base font-bold transition-all duration-300 ${
                    activeProgramTab === tab
                      ? 'bg-[#0b3259] text-white shadow-lg scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
              {schoolProgramsData[activeProgramTab].map((item: any, idx: number) => (
                <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-[#E8E1DD] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#19a951] transition-colors duration-300">
                    <item.icon className="w-8 h-8 text-[#0b3259]" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.subject}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 10: The Ever-Growing World */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            The Ever-Growing World Of Prayozan
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#19a951] p-4 rounded-lg shadow-md">
                <BookOpen className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-gray-900">73</div>
              <div className="text-sm text-gray-500 font-medium">Study Centers</div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#19a951] p-4 rounded-lg shadow-md">
                <Award className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-gray-900">2</div>
              <div className="text-sm text-gray-500 font-medium">Global Schools</div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#19a951] p-4 rounded-lg shadow-md">
                <Shield className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-gray-900">6</div>
              <div className="text-sm text-gray-500 font-medium">World Schools</div>
            </div>
            
            <div className="flex flex-col items-center gap-3">
              <div className="bg-[#19a951] p-4 rounded-lg shadow-md">
                <Users className="w-8 h-8 text-black" />
              </div>
              <div className="text-3xl font-bold text-gray-900">49</div>
              <div className="text-sm text-gray-500 font-medium">Associate Schools</div>
            </div>
          </div>
        </div>
      </section> */}

      <Footer />
    </div>
  );
};

export default Home;
