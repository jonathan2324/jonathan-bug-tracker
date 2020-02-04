import React from 'react'



export class ContributionsForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: this.props.contribution ? this.props.contribution.name : '',
            contribution: this.props.contribution ? this.props.contribution.contribution : '',
            error: ''
        }
    }

    onNameChange = (e) => {
        const name = e.target.value
        this.setState(() => ({
            name: name
        }))
    }

    onContributionChange = (e) => {
        const contribution = e.target.value
        this.setState(() => ({
            contribution: contribution
        }))
    }

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
        

        this.setState(() => ({
            name: '',
            contribution: ''
        }))
        
    }


    render () {
        return (
            <div>
                <p>{this.state.error}</p>
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='Enter name' value={this.state.name} onChange={this.onNameChange}/>
                    <input type='text' placeholder='Enter contribution' value={this.state.contribution} onChange={this.onContributionChange}/>
                    <button>Save contribution</button>
                </form>
            
            </div>
        )
    }
}


export default ContributionsForm