import { Routes, Route, Link } from 'react-router-dom'

function Home() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Home Page</h1>
      <button className="btn btn-primary mt-4">daisyUI Button</button>
    </div>
  )
}

export default function App() {
  return (
    <div>
      <nav className="navbar bg-base-200">
        <Link to="/" className="btn btn-ghost text-xl">My App</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}