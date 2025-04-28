import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import Work from './pages/Work';
import Solutions from './pages/Solutions';
import Approach from './pages/Approach';
import Support from './pages/Support';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsConditions from './pages/legal/TermsConditions';
import CookiePolicy from './pages/legal/CookiePolicy';
import Sitemap from './pages/legal/Sitemap';
import CaseStudies from './pages/legal/CaseStudies';
import BlogPost from './pages/BlogPost';
import { useScrollToTop } from './hooks/useScrollToTop';

// ScrollToTop component that will be used inside Router
const ScrollToTop = () => {
  useScrollToTop();
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/work' element={<Work/>} />
        <Route path='/solutions' element={<Solutions/>} />
        <Route path='/approach' element={<Approach/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
        {/* Legal Pages */}
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termsconditions" element={<TermsConditions />} />
        <Route path="/cookiepolicy" element={<CookiePolicy />} />
        <Route path="/sitemap" element={<Sitemap />} />
        <Route path="/casestudies" element={<CaseStudies />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;