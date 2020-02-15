import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { startToggleCompletedBug } from '../actions/bugs'
import moment from 'moment'

export const BugListItem = ({ dispatch, id, name, description, priority, createdAt, lastUpdatedAt, completedToggleDate, completed}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>
                {description}
            </h3>
        </Link>
            <p>Assigned to: {name}</p>
            
            <p>Priority: {priority}</p>
            
            <p>
                {`Created on: ${moment(createdAt).format('MMMM Do, YYYY')}`}
            </p>
            <p>
                {completed ? `Completed on: ${moment(completedToggleDate).format('MMMM Do, YYYY')}` : `Last updated: ${moment(lastUpdatedAt).fromNow()}`}
            </p>
        

        <button onClick={(e) => dispatch(startToggleCompletedBug(id, completed))}>{completed ? 'Closed': 'Open'}</button>
    </div>


)


export default connect()(BugListItem)