
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Favorites from './pages/Favorites'
import { Toaster } from 'react-hot-toast'

function App() {


  return (
    <>
  <BrowserRouter>
  <Toaster position="top-right" reverseOrder={false} />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<RecentActivity />} />
        <Route path="project/:id" element={<Project />} />
      </Route> */}
           <Route path="/favorites" element={<Favorites/>} />
    </Routes>
  </BrowserRouter>
    </>
  )
}

export default App
