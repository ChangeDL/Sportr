import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, Link } from "react-router-dom";
import { getUserAlbums } from "../../store/album";
import Logo from '../../assets/misc/Logo.png'
import { uploadAlbum } from "../../store/album";
import { getUserImages } from "../../store/image";
import { getImageByIdThunk } from "../../store/image";
import './EditCommentForm.css'

const EditCommentForm = ({ commentId, commentText, currentComment, imageId, setShowCommentForm, showCommentForm }) => {
    const dispatch = useDispatch()
    const [comment, setComment] = useState(commentText)


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('comment', comment)
        const res = await fetch(`/api/comments/${commentId}`, {
            method: "PUT",
            body: formData
        });
        if (res.ok) {
            await res.json();
            await dispatch(getImageByIdThunk(imageId))
            await setShowCommentForm(!showCommentForm)
        }
    }

    const updateComment = (e) => {
        setComment(e.target.value)
    }


    return (
        <div className="comment-form-container">
            <form onSubmit={handleSubmit}>
                <div className="edit-comment-form-div">
                    <textarea
                        className='edit-comment-textarea'
                        placeholder="Your thoughts on this photo?"
                        type="text"
                        onChange={updateComment}
                        value={comment}
                    />
                </div>
                <div className="submit-button-comment">
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default EditCommentForm
