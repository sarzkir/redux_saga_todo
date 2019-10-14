import { combineReducers } from "react-redux"

import postReducer from "../views/Posts/store/reducer"

export default combineReducers({
  posts: postReducer
})