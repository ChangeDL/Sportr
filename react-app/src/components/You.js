import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const You = ({ user }) => {
    const [showYou, setShowYou] = useState(false);



    const openYou = () => {
        if (showYou) return;
        setShowYou(true);
    };

    useEffect(() => {
        if (!showYou) return;

        const closeYou = () => {
            setShowYou(false);
        };

        document.addEventListener('click', closeYou);

        return () => document.removeEventListener("click", closeYou);
    }, [showYou]);


    return (
        <>
            <div className="you-dropdown-span-navbar">
                <span onClick={openYou} className='you-span-tag-navbar'>You</span>
            </div>
            {showYou ?
                <div className="you-dropdown-links-div">
                    <Link to={`/people/${user.id}/photostream`} className="links-for-you-navbar">Photostream</Link>
                    <Link to={`/people/${user.id}/albums`} className="links-for-you-navbar">Albums</Link>
                </div>
                : null}
        </>
    )

}

export default You
