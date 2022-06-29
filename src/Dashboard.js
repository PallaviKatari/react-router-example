import React from "react";
import { Routes, Link, Route, useParams, useNavigate } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="" className="navlink1">Profile</Link>
        </li>
        <li>
          <Link to="orders" className="navlink1">Orders</Link>
        </li>
        <li>
          <Link to="quotes" className="navlink1">Quotes</Link>
        </li>
      </ul>
      <div className="dashboard">
        <Routes>
          <Route path="/" element={<Profile />}></Route>
          <Route path="orders" element={<Orders />}></Route>
          <Route path="quotes" element={<Quotes />}></Route>
          <Route path="order_details/:orderId" element={<OrderDetails />} />
        </Routes>
      </div>
    </div>
  );
};

export const Profile = () => {
  return <h2 style={{color:'white',fontSize:21}}>Profile</h2>;
};
export const Orders = () => {
  const orderIds = ["10001", "10002", "10003"];
  return (
    <>
      <h2 style={{color:'white',fontSize:21}}>Orders</h2>
      <ul className="orders">
        {orderIds.map((orderId) => {
          return (
            <li key={orderId}>
              <Link to={`/dashboard/order_details/${orderId}`} className="navlink1">
                View Order {orderId}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
export const Quotes = () => {
  return <h2 style={{color:'white',fontSize:21}}>Quotes</h2>;
};
export const OrderDetails = () => {
  const params = useParams();
  const navigate = useNavigate();

  const onBackClick = (e) => {
    e.preventDefault();
    // navigate(-1);
    navigate("/dashboard/orders");
  };

  return (
    <>
      <h2 style={{color:'white',fontSize:21}}>Details of order {params.orderId}</h2>
      <a href="#" onClick={onBackClick} style={{color:'white',fontSize:21}}>
        Back to Orders
      </a>
    </>
  );
};

export default Dashboard;
