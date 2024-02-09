import UserDetails from "./Components/UserDetailComponent/UserDetails"
import HomePageView from "./Components/HomeComponent/HomeComponent"
import Loginpage from "./Components/LoginComponents/LoginComponent"
import SignupPageTemp from "./Components/SignUpComponent/SignupPage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "./Components/WelcomePageComponents/WelcomePage";
import HomeLanding from "./Components/LandingPage/HomeLandingPage"


 export default function callingRootOfFunction(){
    return(
        <>
       
        <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Loginpage />}></Route>
            <Route path="/home" element={<HomePageView />}></Route>
            <Route path="/welcome" element={<WelcomePage />}></Route>
            <Route path="/usd" element={<UserDetails />} />
            <Route path="/signup" element={<SignupPageTemp />} />
            <Route path="*" element={<HomeLanding />}></Route>
        </Routes>
        </BrowserRouter>
        </>
    )
 }