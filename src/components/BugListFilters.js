import React from 'react'
import {connect} from 'react-redux'
import { setTextFilter, sortByDate, sortByPriority, setStartDate, setEndDate, sortByCompleted, filterDefault, filterByCompleted, filterByUncompleted } from '../actions/filters'
import { DateRangePicker } from 'react-dates'
import getVisibleBugs from '../selectors/bugs'



export class BugListFilters extends React.Component {
    state = {
        calendarFocused: null
    }

    onDatesChange = ({startDate, endDate}) => { //destructure object that is passed into this function by the date range picker
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)        //these are the startDate and endDate that was required by airbnb
    }

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({ calendarFocused: calendarFocused }))
    }

    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
        }
    
    onSortChange = (e) => {
        if (e.target.value === "date") {
            this.props.sortByDate()
        } else if (e.target.value === 'priority') {
            this.props.sortByPriority()
        } 
    }

    onFilterChange = (e) => {
        if(e.target.value === 'uncompleted') {
            this.props.filterByUncompleted()
        } else if (e.target.value === 'completed') {
            this.props.filterByCompleted()
        } else if (e.target.value === 'all') {
            this.props.filterDefault()
        }
    }

    render() {
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={this.onTextChange}/>
                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value='date'>Date</option>
                    <option value='priority'>Priority</option>
                    
                </select>
                <select value={this.props.filters.filterBy} onChange={this.onFilterChange}>
                    <option value='all'>View all</option>
                    <option value='uncompleted'>View open</option>
                    <option value='completed'>View closed</option>
                </select>
                <DateRangePicker 
                startDate={this.props.filters.startDate} 
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calendarFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => false}
                />
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    const visibleBugs = getVisibleBugs(state.bugs, state.filters)
    return {
        filters: state.filters,
        completedBugs: visibleBugs.filter((bug) => { return bug.completed === 'true'}),
        uncompletedBugs: visibleBugs.filter((bug) => { return bug.completed === 'false'})
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByPriority: () => dispatch(sortByPriority()),
    sortByCompleted: () => dispatch(sortByCompleted()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate)),
    filterDefault: () => dispatch(filterDefault()),
    filterByCompleted: () => dispatch(filterByCompleted()),
    filterByUncompleted: () => dispatch(filterByUncompleted())
})

export default connect(mapStateToProps, mapDispatchToProps)(BugListFilters)