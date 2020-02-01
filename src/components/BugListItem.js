import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { toggleCompletedBug } from '../actions/bugs'

export const BugListItem = ({ dispatch, id, name, description, severity, createdAt, completed}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>
                {name}
            </h3>
            <p>{description}</p>
            <p>
                {severity} - {createdAt}
            </p>
        </Link>

        <button onClick={(e) => dispatch(toggleCompletedBug(id, completed))}>{completed ? 'Closed': 'Open'}</button>
    </div>


)


export default connect()(BugListItem)