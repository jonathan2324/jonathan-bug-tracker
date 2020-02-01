import { createStore, combineReducers } from 'redux'
import bugReducer from '../reducers/bugs'
import filtersReducer from '../reducers/filters'

export default () => {
    const store = createStore(
        combineReducers({
            bugs: bugReducer,
            filters: filtersReducer
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )


    return store
}
