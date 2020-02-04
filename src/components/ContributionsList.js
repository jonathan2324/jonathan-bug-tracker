import React from 'react'
import ContributionsListItem from './ContributionsListItem'


export const ContributionsList = (props) => (

    <div>
        {
            props.bug.contributions.length === 0 ? 
            (<p>No contributions</p>) : 
            (props.bug.contributions.map((contribution) => {
                return <ContributionsListItem key={contribution.id} bugID={props.bug.id} {...contribution}/>}))
        
        } 
        
    </div>
)


export default ContributionsList