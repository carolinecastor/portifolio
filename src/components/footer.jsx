import './footer.css'
import estrelasSinal from '../assets/estrelas.sinal.png'
import { FaLinkedin, FaGithub, FaRocket } from 'react-icons/fa'
import { motion } from 'framer-motion'

export function Footer() {
    return (
        <footer className="footer-section">
            <div className='footer-stars-top'>
                <img src={estrelasSinal} alt="estrelas" />
            </div>
            
            <div className='footer-content'>
                <div className='footer-center'>
                    <motion.div 
                        className='footer-info'
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className='footer-name'>
                            <h2>Caroline Castro</h2>
                            <div className='footer-rocket'>
                                <FaRocket />
                            </div>
                        </div>
                        
                        <p className='footer-subtitle'>Explorando o universo do código</p>
                        
                        <div className='footer-social'>
                            <motion.a 
                                href="https://www.linkedin.com/in/caroline-castro-636931376/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='social-link linkedin'
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaLinkedin />
                                <span>LinkedIn</span>
                            </motion.a>
                            
                            <motion.a 
                                href="https://github.com/carolinecastor" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className='social-link github'
                                whileHover={{ scale: 1.1, y: -5 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <FaGithub />
                                <span>GitHub</span>
                            </motion.a>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className='footer-bottom'>
                
                <motion.div 
                    className='footer-copyright'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <p>&copy; 2025 Caroline Castro - Feito com ❤️ e muito ☕</p>
                </motion.div>
            </div>
        </footer>
    )
}
