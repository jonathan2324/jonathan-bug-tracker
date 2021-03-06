import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'




const timestamp = moment(moment(9852629862)) //timestamp in unix epoch

console.log(`Last updated ${moment(timestamp).fromNow()}`)

class BugForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.bug ? props.bug.name : '',
            priority: props.bug ? props.bug.priority : 'Low',
            description: props.bug ? props.bug.description : '',
            notes: props.bug ? props.bug.notes : '',
            createdAt: props.bug ? moment(props.bug.createdAt) : moment(),
            lastUpdatedAt: props.bug ? moment(props.bug.lastUpdatedAt) : moment(),
            calendarFocused: false,
            error: ''
    
        }
    }
    

    onNameChange = (e) => {
        const name = e.target.value 
        this.setState(() => ({ name, lastUpdatedAt: moment() }))
    }

    onDescriptionChange = (e) => {
        const description = e.target.value
        this.setState(() => ({ description, lastUpdatedAt: moment() }))
    }

    onNotesChange = (e) => {
        const notes = e.target.value
        this.setState(() => ({ notes, lastUpdatedAt: moment() }))       
    }

    onPriorityChange = (e) => {
        const priority = e.target.value
        this.setState(() => ({ priority, lastUpdatedAt: moment() }))
    }

    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({
                createdAt, lastUpdatedAt: moment()
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
                lastUpdatedAt: this.state.lastUpdatedAt.valueOf(),
                priority: this.state.priority
            })
        }
    }

    render () {
        return (
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='Employee name' autoFocus value={this.state.name} onChange={this.onNameChange}/>
                    <select value={this.state.priority} onChange={this.onPriorityChange}>
                        <option value="High">High</option>
                        <option value="Med">Med</option>
                        <option value="Low">Low</option>
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
                    <button>Save Bug</button>

                </form>
            </div>
        )
    }
}

export default BugForm