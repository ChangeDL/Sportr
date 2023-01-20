import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { getUserAlbums } from "../../store/album";
import Logo from '../../assets/misc/Logo.png'
import { uploadAlbum } from "../../store/album";
import { getUserImages } from "../../store/image";
import './CommentForm.css'
import { getImageByIdThunk } from "../../store/image";

const CommentForm = ({ user, imageId }) => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState('')
    const [errors, setErrors] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("imageId", imageId);
        formData.append("comment", comment)

        const res = await fetch('/api/comments', {
            method: "POST",
            body: formData
        });
        if (res.ok) {
            await res.json();
            dispatch(getImageByIdThunk(imageId))
            setComment('')
        }
    }

    const updateComment = (e) => {
        setComment(e.target.value)
    }

    useEffect(() => {
        if (comment.length > 0) errors.push('hello')
    })

    return (
        <div className="comment-form-container">
            <form onSubmit={handleSubmit}>
                <div className="comment-form-div">
                    <label className="comment-form-label">Leave A Comment</label>
                    <textarea
                        className='comment-textarea'
                        placeholder="Your thoughts on this photo?"
                        type="text"
                        onChange={updateComment}
                        value={comment}
                        required
                    />
                </div>
                {user ?
                    <div className="submit-button-comment-div">
                        <button type="submit" className="submit-button-comment">Comment</button>
                    </div>
                    :
                    <div className="submit-button-comment-div">
                        <Link to='/login'><button className="submit-button-edit-comment">Login</button></Link>
                    </div>
                }
            </form>
        </div>
    )
}

export default CommentForm
