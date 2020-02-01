import bugsReducer from '../../reducers/bugs'
import bugs from '../fixtures/bugs'
import moment from 'moment'

//@@INIT is the default state called by redux 
test('Should set default state', () => {
    const state = bugsReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual([])
})

//testing 'REMOVE_BUG' to remove bug from array
test('Should call REMOVE_BUG', () => {
    const action = { type: 'REMOVE_BUG', id: bugs[1].id }
    const state = bugsReducer(bugs, action)
    expect(state).toEqual([bugs[0], bugs[2]])
})

//testing 'REMOVE_BUG' to make sure it will only delete bug if id found in array 
test('should not remove bug if the id doesnt exist', () => {
    const  action = { type: 'REMOVE_BUG', id: '37'}
    const state = bugsReducer(bugs, action)
    expect(state).toEqual(bugs)
})

//should add an expense
test('should add an expense', () => {
    const action = { type: 'ADD_BUG', bug: {
        name: 'Jonathan Huertas',
        description: 'error with submit button',
        severity: 'urgent',
        completed: false,
        createdAt: moment(2000)
    }}
    const state = bugsReducer(bugs, action)
    expect(state).toEqual([...bugs, action.bug])
})

//should edit an expense
test('should edit an expense', () => {
    const action = { type: 'EDIT_BUG', id: bugs[0].id, updates: { description: 'Error in Home Page' }}
    const state = bugsReducer(bugs, action)
    expect(state[0].description).toBe('Error in Home Page')
})

//should not edit expense if expense not found
test('should not edit an expense if the id is not found', () => {
    const action = { type: 'EDIT_BUG', id: "40", updates: { description: 'Error in Home Page' }}
    const state = bugsReducer(bugs, action)
    expect(state).toEqual(bugs)

})