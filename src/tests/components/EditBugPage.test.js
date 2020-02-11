import React from 'react'
import { shallow } from 'enzyme'
import {EditBugPage} from '../../components/EditBugPage'
import bugs from '../fixtures/bugs'
import toJSON from 'enzyme-to-json'


let editBug, startRemoveBug, history, wrapper
beforeEach(() => {
    editBug = jest.fn()
    startRemoveBug = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditBugPage bug={bugs[0]} editBug={editBug} startRemoveBug={startRemoveBug} history={history}/>)
})

test('Should render EditBugPage', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()

})

test('Should handle editBug', () => {
    wrapper.find('BugForm').prop('onSubmit')(bugs[0])
    expect(editBug).toHaveBeenLastCalledWith( bugs[0].id ,bugs[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
})


test('Should handle startRemoveBug', () => {
    wrapper.find('button').simulate('click')
    expect(startRemoveBug).toHaveBeenLastCalledWith({ id: bugs[0].id })
    expect(history.push).toHaveBeenLastCalledWith('/')
})