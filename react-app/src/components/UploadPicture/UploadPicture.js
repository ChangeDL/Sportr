import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './UploadPicture.css'

const UploadPicture = () => {
    const history = useHistory(); // so that we can redirect after the image upload is successful
    const [image, setImage] = useState(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")
    const [people, setPeople] = useState("")





    // console.log("***************IMAGE", image)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image);
        formData.append("description", description)
        formData.append("tags", tags)
        formData.append("people", people)

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
    return (
        <div className="whole-upload-container">

            <div className="image-size-warning">
                <span className="warning-upload-spans">Images Landscape Oriented will </span>
                <span className="warning-upload-spans">be easier to display</span>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='upload-form-divs'>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={updateImage}
                    />
                </div>
                <div className='upload-form-divs'>
                    <label>Description</label>
                    <input
                        placeholder="Not Required"
                        type="text"
                        onChange={updateDescription}
                        value={description}
                    />
                </div>
                <div className='upload-form-divs'>
                    <label>Tag</label>
                    <input
                        placeholder="Not Required"
                        type="text"
                        onChange={updateTags}
                        value={tags}
                    />
                </div>
                <div className='upload-form-divs'>
                    <label>People</label>
                    <input
                        placeholder="Not Required"
                        type="text"
                        onChange={updatePeople}
                        value={people}
                    />
                </div>
                <button type="submit">Submit</button>
                {(imageLoading) && <p>Loading...</p>}
            </form>
        </div>
    )
}

export default UploadPicture;
