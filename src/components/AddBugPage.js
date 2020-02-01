import React from 'react';
import BugForm from './BugForm'
import { connect } from 'react-redux'
import { addBug } from '../actions/bugs'

export class AddBugPage extends React.Component {
  onSubmit = (bug) => {
    this.props.addBug(bug)
    this.props.history.push('/')
  }
  render() {
    return (
      <div>
        <h1>Add bug</h1>
        <BugForm onSubmit={this.onSubmit}/>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addBug:(bug) => dispatch(addBug(bug))
  }
}

export default connect(undefined, mapDispatchToProps)(AddBugPage);