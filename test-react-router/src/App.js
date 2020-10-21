import React, { Component, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CharityProfilePage from "./Components/profile/CharityProfilePage";
import ConfirmationRequestPage from "./Components/NewRequest/ConfirmationRequestPage";
import Test from "./Components/profile/Test";
import {BrowserRouter as Router, Switch, Link} from 'react-router-dom';
import { Route } from 'react-router-dom';





export default function App() {
  // const [detailsCharity, setdetailsCharity] = useState({
  //   name: "Food Bank",
  //   description: "Other description!!!!",
  //   values: "We are here to help make people’s lives better. We do this by developing and delivering reliably good modern services, building and maintaining the best quality developments, working with local communities and building long-term partnerships, and  growing and using our position of influence to create positive change"
  // }
  // );

  const [detailsCharity, setdetailsCharity] = useState([
    {
      name: "Food Bank",
      description: "Peabody draws on over 150 years of history and expertise. Our new, bigger organisation has been inspired by the response to the 'Cathy Come Home' era of poor quality housing and poverty in Post-War Britain as well as George Peabody's vision of providing safe and affordable housing for the working poor of Victorian London",
      values: "We are here to help make people’s lives better. We do this by developing and delivering reliably good modern services, building and maintaining the best quality developments, working with local communities and building long-term partnerships, and  growing and using our position of influence to create positive change"
    
    },

  ]);


  return (
    <div className="App container">
    < CharityProfilePage data={detailsCharity}/>
    <ConfirmationRequestPage />
    </div>
    // 
    //   <CharityProfilePage name={"This is a long text"} />
    //   <CharityProfilePage taskData={detailsCharity} />
    // 
  );
}



