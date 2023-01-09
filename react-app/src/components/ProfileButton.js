// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoutButton from '../components/auth/LogoutButton'
import defaultProfilePic from '../assets/misc/DefaultProfilePicture.jpg'



function ProfileButton({ user, setLogin, setShowModal }) {

    const [showMenu, setShowMenu] = useState(false);


    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);
    }, [showMenu]);



    return (
        <>
            <div className="profile-button-actual-div">
                <img onClick={openMenu} className="nav-bar-profile-picture" src={defaultProfilePic} alt='DefaultPic' />
            </div>
            {showMenu && (user ?
                (<div className="adjustment-for-profile-dropdown">

                    < div className="profile-dropdown">
                        <div className="hello-user-navbar">
                            <span>Hello, </span>
                            <Link to={`/people/${user.id}/photostream`} className="username"> {user.username}</Link>
                        </div>
                        <span>
                            <LogoutButton />
                        </span>
                    </div>
                </div>) :
                (<ul className="profile-dropdown">
                    <button
                        className="logout"
                        onClick={() => {
                            setLogin(true)
                            setShowModal(true)
                        }}>Log In</button>

                    <button
                        className="logout"
                        onClick={() => {

                            setLogin(false)
                            setShowModal(true)
                        }}>
                        Sign Up
                    </button>
                </ul>)
            )
            }
        </>
    );
}

export default ProfileButton;
