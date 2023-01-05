import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getUserAlbums } from "../../store/album";
import Logo from '../../assets/misc/Logo.png'
import { uploadAlbum } from "../../store/album";

const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const AlbumForm = () => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const dispatch = useDispatch()
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [errors, setErrors] = useState([])

    const currentUser = useSelector(state => state.session.user)

    useEffect(() => {
        const errors = []
        if (name.length < 1 || !letters.includes(name[0])) errors.push('Please provide a valid name')

        setErrors(errors)
    }, [name])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (errors.length > 0) return
        const albumInfo = {
            name,
            description
        }
        dispatch(uploadAlbum(albumInfo))
        return history.push(`/people/${currentUser.id}/albums`)
    }

    const cancelButton = (e) => {
        e.preventDefault()
        return history.push(`/people/${currentUser.id}/albums`)
    }

    const updateDescription = (e) => {
        setDescription(e.target.value)
    }

    const updateName = (e) => {
        setName(e.target.value)
    }

    return (
        <div className='background-for-signup-and-login'>
            <div className="whole-upload-container">
                <div className="sign-up-form">
                    <form onSubmit={handleSubmit}>
                        <div className='logo-and-sign-up-message'>
                            <img className='logo-sign-up-form' src={Logo} />
                            <span>Album Creater</span>
                        </div>
                        <div className='errors-for-sign-up'>
                            {errors.map((error, ind) => (
                                <div key={ind}>{error}</div>
                            ))}
                        </div>
                        <div className='all-sign-up-form-inputs-labels'>
                            <label>Name</label>
                            <input
                                className='sign-up-form-inputs-only'
                                placeholder="Required"
                                type="text"
                                onChange={updateName}
                                value={name}
                            />
                        </div>
                        <div className='all-sign-up-form-inputs-labels'>
                            <label>Description</label>
                            <input
                                className='sign-up-form-inputs-only'
                                placeholder="Not Required"
                                type="text"
                                onChange={updateDescription}
                                value={description}
                            />
                        </div>
                        <div className='upload-submit-button-div'>
                            <button className='sign-up-submit-button' type='submit'>Create Album</button>
                            <button onClick={e => cancelButton(e)} className='sign-up-submit-button'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AlbumForm;