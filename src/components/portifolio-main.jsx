import personagem1 from '../assets/personagem1.png'
import './portifolio-main.css'


export function PortifolioMain() {
  return (
    <section className='section-portifolio' data-aos="fade-right">
      <div className='section-portifolio-container'>
        <div className='porti'>
          <h1>PORTI</h1>
          <h1>FOLIO</h1>
        </div>
        <div className='front'>
          <p><span className='text-with-lines'>CAROLINE | FRONT-END</span></p>
        </div>
      </div>
      <div className='personagem1'>
        <img src={personagem1} alt="" />
      </div>
    </section>
  )
}