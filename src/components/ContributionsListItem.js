import React from 'react'
import { render } from 'enzyme'

export const ContributionsListItem = ({name, contribution}) => (
    <div>
        <p>
            Last edited by: {name} contribution: {contribution}
        </p>
        <button>Edit</button>
        <button>Remove</button>

    </div>
)

export default ContributionsListItem