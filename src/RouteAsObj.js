import React from "react";
import { useRoutes, Outlet } from "react-router";
import { Link } from "react-router-dom";

const RouteAsObj = () => {
  let element = useRoutes([
    { path: "/", element: <Route1 /> },
    { path: "route2", element: <Route2 /> },
    {
      path: "route3",
      element: <Route3 />,
      children: [
        { path: "child1", element: <Child1 /> },
        { path: "child2", element: <Child2 /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);

  return (
    <div>
      <ul>
        <li>
          <Link to="" className="navlink1">Route1</Link>
        </li>
        <li>
          <Link to="route2" className="navlink1">Route2</Link>
        </li>
        <li>
          <Link to="route3" className="navlink1">Route3</Link>
        </li>
      </ul>
      {element}
    </div>
  );
};

const Route1 = () => <h1 style={{color:'white',fontSize:21}}>Route1</h1>;
const Route2 = () => <h1 style={{color:'white',fontSize:21}}>Route2</h1>;
const Route3 = () => {
  return (
    <div>
      <h1 style={{color:'white',fontSize:21}}>Route3</h1>
      <ul>
        <li>
          <Link to="child1" className="navlink1">Child1</Link>
        </li>
        <li>
          <Link to="child2" className="navlink1">Child2</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
const Child1 = () => <h2 style={{color:'white',fontSize:21}}>Child1</h2>;
const Child2 = () => <h2 style={{color:'white',fontSize:21}}>Child2</h2>;
const NotFound = () => <h1 style={{color:'white',fontSize:21}}>NotFound</h1>;

export default RouteAsObj;
