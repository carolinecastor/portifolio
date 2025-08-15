import './sobremim.css'
import personagem2 from '../assets/personagem2.png'


export function SobreMim() {
    return (
        <section data-aos="fade-down" className='section-sobremim'>

            <div className='personagem2'>
                <img className='personagem2-img' src={personagem2} alt="" />
            </div>

            <div className='section-sobremim-container'>
                <h1 className='section-sobremim-title'>Sobre mim</h1>
                <p>Exploradora do universo front-end, codifico ideias e transformo conceitos em experiências bonitas, funcionais e bem estruturadas. Minha missão é unir estética, usabilidade e performance, criando interfaces que realmente façam sentido para quem as utiliza.
                    Atualmente, estou na jornada para dominar JavaScript, HTML, CSS e React, com foco no desenvolvimento front-end. Trago na bagagem minha experiência em Psicologia e Recursos Humanos, que me deram habilidades valiosas como organização, análise de dados, comunicação e resolução de problemas, todas aplicadas agora na construção de soluções digitais. Meu combustível é a curiosidade e a vontade de aprender sempre. Sigo em constante busca por novas ferramentas, boas práticas e ideias inovadoras, para que cada projeto seja um passo a mais nessa viagem pelo universo da tecnologia.</p>
            </div>
        </section>
    )
}