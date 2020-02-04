import React from 'react'
import { connect } from 'react-redux'
import ContributionsForm from '../components/ContributionsForm'
import { editContribution, removeContribution } from '../actions/bugs'


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
    
    editContribution = (contributionObj) => { //this is this.addContribution
        this.props.editContribution(this.props.bugID, this.props.id, contributionObj) //this represents the addContribution mapDispatchToProps
        this.setState(() => ({
            editing: false
        }))
      }
    
    removeContribution = () => {
        this.props.removeContribution(this.props.bugID, this.props.id)
    }

    render () {
    return (
    <div>


        {this.state.editing ? <ContributionsForm key={this.props.id} contribution={this.props} onSubmitContribution={this.editContribution}/> : <p>Last edited by: {this.props.name} contribution: {this.props.contribution}</p>}
        <button onClick={this.onEditChange}>{this.state.editing ? "Editing" : "Edit" }</button>
        <button onClick={this.removeContribution}>Remove</button>

    </div>
        )
    }   
}


const mapDispatchToProps = (dispatch) => {
    return {
        editContribution: (bugID, id, contributionObj) => dispatch(editContribution(bugID ,id, contributionObj)),
        removeContribution: (bugID, id) => dispatch(removeContribution(bugID, id))
    }


}

export default connect(undefined, mapDispatchToProps)(ContributionsListItem)