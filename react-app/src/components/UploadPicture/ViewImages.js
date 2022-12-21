import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { deleteImageThunk, getAllImages } from "../../store/image";

const ViewImages = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const imagesObj = useSelector(state => {
        return state
    })

    const allImages = Object.values(imagesObj.imageReducer.allImages)
    console.log(allImages)

    const deleteButton = async (e, id) => {
        e.preventDefault()

        return history.push(`/photos/${id}/delete-confirm`)
    }


    useEffect(() => {
        dispatch(getAllImages())
    }, [dispatch])




    return (
        <div>
            <h1>Images</h1>
            {allImages.map((im) => (
                <div key={im.url}>
                    <div

                        key={im.id}
                        style={{
                            backgroundImage: `url(${im.url})`,
                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            width: "50%",
                            height: 250,
                            margin: 10,
                            width: "auto",
                        }} />
                    <button onClick={event => deleteButton(event, im.id)}>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default ViewImages;
