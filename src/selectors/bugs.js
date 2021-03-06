import moment from 'moment'


//Get visible bugs
const getVisibleBugs = (bugs, { text, sortBy, startDate, endDate, filterBy }) => {
    return bugs.filter((bug) => {
        const createdAtMoment = moment(bug.createdAt)
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true
        const textMatch = bug.name.toLowerCase().includes(text.toLowerCase())

        return startDateMatch && endDateMatch && textMatch
    }).sort((a, b) => {
        if(sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        }
        else {
            return null
        }
    }).sort((a,b) => {
        if(sortBy === 'completed') {
            return a.completed ? 1 : -1
        } else {
            return 0
        }
     }).sort((a, b) => {
        if(sortBy === 'priority') {
            if(a.priority === 'High') {
                return b.priority === 'Med' || b.priority === 'Low' ? -1 : 1
            }
            else if (a.priority === 'Med') {
                return b.priority === 'High' ? 1 : -1
            } else {
                return 0
            }
        
        }
        else {
            return null
        }
            
    }).filter((bug) => {
        if(filterBy === 'all') {
            return bug
        } else {
            return true
        }
    }).filter((bug) => {
        if(filterBy === 'uncompleted') {
            return bug.completed === false
        } else {
            return true
        }
    }).filter((bug) => {
        if(filterBy === 'completed') {
            return bug.completed === true
        } else {
            return true
        }
    })
}

export default getVisibleBugs
