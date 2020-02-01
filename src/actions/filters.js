

//SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})
//SORT_BY_SEVERITY
export const sortBySeverity = () => ({
    type: 'SORT_BY_SEVERITY'
})
//SORT_BY_DATE
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
//SORT_BY_COMPLETED
export const sortByCompleted = () => ({
    type: 'SORT_BY_COMPLETED'
})
//SET_START_DATE
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})


//SET_END_DATE
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate

})