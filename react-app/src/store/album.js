const USER_ALBUMS = 'album/USER_ALBUMS';
const CREATE_ALBUM = 'album/CREATE_ALBUM'
const EDIT_ALBUM = 'album/EDIT_ALBUM'
const DELETE_ALBUM = 'album/DELETE_ALBUM'
const SINGLE_ALBUM = 'album/SINGLE_ALBUM'



const userAlbums = (albums) => ({
    type: USER_ALBUMS,
    payload: albums
})

const createAlbum = (album) => ({
    type: CREATE_ALBUM,
    payload: album
})

const editAlbum = (album) => ({
    type: EDIT_ALBUM,
    payload: album
})

const deleteAlbum = (album) => ({
    type: DELETE_ALBUM,
    payload: album
})

const singleAlbum = (album) => ({
    type: SINGLE_ALBUM,
    payload: album
})

export const getUserAlbums = (userId) => async (dispatch) => {
    const response = await fetch(`/api/albums/user/${userId}`)
    if (response.ok) {
        const data = await response.json()
        dispatch(userAlbums(data))
        return data
    }
}

export const uploadAlbum = (payload) => async (dispatch) => {
    const { name, description } = payload
    const response = await fetch('/api/albums', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description })
    })

    if (response.ok) {
        const data = await response.json()
        dispatch(createAlbum(data))
        return data
    }
}

export const removeAlbum = (id) => async (dispatch) => {
    const response = await fetch(`/api/albums/${id}`, {
        method: 'DELETE'
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(deleteAlbum(data))
        return data
    }
}

export const oneAlbum = (id) => async (dispatch) => {
    const response = await fetch(`/api/albums/${id}`)
    if (response.ok) {
        const data = await response.json()
        dispatch(singleAlbum(data))
        return data
    }
}

export const updateAlbum = (payload) => async (dispatch) => {
    const { albumId, name, description } = payload
    const response = await fetch(`/api/albums/${albumId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, description })
    })
    if (response.ok) {
        const data = await response.json()
        dispatch(editAlbum(data))
        return data
    }
}

const initialState = { albumsForUser: {}, currentAlbum: {} };

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ALBUMS: {
            const newState = Object.assign({}, state)
            newState.albumsForUser = {}
            const albums = action.payload
            newState.albumsForUser = albums
            return newState
        }
        case SINGLE_ALBUM: {
            const newState = { ...state }
            newState.currentAlbum = {}
            const album = action.payload
            newState.currentAlbum = album
            return newState
        }
        case CREATE_ALBUM: {

            if (!state[action.id]) {
                const newState = {
                    ...state,
                    [action.payload.id]: {
                        id: action.payload.id,
                        name: action.payload.name,
                        description: action.payload.description
                    }
                };
                return newState
            }
            break
        }
        case DELETE_ALBUM: {
            const newState = { ...state }
            delete newState.albumsForUser[action.payload];
            return newState;
        }
        case EDIT_ALBUM:
            return {
                ...state,
                [action.payload.id]: action.payload
            }
        default:
            return state;
    }
}

export default albumReducer
