import React from 'react'
import { connect } from 'react-redux'
import BugListItem from './BugListItem'
import selectBugs from '../selectors/bugs'

export const BugList = (props) => (
    <div>

        {
            props.bugs.length === 0 ? (

                <p>No bugs</p>

            ) : (

                props.bugs.map((bug) => {
                    return <BugListItem key={bug.id} {...bug}/>
                 })

            )
        }



    </div>
)

const mapStateToProps = (state) => {
    return {
        bugs: selectBugs(state.bugs, state.filters)
    }
}

const ConnectedBugList = connect(mapStateToProps)(BugList)

export default ConnectedBugList