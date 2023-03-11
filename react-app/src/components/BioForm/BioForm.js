import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";


const BioForm = ({ userId }) => {
    const dispatch = useDispatch();
    const [bio, setBio] = useState('')
    const [errors, setErrors] = useState([])

    userId = +userId
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('bio', bio)

        const res = await fetch(`/api/user/${userId}/bio`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: formData
        });
        console.log(res)
        if (res.ok) {
            window.location.reload();
        }
    }

    const updateBio = (e) => {
        setBio(e.target.value)
    }
    return (
        <div className="comment-form-container">
            <form onSubmit={handleSubmit}>
                <div className="comment-form-div">
                    <label className="comment-form-label">Leave A Comment</label>
                    {errors.length > 0 ?
                        <span className="comment-error">{ }</span>
                        : null}
                    <textarea
                        className='comment-textarea'
                        placeholder="Your thoughts on this photo?"
                        type="text"
                        onChange={updateBio}
                        value={bio}
                        required
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default BioForm
