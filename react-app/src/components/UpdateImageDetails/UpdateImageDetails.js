import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editImageThunk, getImageByIdThunk } from "../../store/image";
import './UpdateImageDetails.css'

const UpdateImageDetails = () => {

    const { id } = useParams();

    const history = useHistory();

    const currentImage = useSelector(state => state?.imageReducer?.currentImage[id])
    console.log(currentImage)

    const dispatch = useDispatch()

    const [description, setDescription] = useState(currentImage?.description)
    const [tags, setTags] = useState(currentImage?.tags)
    const [people, setPeople] = useState(currentImage?.people)


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
            history.push('/photos')
            dispatch(getImageByIdThunk(id))
        }
    }

    return (
        <div className="update-image-form-container">

            <form onSubmit={onSubmit}>
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
