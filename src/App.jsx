import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Manga from './pages/Manga'
import TreeDiagram from './pages/TreeDiagram'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/tree-diagram" element={<TreeDiagram />} />
      </Routes>
    </Router>
  )
}

export default App