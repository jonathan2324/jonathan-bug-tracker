import React from 'react'
import { connect } from 'react-redux'
import BugListItem from './BugListItem'
import selectBugs from '../selectors/bugs'

export const BugList = (props) => (
    <div>
        {props.uncompletedBugs.length > 0 && <h3>Uncompleted Bugs [{props.uncompletedBugs.length}]:</h3>}
        {
            props.bugs.length === 0 ? (

                <p>No bugs</p>

            ) : (
            
                props.uncompletedBugs.map((bug) => {
                    return <BugListItem key={bug.id} {...bug}/>
                 })

            )
        }
        {props.completedBugs.length > 0 && <h3>Completed bugs [{props.completedBugs.length}]:</h3>}
        {
            props.bugs.length === 0 ? (

                <p></p>

            ) : (
            
                props.completedBugs.map((bug) => {
                    return <BugListItem key={bug.id} {...bug}/>
                 })

            )
        }



    </div>
)

const mapStateToProps = (state) => {
    const visibleBugs = selectBugs(state.bugs, state.filters)

    return {
        bugs: visibleBugs,
        completedBugs: visibleBugs.filter((bug) => {return bug.completed === true}),
        uncompletedBugs: visibleBugs.filter((bug) => {return bug.completed === false})

    }
}

const ConnectedBugList = connect(mapStateToProps)(BugList)

export default ConnectedBugList