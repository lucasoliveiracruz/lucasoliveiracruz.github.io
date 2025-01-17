'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaUser, FaBriefcase, FaCode, FaEnvelope } from 'react-icons/fa'
import { MdLightMode, MdDarkMode } from 'react-icons/md'

interface NavItem {
  icon: React.ReactNode
  label: string
  href: string
}

const navItems: NavItem[] = [
  { icon: <FaHome />, label: 'Início', href: '#home' },
  { icon: <FaUser />, label: 'Sobre', href: '#about' },
  { icon: <FaBriefcase />, label: 'Carreira', href: '#career' },
  { icon: <FaCode />, label: 'Projetos', href: '#projects' },
  { icon: <FaEnvelope />, label: 'Contato', href: '#contact' },
]

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('')
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section')
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-700 dark:bg-slate-800 shadow-md transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-blue-400'
                    : 'text-gray-300 hover:text-blue-400'
                }`}
              >
                <span className="mr-2">{item.icon}</span>
                <span className="hidden md:inline">{item.label}</span>
              </a>
            ))}
          </div>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-300"
          >
            {theme === 'light' ? <MdDarkMode /> : <MdLightMode />}
          </button>
        </div>
      </div>
      <motion.div
        className="h-1 bg-blue-600 dark:bg-blue-400"
        initial={{ width: '0%' }}
        animate={{
          width: `${(navItems.findIndex((item) => item.href.slice(1) === activeSection) + 1) * 20}%`,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      />
    </nav>
  )
}

