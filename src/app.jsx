import "./app.css"
import { Route, Routes } from "react-router-dom";
import Home from "./components/home.jsx";
import Nav from "./components/nav.jsx";

function  App () {

    

    return (
    <>    
    
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path=""></Route>
    </Routes>
    </>
    )
    
}
export default App;