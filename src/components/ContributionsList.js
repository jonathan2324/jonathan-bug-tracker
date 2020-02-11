import React from 'react'
import ContributionsListItem from './ContributionsListItem'
import {connect } from 'react-redux'

export const ContributionsList = (props) =>{


    return (

    <div>
        
        {
            props.bug.contributions.length === 0 ? 
            (<p>No contributions</p>) : 
            (props.bug.contributions.map((contribution) => {
                return <ContributionsListItem key={contribution.id} bugID={props.bug.id} {...contribution}/>}))
        
        } 

        
    </div>
)}


export default connect()(ContributionsList)


// {
//     props.bug.contributions.length === 0 ? 
//     (<p>No contributions</p>) : 
//     (props.bug.contributions.map((contribution) => {
//         return <ContributionsListItem key={contribution.id} bugID={props.bug.id} {...contribution}/>}))

// } 