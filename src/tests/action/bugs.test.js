import { addBug, editBug, removeBug } from '../../actions/bugs'

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
    const bug = {
        name: 'Jonathan',
        completed: false,
        severity: 'moderate',
        createdAt: 1000,
        description: 'Error in frontpage',
        notes: 'Error with filtering on frontpage'
    }
    const action = addBug(bug)

    expect(action).toEqual({
        type: 'ADD_BUG',
        bug: {
            ...bug,
            id: expect.any(String)
        }
    })
})

test('Should setup addBug action object with default values', () => {
    const bug={
        name: '',
        severity: 'low',
        completed: false,
        description: '',
        notes: '',
        createdAt: 0
    }
    const action = addBug()
    expect(action).toEqual(
        {type: 'ADD_BUG',
        bug: {
        ...bug,
        id: expect.any(String)
    }})
})