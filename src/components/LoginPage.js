import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'


const LoginPage = ({ startLogin }) => (
    <div>
        <button onClick={startLogin}>Log in</button>
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}
export default connect(undefined, mapDispatchToProps)(LoginPage)