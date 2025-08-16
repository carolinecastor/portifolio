import './sinal.css'
import satelite from '../assets/satelite.png'
import { useState } from 'react'
import stars from '../assets/stars.png'
import estrelasSinal from '../assets/estrelas.sinal.png'
import cantoSinal from '../assets/canto.esquerdo.sinal.png'
import luaSinal from '../assets/lua.sinal.png'
import { IoRocket } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'

export function Sinal() {
    const formsKey = 'sf_f8fibe8fc4bicb6i0b887mb0'
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: ''
    })
    const [isLaunching, setIsLaunching] = useState(false)
    const [launchPhase, setLaunchPhase] = useState('idle')

    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const sendEmail = () => {
        const body = {
            name: formData.nome,
            email: formData.email,
            message: formData.mensagem,
            subject: 'Contact Form Submission',
            honeypot: '',
            replyTo: '@',
            apiKey: formsKey
        }

        const res = fetch('https://api.staticforms.xyz/submit', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' }
        }).then(res => res.json())
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setIsLaunching(true)

        
        setLaunchPhase('ignition')

        setTimeout(() => {
           
            setLaunchPhase('liftoff')
        }, 500)

        setTimeout(() => {
           
            setLaunchPhase('flight')
        }, 1500)

        setTimeout(() => {
           
            sendEmail()
            setFormData({
                nome: '',
                email: '',
                mensagem: ''
            })
            setIsLaunching(false)
            setLaunchPhase('idle')
        }, 3500)
    }

    return (
        <motion.section
            id="contate-me"
            className='section-sinal'
            animate={launchPhase === 'ignition' ? {
                scale: [1, 1.002, 1],
                x: [0, -2, 2, -1, 1, 0],
                y: [0, -1, 1, -1, 0]
            } : {}}
            transition={{ duration: 0.5, repeat: launchPhase === 'ignition' ? 2 : 0 }}
        >
            <div className='stars-top-left'>
                <img src={stars} alt="stars" />
            </div>

            
            <AnimatePresence>
                {launchPhase === 'liftoff' && (
                    <>
                        <motion.div
                            className="shockwave"
                            initial={{ scale: 0, opacity: 1 }}
                            animate={{ scale: 8, opacity: 0 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                        />
                        <motion.div
                            className="shockwave shockwave-2"
                            initial={{ scale: 0, opacity: 0.8 }}
                            animate={{ scale: 6, opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        />
                    </>
                )}
            </AnimatePresence>

            <div className='sinal-content'>
                <div className='left-side'>
                    <div className='sinal-header'>
                        <h1>ENVIE<br />SEU<br />SINAL</h1>
                        <div className='satelite-container mobile-satellite'>
                            <img src={satelite} alt="satelite" />
                        </div>
                    </div>

                    <div className='form-container'>
                        <form className='contact-form' onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome"
                                value={formData.nome}
                                onChange={handleInputChange}
                                required
                                disabled={isLaunching}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail"
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                                disabled={isLaunching}
                            />
                            <textarea
                                name="mensagem"
                                placeholder="Mensagem"
                                value={formData.mensagem}
                                onChange={handleInputChange}
                                rows="3"
                                required
                                disabled={isLaunching}
                            />
                            <div className="button-container">
                                <motion.button
                                    type="submit"
                                    className={`submit-btn ${isLaunching ? 'launching' : ''}`}
                                    disabled={isLaunching}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    animate={launchPhase === 'ignition' ? {
                                        scale: [1, 1.05, 1],
                                        boxShadow: [
                                            '0 0 0 0 rgba(255, 255, 255, 0)',
                                            '0 0 20px 5px rgba(255, 255, 255, 0.3)',
                                            '0 0 0 0 rgba(255, 255, 255, 0)'
                                        ]
                                    } : {}}
                                    transition={{ duration: 0.3, repeat: launchPhase === 'ignition' ? 3 : 0 }}
                                >
                                    <div className="button-content">
                                        <motion.span
                                            className="button-text"
                                            key={launchPhase}
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                        >
                                            {launchPhase === 'idle' && 'LANÇAR MENSAGEM'}
                                            {launchPhase === 'ignition' && 'PREPARANDO...'}
                                            {launchPhase === 'liftoff' && 'DECOLANDO!'}
                                            {launchPhase === 'flight' && 'NO ESPAÇO!'}
                                        </motion.span>

                                        <div className="rocket-container">
                                            <AnimatePresence mode="wait">
                                                {launchPhase === 'idle' && (
                                                    <motion.div
                                                        key="rocket-idle"
                                                        initial={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
                                                        exit={{
                                                            opacity: 0,
                                                            x: 500,
                                                            y: -600,
                                                            rotate: 50,
                                                            scale: [1, 1.5, 2, 1.8, 0.5]
                                                        }}
                                                        transition={{
                                                            duration: 2.5,
                                                            ease: [0.25, 0.1, 0.25, 1],
                                                            times: [0, 0.2, 0.5, 0.8, 1]
                                                        }}
                                                        className="rocket-icon epic-rocket"
                                                    >
                                                        <IoRocket />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </div>

                                       
                                        <AnimatePresence>
                                            {launchPhase === 'ignition' && (
                                                <motion.div
                                                    className="ignition-sparks"
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    exit={{ opacity: 0 }}
                                                >
                                                    {[...Array(8)].map((_, i) => (
                                                        <motion.div
                                                            key={i}
                                                            className="spark"
                                                            initial={{ scale: 0, x: 0, y: 0 }}
                                                            animate={{
                                                                scale: [0, 1, 0],
                                                                x: Math.cos(i * 45 * Math.PI / 180) * 30,
                                                                y: Math.sin(i * 45 * Math.PI / 180) * 30,
                                                            }}
                                                            transition={{
                                                                duration: 0.8,
                                                                repeat: Infinity,
                                                                delay: i * 0.1
                                                            }}
                                                        />
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        <AnimatePresence>
                                            {(launchPhase === 'liftoff' || launchPhase === 'flight') && (
                                                <>
                                                    
                                                    <motion.div
                                                        className="epic-trail"
                                                        initial={{ opacity: 0, scale: 0 }}
                                                        animate={{
                                                            opacity: [0, 1, 1, 0.5, 0],
                                                            scale: [0, 1, 1.5, 2, 0],
                                                            x: [480, 450, 400, 350, 300],
                                                            y: [-580, -550, -500, -450, -400]
                                                        }}
                                                        transition={{
                                                            duration: 2,
                                                            ease: "easeOut"
                                                        }}
                                                    >
                                                        <div className="mega-flame"></div>
                                                        <div className="plasma-trail"></div>
                                                    </motion.div>

                                                    
                                                    <motion.div className="explosion-particles">
                                                        {[...Array(15)].map((_, i) => (
                                                            <motion.div
                                                                key={i}
                                                                className="explosion-particle"
                                                                initial={{
                                                                    opacity: 1,
                                                                    scale: 0,
                                                                    x: 0,
                                                                    y: 0
                                                                }}
                                                                animate={{
                                                                    opacity: [1, 0.8, 0],
                                                                    scale: [0, 1, 0.5],
                                                                    x: (Math.random() - 0.5) * 200 + 300,
                                                                    y: (Math.random() - 0.5) * 200 - 400,
                                                                }}
                                                                transition={{
                                                                    duration: 1.5,
                                                                    delay: i * 0.05,
                                                                    ease: "easeOut"
                                                                }}
                                                            />
                                                        ))}
                                                    </motion.div>

                                                    
                                                    <motion.div className="star-trail">
                                                        {[...Array(6)].map((_, i) => (
                                                            <motion.div
                                                                key={i}
                                                                className="trail-star"
                                                                initial={{
                                                                    opacity: 0,
                                                                    scale: 0,
                                                                    x: -20 * i,
                                                                    y: -20 * i
                                                                }}
                                                                animate={{
                                                                    opacity: [0, 1, 0],
                                                                    scale: [0, 1, 0],
                                                                    x: 50 * i + 400,
                                                                    y: -50 * i - 500,
                                                                }}
                                                                transition={{
                                                                    duration: 2,
                                                                    delay: i * 0.1 + 0.5,
                                                                    ease: "easeOut"
                                                                }}
                                                            />
                                                        ))}
                                                    </motion.div>
                                                </>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                </motion.button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className='right-side'>
                    <div className='satelite-container'>
                        <img src={satelite} alt="satelite" />
                    </div>

                    <div className='stars-right'>
                        <img src={estrelasSinal} alt="estrelas" />
                    </div>
                </div>
            </div>

            <div className='canto-sinal-container'>
                <img src={cantoSinal} alt="canto" />
            </div>

            <div className='lua-sinal-container'>
                <img src={luaSinal} alt="lua" />
            </div>
        </motion.section>
    )
}