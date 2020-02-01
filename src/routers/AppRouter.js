import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import DashboardPage from '../components/DashboardPage'
import {createBrowserHistory} from 'history'
import AddBugPage from '../components/AddBugPage'
import NotFoundPage from '../components/NotFoundPage'
import HeaderPage from '../components/HeaderPage'
import EditBugPage from '../components/EditBugPage'


export const history = createBrowserHistory()

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <HeaderPage/>
            <Switch>
                <Route path="/" component={DashboardPage} exact={true}/> 
                <Route path="/create" component={AddBugPage}/>
                <Route path="/edit/:id" component={EditBugPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>

)

export default AppRouter