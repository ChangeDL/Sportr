import React, { useState, useEffect } from 'react';
import { useParams, Link, useHistory } from 'react-router-dom';
import { getUserAlbums, removeAlbum } from '../../store/album';
import { useDispatch, useSelector } from 'react-redux';
import './DeleteAlbum.css'


const DeleteAlbum = ({ albumId, userId, confirmed, setconfirm }) => {
    const dispatch = useDispatch();

    const deleteAlbum = async (e, id) => {
        e.preventDefault();

        dispatch(removeAlbum(id))
        setTimeout(() => {
            dispatch(getUserAlbums(userId));
            window.location.reload();
        }, 100)


    }

    return (
        <div className="main-modal-container-confirm-delete">
            <div className="inside-confirm-delete-div">
                <p className="p-on-confirm-delete-modal">Are you SURE you want to delete this album?</p>
                <div className="two-confirm-delete-buttons-div">
                    <button className='confirm-delete-buttons' onClick={e => deleteAlbum(e, albumId)}>Yes</button>
                    <button className="confirm-delete-buttons" onClick={setconfirm}>No</button>
                </div>
            </div>
        </div >
    )
}

export default DeleteAlbum
