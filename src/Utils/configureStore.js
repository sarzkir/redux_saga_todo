import { createStore } from 'redux'

import reducers from './reducers'

//sagas

const store = createStore(reducers)

export default store