const INITIAL_STATE = {
    items: [
        {
            id: 1,
            text: 'First Todo',
            complete: false
        },
        {
            id: 2,
            text: 'Another Todo',
            complete: false
        }
    ]
}


export default function todo(state = INITIAL_STATE, action){

    if(action.type == 'TOGGLE_TODO'){
        return {
            ...state,
            items: state.items.map(todo => {
                return {
                    id: todo.id,
                    text: todo.text,
                    complete: todo.id == action.todo.id ? !action.todo.complete : todo.complete
                }
            })
        }
    }

    if(action.type == 'ADD_TODO'){

        if(action.todo){
            return {
                ...state, items: [action.todo, ...state.items]
            }
        }

        return state
        
    }

    if(action.type == 'DELETE_TODO'){

        console.log('delete todo', action)

        return {
            ...state, items: state.items.filter(i => i.id != action.todo.id)
        }
    }

    return state
    
}