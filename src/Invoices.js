import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";

export const Invoices = () => {
  const invoiceIds = ["50001", "50002", "50003"];
  return (
    <>
      <h2 style={{color:'white',fontSize:21}}>Invoices</h2>
      <ul className="invoices">
        {invoiceIds.map((invoiceId) => {
          return (
            <li key={invoiceId}>
              <Link to={`/invoices/${invoiceId}`} className="navlink1">
                View Invoice {invoiceId}
              </Link>
            </li>
          );
        })}
        {/* It picks one of the best elements from the React Router 
        library called Outlet to render any matching children for a particular route. */}
        <Outlet />
      </ul>
    </>
  );
};

export const Invoice = () => {
  const params = useParams();

  return (
    <>
      <h2 style={{color:'white',fontSize:21}}>Details of invoice {params.invoiceId}</h2>
    </>
  );
};

export default Invoices;
