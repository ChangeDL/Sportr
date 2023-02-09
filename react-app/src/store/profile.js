const VIEW_PROFILE = 'session/VIEW_PROFILE'

const viewUser = (user) => ({
    type: VIEW_PROFILE,
    payload: user
})

export const viewUserProfile = (userId) => async (dispatch) => {
    const response = await fetch(`/api/users/${userId}`);
    const user = await response.json();
    dispatch(viewUser(user))
    return user
}

const initialState = { profile: null }

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case VIEW_PROFILE: {
            return { profile: action.payload }
        }
        default:
            return state
    }
}
