import './linguagens.css'
import comecolinguagens from '../assets/comecolinguagens.png'
import cafelinguagens from '../assets/cafelinguagens.png'
import endlinguagens from '../assets/endlinguagens.png'

export function Linguagens() {
    return (
        <section className='section-linguagens'>
            <div>
              <img className='comecolinguagens-img' src={comecolinguagens} alt="comecolinguagens" />
            </div>
            <div>
              <img className='cafelinguagens-img' src={cafelinguagens} alt="cafelinguagens" />
            </div>
            <div>
              <img className='endlinguagens-img' src={endlinguagens} alt="endlinguagens" />
            </div>
        </section>
    )
}