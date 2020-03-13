const INITIAL_STATE = {
    open: false,
    title: 'Modal title',
    body: 'this is the modal body text'
}

export default function modal(state = INITIAL_STATE, action){

    if(action.type == 'OPEN_MODAL'){
        return {
            ...state,
            open: true
        }
    }

    if(action.type == 'CLOSE_MODAL'){
        return {
            ...state,
            open: false
        }
    }

    if(action.type = 'UPDATE_MODAL_CONTENT'){
        return {
            ...state, title: action.title, body: action.body
        }
    }

    console.log('action', action.type)

    return state

}