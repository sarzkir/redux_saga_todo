import postTypes from "./action-types"

export const initialPosts = {
  posts: [],
  post: {},
  isLoading: false
}

function postReducer(state = initialPosts, action) {
  switch(action.type){
    case postTypes.GET_POST_BY_USER_ID:
    case postTypes.GET_POSTS:
      return {
        ...state,
        posts: [ ...action.payload ],
        isLoading: false
      }
    case postTypes.GET_POST:
      return {
        ...state,
        post: action.payload
      }
    default:
      return state
  }
}