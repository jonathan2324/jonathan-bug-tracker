import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addBug, editBug, removeBug, startAddBug } from '../../actions/bugs'
import bugs from '../fixtures/bugs'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

//Test removeBug action object
test('Should setup removeBug action object', () => {
    const action = removeBug({ id: '123abc' })

    expect(action).toEqual({
        type: 'REMOVE_BUG',
        id: '123abc'
    })
})

//Test editBug action object
test('Should setup editBug action object', () => {
    const id = '123abc'
    const action = editBug( id, { severity: "urgent" })
    expect(action).toEqual({
        type: 'EDIT_BUG',
        id: '123abc',
        updates: { severity: 'urgent'}
        
    })
})


//Test addBug action object
test('Should setup addBug action object with provided values', () => {
    const action = addBug(bugs[1])

    expect(action).toEqual({
        type: 'ADD_BUG',
        bug: bugs[1]
    })
})

test("Should add bug to database and store", (done) => {
    const store = createMockStore({})
    const bugData = {
        name: 'Louis',
        priority: 'Med',
        completed: false,
        description: 'Error on front page',
        notes: 'Error on front page1',
        createdAt: 1000,
        contributions: []
    }

    
    //promise chaining 
    store.dispatch(startAddBug(bugData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_BUG',
            bug: {
                id: expect.any(String),
                ...bugData
            }
        })
        return database.ref(`bugs/${actions[0].bug.id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(bugData)
        done()
    })
})



// test('Should setup addBug action object with default values', () => {
//     const bug={
//         name: '',
//         severity: 'low',
//         completed: false,
//         description: '',
//         notes: '',
//         createdAt: 0
//     }
//     const action = addBug()
//     expect(action).toEqual(
//         {type: 'ADD_BUG',
//         bug: {
//         ...bug,
//         id: expect.any(String)
//     }})
// })