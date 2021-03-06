import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { startSetBugs } from '../src/actions/bugs'
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore'
import 'normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css'
import './styles/styles.scss'
import { firebase } from './firebase/firebase'
import { login, logout } from '../src/actions/auth'



const store = configureStore()


// store.dispatch(addBug({ name: 'Jonathan Huertas', description: 'Error in function ABC', severity: 'urgent'}))
// store.dispatch(addBug({ name: 'Kanye West', severity: 'low', createdAt: 1000}))
// store.dispatch(addBug({ name: 'Lebron James', severity: 'moderate'}))
// store.dispatch(addBug({ name: 'Step curry', severity: 'urgent'}))
// store.dispatch(sortByDate())

// const state = store.getState()
// const visibleBugs = getVisibleBugs(state.bugs, state.filters)
// console.log(visibleBugs)


const jsx = (
    
        <Provider store={store}>
            <AppRouter />
        
        </Provider>
    
)

let hasRendered = false //have not rendered
const renderApp = () => {
    if(!hasRendered) { //if we have not rendered, we are going to render
        ReactDOM.render(jsx, document.getElementById('root'));
        hasRendered = true
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

firebase.auth().onAuthStateChanged((user) => {
    if(user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetBugs()).then(() => {
            renderApp()
            if(history.location.pathname === '/') {
                history.push('/dashboard')
            }
        })
    } else {
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
