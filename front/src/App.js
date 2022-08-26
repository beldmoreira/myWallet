import React from "react";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import {AuthProvider} from "./contexts/AuthContext";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";

function App () {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path = "/login" element={<Login />} />
                    <Route path = "/home" element={<Home/>}/>
                    <Route path = "/register" element={<SignUp/>} />
                    <Route path = "/add" element={<Deposit/>}/>
                    <Route path = "/withdraw" element={<Withdraw/>} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;