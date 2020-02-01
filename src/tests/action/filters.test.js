import { setStartDate, setEndDate, sortByDate, sortBySeverity, setTextFilter } from '../../actions/filters'
import moment from 'moment'

test('Should generate set start date action object', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('Should generate setEndDate action object', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('Should generate sortByDate action object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('Should generate sortBySeverity action object', () => {
    const action = sortBySeverity()
    expect(action).toEqual({
        type: 'SORT_BY_SEVERITY'
    })
})

test('Should generate setTextFilter with value input', () => {
    const action = setTextFilter("Rent")
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: "Rent"
    })
})

test('Should generate setTextFilter with default values', () => {
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})