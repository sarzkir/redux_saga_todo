import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"

const PostsContainer = () => {
  return (
    <Switch>
      <Route path="/posts/new-post" exact component={CreatePostContainer} />
      <Route path="/posts/:id" exact component={SinglePostContainer} />
      <Route path="/posts" exact component={ViewPostsContainer} />
      <Redirect from="/posts" to="/posts" />
    </Switch>
  )
}

export default PostsContainer