import UserDetails from "./Components/UserDetailComponent/UserDetails"
import HomePageView from "./Components/HomeComponent/HomeComponent"
import Loginpage from "./Components/LoginComponents/LoginComponent"
import SignupPageTemp from "./Components/SignUpComponent/SignupPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginComponentView from "./Components/LoginComponents/LoginComponent2"
 export default function callingRootOfFunction(){
    return(
        <>
       
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Loginpage />}></Route>
            <Route path="/welcome" element={<HomePageView />}></Route>
            <Route path="/usd" element={<UserDetails />} />
            <Route path="/signup" element={<SignupPageTemp />} />
            <Route path="*" element={<Loginpage />}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
 }