import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editImageThunk, getImageByIdThunk } from "../../store/image";
import './UpdateImageDetails.css'

const UpdateImageDetails = () => {

    const { userId, id } = useParams();

    const history = useHistory();

    // const currentImage = useSelector(state => state?.imageReducer?.allImages[id])


    const dispatch = useDispatch()

    const [description, setDescription] = useState('')
    const [tags, setTags] = useState('')
    const [people, setPeople] = useState('')

    useEffect(() => {
        (async () => {
            const res = await fetch(`/api/images/${id}`)
            const data = await res.json()
            setDescription(data[id]?.description)
            setTags(data[id]?.tags)
            setPeople(data[id]?.people)
        })()
    }, [id])


    useEffect(() => {
        dispatch(getImageByIdThunk(id))
    }, [dispatch])

    const updateDescription = (e) => {
        setDescription(e.target.value)
    }

    const updateTags = (e) => {
        setTags(e.target.value)
    }

    const updatePeople = (e) => {
        setPeople(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(id)
        const updatedData = {
            imageId: +id,
            description,
            tags,
            people
        }

        const editedData = await dispatch(editImageThunk(updatedData))

        if (editedData) {
            history.push(`/photos/${id}`)
            // dispatch(getImageByIdThunk(id))
        }
    }

    const cancelButton = async (e, id) => {
        e.preventDefault()
        history.push(`/photos/${id}`)
    }

    return (
        <div className='background-for-signup-and-login'>


            <div className="update-image-form-container">
                <div className='sign-up-form'>
                    <div className="confirm-delete-message">
                        <span>What would you like to edit about this images details?</span>
                    </div>
                    <form onSubmit={onSubmit}>

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
                        <div className='delete-cancel-button-div'>
                            <button className='sign-up-submit-button' type='submit'>Save Changes</button>
                            <button className='sign-up-submit-button' onClick={event => cancelButton(event, id)}>Cancel</button>
                        </div>
                    </form >
                </div>
            </div>
        </div>
    )
}

export default UpdateImageDetails
