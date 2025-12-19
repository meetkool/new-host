import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';
import {
    GraduationCap,
    Users,
    BookOpen,
    Award,
    Target,
    TrendingUp,
    CheckCircle2,
    Phone,
    Mail,
    MapPin,
    Star,
    Shield,
    Zap,
    ArrowRight,
    Clock,
    Car,
    Brain,
    Monitor,
    UserCheck,
    Layers,
    Building2,
    Heart,
    Smile,
    Trophy,
    Quote,
    Settings,
    Rocket,
    Headphones,
    X,
    Check,
    Timer,
    Wallet,
    Home as HomeIcon
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SchoolPartnership = () => {
    const navigate = useNavigate();

    // What Makes Prayozan Different
    const differentiators = [
        {
            icon: GraduationCap,
            title: "Expert Faculty",
            description: "Top Vidyapeeth faculty with proven track records in both board and competitive exam coaching"
        },
        {
            icon: Monitor,
            title: "Advanced Smart Classes",
            description: "State-of-the-art digital infrastructure with interactive learning tools and resources"
        },
        {
            icon: UserCheck,
            title: "Personalised Tracking",
            description: "Individual academic monitoring ensures every student receives the attention they deserve"
        },
        {
            icon: Layers,
            title: "Seamless Integration",
            description: "Board and competitive exam preparation perfectly balanced within the school timetable"
        }
    ];

    // Benefits for Your School
    const schoolBenefits = [
        {
            number: "01",
            title: "Enhanced Academic Reputation",
            description: "Position your school as a complete academic solution with superior results in both boards and competitive exams"
        },
        {
            number: "02",
            title: "Increased Student Retention",
            description: "Parents choose schools offering integrated programmes, reducing mid-year withdrawals for coaching"
        },
        {
            number: "03",
            title: "Improved Student Performance",
            description: "Focused, less-stressed students achieve better outcomes when learning is consolidated"
        },
        {
            number: "04",
            title: "Competitive Advantage",
            description: "Stand out in your region as a forward-thinking institution offering modern educational solutions"
        },
        {
            number: "05",
            title: "Parent Satisfaction",
            description: "Reduced stress, safer environment, and better results create happy, loyal parent community"
        }
    ];

    // Board Exam Excellence
    const boardExamFeatures = [
        "CBSE/State board curriculum coverage",
        "Regular concept reinforcement",
        "Previous years' question practice",
        "Internal assessment preparation",
        "Examination strategies and time management"
    ];

    // Competitive Edge
    const competitiveFeatures = [
        "JEE Main & Advanced preparation",
        "NEET foundation building",
        "Advanced problem-solving techniques",
        "Mock tests and performance analysis",
        "Olympiad and scholarship exam coaching"
    ];

    // Self-Study Training
    const selfStudyMethods = [
        "Time management strategies",
        "Note-making methods",
        "Revision techniques",
        "Problem-solving approaches",
        "Exam preparation tactics"
    ];

    // Winner's Routine
    const winnersRoutine = [
        { time: "6:00 AM", activity: "Early rise, exercise, breakfast" },
        { time: "7:00 AM - 2:00 PM", activity: "Focused school hours with integrated prep" },
        { time: "2:30 PM", activity: "Lunch and short rest" },
        { time: "3:30 PM - 5:30 PM", activity: "Self-study and practice" },
        { time: "6:00 PM", activity: "Sports/hobby time" },
        { time: "7:30 PM", activity: "Dinner with family" },
        { time: "8:30 PM - 10:00 PM", activity: "Revision and next-day prep" },
        { time: "10:30 PM", activity: "Sleep—8 hours guaranteed" }
    ];

    // Ordinary Student's Routine
    const ordinaryRoutine = [
        { time: "7:00 AM", activity: "Rush to get ready" },
        { time: "8:00 AM - 2:00 PM", activity: "School (often tired)" },
        { time: "3:00 PM - 4:00 PM", activity: "Travel to coaching" },
        { time: "4:00 PM - 8:00 PM", activity: "Coaching classes" },
        { time: "8:30 PM - 9:00 PM", activity: "Travel back home" },
        { time: "9:30 PM", activity: "Quick dinner, exhausted" },
        { time: "10:00 PM - 12:00 AM", activity: "Homework rush" },
        { time: "12:30 AM", activity: "Sleep—insufficient rest" }
    ];

    // Dummy School Problems
    const dummySchoolProblems = [
        "Lack of school culture and belonging",
        "No peer learning environment",
        "Missing life skills development",
        "Isolation from extracurriculars",
        "Unhealthy academic pressure"
    ];

    // Prayozan Holistic Approach
    const holisticApproach = [
        "Attend classes regularly and actively",
        "Build lasting friendships and networks",
        "Participate in sports, arts, and clubs",
        "Develop personality and soft skills",
        "Experience balanced, joyful learning"
    ];

    // Testimonials
    const testimonials = [
        {
            name: "Mrs Sharma",
            role: "Parent",
            quote: "My daughter was travelling two hours daily to coaching. Now she's relaxed, focused, and her scores have improved dramatically. We're so grateful for this integrated approach!"
        },
        {
            name: "Rahul",
            role: "Class XII Student",
            quote: "I used to miss school events because of coaching. Now I'm preparing for JEE whilst enjoying my school life. My time management has improved, and so have my results."
        },
        {
            name: "Principal Desai",
            role: "Partner School",
            quote: "Since implementing Prayozan's programme, our admissions have increased by 40%. Parents specifically seek us out because we offer this complete solution."
        }
    ];

    // Implementation Steps
    const implementationSteps = [
        {
            icon: Settings,
            title: "Initial Consultation",
            description: "Our team assesses your school's needs, infrastructure, and goals to customise the programme perfectly"
        },
        {
            icon: Monitor,
            title: "Infrastructure Setup",
            description: "We install smart classroom technology and provide all necessary learning materials and resources"
        },
        {
            icon: Users,
            title: "Faculty Training",
            description: "Comprehensive training for your teachers or deployment of our expert faculty—your choice"
        },
        {
            icon: Rocket,
            title: "Programme Launch",
            description: "Smooth rollout with full support, parent orientation, and student onboarding activities"
        },
        {
            icon: Headphones,
            title: "Ongoing Support",
            description: "Continuous monitoring, regular updates, and dedicated support team to ensure sustained success"
        }
    ];

    return (
        <div className="min-h-screen bg-white font-sans pt-16">

            {/* HERO SECTION - Slide 1 */}
            <section className="relative bg-gradient-to-br from-[#0b3259] via-[#0b3259] to-[#19a951] py-20 md:py-28 px-4 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#19a951] rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left - Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="text-white space-y-6"
                        >
                            <Badge className="bg-[#19a951] text-black hover:bg-[#19a951] border-none px-4 py-1.5 text-sm font-bold tracking-wider">
                                SCHOOL PARTNERSHIP PROGRAM
                            </Badge>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
                                Transform Your School
                                <br />
                                with <span className="text-[#19a951]">Prayozan's</span>
                                <br />
                                Integrated Programme
                            </h1>
                            <p className="text-lg md:text-xl text-white/90 max-w-xl leading-relaxed">
                                A complete academic solution that prepares students for board exams and competitive examinations—all under one roof, right within your school campus.
                            </p>
                            <div className="flex flex-wrap gap-4 pt-4">
                                <Button
                                    className="bg-[#19a951] text-black hover:bg-white hover:text-[#0b3259] font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-all transform hover:scale-105"
                                    onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Partner With Us
                                </Button>
                                <Button
                                    variant="outline"
                                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0b3259] font-bold text-lg px-8 py-6 rounded-full"
                                    onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}
                                >
                                    Learn More
                                </Button>
                            </div>
                        </motion.div>

                        {/* Right - Hero Image from PPT Slide 1 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative flex justify-center lg:justify-end"
                        >
                            {/* sp_1.png - Image from PPT Slide 1 */}
                            <div className="relative">
                                <img
                                    src="/images/sp_1.png"
                                    alt="Prayozan School Partnership"
                                    className="w-full max-w-lg rounded-2xl shadow-2xl"
                                />
                                {/* Decorative elements */}
                                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#19a951] rounded-xl -z-10"></div>
                                <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/20 rounded-xl -z-10"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* ABOUT PRAYOZAN - Slide 2 */}
            <section id="about-section" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <Badge className="bg-[#0b3259] text-white">BUILT UPON 10 YEARS OF EXCELLENCE</Badge>
                            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
                                About <span className="text-[#19a951]">Prayozan</span>
                            </h2>
                            <h3 className="text-xl md:text-2xl font-bold text-[#0b3259]">
                                On a Mission to Educate 10 Million Students
                            </h3>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Prayozan is India's leading education enterprise dedicated to transforming how students learn, grow, and achieve success. From K-12 students and aspirants of India's toughest competitive exams, including JEE, NEET, IIT, UPSC, Olympiads, and more to create a learning experience that is personal, engaging, and impactful.
                            </p>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our team consists of experienced educators from IITs, NITs, AIIMS, and top universities who bring deep subject expertise and student-centered teaching methodologies.
                            </p>
                        </motion.div>

                        {/* Image from PPT Slide 2 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                {/* sp-2.png - Image from PPT Slide 2 (About Prayozan section) */}
                                <img
                                    src="/images/sp-2.png"
                                    alt="About Prayozan - Satish Nagar, Founder"
                                    className="w-full max-w-md rounded-2xl shadow-2xl"
                                />
                                {/* Decorative elements */}
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#19a951] rounded-xl -z-10"></div>
                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#0b3259]/20 rounded-xl -z-10"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* THE CHALLENGE SCHOOLS FACE TODAY - Slide 3 */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                            The Challenge Schools <span className="text-[#0b3259]">Face Today</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Traditional Approach */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-red-50 border-2 border-red-200 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-red-500 p-3 rounded-full">
                                    <X className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-red-700">Traditional Approach</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Students attend coaching centres after school",
                                    "Exhausting travel time daily",
                                    "Fragmented learning experience",
                                    "Reduced focus and energy",
                                    "Parents stressed about safety and schedule"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* The Prayozan Solution */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-green-50 border-2 border-green-200 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-[#19a951] p-3 rounded-full">
                                    <Check className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#19a951]">The Prayozan Solution</h3>
                            </div>
                            <ul className="space-y-4">
                                {[
                                    "Integrated programme within school",
                                    "Zero travel—more learning time",
                                    "Seamless board + competitive prep",
                                    "Enhanced student focus",
                                    "Complete peace of mind for parents"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-[#19a951] shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* WHAT MAKES PRAYOZAN DIFFERENT - Slide 4 */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                            What Makes Prayozan <span className="text-[#19a951]">Different?</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {differentiators.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all text-center group border border-gray-100"
                            >
                                <div className="bg-[#19a951]/10 p-4 rounded-xl w-fit mx-auto mb-6 group-hover:bg-[#19a951] transition-colors">
                                    <item.icon className="w-8 h-8 text-[#0b3259] group-hover:text-white transition-colors" />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ONE CAMPUS COMPLETE PREPARATION - Slide 5 */}
            <section className="py-20 bg-[#0b3259]">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white space-y-6"
                    >
                        <Badge className="bg-[#19a951] text-black">INTEGRATED LEARNING</Badge>
                        <h2 className="text-3xl md:text-5xl font-black">
                            One Campus. Complete Preparation.
                        </h2>
                        <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                            The Prayozan Integrated Programme brings board and competitive exam preparation together seamlessly—right within your school premises. No more divided attention, no more exhausting schedules.
                        </p>
                        {/* sp_3_team.png - Image from PPT Slide 5 (One Campus section) */}
                        <div className="mt-8 rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto">
                            <img
                                src="/images/sp_3_team.png"
                                alt="One Campus Complete Preparation - Prayozan Team"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* BENEFITS FOR YOUR SCHOOL - Slide 6 */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                            Benefits for <span className="text-[#0b3259]">Your School</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {schoolBenefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all border border-gray-100"
                            >
                                <div className="text-5xl font-black text-[#19a951]/30 mb-4">{benefit.number}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* THE COMPLETE LEARNING ECOSYSTEM - Slide 7 */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                            The Complete <span className="text-[#19a951]">Learning Ecosystem</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Board Exam Excellence */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#0b3259]"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <BookOpen className="w-8 h-8 text-[#0b3259]" />
                                <h3 className="text-2xl font-bold text-gray-900">Board Exam Excellence</h3>
                            </div>
                            <ul className="space-y-3">
                                {boardExamFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#0b3259] shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Competitive Edge */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-[#19a951]"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <Trophy className="w-8 h-8 text-[#19a951]" />
                                <h3 className="text-2xl font-bold text-gray-900">Competitive Edge</h3>
                            </div>
                            <ul className="space-y-3">
                                {competitiveFeatures.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-[#19a951] shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* SELF-STUDY TRAINING - Slide 8 */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                                The Power of Self-Study: <span className="text-[#19a951]">We Train Students How to Learn</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Self-study is the foundation of lasting academic success. At Prayozan, we don't just teach content—we train students in effective self-study techniques.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-xl">
                                <h4 className="font-bold text-gray-900 mb-4">Our comprehensive training includes:</h4>
                                <ul className="space-y-3">
                                    {selfStudyMethods.map((method, idx) => (
                                        <li key={idx} className="flex items-center gap-3">
                                            <CheckCircle2 className="w-5 h-5 text-[#19a951]" />
                                            <span className="text-gray-700">{method}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>

                        {/* sp_4.png - Image from PPT Slide 8 (Self-Study Training section) */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <img
                                    src="/images/sp_4.png"
                                    alt="Self-Study Training Cycle"
                                    className="w-full max-w-md rounded-2xl shadow-2xl"
                                />
                                {/* Decorative elements */}
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#19a951] rounded-xl -z-10"></div>
                                <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#0b3259]/20 rounded-xl -z-10"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* DAILY ROUTINE COMPARISON - Slide 9 */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                            Daily Routine: <span className="text-[#19a951]">Winners</span> vs <span className="text-red-500">Ordinary Students</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Winner's Routine */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-green-50 border-2 border-green-200 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-[#19a951] p-3 rounded-full">
                                    <Trophy className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#19a951]">Winner's Routine</h3>
                            </div>
                            <ul className="space-y-3">
                                {winnersRoutine.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 py-2 border-b border-green-100 last:border-0">
                                        <span className="font-bold text-[#0b3259] min-w-[140px] text-sm">{item.time}</span>
                                        <span className="text-gray-700 text-sm">{item.activity}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Ordinary Student's Routine */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-red-50 border-2 border-red-200 rounded-2xl p-8"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="bg-red-500 p-3 rounded-full">
                                    <Clock className="w-6 h-6 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-red-600">Ordinary Student's Routine</h3>
                            </div>
                            <ul className="space-y-3">
                                {ordinaryRoutine.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 py-2 border-b border-red-100 last:border-0">
                                        <span className="font-bold text-red-700 min-w-[140px] text-sm">{item.time}</span>
                                        <span className="text-gray-700 text-sm">{item.activity}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    <div className="mt-8 text-center">
                        <p className="text-gray-600 text-lg italic max-w-3xl mx-auto">
                            The difference? <strong>Winners have structured time, better focus, and healthier balance.</strong> Ordinary students are exhausted, scattered, and stressed.
                        </p>
                    </div>
                </div>
            </section>

            {/* ENDING THE DUMMY SCHOOL CULTURE - Slide 10 */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                            Ending the <span className="text-red-500">Dummy School</span> Culture
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* The Problem */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-red-50 p-8 rounded-2xl"
                        >
                            <h3 className="text-xl font-bold text-red-700 mb-4">The Problem with Dummy Schools</h3>
                            <p className="text-gray-600 mb-6">
                                Many students enrol in schools only for attendance whilst spending their days at coaching centres. This creates:
                            </p>
                            <ul className="space-y-3">
                                {dummySchoolProblems.map((problem, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <X className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{problem}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Prayozan's Approach */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-green-50 p-8 rounded-2xl"
                        >
                            <h3 className="text-xl font-bold text-[#19a951] mb-4">Prayozan's Holistic Approach</h3>
                            <p className="text-gray-600 mb-6">
                                We create a vibrant school culture where students:
                            </p>
                            <ul className="space-y-3">
                                {holisticApproach.map((approach, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-[#19a951] shrink-0 mt-0.5" />
                                        <span className="text-gray-700">{approach}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* REAL RESULTS, REAL IMPACT - Slide 11 */}
            <section className="py-20 bg-[#0b3259]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16 text-white">
                        <h2 className="text-3xl md:text-5xl font-black mb-4">
                            Real Results, <span className="text-[#19a951]">Real Impact</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {[
                            {
                                value: "40%",
                                label: "More Study Time",
                                description: "Students gain additional focused learning hours by eliminating travel to coaching centres"
                            },
                            {
                                value: "100%",
                                label: "Campus Integration",
                                description: "Complete board and competitive preparation without leaving school premises"
                            },
                            {
                                value: "₹0",
                                label: "Travel Costs",
                                description: "Families save on transportation expenses and coaching centre commute"
                            }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white/10 backdrop-blur p-8 rounded-2xl text-center text-white"
                            >
                                <div className="text-5xl font-black text-[#19a951] mb-2">{stat.value}</div>
                                <div className="text-xl font-bold mb-2">{stat.label}</div>
                                <p className="text-white/80 text-sm">{stat.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <p className="text-center text-white/90 text-lg max-w-3xl mx-auto">
                        Parents report significantly reduced stress levels and students demonstrate improved performance across both board exams and competitive assessments.
                    </p>
                </div>
            </section>

            {/* TESTIMONIALS - Slide 12 */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                            Real Results: <span className="text-[#0b3259]">What Parents and Students Say</span>
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                            >
                                <Quote className="w-10 h-10 text-[#19a951]/30 mb-4" />
                                <p className="text-gray-600 italic mb-6 leading-relaxed">"{testimonial.quote}"</p>
                                <div className="border-t border-gray-100 pt-4">
                                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-[#0b3259] text-sm">{testimonial.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* IMPLEMENTATION STEPS - Slide 13 */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-4">
                            Implementation is <span className="text-[#19a951]">Simple and Seamless</span>
                        </h2>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Implementation Steps */}
                        <div className="space-y-6">
                            {implementationSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-start gap-4 bg-gray-50 p-5 rounded-xl"
                                >
                                    <div className="bg-[#0b3259] p-3 rounded-full shrink-0">
                                        <step.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-1">{step.title}</h3>
                                        <p className="text-gray-600 text-sm">{step.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* sp_5.png - Image from PPT Slide 14 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <img
                                    src="/images/sp_5.png"
                                    alt="Prayozan Implementation Process"
                                    className="w-full max-w-md rounded-2xl shadow-2xl"
                                />
                                {/* Decorative elements */}
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#19a951] rounded-xl -z-10"></div>
                                <div className="absolute -top-4 -left-4 w-14 h-14 bg-[#0b3259]/20 rounded-xl -z-10"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION - Slides 14-15 */}
            <section id="contact-section" className="py-24 bg-gradient-to-br from-[#0b3259] to-[#19a951]">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-white"
                        >
                            <h2 className="text-3xl md:text-5xl font-black mb-6">
                                Ready to Transform Your School?
                            </h2>
                            <p className="text-xl text-white/90 mb-8 leading-relaxed">
                                Join the growing community of forward-thinking schools that are revolutionising education with Prayozan's Integrated Programme. Give your students the complete academic solution they deserve—boards and competitive preparation, all under one roof.
                            </p>
                            <div className="bg-white/10 backdrop-blur p-6 rounded-xl mb-8">
                                <h3 className="text-xl font-bold mb-4">Take the Next Step Today</h3>
                                <p className="text-white/80">
                                    Contact our team to schedule a consultation and discover how Prayozan can elevate your school's academic excellence.
                                </p>
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="bg-white/20 p-3 rounded-full">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-white/80 text-sm">Call Us</p>
                                        <p className="text-white font-bold text-lg">+91 7303577006</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* sp_7.png - Image from PPT Slide 15 */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex justify-center"
                        >
                            <div className="relative">
                                <img
                                    src="/images/sp_7.png"
                                    alt="Prayozan Partnership - Ready to Transform"
                                    className="w-full max-w-md rounded-2xl shadow-2xl"
                                />
                                {/* Decorative elements */}
                                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/20 rounded-xl -z-10"></div>
                                <div className="absolute -top-4 -left-4 w-14 h-14 bg-[#19a951]/30 rounded-xl -z-10"></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default SchoolPartnership;
