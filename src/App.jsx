import './App.css'
import { Header } from './components/header'
import estrelascomeco from './assets/estrelas.comeco.png'
import personagem1 from './assets/personagem1.png'
import { PortifolioMain } from './components/portifolio-main'
import AOS from 'aos'
import { useEffect } from 'react'
import "aos/dist/aos.css";
import { SobreMim } from './components/sobremim'
import { Linguagens } from './components/linguagens'
import { Projetos } from './components/projetos'
import { Sinal } from './components/sinal'
import { Footer } from './components/footer'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  }, [AOS]);


  return (
    <div className='container'>
      <img className='estrelascomeco' src={estrelascomeco} alt="logo" />
      <Header />
      <PortifolioMain />
      <SobreMim />
      <Linguagens />
      <Projetos />
      <Sinal />
      <Footer />
    </div>
  )
}

export { App }
