import React, { useState } from "react";
import { Success } from "./success";
import "../css/layout.css";
import MakePayment from "./makePayment";
import payment from '../assets/payment.png'
export const Layout = () => 
{
  const [success, setSuccess] = useState(false);
  return (
    <div className="container">
      {
      !success ? (
        <>
          <div className="left-image">
            <img src={payment} alt="cup" style={{width:'300px',height:'300px',marginTop:'20%'}} />
          </div>
          <MakePayment setSuccess={setSuccess} />
        </>
      ) : (
        <Success />
      )}
    </div>
  );
};
