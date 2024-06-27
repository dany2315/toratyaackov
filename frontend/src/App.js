import React, { useEffect, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
// import { jwtDecode } from "jwt-decode";

//import project
import Layout from "./layout";

//context
import { AuthContext } from "./context/authContext";
import { useNavigate } from "react-router-dom";
import Home from './pages/Home';
import Contact from "./pages/Contact";
import Rabanim from "./pages/Rabanim";
import NotFound from "./pages/NotFound";
import Evenements from "./pages/Evenements";
import Visa from "./pages/Visa";
import KoupatHolim from "./pages/KoupatHolim";
import Actions from "./pages/Actions";




function App() {

  const { isAuthenticated, isLog, logout ,user } = useContext(AuthContext);
  //const navigate = useNavigate()

  // useEffect(() => {
  //   verifToken();   
  // },[]);

  // const verifToken =  async () => {
  //   const token = localStorage.getItem("tokTraiteur");
  //   if (token) {
  //     const decoded = jwtDecode(token);
  //     const exp = decoded.exp * 1000; // Convertir la date d'expiration en millisecondes (le timestamp du JWT est en secondes)
  //     const currentTime = Date.now();
  //     if (currentTime < exp) {
  //       console.log("credential",decoded.credentials);
  //       const credentials = decoded.credentials;
  //       isLog(credentials) 
  //       if (!credentials.isVerified) {
  //         navigate('verifCode')
  //       }
  //     } else {
  //       console.log("expiration du token");
  //       logout();
  //     }
  //   } else {
  //     console.log("token vide");
  //     logout();
  //   }
  // };
  
  return (
    <Routes>
    <Route
      path="/"
      element={<Layout />}
    >
      <Route index element={<Home />} />
      <Route path="evenements" element={<Evenements/>} /> 
      <Route path="actions" element={<Actions/>} /> 
      <Route path="contact" element={<Contact/>}/>
      {/* <Route path="don" element={<Don/>} /> */}
      <Route path="visa" element={<Visa/>} />
      <Route path="koupatHolim" element={<KoupatHolim/>} />
      <Route path="rabanim" element={<Rabanim/>} />

    </Route>
    <Route path="*" element={<NotFound />} />  
    {/* <Route
      path="login"
      element={isAuthenticated ? <Navigate to="/" /> : <Login />}
    />
    <Route
      path="register"
      element={isAuthenticated ? <Navigate to="/" /> : <Register />}
    />
    <Route
      path="verifCode"
      element={!isAuthenticated ? <Navigate to="/login" /> :!user.isVerified? <VerifMail  />: <Navigate to="/" />}
    /> */}
  </Routes>
  );
}

export default App;
