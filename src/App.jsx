import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const Manga = lazy(() => import('./pages/Manga'))
const TreeDiagram = lazy(() => import('./pages/TreeDiagram'))

function App() {
  return (
    <Router>
      <Suspense fallback={<div>加载中...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/tree-diagram" element={<TreeDiagram />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App