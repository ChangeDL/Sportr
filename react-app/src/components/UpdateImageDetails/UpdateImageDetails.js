import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import './UpdateImageDetails.css'

const UpdateImageDetails = () => {
    const [description, setDescription] = useState("")
    const [tags, setTags] = useState("")
    const [people, setPeople] = useState("")

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
        <div className="update-image-form-container">

            <form>
                <div>
                    <label>Description</label>
                    <input
                        placeholder="Not Required"
                        type="text"
                        onChange={updateDescription}
                        value={description}
                    />
                </div>
                <div>
                    <label>Tag</label>
                    <input
                        placeholder="Not Required"
                        type="text"
                        onChange={updateTags}
                        value={tags}
                    />
                </div>
                <div>
                    <label>People</label>
                    <input
                        placeholder="Not Required"
                        type="text"
                        onChange={updatePeople}
                        value={people}
                    />
                </div>
                <button type="submit">Submit</button>
            </form >
        </div>
    )
}

export default UpdateImageDetails
