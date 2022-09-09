import perfil from '../../assets/perfil.jpeg'
import { FaBriefcase, FaLinkedin, FaGithub, FaWhatsappSquare, FaTwitter } from "react-icons/fa"
import './home.css'

export default function Home() {

    return (
        <div id='home' className='home'>
            <div className='container1' style={{
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                width: '100vw',
                height: '105vh',
            }}>
                <div>
                    <p className='p1'>
                        <a className='benvindo'>Bem vindos ao meu website!</a>
                    </p>
                    <div className='protifolio'>
                        <a>Portfólio</a>
                    </div>
                </div>
                <div className='imagPerfil1'>
                    <img className='imagPerfil' src={perfil}></img>
                <div className='icondiv'>
                    <FaGithub
                        size={60}
                        className='icon'
                        onClick={() => window.open('https://github.com/edpbatista', '_blank')}
                    />
                    <FaLinkedin
                        size={60}
                        className='icon'
                        onClick={() => window.open('https://www.linkedin.com/in/edimar-pereira-5431b519a/', '_blank')}
                    />
                    <FaWhatsappSquare
                        size={60}
                        className='icon'
                        onClick={() => window.open('https://api.whatsapp.com/send?phone=5565992500235&text=olá!', '_blank')}
                    />
                    <FaTwitter
                        size={60}
                        className='icon'
                        onClick={() => window.open('https://twitter.com/edpbatista2', '_blank')}
                    />
                </div>
                </div>

                {/* 
                <div className='git'>
                    <a href="https://github.com/edpbatista" target='_blank' ><FaGithu/ ></a>
                </div>
                <div className='link'>
                    <a href="https://www.linkedin.com/in/edimar-pereira-5431b519a/" target='_blank'><FaLinkedin /></a>
                </div>
                <div className='what'>
                    <a href="https://api.whatsapp.com/send?phone=5565992500235&text=olá, tenho interesse no seu programa." target='_blank'><FaWhatsappSquare /></a>
                </div>
                <div className='Twitter'>
                    <a href="https://twitter.com/edpbatista2" target='_blank'><FaTwitterSquare /></a>
                </div> */}

                <div className='nome'>
                    <h1>Edimar Pereira Batista</h1>
                    <h2>Estudante de Analise e Desenvolvimento de Sistemas</h2>
                </div>
            </div>
        </div>

    )

}