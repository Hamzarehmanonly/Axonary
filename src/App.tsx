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
// import ServiceDemo1 from './pages/services/Service-demo-1';
import Service from './pages/services/Service';
// import ServiceDemo3 from './pages/services/Service-demo-3';
import IOSAppDevelopment from './pages/services/mobile-app-development/IOSAppDevelopment';
import AndroidAppDevelopment from './pages/services/mobile-app-development/AndroidAppDevelopment';
import CrossPlatformAppDevelopment from './pages/services/mobile-app-development/CrossPlatformAppDevelopment';
import FlutterAppDevelopment from './pages/services/mobile-app-development/FlutterAppDevelopment';
import ReactNativeAppDevelopment from './pages/services/mobile-app-development/ReactNativeAppDevelopment';
import CloudMobileAppDevelopment from './pages/services/mobile-app-development/CloudMobileAppDevelopment';
import IOTMobileAppDevelopment from './pages/services/mobile-app-development/IOTMobileAppDevelopment';

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

        {/* Services Pages */}
        <Route path="/services" element={<Service />} />

        {/* Mobile App Development */}
        <Route path="/ios-app-development" element={<IOSAppDevelopment />} />
        <Route path="/android-app-development" element={<AndroidAppDevelopment />} />
        <Route path="/cross-platform-app-development" element={<CrossPlatformAppDevelopment />} />
        <Route path="/flutter-app-development" element={<FlutterAppDevelopment />} />
        <Route path="/react-native-app-development" element={<ReactNativeAppDevelopment />} />
        <Route path="/cloud-mobile-app-development" element={<CloudMobileAppDevelopment />} />
        <Route path="/iot-mobile-app-development" element={<IOTMobileAppDevelopment />} />

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