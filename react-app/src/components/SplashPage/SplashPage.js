import { useEffect, useState, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect, useHistory } from 'react-router-dom'
import './SplashPage.css'
import LinkdenLogo from '../../assets/misc/LinkdenLogo.png'
import GitHubLogo from '../../assets/misc/GitHubLogo.png'
import SlideshowStart from '../../assets/misc/SlideshowStart.jpg'


function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}
const images = importAll(require.context('../../assets/SplashPageImagesSportr', false, /\.(png|jpe?g|svg)$/));
const splashPageImages = Object.values(images)

const SplashPage = () => {
    const history = useHistory();
    const [arrImages, setArrTitles] = useState(SlideshowStart);

    const sessionUser = useSelector(state => state.session.user)


    const startForFree = (e) => {
        e.preventDefault()
        return history.push('/sign-up')
    }

    const shuffle = useCallback(() => {
        const index = Math.floor(Math.random() * splashPageImages.length);
        setArrTitles(splashPageImages[index].default);
    }, []);

    useEffect(() => {
        const intervalID = setInterval(shuffle, 4500);
        return () => clearInterval(intervalID);
    }, [shuffle])


    if (sessionUser) history.push('/photos')

    return (
        <>
            <div className='whole-splash-page-container'>
                <div className='slideshow-container'>
                    <div className='overlay-text-splash-page'>
                        <div className='center-page-text-container'>

                            <h1>Find your inspiration</h1>
                            <div className='span-tags-in-center-page'>
                                <span>Join the Sportr community, home to tens of billions of</span>
                                <span>photos and 2 miilion groups</span>
                            </div>
                            <button className='center-page-sign-up-button' onClick={event => startForFree(event)}>Start for free</button>
                        </div>
                    </div>
                    <img src={arrImages} className='slideshow-splash-page' />
                </div>
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
                            <span className='footer-span-splash-page'> <a href='https://www.appacademy.io/' rel="noreferrer" target="_blank" className='middle-side-bottom-footer-splash-links' style={{ textDecoration: "none", color: "rgb(136, 136, 136)" }}>appAcademy</a>+<Link to='/' style={{ textDecoration: "none", color: "rgb(136, 136, 136)" }}>Sportr</Link> Connecting people </span>
                            <span className='footer-span-splash-page'> through photography</span>
                        </div>
                        <div className='right-side-bottom-footer-splash'>
                            <a href='https://github.com/ChangeDL' rel="noreferrer" target="_blank" className='footer-links-splash-page'><img className='links-to-socials-icons-github' src={GitHubLogo} /></a>
                            <a className='footer-links-splash-page'><img className='links-to-socials-icons-linkden' src={LinkdenLogo} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SplashPage
