import React from 'react'
import { shallow} from 'enzyme'
import BugForm from '../../components/BugForm'
import toJSON from 'enzyme-to-json'
import bugs from '../fixtures/bugs' 
import moment from 'moment'

test('Should render bug form correctly', () => {
    const wrapper = shallow(<BugForm />)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

//should render BugForm with bug data

test('Should render BugForm with data', () => {
    const wrapper = shallow(<BugForm bug={bugs[0]}/>)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

//Should render error for invalid form submission
test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<BugForm />)
    expect(toJSON(wrapper)).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('should set name on input change', () => {
    const value = 'Jonathan' //setting the value
    const wrapper = shallow(<BugForm />)
    wrapper.find('input').at(0).simulate('change', { //simulate changed event, we are setting target to the value we provide
        target: { value }
    })
    expect(wrapper.state('name')).toBe(value)
})

test('Should set description on text area change', () => {
    const value = 'Error in function for BugForm'
    const wrapper = shallow(<BugForm />)
    wrapper.find('textarea').at(0).simulate('change', {
        target: { value }
    })
    expect(wrapper.state('description')).toBe(value)
})

//onSeverityChange
test('Should set severity on select change', () => {
    const value = 'moderate'
    const wrapper = shallow(<BugForm />)
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(wrapper.state('severity')).toBe(value)
})

test('Should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<BugForm bug={bugs[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {} //basically tells the test to do nothing with this
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        name: bugs[0].name,
        description: bugs[0].description,
        severity: bugs[0].severity,
        createdAt: bugs[0].createdAt,
        notes: bugs[0].notes,
    }) //include completed?
})

test('Should set new date on data change', () => {
    const now = moment()
    const wrapper = shallow(<BugForm />)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now) //access props off children our components render and test handler
    expect(wrapper.state('createdAt')).toEqual(now)
})

test('Should set focused on focus change', () => {
    const focused = true
    const wrapper = shallow(<BugForm />)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused })
    expect(wrapper.state('calendarFocused')).toEqual(true)
})