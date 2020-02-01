import filtersReducer from '../../reducers/filters'
import moment from 'moment'

//Testing default state
test('Should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

//Testing SORT_BY_SEVERITY
test('test should set sortBy to severity', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_SEVERITY' })
    expect(state.sortBy).toBe('severity')
})

//Testing SORT_BY_DATE
test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'severity',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const action = { type: 'SORT_BY_DATE' }
    const state = filtersReducer(currentState, action)
    expect(state.sortBy).toBe('date')
})

//should set text filter
test('Should setTextFilter', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }

    const action = { type: 'SET_TEXT_FILTER', text: 'Jon'}
    const state = filtersReducer(currentState, action)
    expect(state.text).toBe('Jon')
})

//should set start date filter
test('should setStartDate', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const action = { type: 'SET_START_DATE', startDate: moment(1000)}
    const state = filtersReducer(currentState, action)
    expect(state.startDate).toEqual(moment(1000))
})

//should set end date filter 

test('should setEndDate', () => {
    const currentState = {
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const action = { type: 'SET_END_DATE', endDate: moment(4000)}
    const state = filtersReducer(currentState, action)
    expect(state.endDate).toEqual(moment(4000))

})