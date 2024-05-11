import React from "react";
import { BrowserRouter as Router,Routes,Route, BrowserRouter } from "react-router-dom" 
import AddFood from "./components/admin/addFood";
function App(){
    return(
       <Router>
            <Routes>
                <Route path="/add" element={<AddFood/>} />
            </Routes>
       </Router>
    )
}

export default App