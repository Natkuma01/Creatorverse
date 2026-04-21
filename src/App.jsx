import { Routes, Route, Link } from 'react-router-dom'
import { ShowCreators } from './pages/ShowCreators'
import { ViewCreator } from './pages/ViewCreator'
import { EditCreator } from './pages/EditCreator'


export default function App() {
  return (
    <div>
      <nav className="navbar bg-base-200">
        <Link to="/" className="btn btn-ghost text-xl">Home</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="view/:id" element={<ViewCreator />} />
        <Route path="edit/:id" element={<EditCreator />} />

      </Routes>
    </div>
  )
}