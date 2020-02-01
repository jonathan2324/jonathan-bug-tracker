import uuid from 'uuid'

//ADD_BUG
export const addBug = (
    { 
        name = '',
        description = '',
        notes = '',
        severity = 'low',
        completed = false,
        createdAt = 0  } = {}
    ) => ({
    type: 'ADD_BUG',
    bug: {
        id: uuid(),
        name,
        description,
        notes,
        severity,
        completed,
        createdAt
    }
    
})

//REMOVE_BUG

export const removeBug = ({ id }) => ({
    type: 'REMOVE_BUG',
    id
})

//Edit Bug
export const editBug = (id, updates) => ({
    type: 'EDIT_BUG',
    id,
    updates
})

//TOGGLE COMPLETED
export const toggleCompletedBug = (id, completed) => ({
    type: 'TOGGLE_COMPLETED_BUG',
    id,
    completed
})