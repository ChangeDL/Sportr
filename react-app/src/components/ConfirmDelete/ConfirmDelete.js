import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteImageThunk, getAllImages } from "../../store/image";
import './ConfirmDelete.css'

const ConfirmDelete = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    // const [loading, setLoading] = useState(false)

    const deleteButton = async (e, id) => {
        e.preventDefault()
        // setLoading(true)
        dispatch(deleteImageThunk(id))
        dispatch(getAllImages())
        setTimeout(function () {
            history.push(`/photos`)
            // setLoading(false)
        }, 500);


    }

    return (
        <>
            <div className="confirm-delete-container">

                <span>Are You Sure You Want To Delete?</span>
                <button onClick={event => deleteButton(event, id)}>Delete</button>
            </div>
            {/* <div>
                {loading ? <span>Deleting....</span> : null}
            </div> */}
        </>
    )
}

export default ConfirmDelete
