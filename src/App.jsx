import { Routes, Route, Link } from 'react-router-dom'
import { ShowCreators } from './pages/ShowCreators'
import { ViewCreator } from './pages/ViewCreator'


export default function App() {
  return (
    <div>
      <nav className="navbar bg-base-200">
        <Link to="/" className="btn btn-ghost text-xl">My App</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="view/:id" element={<ViewCreator />} />
      </Routes>
    </div>
  )
}