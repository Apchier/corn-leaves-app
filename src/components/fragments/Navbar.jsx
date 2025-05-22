import { Link } from 'react-router-dom'  
import { useState, useEffect } from 'react'  
import { Menu, X } from 'lucide-react'  
import Logo from '../../assets/image/logo.png'  

export const Navbar = () => {  
    const [isOpen, setIsOpen] = useState(false)  
    const [isScrolled, setIsScrolled] = useState(false)  
    const [activeLink, setActiveLink] = useState('#header')  

    const navItems = [  
        { href: '#header', label: 'Beranda' },  
        { href: '#about', label: 'Tentang' },  
        { href: '#panduan', label: 'Panduan' },  
        { href: '#services', label: 'Layanan' },  
        { href: '#disease-info', label: 'Informasi Penyakit' },  
        { href: '#contact', label: 'Kontak' },
        { href: '/detection', label: 'Deteksi' }  
    ]  

    useEffect(() => {  
        const handleScroll = () => {  
            setIsScrolled(window.scrollY > 50)  
        }  

        window.addEventListener('scroll', handleScroll)  

        return () => {  
            window.removeEventListener('scroll', handleScroll)  
        }  
    }, [])

    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -80% 0px',
            threshold: 0
        }

        const observerCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const sectionId = `#${entry.target.id}`
                    setActiveLink(sectionId)
                }
            })
        }

        const observer = new IntersectionObserver(observerCallback, observerOptions)
        
        const sections = ['header', 'about', 'panduan', 'services', 'disease-info', 'contact']
        sections.forEach(id => {
            const element = document.getElementById(id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [])  

    const toggleMenu = () => {  
        setIsOpen(!isOpen)  
    }  

    const handleNavLinkClick = (href) => {  
        setActiveLink(href)  
        setIsOpen(false)
        
        if (href.startsWith('#')) {
            setTimeout(() => {
                const element = document.getElementById(href.substring(1))
                if (element) {
                    element.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    })
                }
            }, 100) 
        }
    }  

    const handleLogoClick = (e) => {
        e.preventDefault()
        setActiveLink('#header')
        setIsOpen(false)
        
        
        if (window.location.pathname === '/') {
            
            const headerElement = document.getElementById('header')
            if (headerElement) {
                headerElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                })
            } else {
                
                window.scrollTo({ top: 0, behavior: 'smooth' })
            }
        } else {
            
            window.location.href = '/#header'
        }
    }
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }

        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isOpen])

    useEffect(() => {
        const handleScrollClose = () => {
            if (isOpen) {
                setIsOpen(false)
            }
        }

        if (isOpen) {
            window.addEventListener('scroll', handleScrollClose)
            return () => window.removeEventListener('scroll', handleScrollClose)
        }
    }, [isOpen])

    return (  
        <nav  
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full  
                ${isScrolled  
                    ? 'bg-white/90 backdrop-blur-md shadow-md'  
                    : 'bg-transparent'}`}  
        >  
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">  
                <a  
                    href="#header"
                    onClick={handleLogoClick}
                    className="flex items-center cursor-pointer"  
                >  
                    <img  
                        src={Logo}  
                        alt="Logo"  
                        className="h-10 w-10 mr-2"  
                    />  
                    <span className={`text-2xl font-bold transition-colors duration-300  
                        ${isScrolled   
                            ? 'text-green-600'   
                            : 'text-white drop-shadow-md'}`}>  
                        Corn Leaves  
                    </span>  
                </a>  

                {/* Desktop Navigation */}  
                <div className="hidden md:flex space-x-6 items-center">  
                    {navItems.map((item) => (  
                        item.href.startsWith('/') ? (  
                            <Link  
                                key={item.href}  
                                to={item.href}  
                                className={`relative group transition-colors duration-300 font-medium  
                                ${isScrolled  
                                    ? 'text-gray-700 hover:text-green-600'  
                                    : 'text-white hover:text-white drop-shadow-md'}  
                                ${isScrolled && activeLink === item.href ? 'text-green-600' : ''}`}  
                            >  
                                {item.label}  
                                <span  
                                    className={`absolute bottom-[-3px] left-0 h-[2px]   
                                    transition-all duration-300   
                                    ${isScrolled  
                                        ? 'bg-green-600'   
                                        : 'bg-white'}  
                                    ${activeLink === item.href || 'group-hover:w-full'}   
                                    ${activeLink === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}  
                                ></span>  
                            </Link>  
                        ) : (  
                            <a  
                                key={item.href}  
                                href={item.href}  
                                onClick={() => handleNavLinkClick(item.href)}  
                                className={`relative group transition-colors duration-300 font-medium  
                                ${isScrolled  
                                    ? 'text-gray-700 hover:text-green-600'  
                                    : 'text-white hover:text-white drop-shadow-md'}  
                                ${isScrolled && activeLink === item.href ? 'text-green-600' : ''}`}  
                            >  
                                {item.label}  
                                <span  
                                    className={`absolute bottom-[-3px] left-0 h-[2px]   
                                    transition-all duration-300   
                                    ${isScrolled  
                                        ? 'bg-green-600'   
                                        : 'bg-white'}  
                                    ${activeLink === item.href || 'group-hover:w-full'}   
                                    ${activeLink === item.href ? 'w-full' : 'w-0 group-hover:w-full'}`}  
                                ></span>  
                            </a>  
                        )  
                    ))}  
                    
                    <Link  
                        to="/auth/login"  
                        className={`px-4 py-2 rounded-lg transition-colors duration-300  
                            ${isScrolled  
                                ? 'bg-green-500 text-white hover:bg-green-600'  
                                : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'}`}  
                    >  
                        Login  
                    </Link>  
                </div>  

                {/* Mobile Menu Toggle */}  
                <div className="md:hidden">  
                    <button  
                        onClick={toggleMenu}  
                        className={`p-2 rounded-lg transition-colors duration-300   
                            ${isScrolled 
                                ? 'text-green-600 hover:bg-green-50' 
                                : 'text-white hover:bg-white/10'}`}  
                    >  
                        {isOpen ? <X size={24} /> : <Menu size={24} />}  
                    </button>  
                </div>  

                {/* Mobile Menu */}  
                {isOpen && (  
                    <div  
                        className="fixed inset-0 z-50 md:hidden"  
                    >  
                        {/* Backdrop */}
                        <div 
                            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                            onClick={toggleMenu}
                        ></div>

                        {/* Mobile Menu Panel */}
                        <div className="relative bg-white h-full overflow-y-auto shadow-2xl">
                            {/* Header */}
                            <div className="flex justify-between items-center p-4 border-b border-gray-100 bg-white">  
                                <a 
                                    href="#header"
                                    onClick={handleLogoClick}
                                    className="flex items-center cursor-pointer"
                                >  
                                    <img  
                                        src={Logo}  
                                        alt="Logo"  
                                        className="h-10 w-10 mr-3"  
                                    />  
                                    <span className="text-2xl font-bold text-green-600">  
                                        Corn Leaves  
                                    </span>  
                                </a>  
                                <button  
                                    onClick={toggleMenu}  
                                    className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors"  
                                >  
                                    <X size={24} />  
                                </button>  
                            </div>  

                            {/* Navigation Links */}
                            <div className="py-4">  
                                {navItems.map((item) => (  
                                    item.href.startsWith('/') ? (  
                                        <Link  
                                            key={item.href}  
                                            to={item.href}  
                                            onClick={() => handleNavLinkClick(item.href)}
                                            className={`flex items-center px-6 py-4 text-base font-medium transition-all duration-200
                                            ${activeLink === item.href   
                                                ? 'text-green-600 bg-green-50 border-r-3 border-green-600'   
                                                : 'text-gray-700 hover:text-green-600 hover:bg-green-50/50 hover:translate-x-1'}   
                                            relative group`}  
                                        >  
                                            <span>{item.label}</span>
                                            {activeLink === item.href && (
                                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-600"></div>
                                            )}
                                        </Link>  
                                    ) : (  
                                        <a  
                                            key={item.href}  
                                            href={item.href}  
                                            onClick={() => handleNavLinkClick(item.href)}  
                                            className={`flex items-center px-6 py-4 text-base font-medium transition-all duration-200
                                            ${activeLink === item.href   
                                                ? 'text-green-600 bg-green-50 border-r-3 border-green-600'   
                                                : 'text-gray-700 hover:text-green-600 hover:bg-green-50/50 hover:translate-x-1'}   
                                            relative group`}  
                                        >  
                                            <span>{item.label}</span>
                                            {activeLink === item.href && (
                                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-green-600"></div>
                                            )}
                                        </a>  
                                    )  
                                ))}  
                            </div>  

                            {/* Login Button */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-100">  
                                <Link  
                                    to={"/auth/login"}  
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center justify-center w-full py-3 px-4   
                                    bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 
                                    transition-colors duration-200 shadow-md"  
                                >  
                                    Login  
                                </Link>  
                            </div>
                        </div>  
                    </div>  
                )}  
            </div>  
        </nav>  
    )  
}  

export default Navbar