import { useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { HowItWorksPage } from "./pages/HowItWorksPage";
import { SecurityPage } from "./pages/SecurityPage";
import { HelpPage } from "./pages/HelpPage";
import { PricingPage } from "./pages/PricingPage";
import { TermsPage } from "./pages/TermsPage";
import { PrivacyPage } from "./pages/PrivacyPage";
import { ThemeProvider } from "./context/ThemeContext";

function ScrollToTop() {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };

    scrollToTop();
    // Catch any late renders or browser scroll restoration logic
    requestAnimationFrame(scrollToTop);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/help" element={<HelpPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
