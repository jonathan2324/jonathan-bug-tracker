import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { startToggleCompletedBug } from '../actions/bugs'
import moment from 'moment'

export const BugListItem = ({ dispatch, id, name, description, priority, createdAt, completed}) => (
    <div>
        <Link to={`/edit/${id}`}>
            <h3>
                {name}
            </h3>
        </Link>
            <p>{description}</p>
            
            <p>{priority}</p>

            <p>
                {moment(createdAt).format('MMMM Do, YYYY')}
            </p>
        

        <button onClick={(e) => dispatch(startToggleCompletedBug(id, completed))}>{completed ? 'Closed': 'Open'}</button>
    </div>


)


export default connect()(BugListItem)