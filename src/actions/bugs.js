import uuid from 'uuid'

//ADD_BUG
export const addBug = (
    { 
        name = '',
        description = '',
        notes = '',
        priority = 'Low',
        completed = false,
        createdAt = 0,
        contributions = []
      } = {}
    ) => ({
    type: 'ADD_BUG',
    bug: {
        id: uuid(),
        name,
        description,
        notes,
        priority,
        completed,
        createdAt,
        contributions
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

//ADD_CONTRIBUTION
export const addContribution = (id, {
    name = '',
    contribution = ''
}) => ({
    type: 'ADD_CONTRIBUTION',
    id,
    contribution:
    {
        id: uuid(),
        name,
        contribution
    }

})