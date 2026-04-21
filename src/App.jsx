import { Routes, Route, Link } from 'react-router-dom'
import { ShowCreators } from './pages/ShowCreators'
import { ViewCreator } from './pages/ViewCreator'
import { EditCreator } from './pages/EditCreator'
import { AddCreator } from './pages/AddCreator'


export default function App() {
  return (
    <div>
      <nav className="navbar bg-base-200">
        <Link to="/" className="btn btn-ghost text-xl">Home</Link>
        <Link to="/add"><button className="btn btn-active btn-primary mx-3">Add Creator</button></Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<ShowCreators />} />
        <Route path="view/:id" element={<ViewCreator />} />
        <Route path="edit/:id" element={<EditCreator />} />
        <Route path="/add" element={<AddCreator />} />


      </Routes>
    </div>
  )
}