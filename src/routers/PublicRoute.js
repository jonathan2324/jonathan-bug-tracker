import React from 'react'
import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'


export const PublicRoute = ({ isAuthenticated, component: Component, ...rest}) => (
    
    <Route {...rest} component={(props) => (
        isAuthenticated ? (<Redirect to="/dashboard"/> ) 
        : (
                <Component {...props} />
            
            ) 
    )}/>

)

const mapStateToProps = (state) => {
    return {
        isAuthenticated: !!state.auth.uid //checks the truthy value because if the state says there is no auth uid we will get undefined so this turns it true or false
        
    }
}

export default connect(mapStateToProps)(PublicRoute)