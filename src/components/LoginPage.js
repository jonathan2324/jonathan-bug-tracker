import React from 'react'
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'


const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <button className="button" onClick={startLogin}>Log in</button>
        </div>
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}
export default connect(undefined, mapDispatchToProps)(LoginPage)