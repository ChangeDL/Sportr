import './Developers.css'
import { useEffect } from 'react'
import PictureOfMe from '../assets/PictureOfDouglas/MelissasWeddingMe - Copy.jpg'

const Developers = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="developers-page-container">
            <h1 className='meet-dev-h1'>Meet the Developer</h1>
            <img src={PictureOfMe} className='picture-of-me-about'></img>
            <span>I'm a software engineer with a passion for React, Redux, Python, and Javascript. </span>
            <span className='bio-about-me'>I myself am a huge sports fan. Being born and raised in South Florida, I am a fan of all Miami Sports.
                I also have teams outside of Miami that I root for such as my alma mater, UCF, and Seattle sports teams
                such as the Seahawks and Krakens. My favorite sports are Football, and Basketball and I have a personal
                goal to one day visit every football stadium in the NFL. Current team stadiums I have been to are
                (Dolphins, Jaguars, Buccaneers, Vikings, and Packers).
            </span>
        </div>
    )
}

export default Developers
