import loadable from "@loadable/component";
import React from "react";
import { NavLink as Link, Route, Routes } from "react-router-dom";
import Invoices, { Invoice } from "./Invoices";
import LoginPage from "./LoginPage";
import PrivateRoute from "./PrivateRoute";
import ProtectedPage from "./ProtectedPage";
import RouteAsObj from "./RouteAsObj";
import Search from "./Search";

const Loading = () => {
  return <div>Loading...</div>;
};

const Dashboard = loadable(() => import("./Dashboard.js"), {
  fallback: <Loading />,
});

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active" end className="navlink">
              Home
            </Link>
          </li>
          <li>
            <Link to="/dashboard" activeClassName="active"  className="navlink">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/about" activeClassName="active"  className="navlink">
              About
            </Link>
          </li>
          <li>
            <Link to="/object_route" activeClassName="active"  className="navlink">
              Route as Object
            </Link>
          </li>
          <li>
            <Link to="/search" activeClassName="active"  className="navlink">
              Search
            </Link>
          </li>
          <li>
            <Link to="/public" activeClassName="active"  className="navlink">
              Public Page
            </Link>
          </li>
          <li>
            <Link to="/protected" activeClassName="active"  className="navlink">
              Protected Page
            </Link>
          </li>
          <li>
            <Link to="/invoices" activeClassName="active"  className="navlink">
              Invoices
            </Link>
          </li>
        </ul>
      </nav>
      <div className="main">
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="about" element={<About />}></Route>
          <Route path="dashboard/*" element={<Dashboard />}></Route>
          <Route path="object_route/*" element={<RouteAsObj />}></Route>
          <Route path="search" element={<Search />}></Route>
          <Route path="public" element={<PublicPage />}></Route>
          <Route
            path="protected"
            element={
              <PrivateRoute>
                <ProtectedPage name={'John'} />
              </PrivateRoute>
            }
          ></Route>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="invoices" element={<Invoices />}>
            <Route
              index
              element={<p style={{color:'white',fontSize:21}}>Please select an invoice above</p>}
            ></Route>
            <Route path=":invoiceId" element={<Invoice />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export const Home = () => {
  return (<div><p style={{color:'deepskyblue',fontSize:21}}>You are in Home page</p>
    <pre style={{color:'white',fontSize:21}}>
      We are having a few navigation links, which are defined using the Link component.<br></br> 
      The to property will determine the URL to which the user needs to be navigated.<br></br>
      The component that needs to be rendered when the user is navigated to a particular path <br></br>
      is defined by the element property in the Route component.<br></br> 
      For example, /about route will render the About component.<br></br>
      If you want to display a 404 page when the path does not match with <br></br>
      any of the routes then you can define a route with path as *.<br></br>
      Finally, we need to wrap all the Route components inside the Routes component,<br></br>
      which is again exported from react-router-dom.<br></br>
      The order of Route components does not matter. <br></br>
      React router will match the best route irrespective of order.<br></br>
      you will see that we are importing NavLink as the Link component<br></br> 
      and also we have added activeClassName property with a value of 'active' to the Link component.<br></br>
      The active class will be added to the anchor, whichever matches the current URL.
    </pre>
  </div>);
};
export const About = () => {
  return <div style={{color:'white',fontSize:21}}>This is the page where you put details about yourself</div>;
};
export const PublicPage = () => {
  return <div style={{color:'white',fontSize:21}}>This page can be accessed by anyone</div>;
};
export const NotFound = () => {
  return <div style={{color:'white',fontSize:21}}>This is a 404 page</div>;
};

export default App;
