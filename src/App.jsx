import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/ui/Navbar'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow px-4">
        <Outlet />
      </main>
      <footer className="bg-white border-t border-gray-200 py-6 text-center">
        © 2025 Corn Leaves Disease Detection
      </footer>
    </div>
  )
}
