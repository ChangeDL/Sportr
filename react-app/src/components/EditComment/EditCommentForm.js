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
    const [errors, setErrors] = useState([])
    const [disable, setDisable] = useState(true)


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
            dispatch(getImageByIdThunk(imageId))
            await setShowCommentForm(!showCommentForm)
        }
    }

    const updateComment = (e) => {
        setComment(e.target.value)
    }

    useEffect(() => {
        const error = []
        if (!/\S/.test(comment) && comment.length > 0) {
            error.push('Error, blank comments not allowed')
        }
        if (error.length > 0) setDisable(true)
        if (error.length === 0) setDisable(false)
        setErrors(error)
    }, [comment])

    return (
        <div className="comment-form-container">
            <form onSubmit={handleSubmit}>
                <div className="edit-comment-form-div">
                    {errors.length > 0 ?
                        <span className="comment-error">{errors[0]}</span>
                        : null}
                    <textarea
                        className='edit-comment-textarea'
                        placeholder="Your thoughts on this photo?"
                        type="text"
                        onChange={updateComment}
                        value={comment}
                        required
                    />
                </div>
                <div className="submit-button-edit-comment-div">
                    <button disabled={disable} type="submit" className="submit-button-edit-comment">Done</button>
                </div>
            </form>
        </div>
    )
}

export default EditCommentForm
