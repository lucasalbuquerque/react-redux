export function open(v){
    return {
        type: 'OPEN_MODAL',
        v
    }
}

export function close(v){
    return {
        type: 'CLOSE_MODAL',
        v
    }
}

export function updateModalContent(title, body){
    return {
        type: 'UPDATE_MODAL_CONTENT',
        title,
        body
    }
}