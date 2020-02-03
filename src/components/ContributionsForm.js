import React from 'react'



export class ContributionForm extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            name: '',
            contribution: ''
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
        this.props.addContribution({
            name: this.state.name,
            contribution: this.state.contribution
        })

        this.setState(() => ({
            name: '',
            contribution: ''
        }))
        
    }


    render () {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='Enter name' value={this.state.name} onChange={this.onNameChange}/>
                    <input type='text' placeholder='Enter contribution' value={this.state.contribution} onChange={this.onContributionChange}/>
                    <button>Save contribution</button>
                </form>
            
            </div>
        )
    }
}


export default ContributionForm