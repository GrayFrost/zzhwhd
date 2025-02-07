import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Manga = lazy(() => import("./pages/Manga"));
const Privacy = lazy(() => import("./pages/manga/privacy"));

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#f6f2f2] dark:bg-[#0b0f11]">
      <main className="flex-1">
        <div className="container mx-auto max-w-7xl pt-10 pb-[25px] md:pt-16">
          <Router>
            <Suspense fallback={<div>加载中...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/manga" element={<Manga />} />
                <Route path="/manga/privacy" element={<Privacy />} />
              </Routes>
            </Suspense>
          </Router>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
