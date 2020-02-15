import React from 'react'
import { connect } from 'react-redux'
import { startUpdateLastUpdated } from '../actions/bugs'

export class ContributionsForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: this.props.contribution ? this.props.contribution.name : '',
            contribution: this.props.contribution ? this.props.contribution.contribution : '',
            updateLastUpdatedTimestamp: false,
            error: ''
        }
    }

    onNameChange = (e) => {
        const name = e.target.value
        this.setState(() => ({
            name: name,
            updateLastUpdatedTimestamp: true
        }))

    }

    onContributionChange = (e) => {
        const contribution = e.target.value
        this.setState(() => ({
            contribution: contribution,
            updateLastUpdatedTimestamp: true
        }))

    }

    // componentDidUpdate = () => {
    //     if(this.state.updateLastUpdatedTimestamp) {
    //         this.props.startUpdateLastUpdated(this.props.bug.id)
    //         this.setState(() => ({ updateLastUpdatedTimestamp: false}))
    //     } 
    // }
    


    onSubmit = (e) => {
        e.preventDefault()
        if(!this.state.name || !this.state.contribution) {
            this.setState(() => ({ error: 'Please provide a name and a contribution'}))
        } else {
            this.setState(() => ({ error: ''}))
            this.props.onSubmitContribution({
                name: this.state.name,
                contribution: this.state.contribution
            })
        }
        if(this.state.updateLastUpdatedTimestamp) {
            this.props.startUpdateLastUpdated(this.props.bug.id)
            
        } 

        this.setState(() => ({
            name: '',
            contribution: '',
            updateLastUpdatedTimestamp: false
            
        }))
        
    }


    render () {
        return (
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='Enter name' value={this.state.name} onChange={this.onNameChange}/>
                    <textarea type='text' placeholder='Enter contribution' value={this.state.contribution} onChange={this.onContributionChange}/>
                    <button>Save contribution</button>
                </form>
            
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch, props) => ({
    startUpdateLastUpdated:(id) => dispatch(startUpdateLastUpdated(id))
})

export default connect(undefined, mapDispatchToProps)(ContributionsForm)