import React from "react"
import { Switch, Route } from "react-router-dom"

//components
import PostsContainer from "../../views/Posts";
import LoginContainer from "../../views/Login";
import RegisterContainer from "../../views/Register";
import HomeContainer from "../../views/Home";

const MainLayoutContainer = () => {

  return (
    <div className="main-layout-container">
      <div className="navigation">
        <ul>
          <li></li>
        </ul>
      </div>
      <div className="content-container">
        <Switch>
          <Route path="/posts" component={PostsContainer} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/register" component={RegisterContainer} />
          <Route path="/" component={HomeContainer} />
        </Switch>
      </div>
      <div className="footer-container">
        All rights reserved &copy; Copyright 2019
      </div>
    </div>
  )

}

export default MainLayoutContainer