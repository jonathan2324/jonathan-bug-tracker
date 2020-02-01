import React from 'react'
import { createStore, combineReducers} from 'redux'


//bugReducer


const bugReducerDefaultState = []

const bugReducer = (state = bugReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

//Store creation

const store = createStore(bugReducer)







