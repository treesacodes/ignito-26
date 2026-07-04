import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import BackgroundSky from './components/BackgroundSky'
import FilmGrain from './components/FilmGrain'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Competitions from './pages/Competitions'
import Legacy from './pages/Legacy'
import Sponsors from './pages/Sponsors'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen w-full">
      <BackgroundSky dense={location.pathname === '/'} />
      <FilmGrain />
      <Navigation />

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/legacy" element={<Legacy />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}
