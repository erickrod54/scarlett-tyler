import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About, ContactPage, HireMe, HomePage, ProjectsPage, ServicesPage } from "./pages/index-pages";

 /**
 * Scarlett-taylor portfolio - version 1.03 - App js -
 * Features:
 *
 *      ---> Implementing 'react-router-dom' 
 *            for navigation.  
 * 
 * Note: this file is going to be added more data
 * 
 * * */

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="about" element={<About />}/>
          <Route path="projects" element={<ProjectsPage />}/>
          <Route path="services" element={<ServicesPage />}/>
          <Route path="hire-me" element={<HireMe />}/>
          <Route path="contact" element={<ContactPage />}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
