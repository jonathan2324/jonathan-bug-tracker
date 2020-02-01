import moment from 'moment'

const bugs = [{
    id: '1',
    name: 'Lebron',
    description: 'Error in X',
    notes: 'notes 1',
    severity: 'moderate',
    createdAt: 0,
    completed: true

}, {
    id: '2',
    name: 'Steph',
    description: 'Error in dashboard',
    notes: 'notes 2',
    severity: "urgent",
    createdAt: moment(0).subtract(4, 'days').valueOf(),
    completed: false
}, {
    id: '3',
    name: 'Jon',
    description: 'database error',
    notes: 'notes 3',
    severity: 'low',
    createdAt: moment(0).add(4, 'days').valueOf(),
    completed: false

    }
]

export default bugs