import { Routes, Route, Link } from 'react-router-dom'
import { ShowCreators } from './pages/ShowCreators'
import { ViewCreator } from './pages/ViewCreator'
import { ErrorPage } from './pages/ErrorPage'


export default function App() {
  return (
    <div>
      <nav className="navbar bg-base-200">
        <Link to="/" className="btn btn-ghost text-xl">My App</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="view/:id" element={<ViewCreator />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </div>
  )
}