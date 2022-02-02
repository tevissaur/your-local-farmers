import { createStore } from 'redux'
import { testReducer } from './reducers'


const store = createStore(testReducer)

export default store