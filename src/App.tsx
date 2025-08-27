import React from 'react'
import Header from './components/layout/Header'
import SpellsPage from './pages/SpellsPage'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Header />
      <SpellsPage />
    </div>
  )
}

export default App