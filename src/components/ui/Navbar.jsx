
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
    Home,
    Camera,
    Book,
    LogIn
} from 'lucide-react'
import Logo from '../../../public/assets/image/logo.png'

const Navbar = () => {
    const location = useLocation()
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navItems = [
        {
            icon: Home,
            label: 'Home',
            path: '/',
            active: location.pathname === '/'
        },
        {
            icon: Camera,
            label: 'Detection',
            path: '/detection',
            active: location.pathname === '/detection'
        },
        {
            icon: Book,
            label: 'Disease Info',
            path: '/disease-info',
            active: location.pathname === '/disease-info'
        },
    ]

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <nav className="bg-white sticky top-0 z-50">
            <div className="w-full px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        src={Logo}
                        alt="Corn Leaves App Logo"
                        className="h-12 w-12"
                    />
                    <span className="text-2xl font-bold text-green-600">
                        Corn Leaves
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-6">
                    {/* Navigation Items */}
                    <div className="flex space-x-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.path}
                                to={item.path}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 
                                    ${item.active
                                        ? 'bg-green-100 text-green-700'
                                        : 'text-gray-600 hover:bg-green-50 hover:text-green-600'}
                                `}
                            >
                                <item.icon className="w-5 h-5" />
                                <span className="text-sm font-medium">{item.label}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Login Button */}
                    <Link
                        to="/login"
                        className="flex items-center space-x-2 px-4 py-2 bg-green-500 text-white rounded-lg 
                        hover:bg-green-600 transition-colors duration-300"
                    >
                        <LogIn className="w-5 h-5" />
                        <span className="text-sm font-medium">Login</span>
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={toggleMenu}
                        className="text-green-600 hover:text-green-800 focus:outline-none"
                    >
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="absolute top-full left-0 w-full bg-white shadow-lg md:hidden">
                        <div className="flex flex-col">
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={toggleMenu}
                                    className={`flex items-center space-x-3 px-4 py-3 border-b
                                        ${item.active
                                            ? 'bg-green-100 text-green-700'
                                            : 'text-gray-600 hover:bg-green-50 hover:text-green-600'}
                                    `}
                                >
                                    <item.icon className="w-5 h-5" />
                                    <span className="text-sm font-medium">{item.label}</span>
                                </Link>
                            ))}
                            
                            {/* Mobile Login Button */}
                            <Link
                                to="/login"
                                onClick={toggleMenu}
                                className="flex items-center space-x-3 px-4 py-3 border-b 
                                text-gray-600 hover:bg-green-50 hover:text-green-600"
                            >
                                <LogIn className="w-5 h-5" />
                                <span className="text-sm font-medium">Login</span>
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
