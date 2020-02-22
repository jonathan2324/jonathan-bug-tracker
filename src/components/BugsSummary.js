import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import getVisibleBugs from '../selectors/bugs'

export const BugsSummary = ({ bugCountTotal, uncompletedBugs }) => {
    const tasksWord = uncompletedBugs === 1 ? 'task': 'tasks'
    const needWord = uncompletedBugs === 1 ? 'needs' : 'need'
    return (
        <div className='page-header'>
            <div className='content-container'>
                <p>Dashboard total: {bugCountTotal}</p> 
                {uncompletedBugs !== 0 && <p>Viewing {uncompletedBugs} {tasksWord} that {needWord} to be completed</p>}
                <div>
                    <Link to="/create">Add Bug</Link>
                </div>
            </div>
        </div>
    )


}

const mapStateToProps = (state) => {
    const visibleBugs = getVisibleBugs(state.bugs, state.filters)
    return {
        bugCountTotal: state.bugs.length,
        uncompletedBugs: visibleBugs.filter((bug) => {return bug.completed === false}).length
    }
}

export default connect (mapStateToProps)(BugsSummary)