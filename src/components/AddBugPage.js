import React from 'react';
import BugForm from './BugForm'
import { connect } from 'react-redux'
import { startAddBug } from '../actions/bugs'

export class AddBugPage extends React.Component {
  onSubmit = (bug) => {
    this.props.startAddBug(bug)
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
    startAddBug:(bug) => dispatch(startAddBug(bug))
  }
}

export default connect(undefined, mapDispatchToProps)(AddBugPage);