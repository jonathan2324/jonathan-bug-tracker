import { BugListFilters } from '../../components/BugListFilters'
import React from 'react'
import {shallow} from 'enzyme'
import { filters, altFilters } from '../fixtures/filters'
import toJSON from 'enzyme-to-json'
import moment from 'moment'

let setTextFilter, sortByDate, sortBySeverity, sortByCompleted, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortBySeverity = jest.fn()
    sortByCompleted = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <BugListFilters 
            filters={filters} //because we connect the filters state by using mapStateToProps
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortBySeverity={sortBySeverity}
            sortByCompleted={sortByCompleted}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />)

})

test('Snapshot test of BugListFilters', () => {
    expect(toJSON(wrapper)).toMatchSnapshot()
})

test('Snapshot test of BugListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(toJSON(wrapper)).toMatchSnapshot()
})

//should handle text change
test('should handle text change', () => {
    const value = 'le'
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})
//should sort by date
test('should sort by date', () => {
    const value = 'date'
    wrapper.setProps({
        filters:altFilters
    })
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
})
//should sort by severity
test('should sort by severity', () => {
    const value = 'severity'
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortBySeverity).toHaveBeenCalled()
})
//should sort by completed
test('should sort by completed', () => {
    const value = 'completed'
    wrapper.find('select').simulate('change', {
        target: {value}
    })
    expect(sortByCompleted).toHaveBeenCalled()
})
//should handle date changes
test('should handle date changes', () => {
    const startDate = moment(0).add(1, 'days')
    const endDate = moment(0).add(2, 'days')
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})
//should handle date focus changes
test('should handle date focus changes', () => {
    const calendarFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state("calendarFocused")).toBe(calendarFocused)
})