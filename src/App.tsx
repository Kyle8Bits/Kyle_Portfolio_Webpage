import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import Dashboard from "./pages/Dashboard";
import ProjectPage from "./pages/ProjectPage";
import FloatingShapes from "./components/FloatingShapes";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        lenis.scrollTo(href, { offset: -40 });
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return (
    <BrowserRouter>
      <FloatingShapes />
      <main className="relative z-10 text-text">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
