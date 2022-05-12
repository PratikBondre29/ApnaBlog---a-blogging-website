import React, { lazy, Suspense, useState } from "react";

import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch,Route, useLocation} from "react-router-dom";
import Homescreen from './screens/Homescreen';
import Landingscreen from './screens/Landingscreen';
import Navbar from './components/child/Navbar/Navbar';


import Loginscreen from './screens/Loginscreen';
import Register from './screens/Register';


// import Login from "./pages/Login/Login";
// import Home from "./pages/Home";
// import Register from "./pages/Register/Register";
import Splash from "./pages/Splash/Splash";
// import Blog from "./pages/Blog/Blog";
import BlogWithKey from "./pages/Blogwithkey/BlogWithKey";
import BlogSearched from "./components/child/BlogSearched";
import UserRoute from './helper/UserRoute';
import CreateBlog from './pages/CreateBlog/CreateBlog';
import EditBlog from './pages/EditBlog/EditBlog';

// import AllDbBlogs from './pages/AllDbBlogs/AllDbBlogs';

import ShowDbBlogs from "./components/ShowDbBlogs/ShowDbBlogs";
import Profile from './components/Profile/Profile';
import Loader from "./components/Loader";



const Blog = lazy(() => import("./pages/Blog/Blog"));
const AllDbBlogs = lazy(() => import("./pages/AllDbBlogs/AllDbBlogs"));


const renderLoader = () => (<Loader />)



function App() {
  

  // const CheckPath = () => {
  //   const location =
  //   console.log(location.pathname);
  // }
  // {CheckPath()}
  return (
    <>
    <div className="App">
    <BrowserRouter>
        <Suspense fallback={renderLoader()}>
        <Switch>

        <UserRoute path="/home" exact component={Homescreen} />
        <UserRoute path="/create" exact component={CreateBlog} />
        <UserRoute path="/posts/:id/edit" exact component={EditBlog} />
        <Route path="/register" exact component={Register} />
        <Route path="/" exact component={Splash} />
        <Route path="/login" exact component={Loginscreen} />
        <Route path="/allblogs" exact component={AllDbBlogs} />
        <Route path="/myprofile" exact component={Profile} />
        <Route path="/viewblog/:id" exact component={ShowDbBlogs} />
         {/* <Route path="/" exact component={Landingscreen} /> */}

          {/* mynewlycreated */}

          {/* <Route path="/home" exact component={Home} /> */}
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/:id" exact component={Blog} />
          <Route path="/blogs/:blogid" exact component={BlogWithKey} />
          {/* <Route path="/login" exact component={Login} /> */}
          {/* <Route path="/register" exact component={Register} /> */}
          <Route path="/blogs/searched/:id" exact component={BlogSearched} />
          {/* mynewlycreated */}
        </Switch>
        </Suspense>
    </ BrowserRouter>
    </div>
    </>
  );
}

export default App;
