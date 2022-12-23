const SET_IMAGES = 'image/SET_IMAGES';
const DELETE_IMAGE = 'image/DELETE_IMAGE';
const UPDATE_IMAGE = 'image/UPDATE_IMAGE';
const GET_IMAGE = 'image/GET_IMAGE';


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
    const { imageId, description, tags, people } = payload
    const response = await fetch(`/api/images/${imageId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ description, tags, people })
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

const initialState = { allImages: {}, currentImage: {} };

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

function normalizeArray(array) {
    const obj = {}
    array.forEach(i => {
        obj[i.id] = i
    })
    return obj
}
