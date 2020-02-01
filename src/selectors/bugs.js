import moment from 'moment'

//Get visible bugs
const getVisibleBugs = (bugs, { text, sortBy, startDate, endDate }) => {
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
        else if (sortBy === 'severity') {
            if (a.severity === 'urgent') {
                return a.severity < b.severity ? 1 : -1
            } else if (a.severity === 'moderate') {
                return a.severity > b.severity ? -1 : 1 
            } else {
                return 0
            }
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
    })
}

export default getVisibleBugs