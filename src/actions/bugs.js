import uuid from 'uuid'
import database from '../firebase/firebase'

//ADD_BUG
export const addBug = (bug) => ({
    type: 'ADD_BUG',
    bug
    
})

//START addBUg
export const startAddBug = (bugData = {}) => {
    return (dispatch) => {
        const { 
            name = '',
            description = '',
            notes = '',
            priority = 'Low',
            completed = false,
            createdAt = 0,
            contributions = []
          } = bugData

          const bug = { name, description, priority, completed, notes, createdAt, contributions }

          return database.ref('bugs').push(bug).then((ref) => {
              dispatch(addBug({
                  id: ref.key,
                  ...bug
              }))
          })
    }
}

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

//EDIT_CONTRIBUTION
export const editContribution = (bugID, contributionID, updatedContribution) => ({
    type: 'EDIT_CONTRIBUTION',
    bugID,
    contributionID,
    updatedContribution
})

//REMOVE_CONTRIBUTION
export const removeContribution = (bugID, contributionID) => ({
    type: 'REMOVE_CONTRIBUTION',
    bugID,
    contributionID
})