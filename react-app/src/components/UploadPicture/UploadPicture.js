import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import './UploadPicture.css'
import { getUserAlbums } from "../../store/album";

const UploadPicture = () => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const dispatch = useDispatch()
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")
    const [people, setPeople] = useState("")
    const [album, setAlbum] = useState(0)
    const [errors, setErrors] = useState([])

    const currentUser = useSelector(state => state.session.user)

    const userAlbums = useSelector(state => { return state })
    const userAlbumsArray = Object.values(userAlbums.albumReducer.albumsForUser)




    useEffect(() => {
        const errors = []
        if (image) {
            if (image?.type !== 'image/jpg' && image?.type !== 'image/jpeg' && image?.type !== 'image/png') errors.push('File Type Not Supported. Please upload a png, jpg, or jpeg')
            setTitle(image.name.split('.')[0])


        } else setTitle('')
        setErrors(errors)

    }, [image])

    useEffect(() => {
        dispatch(getUserAlbums(currentUser.id))
    }, [currentUser.id])


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (errors.length > 0) return
        const formData = new FormData();
        formData.append("image", image);
        formData.append("title", title)
        formData.append("description", description)
        formData.append("tags", tags)
        formData.append("people", people)
        if (album > 0) formData.append("albums", +album)

        // aws uploads can be a bit slow—displaying
        // some sort of loading message is a good idea
        setImageLoading(true);

        const res = await fetch('/api/images', {
            method: "POST",
            body: formData,
        });
        if (res.ok) {
            await res.json();
            setImageLoading(false);
            history.push("/photos");

        }
        else {
            setImageLoading(false);
            // a real app would probably use more advanced
            // error handling
            console.log("error");

        }
    }

    const updateImage = (e) => {
        const file = e.target.files[0];
        setImage(file);
    }

    const updateDescription = (e) => {
        setDescription(e.target.value)
    }

    const updateTags = (e) => {
        setTags(e.target.value)
    }

    const updatePeople = (e) => {
        setPeople(e.target.value)
    }
    const updateTitle = (e) => {
        setTitle(e.target.value)
    }
    return (
        <div className='background-for-signup-and-login'>
            <div className="whole-upload-container">
                <div className="sign-up-form">
                    <div className="image-size-warning">
                        <span className="warning-upload-spans">Images Landscape Oriented will </span>
                        <span className="warning-upload-spans">be easier to display</span>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className='errors-for-sign-up'>
                            {errors.map((error, ind) => (
                                <div key={ind}>{error}</div>
                            ))}
                        </div>
                        <div className='all-sign-up-form-inputs-labels'>

                            <input
                                className="choose-file-button-upload"
                                type="file"
                                accept="image/*"
                                onChange={updateImage}
                            />
                        </div>
                        <div className='all-sign-up-form-inputs-labels'>
                            <label>Title</label>
                            <input
                                className='sign-up-form-inputs-only'
                                placeholder="Not Required"
                                type="text"
                                onChange={updateTitle}
                                value={title}
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
                        <div className='all-sign-up-form-inputs-labels'>
                            <label>Tag</label>
                            <input
                                className='sign-up-form-inputs-only'
                                placeholder="Not Required"
                                type="text"
                                onChange={updateTags}
                                value={tags}
                            />
                        </div>
                        <div className='all-sign-up-form-inputs-labels'>
                            <label>People</label>
                            <input
                                className='sign-up-form-inputs-only'
                                placeholder="Not Required"
                                type="text"
                                onChange={updatePeople}
                                value={people}
                            />
                        </div>
                        <div className='all-sign-up-form-inputs-labels'>
                            <label>Album</label>
                            <select
                                name="albums"
                                id="albums"
                                value={album}
                                onChange={(e) => setAlbum(e.target.value)}
                                className='sign-up-form-inputs-only'
                            >
                                <option value='' style={{ color: 'grey' }}>Not Required</option>
                                {userAlbumsArray.map((al) => (
                                    <option value={al.id}>{al.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className='upload-submit-button-div'>
                            <button className='sign-up-submit-button' type='submit'>Upload</button>
                            {(imageLoading) && <p>Loading...</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UploadPicture;
