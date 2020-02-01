import React from 'react'
import { shallow } from 'enzyme'
import { BugList } from '../../components/BugList'
import bugs from '../fixtures/bugs'
import toJSON from 'enzyme-to-json'


test('should render bug list with given bugs',() => {
    const wrapper = shallow(<BugList bugs={bugs}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Should render bug list with no items', () => {
    const wrapper = shallow(<BugList bugs={[]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})