import React from 'react';
import { connect } from 'react-redux'
import BugForm from '../components/BugForm'
import { startRemoveBug, startSetContributions } from '../actions/bugs'
import { startEditBug } from '../actions/bugs';
import { startAddContribution } from '../actions/bugs'
import { ContributionsForm } from './ContributionsForm';
import ContributionsList from '../components/ContributionsList'


export class EditBugPage extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        update: false
      }
    
  }
  //method for onSubmit using editBug  dispatch action 
  onSubmit = (bugFormObject) => { //this bugFormObject variable is from the BugForm where we use this.props.onSubmit({}) and created a bug object
    this.props.startEditBug(this.props.bug.id, bugFormObject)  //need to use this variable because it represents the updated object but the id comes from mapStateToProps
    this.props.history.push('/')
  }
  //method for onRemove using removeBug dispatch action
  onRemove = (e) => {
    this.props.startRemoveBug({ id: this.props.bug.id })
    this.props.history.push('/')

  }


  startAddContribution = (contributionObj) => {
    this.props.startAddContribution(this.props.bug.id, contributionObj)
    this.setState(() => ({
      update: true 
    }))
  }

  componentDidMount() {
    this.props.startSetContributions(this.props.bug.id)
    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.update === true){
      this.props.startSetContributions(this.props.bug.id)
      this.setState(() => ({
        update: false
      }))
    } 
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
      { Array.isArray(this.props.bug.contributions) ? <ContributionsForm bug={this.props.bug} onSubmitContribution={this.startAddContribution}/> : <p>Loading ...</p>}
      { Array.isArray(this.props.bug.contributions) ? <ContributionsList bug={this.props.bug} /> : <p>Loading...</p>}
      
        
      
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
    startEditBug: (id, bugFormObj) => dispatch(startEditBug(id, bugFormObj)),
    startRemoveBug: (data) => dispatch(startRemoveBug(data)), //we can call the variable being passed in whatever we want 
    startAddContribution: (id, contributionObj) => dispatch(startAddContribution(id, contributionObj)),
    startSetContributions: (id) => dispatch(startSetContributions(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBugPage);


/*

      <ContributionsForm bug={this.props.bug} onSubmitContribution={this.startAddContribution}/>      
      <ContributionsList bug={this.props.bug} />


*/