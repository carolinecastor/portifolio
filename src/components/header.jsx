import { useState } from 'react'
import './header.css'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className='header'>
      <nav className='nav-desktop'>
        <a href="#contate-me">Contate-me</a>
        <a href="#sobre-mim">Sobre mim</a>
        <a href="#home">Home</a>
        <a href="#linguagens">Linguagens</a>
        <a href="#projetos">Projetos</a>
      </nav>
      
      <div className='nav-mobile'>
        <button className='hamburger' onClick={toggleMenu} aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
          <a href="#contate-me" onClick={closeMenu}>Contate-me</a>
          <a href="#sobre-mim" onClick={closeMenu}>Sobre mim</a>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#linguagens" onClick={closeMenu}>Linguagens</a>
          <a href="#projetos" onClick={closeMenu}>Projetos</a>
        </nav>
      </div>
    </header>
  )
}

