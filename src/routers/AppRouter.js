import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import DashboardPage from '../components/DashboardPage'
import { createBrowserHistory } from 'history'
import AddBugPage from '../components/AddBugPage'
import NotFoundPage from '../components/NotFoundPage'
import EditBugPage from '../components/EditBugPage'
import LoginPage  from '../components/LoginPage'
import PrivateRoute from '../routers/PrivateRoute'
import PublicRoute from '../routers/PublicRoute'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/> 
                <PrivateRoute path="/dashboard" component={DashboardPage} />
                <PrivateRoute path="/create" component={AddBugPage}/>
                <PrivateRoute path="/edit/:id" component={EditBugPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </Router>

)

export default AppRouter