import moment from 'moment'

//Filters Reducer

const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
    filterBy: 'all'
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_PRIORITY':
            return {
                ...state,
                sortBy: 'priority'
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            }
        case 'SORT_BY_COMPLETED':
            return {
                ...state,
                sortBy: 'completed'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        case 'FILTER_DEFAULT':
            return {
                ...state,
                filterBy: 'all'
            }
        case 'FILTER_BY_COMPLETED':
            return {
                ...state,
                filterBy: 'completed'
            }
        case 'FILTER_BY_UNCOMPLETED':
            return {
                ...state,
                filterBy: 'uncompleted'
            }
        default: 
            return state
    }
}

export default filtersReducer