import React from "react";
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom" 
import AddFood from "./components/admin/addFood";
import UserHome from "./components/user/userHome";
function App(){
    return(
       <Router>
            <Routes>
                <Route path="/add" element={<AddFood/>} />
                <Route path="/" element={<UserHome/>} />
            </Routes>
       </Router>
    )
}

export default App