import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const Manga = lazy(() => import("./pages/Manga"));
const Privacy = lazy(() => import("./pages/manga/privacy"));

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 你的其他内容 */}
      <div className="flex-1">
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

      <Footer />
    </div>
  );
}

export default App;
