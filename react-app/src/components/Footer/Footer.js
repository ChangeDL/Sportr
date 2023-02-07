import LinkdenLogo from '../../assets/misc/LinkdenLogo.png'
import GitHubLogo from '../../assets/misc/GitHubLogo.png'
import { Link } from 'react-router-dom'


const Footer = () => {
    return (
        <div className='footer-splash-page'>
            <div className='top-half-of-footer-splash'>
                <Link className='footer-links-splash-page-no-link'>About</Link>
                <Link className='footer-links-splash-page-no-link'>Jobs</Link>
                <Link className='footer-links-splash-page-no-link'>Blog</Link>
                <Link className='footer-links-splash-page' to='/developers'>Developers</Link>
                <Link className='footer-links-splash-page-no-link'>Guidelines</Link>
                <Link className='footer-links-splash-page-no-link'>Help</Link>
                <Link className='footer-links-splash-page-no-link'>Help forum</Link>
            </div>
            <div className='border-middle-footer-splash'></div>
            <div className='bottom-half-of-footer-splash'>
                <div className='left-side-bottom-footer-splash'>
                    <Link className='footer-links-splash-page-no-link'>Privacy</Link>
                    <Link className='footer-links-splash-page-no-link'>Terms</Link>
                    <Link className='footer-links-splash-page-no-link'>Cookies</Link>
                </div>
                <div className='middle-side-bottom-footer-splash'>
                    <span className='footer-span-splash-page'> <a href='https://www.appacademy.io/' rel="noreferrer" target="_blank" className='middle-side-bottom-footer-splash-links' >AppAcademy</a>+<Link to='/' className='middle-side-bottom-footer-splash-links'>Sportr</Link> Connecting people </span>
                    <span className='footer-span-splash-page'> through photography</span>
                </div>
                <div className='right-side-bottom-footer-splash'>
                    <a href='https://github.com/ChangeDL' rel="noreferrer" target="_blank" className='footer-links-splash-page'><img className='links-to-socials-icons-github' src={GitHubLogo} alt='GitHub Logo' /></a>
                    <a className='footer-links-splash-page' href='https://www.linkedin.com/in/douglas-loizzo-jr-3aa946261/' rel="noreferrer" target="_blank"><img className='links-to-socials-icons-linkden' src={LinkdenLogo} alt='Linkden Logo' /></a>
                </div>
            </div>
        </div>
    )
}


export default Footer
