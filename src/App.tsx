import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Ventures } from './pages/Ventures'
import { Platform } from './pages/Platform'
import { About } from './pages/About'
import { Contact } from './pages/Contact'

export default function App() {
  return (
    <BrowserRouter basename="/fiftyknots-website">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ventures" element={<Ventures />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
