import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import About from './pages/About';
import Work from './pages/Work';
import Solutions from './pages/Solutions';
import Services from './pages/Services';
import StaffAugmentation from './pages/staff-augmentation/StaffAugmentation';
import Approach from './pages/Approach';
import Support from './pages/Support';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsConditions from './pages/legal/TermsConditions';
import CookiePolicy from './pages/legal/CookiePolicy';
import Sitemap from './pages/legal/Sitemap';
import CaseStudies from './pages/legal/CaseStudies';
import BlogPost from './pages/BlogPost';
import { useScrollToTop } from './hooks/useScrollToTop';
import IOSAppDevelopment from './pages/services/mobile-app-development/IOSAppDevelopment';
import AndroidAppDevelopment from './pages/services/mobile-app-development/AndroidAppDevelopment';
import CrossPlatformAppDevelopment from './pages/services/mobile-app-development/CrossPlatformAppDevelopment';
import FlutterAppDevelopment from './pages/services/mobile-app-development/FlutterAppDevelopment';
import ReactNativeAppDevelopment from './pages/services/mobile-app-development/ReactNativeAppDevelopment';
import CloudMobileAppDevelopment from './pages/services/mobile-app-development/CloudMobileAppDevelopment';
import IOTMobileAppDevelopment from './pages/services/mobile-app-development/IOTMobileAppDevelopment';
import MobileAppDevelopment from './pages/services/mobile-app-development/MobileAppDevelopment';
import ERPSolution from './pages/services/custom-software-development/ERPSolution';
import CRMSolution from './pages/services/custom-software-development/CRMSolution';
import CMSSolution from './pages/services/custom-software-development/CMSSolution';
import HRMSolution from './pages/services/custom-software-development/HRMSolution';
import EcommerceSolution from './pages/services/web-development/EcommerceSolution';
import WebPortalsSolution from './pages/services/web-development/WebPortalsSolution';
import FrontendSolution from './pages/services/web-development/FrontendSolution';
import BackendSolution from './pages/services/web-development/BackendSolution';
import FullstackSolution from './pages/services/web-development/FullstackSolution';
import LowCodeSolution from './pages/services/web-development/LowCodeSolution';
import PWASolution from './pages/services/web-development/PWASolution';
import GenerativeAISolution from './pages/services/artificial-intelligence/GenerativeAISolution';
import NLPSolution from './pages/services/artificial-intelligence/NLPSolution';
import AIAgentSolution from './pages/services/artificial-intelligence/AIAgentSolution';
import CloudApplicationDevelopment from './pages/services/cloud-services/CloudApplicationDevelopment';
import CloudMigration from './pages/services/cloud-services/CloudMigration';
import CloudSupportMaintenance from './pages/services/cloud-services/CloudSupportMaintenance';
import HireAndroidAppDeveloper from './pages/staff-augmentation/HireAndroidAppDeveloper';
import HireIOSAppDeveloper from './pages/staff-augmentation/HireIOSAppDeveloper';
import HireNodeJSDeveloper from './pages/staff-augmentation/HireNodeJSDeveloper';
import HireFlutterDeveloper from './pages/staff-augmentation/HireFlutterDeveloper';
import HireJavaDeveloper from './pages/staff-augmentation/HireJavaDeveloper';
import HireWebsiteDeveloper from './pages/staff-augmentation/HireWebsiteDeveloper';
import HireSMMExpert from './pages/staff-augmentation/HireSMMExpert';
import HireSEOExpert from './pages/staff-augmentation/HireSEOExpert';
import HireGraphicDesigner from './pages/staff-augmentation/HireGraphicDesigner';
import HirePPCExpert from './pages/staff-augmentation/HirePPCExpert';
import HireCustomSoftwareDeveloper from './pages/staff-augmentation/HireCustomSoftwareDeveloper';
import HireContentWriter from './pages/staff-augmentation/HireContentWriter';
import SEOServices from './pages/services/digital-marketing/SEOServices';
import PPCServices from './pages/services/digital-marketing/PPCServices';
import SocialMediaServices from './pages/services/digital-marketing/SocialMediaServices';
import SearchEngineMarketing from './pages/services/digital-marketing/SearchEngineMarketing';
import SearchEngineOptimization from './pages/services/digital-marketing/SearchEngineOptimization';
import SearchIntentOptimization from './pages/services/digital-marketing/SearchIntentOptimization';
import ContentMarketing from './pages/services/digital-marketing/ContentMarketing';
import SEOAI from './pages/services/digital-marketing/SEOAI';
import Automotive from './pages/services/industries/Automotive';
import Healthcare from './pages/services/industries/Healthcare';
import OnDemand from './pages/services/industries/OnDemand';
import Education from './pages/services/industries/Education';
import Music from './pages/services/industries/Music';
import Ecommerce from './pages/services/industries/Ecommerce';
import RealEstate from './pages/services/industries/RealEstate';
import SAAS from './pages/services/industries/SAAS';
import Fintech from './pages/services/industries/Fintech';
import Logistics from './pages/services/industries/Logistics';
import Retail from './pages/services/industries/Retail';

// Language Pages
import DotNet from './pages/services/languages/DotNet';
import HTML5 from './pages/services/languages/HTML5';
import Java from './pages/services/languages/Java';
import NodeJs from './pages/services/languages/NodeJs';
import PHP from './pages/services/languages/PHP';
import Python from './pages/services/languages/Python';

// Platform Pages
import Azure from './pages/services/platforms/Azure';
import GCP from './pages/services/platforms/GCP';
import Oracle from './pages/services/platforms/Oracle';
import SAP from './pages/services/platforms/SAP';
import Meta from './pages/services/platforms/Meta';
import Google from './pages/services/platforms/Google';
import Bing from './pages/services/platforms/Bing';

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
        <Route path="/services" element={<Services />} />
        <Route path="/staff-augmentation" element={<StaffAugmentation />} />

        {/* Staff Augmentation Detail Pages */}
        <Route path="/hire-android-app-developer" element={<HireAndroidAppDeveloper />} />
        <Route path="/hire-ios-app-developer" element={<HireIOSAppDeveloper />} />
        <Route path="/hire-nodejs-developer" element={<HireNodeJSDeveloper />} />
        <Route path="/hire-flutter-developer" element={<HireFlutterDeveloper />} />
        <Route path="/hire-java-developer" element={<HireJavaDeveloper />} />
        <Route path="/hire-website-developer" element={<HireWebsiteDeveloper />} />
        <Route path="/hire-smm-expert" element={<HireSMMExpert />} />
        <Route path="/hire-seo-expert" element={<HireSEOExpert />} />
        <Route path="/hire-graphic-designer" element={<HireGraphicDesigner />} />
        <Route path="/hire-ppc-expert" element={<HirePPCExpert />} />
        <Route path="/hire-custom-software-developer" element={<HireCustomSoftwareDeveloper />} />
        <Route path="/hire-content-writer" element={<HireContentWriter />} />

        {/* Mobile App Development */}
        <Route path="/mobile-app-developments" element={<MobileAppDevelopment />} />
        <Route path="/ios-app-development" element={<IOSAppDevelopment />} />
        <Route path="/android-app-development" element={<AndroidAppDevelopment />} />
        <Route path="/cross-platform-app-development" element={<CrossPlatformAppDevelopment />} />
        <Route path="/flutter-app-development" element={<FlutterAppDevelopment />} />
        <Route path="/react-native-app-development" element={<ReactNativeAppDevelopment />} />
        <Route path="/cloud-mobile-app-development" element={<CloudMobileAppDevelopment />} />
        <Route path="/iot-mobile-app-development" element={<IOTMobileAppDevelopment />} />

        {/* Custom Software Development */}
        <Route path="/erp-solution" element={<ERPSolution />} />
        <Route path="/crm-solution" element={<CRMSolution />} />
        <Route path="/cms-solution" element={<CMSSolution />} />
        <Route path="/hrm-solution" element={<HRMSolution />} />

        {/* Web Development */}
        <Route path="/ecommerce-website-development" element={<EcommerceSolution />} />
        <Route path="/web-portals" element={<WebPortalsSolution />} />
        <Route path="/frontend-development" element={<FrontendSolution />} />
        <Route path="/backend-development" element={<BackendSolution />} />
        <Route path="/fullstack-development" element={<FullstackSolution />} />
        <Route path="/low-code-development" element={<LowCodeSolution />} />
        <Route path="/pwa-solution" element={<PWASolution />} />

        {/* Artificial Intelligence */}
        <Route path="/generative-ai" element={<GenerativeAISolution />} />
        <Route path="/natural-language-processing" element={<NLPSolution />} />
        <Route path="/ai-agent-development" element={<AIAgentSolution />} />

        {/* Cloud Services */}
        <Route path="/cloud-application-development" element={<CloudApplicationDevelopment />} />
        <Route path="/cloud-migration" element={<CloudMigration />} />
        <Route path="/cloud-support-maintenance" element={<CloudSupportMaintenance />} />

        {/* Digital Marketing Services */}
        <Route path="/seo-services" element={<SEOServices />} />
        <Route path="/ppc-services" element={<PPCServices />} />
        <Route path="/social-media-marketing" element={<SocialMediaServices />} />
        <Route path="/search-engine-marketing" element={<SearchEngineMarketing />} />
        <Route path="/search-engine-optimization" element={<SearchEngineOptimization />} />
        <Route path="/search-intent-optimization" element={<SearchIntentOptimization />} />
        <Route path="/content-marketing" element={<ContentMarketing />} />
        <Route path="/seo-ai" element={<SEOAI />} />

        {/* Industries */}
        <Route path="/industries/automotive" element={<Automotive />} />
        <Route path="/industries/healthcare" element={<Healthcare />} />
        <Route path="/industries/on-demand" element={<OnDemand />} />
        <Route path="/industries/education" element={<Education />} />
        <Route path="/industries/music" element={<Music />} />
        <Route path="/industries/ecommerce" element={<Ecommerce />} />
        <Route path="/industries/real-estate" element={<RealEstate />} />
        <Route path="/industries/saas" element={<SAAS />} />
        <Route path="/industries/fintech" element={<Fintech />} />
        <Route path="/industries/logistics" element={<Logistics />} />
        <Route path="/industries/retail" element={<Retail />} />

        {/* Languages */}
        <Route path="/services/languages/dotnet" element={<DotNet />} />
        <Route path="/services/languages/html5" element={<HTML5 />} />
        <Route path="/services/languages/java" element={<Java />} />
        <Route path="/services/languages/nodejs" element={<NodeJs />} />
        <Route path="/services/languages/php" element={<PHP />} />
        <Route path="/services/languages/python" element={<Python />} />

        {/* Platforms */}
        <Route path="/services/platforms/azure" element={<Azure />} />
        <Route path="/services/platforms/gcp" element={<GCP />} />
        <Route path="/services/platforms/oracle" element={<Oracle />} />
        <Route path="/services/platforms/sap" element={<SAP />} />
        <Route path="/services/platforms/meta" element={<Meta />} />
        <Route path="/services/platforms/google" element={<Google />} />
        <Route path="/services/platforms/bing" element={<Bing />} />

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