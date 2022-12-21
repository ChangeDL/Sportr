const SET_IMAGES = 'image/SET_IMAGES';
const DELETE_IMAGE = 'image/DELETE_IMAGE';


const setImages = (images) => ({
    type: SET_IMAGES,
    payload: images

})

const deleteImage = (image) => ({
    type: DELETE_IMAGE,
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

const initialState = { allImages: {} };

const imageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_IMAGES: {
            const newState = Object.assign({}, state)
            newState.allImages = {}
            const images = action.payload
            newState.allImages = images
            return newState
        }
        case DELETE_IMAGE: {
            const newState = { ...state }
            delete newState.allImages[action.payload];
            return newState;
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
