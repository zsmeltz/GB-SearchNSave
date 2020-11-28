import React from "react";
import NavBar from "./Components/Navbar.js"
import SearchPage from "./Components/Pages/SearchPage.js"
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
   <div>
       <Router>
       <div>
       <NavBar/>
       <Route exact path="/" component={SearchPage} />
       </div>
       </Router>
   </div>

  );

};

export default App;