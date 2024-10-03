import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from "./App";
import Login from "./component/Login";
import {Hello} from "./component/Hello";
import Car from "./component/Car";

function RouterWeb(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/hello" element={<Hello/>}/>
                <Route path="/car" element={<Car/>}/>
                <Route path="*" element={<h1>Không tìm thấy trang Web theo yêu cầu</h1>}/>
            </Routes>
        </Router>
    )
}
export default RouterWeb;