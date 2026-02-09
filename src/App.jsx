import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CareersPage from "./pages/Career";
import Home from "./pages/Home";
import AboutInf from "./pages/AboutInf";
import Services from "./pages/Services";
import ServiceDetail from "./pages/serviceDetails";
import Career from "./pages/Career";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ProjectDetail from "./pages/ProjectDetail";
import InternshipDetail from "./pages/InternshipDetail";
import CustomerOnboarding from "./pages/CustomerOnboardin";
import Terms from "./pages/Terms";
import RefundPolicy from "./pages/RefundPolicy";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutInf />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/careers/:slug" element={<InternshipDetail/>}/>
        <Route path="/onboarding" element={<CustomerOnboarding />} />
        <Route path="/project" element={<Projects />}/>
        <Route path="/portfolio/:id" element={<ProjectDetail />}/>
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refundpolicy" element={<RefundPolicy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
