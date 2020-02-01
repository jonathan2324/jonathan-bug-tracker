import React from 'react'
import toJSON from 'enzyme-to-json'
import { shallow } from 'enzyme'
import bugs from '../fixtures/bugs'
import { BugListItem } from '../../components/BugListItem'



test('Should render bug list items', () => {
    const wrapper = shallow(<BugListItem {...bugs[0]}/>) //spread out an object so all its properties become props
    expect(toJSON(wrapper)).toMatchSnapshot()
})