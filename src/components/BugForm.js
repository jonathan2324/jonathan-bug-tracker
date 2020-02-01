import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'



const now = moment()
console.log(now.format('MMM Do YYYY'))

class BugForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.bug ? props.bug.name : '',
            severity: props.bug ? props.bug.severity : 'low',
            description: props.bug ? props.bug.description : '',
            notes: props.bug ? props.bug.notes : '',
            createdAt: props.bug ? moment(props.bug.createdAt) : moment(),
            calendarFocused: false,
            error: ''
    
        }
    }
    

    onNameChange = (e) => {
        const name = e.target.value 
        this.setState(() => ({ name }))
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description }))
    }

    onNotesChange = (e) => {
        const notes = e.target.value
        this.setState(() => ({ notes }))       
    }

    onSeverityChange = (e) => {
        const severity = e.target.value
        this.setState(() => ({ severity }))
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({
                createdAt
            }))

        }

    }

    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calendarFocused: focused }))
    }

    onSubmit = (e) => {
        e.preventDefault()

        if (!this.state.name || !this.state.description) {
            this.setState(() => ({ error: 'Please provide an employee name and a description'}))
        } else {
            this.setState(() => ({ error: '' }))
            this.props.onSubmit({
                description: this.state.description,
                notes: this.state.notes,
                name: this.state.name,
                createdAt: this.state.createdAt.valueOf(),
                severity: this.state.severity
            })
        }
    }

    render () {
        return (
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='Employee name' autoFocus value={this.state.name} onChange={this.onNameChange}/>
                    <select value={this.state.severity} onChange={this.onSeverityChange}>
                        <option value="urgent">Urgent</option>
                        <option value="moderate">Moderate</option>
                        <option value="low">Low</option>
                    </select>

                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    />

                    <textarea type='text' maxLength="50" placeholder='Enter error description (max length 50 characters)' value={this.state.description} onChange={this.onDescriptionChange}/>
                    <textarea type='text' placeholder='Enter important notes about error' value={this.state.notes} onChange={this.onNotesChange}/>
                    <button>Add Bug</button>

                </form>
            </div>
        )
    }
}

export default BugForm