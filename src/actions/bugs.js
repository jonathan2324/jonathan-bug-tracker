import database from '../firebase/firebase'

//ADD_BUG
export const addBug = (bug) => ({
    type: 'ADD_BUG',
    bug
    
})

//START addBUg
export const startAddBug = (bugData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const { 
            name = '',
            description = '',
            notes = '',
            priority = 'Low',
            completed = false,
            createdAt = 0,
            contributions = [{id: '0', name: "initial", contribution: "initial"}]
          } = bugData

          const bug = { name, description, priority, completed, notes, createdAt, contributions }

          return database.ref(`users/${uid}/bugs`).push(bug).then((ref) => {
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

//Start REMOVE_BUG
export const startRemoveBug = ({id} = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/bugs/${id}`).remove().then(() => {
            dispatch(removeBug({ id }))
        })
    }
}

//Edit Bug
export const editBug = (id, updates) => ({
    type: 'EDIT_BUG',
    id,
    updates
})

//Start edit bug
export const startEditBug = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/bugs/${id}`).update(updates).then(() => {
            dispatch(editBug(id, updates))
        })
    }
}

//TOGGLE COMPLETED
export const toggleCompletedBug = (id, completed) => ({
    type: 'TOGGLE_COMPLETED_BUG',
    id,
    completed
})

//start Toggle Completed

export const startToggleCompletedBug = (id, completed) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/bugs/${id}`).update({ completed: !completed }).then(() => {
            dispatch(toggleCompletedBug(id, completed))
        })
    }
}

//ADD_CONTRIBUTION
export const addContribution = (id, contribution) => ({
    type: 'ADD_CONTRIBUTION',
    id,
    contribution

})

//Start add CONTRIBUTION
export const startAddContribution = (id, bugContributionData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        const { 
            name = '',
            contribution = ''
          } = bugContributionData

          const contributionData = { name, contribution }
          return database.ref(`users/${uid}/bugs/${id}/contributions`).push(contributionData).then((ref) => {
              dispatch(addContribution(id, {
                  id: ref.key,
                  name: contributionData.name,
                  contribution: contributionData.contribution
              }))
          })
    }
}


//EDIT_CONTRIBUTION
export const editContribution = (bugID, contributionID, updatedContribution) => ({
    type: 'EDIT_CONTRIBUTION',
    bugID,
    contributionID,
    updatedContribution
})

//Start edit contribution
export const startEditContribution = (bugID, contributionID, updatedContribution) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/bugs/${bugID}/contributions/${contributionID}`).update(updatedContribution).then(() => {
            dispatch(editContribution(bugID, contributionID, updatedContribution))
        })
    }
}
//REMOVE_CONTRIBUTION
export const removeContribution = (bugID, contributionID) => ({
    type: 'REMOVE_CONTRIBUTION',
    bugID,
    contributionID
})

//Start remove contribution
export const startRemoveContribution = (bugID, contributionID) => {
    return (dispatch,getState) => {
        const uid = getState().auth.uid
        return database.ref(`users/${uid}/bugs/${bugID}/contributions/${contributionID}`).remove().then(() => {
            dispatch(removeContribution(bugID, contributionID))
        })
    }
}

//SET_BUGS
export const setBugs = (bugs) => ({
    type: 'SET_BUGS',
    bugs
})

//startSetBugs

export const startSetBugs = (bugs) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
        //return here makes sure the promise gets returned
        return database.ref(`users/${uid}/bugs`).once('value').then((snapshot) => {
            const bugs = []
            snapshot.forEach((childSnapshot) => {
                bugs.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()
                })
            })
            dispatch(setBugs(bugs))
        })

        
    }
}


//set contributions
export const setContributions = (id, contributions = []) => (    
    {
    type: 'SET_CONTRIBUTIONS',
    id,
    contributions
    
})

//start set contributions
export const startSetContributions = (id) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid
         return database.ref(`users/${uid}/bugs/${id}/contributions`).once('value').then((snapshot) => {
            const contributions = []
            snapshot.forEach((childSnapshot) => {
                contributions.push({
                    id: childSnapshot.key,
                    ...childSnapshot.val()

                })
            })
    
            dispatch(setContributions(id, contributions))
        })
    }
}