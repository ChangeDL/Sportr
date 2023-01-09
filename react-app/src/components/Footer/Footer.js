import LinkdenLogo from '../../assets/misc/LinkdenLogo.png'
import GitHubLogo from '../../assets/misc/GitHubLogo.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='footer-splash-page'>
            <div className='top-half-of-footer-splash'>
                <Link className='footer-links-splash-page' to='/page-in-development'>About</Link>
                <Link className='footer-links-splash-page' to='/page-in-development'>Jobs</Link>
                <Link className='footer-links-splash-page' to='/page-in-development'>Blog</Link>
                <Link className='footer-links-splash-page' to='/page-in-development'>Developers</Link>
                <Link className='footer-links-splash-page' to='/page-in-development'>Guidelines</Link>
                <Link className='footer-links-splash-page' to='/page-in-development'>Help</Link>
                <Link className='footer-links-splash-page' to='/page-in-development'>Help forum</Link>
                <Link className='footer-links-splash-page' to='/page-in-development'>Filler</Link>
            </div>
            <div className='border-middle-footer-splash'></div>
            <div className='bottom-half-of-footer-splash'>
                <div className='left-side-bottom-footer-splash'>
                    <Link className='footer-links-splash-page' to='/page-in-development'>Privacy</Link>
                    <Link className='footer-links-splash-page' to='/page-in-development'>Terms</Link>
                    <Link className='footer-links-splash-page' to='/page-in-development'>Cookies</Link>
                </div>
                <div className='middle-side-bottom-footer-splash'>
                    <span className='footer-span-splash-page'> <a href='https://www.appacademy.io/' rel="noreferrer" target="_blank" className='middle-side-bottom-footer-splash-links' style={{ textDecoration: "none", color: "rgb(136, 136, 136)" }}>AppAcademy</a>+<Link to='/' style={{ textDecoration: "none", color: "rgb(136, 136, 136)" }}>Sportr</Link> Connecting people </span>
                    <span className='footer-span-splash-page'> through photography</span>
                </div>
                <div className='right-side-bottom-footer-splash'>
                    <a href='https://github.com/ChangeDL' rel="noreferrer" target="_blank" className='footer-links-splash-page'><img className='links-to-socials-icons-github' src={GitHubLogo} alt='GitHub Logo' /></a>
                    <a className='footer-links-splash-page'><img className='links-to-socials-icons-linkden' src={LinkdenLogo} alt='Linkden Logo' /></a>
                </div>
            </div>
        </div>
    )
}


export default Footer
