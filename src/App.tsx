import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header'
import SpellsPage from './pages/SpellsPage'
import AboutPage from './pages/AboutPage'
import HistoryPage from './pages/HistoryPage'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<SpellsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/spells" element={<SpellsPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </div>
  )
}

export default App