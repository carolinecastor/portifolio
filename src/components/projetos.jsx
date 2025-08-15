import './projetos.css'
import fundoProjetos from '../assets/fundoProjetos.png'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import { FaHammer, FaTools, FaCog, FaWrench, FaHardHat, FaCode } from 'react-icons/fa'
import { BiCodeBlock } from 'react-icons/bi'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'

export function Projetos() {
    const projects = [
        {
            id: 1,
            title: "E-commerce App",
            description: "Plataforma completa de vendas online",
            status: "completed"
        },
        {
            id: 2,
            title: "Dashboard Analytics", 
            description: "Sistema de análise de dados",
            status: "construction"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "Site pessoal responsivo",
            status: "completed"
        },
        {
            id: 4,
            title: "Mobile App",
            description: "Aplicativo React Native",
            status: "construction"
        },
        {
            id: 5,
            title: "API Rest",
            description: "Backend com Node.js",
            status: "construction"
        }
    ]

    const constructionIcons = [FaHammer, FaTools, FaCog, FaWrench, FaHardHat, FaCode, BiCodeBlock]

    return (
        <section
            className='section-projetos'
            style={{ '--bg-image': `url(${fundoProjetos})` }}>
            <h1 className='projetos-title'>Projetos</h1>
            
            <div className='projects-container'>
                <Swiper
                    modules={[Pagination]}
                    spaceBetween={30}
                    slidesPerView={2.5}
                    pagination={{ 
                        clickable: true,
                        bulletClass: 'swiper-pagination-bullet',
                        bulletActiveClass: 'swiper-pagination-bullet-active',
                        type: 'bullets'
                    }}
                    centeredSlides={false}
                    loop={false}
                    breakpoints={{
                        320: {
                            slidesPerView: 1.2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2.2,
                            spaceBetween: 25
                        },
                        1024: {
                            slidesPerView: 2.5,
                            spaceBetween: 30
                        }
                    }}
                    className='projects-swiper'
                >
                    {projects.map((project, index) => {
                        const IconComponent = constructionIcons[index % constructionIcons.length]
                        return (
                            <SwiperSlide key={project.id}>
                                <div className={`project-card ${project.status === 'construction' ? 'construction-mode' : ''}`}>
                                    <div className='card-header'>
                                        <div className='window-controls'>
                                            <span className='control-dot'></span>
                                            <span className='control-dot'></span>
                                        </div>
                                        {project.status === 'construction' && (
                                            <div className='construction-badge'>
                                                <AiOutlineLoading3Quarters className='loading-icon' />
                                                <span>Em construção</span>
                                            </div>
                                        )}
                                    </div>
                                    <div className='card-content'>
                                        {project.status === 'construction' ? (
                                            <div className='construction-content'>
                                                <div className='construction-icons'>
                                                    <IconComponent className='construction-icon icon-1' />
                                                    <IconComponent className='construction-icon icon-2' />
                                                    <IconComponent className='construction-icon icon-3' />
                                                </div>
                                                <h3>{project.title}</h3>
                                                <p className='construction-text'>
                                                    {project.description}
                                                </p>
                                                <div className='progress-bar'>
                                                    <div className='progress-fill'></div>
                                                </div>
                                                <span className='progress-text'>Desenvolvendo...</span>
                                            </div>
                                        ) : (
                                            <>
                                                <h3>{project.title}</h3>
                                                <p>{project.description}</p>
                                            </>
                                        )}
                                    </div>
                                    <div className='card-footer'>
                                        <button className={`view-project-btn ${project.status === 'construction' ? 'disabled' : ''}`}>
                                            {project.status === 'construction' ? 'Em breve...' : 'View project'}
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}