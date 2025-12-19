import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import FloatingContactButton from "./components/FloatingContactButton";

// Public Pages
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";
import SuccessStories from "./pages/SuccessStories";
import Ebooks from "./pages/Ebooks";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import QualityPolicy from "./pages/QualityPolicy";
import RefundsCancellation from "./pages/RefundsCancellation";
import Partnerships from "./pages/Partnerships";
import SchoolPartnership from "./pages/SchoolPartnership";
import NotFound from "./pages/NotFound";

// New JEE-focused pages
import Programs from "./pages/Programs";
import ClassroomPrograms from "./pages/programs/ClassroomPrograms";
import IntegratedSchoolPrograms from "./pages/programs/IntegratedSchoolPrograms";
import OnlinePrograms from "./pages/programs/OnlinePrograms";
import CrashCourses from "./pages/programs/CrashCourses";
import TestSeries from "./pages/TestSeries";
import ScholarshipTest from "./pages/ScholarshipTest";
import Pedagogy from "./pages/Pedagogy";
import StudyMaterial from "./pages/StudyMaterial";
import Faculty from "./pages/Faculty";
import Results from "./pages/Results";
import Centers from "./pages/Centers";
import AboutUs from "./pages/AboutUs";

// Student Portal
import StudentDashboard from "./pages/student/Dashboard";
import StudentLogin from "./pages/student/Login";
import StudentTests from "./pages/student/Tests";
import StudentAnalytics from "./pages/student/Analytics";

// Admin Pages
import AdminLogin from "./pages/admin/Login";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import BlogList from "./pages/admin/BlogList";
import BlogCreate from "./pages/admin/BlogCreate";
import CategoryList from "./pages/admin/categories/CategoryList";
import CategoryCreate from "./pages/admin/categories/CategoryCreate";
import EbookManagement from "./pages/admin/EbookManagement";
import EbookEmailManager from "./pages/admin/EbookEmailManager";
import UserManagement from "./pages/admin/UserManagement";
import ProtectedRoute from "./components/auth/ProtectedRoute";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Admin Login (No Layout) */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Routes (With Layout) - Protected */}
          <Route path="/admin" element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="blogs" element={<BlogList />} />
            <Route path="blogs/create" element={<BlogCreate />} />
            <Route path="blogs/:id/edit" element={<BlogCreate />} />
            <Route path="categories" element={<CategoryList />} />
            <Route path="categories/create" element={<CategoryCreate />} />
            <Route path="categories/:id/edit" element={<CategoryCreate />} />
            <Route path="ebooks" element={<EbookManagement />} />
            <Route path="ebooks/emails" element={<EbookEmailManager />} />
            <Route path="comments" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Comments - Coming Soon</h2></div>} />
            <Route path="authors" element={<UserManagement />} />
            <Route path="newsletter" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Newsletter - Coming Soon</h2></div>} />
            <Route path="analytics" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Analytics - Coming Soon</h2></div>} />
            <Route path="settings" element={<div className="text-center py-12"><h2 className="text-2xl font-bold">Settings - Coming Soon</h2></div>} />
          </Route>

          {/* Student Portal Routes */}
          <Route path="/student/login" element={<StudentLogin />} />
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/student/tests" element={<StudentTests />} />
          <Route path="/student/analytics" element={<StudentAnalytics />} />

          {/* Public Routes (With Navigation) */}
          <Route path="/*" element={
            <>
              <Navigation />
              <Routes>
                <Route path="/" element={<Home />} />

                {/* Programs Routes */}
                <Route path="/programs" element={<Programs />} />
                <Route path="/programs/classroom" element={<ClassroomPrograms />} />
                <Route path="/programs/integrated-school" element={<IntegratedSchoolPrograms />} />
                <Route path="/programs/online" element={<OnlinePrograms />} />
                <Route path="/programs/crash-course" element={<CrashCourses />} />

                {/* Test Series & Scholarship */}
                <Route path="/test-series" element={<TestSeries />} />
                <Route path="/scholarship-test" element={<ScholarshipTest />} />

                {/* About & Info Pages */}
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/pedagogy" element={<Pedagogy />} />
                <Route path="/study-material" element={<StudyMaterial />} />
                <Route path="/faculty" element={<Faculty />} />
                <Route path="/results" element={<Results />} />
                <Route path="/centers" element={<Centers />} />

                {/* Existing Routes */}
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/blogs/:slug" element={<BlogDetail />} />
                <Route path="/success-stories" element={<SuccessStories />} />
                <Route path="/ebooks" element={<Ebooks />} />
                <Route path="/partnerships" element={<Partnerships />} />
                <Route path="/school-partnership" element={<SchoolPartnership />} />

                {/* Policy Pages */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/quality-policy" element={<QualityPolicy />} />
                <Route path="/refunds-cancellation" element={<RefundsCancellation />} />

                <Route path="*" element={<NotFound />} />
              </Routes>
              {/* Floating Contact Button - Appears on all public pages */}
              <FloatingContactButton
                whatsappNumber="919876543210"
                phoneNumber="+919876543210"
                whatsappMessage="Hi, I would like to inquire about JEE coaching programs at Elite IIT Academy."
                whatsappGroupUrl="https://wa.me/919876543210"
                position="left"
              />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
