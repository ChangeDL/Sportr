// frontend/src/components/Navigation/ProfileButton.js
import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Link, NavLink, useHistory } from "react-router-dom";
import * as sessionActions from '../store/session';
import LogoutButton from '../components/auth/LogoutButton'



function ProfileButton({ user, setLogin, setShowModal }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);
    const history = useHistory();

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

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push('/')
    };

    return (
        <>
            <div className="profile-button-actual-div">
                <button onClick={openMenu} className="profileButton">
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            {showMenu && (user ?
                (< div className="profile-dropdown">
                    <Link to={`/people/${user.id}/photostream`} className="username">{user.username}</Link>
                    <span>
                        <LogoutButton />
                    </span>
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