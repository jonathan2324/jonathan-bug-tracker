import React from 'react'
import {connect} from 'react-redux'
import { setTextFilter, sortByDate, sortBySeverity, setStartDate, setEndDate, sortByCompleted } from '../actions/filters'
import { DateRangePicker } from 'react-dates'



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
        } else if (e.target.value === 'severity') {
            this.props.sortBySeverity()
        } else if (e.target.value === 'completed') {
            this.props.sortByCompleted()
        }
    }

    render() {
        return (
            <div>
                <input type='text' value={this.props.filters.text} onChange={this.onTextChange}/>
                <select value={this.props.filters.sortBy} onChange={this.onSortChange}>
                    <option value='date'>Date</option>
                    <option value='severity'>Severity</option>
                    <option value='completed'>Completed status</option>
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
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortBySeverity: () => dispatch(sortBySeverity()),
    sortByCompleted: () => dispatch(sortByCompleted()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(BugListFilters)