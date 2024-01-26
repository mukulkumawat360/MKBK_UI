import UserDetails from "./Components/UserDetailComponent/UserDetails"
import HomePageView from "./Components/HomeComponent/HomeComponent"
import Loginpage from "./Components/LoginComponents/LoginComponent"
import { BrowserRouter, Routes, Route } from "react-router-dom";
 export default function callingRootOfFunction(){
    return(
        <>
       
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Loginpage />}></Route>
            <Route path="/welcome" element={<HomePageView />}></Route>
            <Route path="/usd" element={<UserDetails />} />
            <Route path="*" element={<Loginpage />}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
 }