

//bugReducer
const bugReducerDefaultState = []

const bugReducer = (state = bugReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_BUG':
            return [
                ...state,
                action.bug
            ]
        case 'REMOVE_BUG':
            return state.filter(({ id }) => id !== action.id)
        case 'EDIT_BUG':
            return state.map((bug) => {
                if (bug.id === action.id) {
                    return {
                        ...bug,
                        ...action.updates
                    }
                } else {
                    return bug
                }

            })
        case 'TOGGLE_COMPLETED_BUG':
            return state.map((bug) => {
                if (bug.id === action.id) {
                    return {
                        ...bug,
                        completed: !action.completed
                    }
                } else {
                    return bug
                }
            })
        case 'ADD_CONTRIBUTION':
            return state.map((bug) => {
                if(bug.id === action.id){
                    return {
                        ...bug,
                        contributions: [
                            
                            action.contribution,
                            ...bug.contributions,
                            
                        ]
                    }
                } else return bug
            })
        default:
            return state;
    }
};

export default bugReducer