const USER_ALBUMS = 'album/USER_ALBUMS';


const userAlbums = (albums) => ({
    type: USER_ALBUMS,
    payload: albums
})


export const getUserAlbums = (userId) => async (dispatch) => {
    const response = await fetch(`/api/albums/${userId}`)
    if (response.ok) {
        const data = await response.json()
        dispatch(userAlbums(data))
        return data
    }
}


const initialState = { albumsForUser: {} };

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ALBUMS: {
            const newState = Object.assign({}, state)
            newState.albumsForUser = {}
            const albums = action.payload
            newState.albumsForUser = albums
            return newState
        }
        default:
            return state;
    }
}

export default albumReducer
