import React from 'react';
import { connect } from 'react-redux'
import BugForm from '../components/BugForm'
import { removeBug } from '../actions/bugs'
import { editBug } from '../actions/bugs';

export class EditBugPage extends React.Component {
  //method for onSubmit using editBug  dispatch action 
  onSubmit = (bugFormObject) => { //this bugFormObject variable is from the BugForm where we use this.props.onSubmit({}) and created a bug object
    this.props.editBug(this.props.bug.id, bugFormObject)  //need to use this variable because it represents the updated object but the id comes from mapStateToProps
    this.props.history.push('/')
  }
  //method for onRemove using removeBug dispatch action
  onRemove = (e) => {
    this.props.removeBug({ id: this.props.bug.id })
    this.props.history.push('/')

  }

  render() {

  
  return (
    <div >
      <h2>Ticket number: {this.props.bug.id.substr(0,8)}</h2>
      <BugForm 
      
      bug={this.props.bug} //This represents the bug from mapStateToProps, this is used in BugForm when we check if props.bug ? or use default
      onSubmit={this.onSubmit}/>
      <button 
        
        onClick={this.onRemove}>Remove</button>
    </div>
  );
}
}


const mapStateToProps = (state, props) => {
  return {
    bug: state.bugs.find((bug) => bug.id === props.match.params.id)
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    editBug: (id, bugFormObj) => dispatch(editBug(id, bugFormObj)),
    removeBug: (data) => dispatch(removeBug(data)) //we can call the variable being passed in whatever we want 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBugPage);