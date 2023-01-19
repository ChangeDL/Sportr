import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EditCommentForm from "./EditCommentForm";
import { getImageByIdThunk } from "../../store/image";
import { useDispatch } from "react-redux";

const EditCommentModal = ({ commentId, currentComment, user, commentOwner, imageId }) => {
    const [showCommentForm, setShowCommentForm] = useState(false)
    const dispatch = useDispatch();

    // const openCommentForm = () => {
    //     if (showCommentForm) return;
    //     setShowCommentForm(true)
    // };

    const editCommentButton = document?.getElementsByClassName('edit-comment-button')

    const deleteCommentButton = async (e, commentId) => {
        e.preventDefault()

        const res = await fetch(`/api/comments/${commentId}`, {
            method: "DELETE"
        })
        if (res.ok) {
            await res.json()
            dispatch(getImageByIdThunk(imageId))
        }
    }

    useEffect(() => {
        if (!showCommentForm) return;

        const closeCommentForm = () => {
            setShowCommentForm(false)
        }
        for (let i = 0; i < editCommentButton.length; i++) {
            editCommentButton[i].addEventListener('click', closeCommentForm);

        }
    }, [showCommentForm, editCommentButton])

    const closeCommentForm = () => {
        setShowCommentForm(!showCommentForm)
    }



    return (
        <>
            <div className="comment-container">
                <div>

                    {showCommentForm ?
                        <div>
                            <EditCommentForm setShowCommentForm={setShowCommentForm} showCommentForm={showCommentForm} imageId={imageId} commentText={currentComment} commentId={commentId} />
                        </div>
                        :
                        <span>{currentComment}</span>
                    }
                </div>
                <div>
                    {user.id === commentOwner.id ?
                        <>
                            {!showCommentForm ?
                                <div className="comment-edit-and-delete-div">
                                    <span onClick={closeCommentForm} className='edit-comment-button'><i className="fa-regular fa-pen-to-square"></i></span>
                                    <span onClick={e => deleteCommentButton(e, commentId)}><i className="fa-regular fa-trash-can"></i></span>
                                </div>
                                : null}
                        </>
                        : null}
                </div>
            </div>
        </>
    )
}

export default EditCommentModal
