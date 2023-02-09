import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { getUserAlbums } from "../../store/album";
import Logo from '../../assets/misc/Logo.png'
import { uploadAlbum } from "../../store/album";
import { getUserImages } from "../../store/image";
import './AlbumForm.css'
import ImageButton from "./ImageButton";


const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

const AlbumForm = () => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const dispatch = useDispatch()
    const { userId } = useParams()
    const [description, setDescription] = useState("")
    const [name, setName] = useState("")
    const [photos, setPhotos] = useState(new Set())
    const [selected, setSelected] = useState(false)
    const [errors, setErrors] = useState({})
    const [disable, setDisable] = useState(true)

    const currentUser = useSelector(state => state.session.user)

    const imagesObj = useSelector(state => {
        return state
    })

    const allUserImages = Object.values(imagesObj.imageReducer.userImages)


    useEffect(() => {
        const errors = {}
        if (name.length > 0 && !letters.includes(name[0])) errors.name = ('Please provide a valid name')
        if (!selected) errors.photo = ('Please select a photo to be added to your album')
        if (Object.keys(errors).length > 0) setDisable(true)
        if (Object.keys(errors).length === 0 && name.length > 0 && selected) setDisable(false)
        setErrors(errors)
    }, [name, selected, disable])



    useEffect(() => {
        dispatch(getUserImages(currentUser?.id))
    }, [dispatch, currentUser])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (errors.length > 0) return
        const images = Array.from(photos).join()
        const albumInfo = {
            name,
            description,
            images
        }
        dispatch(uploadAlbum(albumInfo))
        setTimeout(() => {
            dispatch(getUserAlbums(userId));
        }, 100)
        setTimeout(() => {
            history.push(`/people/${currentUser.id}/albums`)
        }, 500)
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



    const photoSelect = (e, id) => {
        e.preventDefault()


        if (photos.has(id)) {
            photos.delete(id)
            if (photos.size === 0) {
                setSelected(false)
            }
        } else {

            photos.add(id)
            setSelected(true)
        }
        // console.log(photos)
        // console.log(Array.from(photos))
        return photos
    }




    return (
        <div className='background-for-album-form'>
            <div className="whole-upload-container">
                <div className="album-form">
                    <form onSubmit={handleSubmit}>
                        <div className='album-logo-and-message'>
                            <img className='logo-album-form' alt='Sportr Logo' src={Logo} />
                            <span>Album Creater</span>
                        </div>
                        {/* <div className='errors-for-sign-up'>
                            {errors.map((error, ind) => (
                                <div key={ind}>{error}</div>
                            ))}
                        </div> */}
                        <div className='all-sign-up-form-inputs-labels'>
                            <label>Name</label>
                            <input
                                className='sign-up-form-inputs-only'
                                placeholder="Required"
                                type="text"
                                onChange={updateName}
                                value={name}
                            />
                            <div className='errors-for-sign-up'>
                                {errors.name ? <div>{errors.name}</div> : null}
                            </div>
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
                        <div className='all-sign-up-form-inputs-labels'>
                            <label>
                                Photos
                                <div className='errors-for-sign-up'>
                                    {errors.photo ? <div>{errors.photo}</div> : null}
                                </div>
                            </label>
                            <div className="album-form-photo-select">
                                {allUserImages.length < 1 ?
                                    <div>
                                        <span>Looks like you haven't uploaded any images. </span>
                                        <span>Go ahead and upload <Link to='/upload' className="upload-here-link">here</Link></span>
                                    </div>
                                    :
                                    null}
                                {allUserImages?.map((im) => (
                                    <ImageButton photoSelect={photoSelect} image={im} />
                                ))}
                            </div>
                        </div>
                        <div className='upload-submit-button-div'>
                            <button disabled={disable} className='sign-up-submit-button' type='submit'>Create Album</button>
                            <button onClick={e => cancelButton(e)} className='sign-up-submit-button'>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AlbumForm;
