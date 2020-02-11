import moment from 'moment'

const bugs = [{
    id: '1',
    name: 'Lebron',
    description: 'Error in X',
    notes: 'notes 1',
    priority: 'Med',
    createdAt: 0,
    completed: true,
    contributions: [{
        name: 'Wade',
        contribution: 'Error3'
    }]

}, {
    id: '2',
    name: 'Steph',
    description: 'Error in dashboard',
    notes: 'notes 2',
    priority: "High",
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    completed: false,
    contributions: [{
        name: 'Mike',
        contribution: 'Error1'
    }]
}, {
    id: '3',
    name: 'Jon',
    description: 'database error',
    notes: 'notes 3',
    priority: 'Low',
    createdAt: moment(0).add(4, 'days').valueOf(),
    completed: false,
    contributions: [{
        name: 'Jason',
        contribution: 'Error2'
    }]

    }
]

export default bugs