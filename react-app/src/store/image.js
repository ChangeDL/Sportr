const SET_IMAGES = 'image/SET_IMAGES';
const DELETE_IMAGE = 'image/DELETE_IMAGE';
const UPDATE_IMAGE = 'image/UPDATE_IMAGE';
const GET_IMAGE = 'image/GET_IMAGE';
const USER_IMAGES = 'image/USER_IMAGES';
const TAG_IMAGES = 'image/TAG_IMAGES'


const setImages = (images) => ({
    type: SET_IMAGES,
    payload: images

})

const deleteImage = (image) => ({
    type: DELETE_IMAGE,
    payload: image
})

const updateImage = (image) => ({
    type: UPDATE_IMAGE,
    payload: image
})

const getImageById = (image) => ({
    type: GET_IMAGE,
    payload: image
})

const userImages = (images) => ({
    type: USER_IMAGES,
    payload: images
})

const tagImages = (images) => ({
    type: TAG_IMAGES,
    payload: images
})

export const getAllImages = () => async (dispatch) => {
    const response = await fetch('/api/images')
    if (response.ok) {
        const data = await response.json()
        dispatch(setImages(data))
        return data
    }
}

export const deleteImageThunk = (id) => async (dispatch) => {
    const res = await fetch(`/api/images/${id}`, {
        method: "DELETE"
    });
    if (res.ok) {
        const data = await res.json();
        dispatch(deleteImage(data))
        return data
    }
}

export const editImageThunk = (payload) => async dispatch => {
    const { imageId, title, description, tags, people, albums } = payload
    const response = await fetch(`/api/images/${imageId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title, description, tags, people, albums })
    })

    if (response.ok) {
        const question = await response.json()
        dispatch(updateImage(question))
        return question
    }
}

export const getImageByIdThunk = (imageId) => async dispatch => {
    const res = await fetch(`/api/images/${imageId}`);
    if (res.ok) {
        const data = await res.json()
        dispatch(getImageById(data))
        return data
    }
}

export const getUserImages = (userId) => async dispatch => {
    const res = await fetch(`/api/images/user/${userId}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(userImages(data))
        return data
    }
}

export const getTagImages = (tag) => async dispatch => {
    const res = await fetch(`/api/images/${tag}`)
    if (res.ok) {
        const data = await res.json()
        dispatch(tagImages(data))
        return data
    }
}

const initialState = { allImages: {}, currentImage: {}, userImages: {}, tagImages: {} };

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES: {
            const newState = Object.assign({}, state)
            newState.allImages = {}
            const images = action.payload
            newState.allImages = images
            return newState
        }

        case GET_IMAGE: {
            const newState = { ...state }
            newState.currentImage = {}
            const image = action.payload
            newState.currentImage = image
            return newState
        }

        case USER_IMAGES: {
            const newState = { ...state }
            newState.userImages = {}
            const images = action.payload
            newState.userImages = images
            return newState
        }
        case TAG_IMAGES: {
            const newState = { ...state }
            newState.tagImages = {}
            const images = action.payload
            newState.tagImages = images
            return newState
        }

        case DELETE_IMAGE: {
            const newState = { ...state }
            delete newState.allImages[action.payload];
            return newState;
        }
        case UPDATE_IMAGE:

            return {
                ...state,
                [action.payload.id]: action.payload
            }
        default:
            return state;
    }
}

export default imageReducer
