import postTypes from './action-types'

export default postCreators = {

  getAllPosts: () => {
    return {
      type: postTypes.GET_POSTS
    }
  },
  getPostsByUserRequested: (id) => {
    return {
      type: postTypes.GET_POST_BY_USER_ID,
      payload: id
    }
  }
}