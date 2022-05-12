import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import Register from "./pages/Register/Register";
import Splash from "./pages/Splash/Splash";
import Blog from "./pages/Blog/Blog";
import BlogWithKey from "./pages/Blogwithkey/BlogWithKey";
import BlogSearched from "./components/BlogSearched";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Splash} />
        <Route path="/home" exact component={Home} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/blog/:id" exact component={Blog} />
        <Route path="/blogs/:blogid" exact component={BlogWithKey} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/blogs/searched/:id" exact component={BlogSearched} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
