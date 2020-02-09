import React from 'react'
import { shallow } from 'enzyme'
import { AddBugPage } from '../../components/AddBugPage'
import toJSON from 'enzyme-to-json'
import bugs from '../fixtures/bugs'

let startAddBug, history, wrapper
beforeEach(() => { //sets all these variables before each test case is ran- more efficient
    startAddBug = jest.fn() 
     history = { push: jest.fn() } 
     wrapper = shallow(<AddBugPage startAddBug={startAddBug} history={history}/>) //didnt need to provide bug because none intially

})

test('Snapshot of AddBugPage', () => {

    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should handle onSubmit', () => {
    //const onSubmit = jest.fn() //original componenet expects onSubmit
    //const history = { push: jest.fn() } //the original componenet gets a history object
    
    wrapper.find('BugForm').prop('onSubmit')(bugs[0])
    expect(history.push).toHaveBeenLastCalledWith('/') //this is the only thing that history does
    expect(startAddBug).toHaveBeenLastCalledWith(bugs[0]) //because the original just takes an object and passes it down

})