import React from 'react'
import { connect } from 'react-redux'
import ContributionsForm from '../components/ContributionsForm'
import { startEditContribution, startRemoveContribution } from '../actions/bugs'


export class ContributionsListItem extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            editing: false,
            bugID: this.props.bugID,
            contributionID: this.props.id
        }
    }
    
    onEditChange = (e) => {
        const editing = !this.state.editing
        this.setState(() => ({ editing: editing }))
    }
    
    startEditContribution = (contributionObj) => { //this is this.addContribution
        this.props.startEditContribution(this.props.bugID, this.props.id, contributionObj) //this represents the addContribution mapDispatchToProps
        this.setState(() => ({
            editing: false
        }))
      }
    
      startRemoveContribution = () => {
        this.props.startRemoveContribution(this.props.bugID, this.props.id)
    }

    render () {
    return (
    <div>


        {this.state.editing ? <ContributionsForm key={this.props.id} contribution={this.props} onSubmitContribution={this.startEditContribution}/> : <p>Last edited by: {this.props.name} contribution: {this.props.contribution}</p>}
        <button onClick={this.onEditChange}>{this.state.editing ? "Editing" : "Edit" }</button>
        <button onClick={this.startRemoveContribution}>Remove</button>

    </div>
        )
    }   
}


const mapDispatchToProps = (dispatch) => {
    return {
        startEditContribution: (bugID, id, contributionObj) => dispatch(startEditContribution(bugID ,id, contributionObj)),
        startRemoveContribution: (bugID, id) => dispatch(startRemoveContribution(bugID, id))
    }


}

export default connect(undefined, mapDispatchToProps)(ContributionsListItem)