import  getVisibleBugs  from '../../selectors/bugs'
import moment from 'moment'
import bugs from '../fixtures/bugs'

//testing text filtering
test('Should filter by text value', () => {
    const filters = {
        text: 'j',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleBugs(bugs, filters)
    expect(result).toEqual([bugs[2]])
})
//testing filtering by startDate and using moment(0) in order to exclude bugs[1]
test('should filter by startDate', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = getVisibleBugs(bugs, filters)
    expect(result).toEqual([bugs[2], bugs[0]])
})

//should filter by endDate
test('Should filter by endDate ', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = getVisibleBugs(bugs, filters)
    expect(result).toEqual([ bugs[0], bugs[1] ])
})

//should sort by date

test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleBugs(bugs, filters)
    expect(result).toEqual([ bugs[2], bugs[0], bugs[1] ])
})

//should sort by severity
test('Should sort by date', () => {
    const filters = {
        text: '',
        sortBy: 'severity',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleBugs(bugs, filters)
    expect(result).toEqual([ bugs[1], bugs[0], bugs[2] ])
})
