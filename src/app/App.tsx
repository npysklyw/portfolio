import { Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { SiteHeader } from "../Components/SiteHeader";
import { Footer } from "../Components/Footer";
import { HomePage } from "../Pages/HomePage";
import { WorkPage } from "../Pages/WorkPage";
import { AboutPage } from "../Pages/AboutPage";
import { ProjectPage } from "../Pages/ProjectPage";
import { MotionController } from "../Components/MotionController";
function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);

    const canonicalUrl = new URL(pathname, "https://nickp.netlify.app").href;
    const canonical = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    const openGraphUrl = document.querySelector<HTMLMetaElement>(
      'meta[property="og:url"]',
    );
    canonical?.setAttribute("href", canonicalUrl);
    openGraphUrl?.setAttribute("content", canonicalUrl);
  }, [pathname]);
  return null;
}
export function App() {
  const location = useLocation();
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollTop />
      <MotionController />
      <SiteHeader />
      <div id="main" className="route-stage" key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/work/:slug" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="*" element={<ProjectPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}
