import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteImageThunk } from "../../store/image";

const ConfirmDelete = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const deleteButton = async (e, id) => {
        e.preventDefault()

        dispatch(deleteImageThunk(id))
        setTimeout(function () { history.push(`/photos`); }, 10);

    }

    return (
        <>
            <span>Are You Sure You Want To Delete?</span>
            <button onClick={event => deleteButton(event, id)}>Delete</button>
        </>
    )
}

export default ConfirmDelete
