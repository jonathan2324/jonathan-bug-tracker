import React from 'react'
import ContributionsListItem from './ContributionsListItem'
import {connect } from 'react-redux'

export const ContributionsList = (props) =>{


    return (

    <div>
        
        {
            props.bug.contributions.length === 1 ? 
            (<p>No contributions</p>) : 
            (props.bug.contributions.filter((contribution) =>(contribution.id !== "0") ).map((contribution) => {
                return <ContributionsListItem key={contribution.id} bug={props.bug} bugID={props.bug.id} {...contribution}/>}))
        
        } 

        
    </div>
)}


export default connect()(ContributionsList)

