import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import WebsiteHome from "./WebsiteHome";
import WebsiteAboutus from './WebsiteAbout';
import WebsiteService from './WebsiteService';
import WebsiteContact from './WebsiteContact';



function WebsiteHeader() {
  return (
    <>
     
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar />}>
            <Route index element={<WebsiteHome />} />
            <Route path='/about' element= {<WebsiteAboutus /> } />
            <Route path='/service' element={<WebsiteService /> } />
            <Route path='/contact' element={<WebsiteContact /> } />
            </Route>
        </Routes>
      </BrowserRouter>
      </>
      )
    }

export default WebsiteHeader;
