import React, {useContext ,useState , useEffect} from "react";
import { Outlet } from "react-router-dom";

//import project
import CustomSnackbar from '../component/CustomSnackbar';
import Loading from "../component/Loading";
import MenuMobile from "../component/MenuMobile";
import Navbar from "./Navbar";


function Layout() {


  return (
    <>
      <div className="flex flex-col overflow-hidden h-[100vh]  w-[100%] px-3 py-3 border  relative">
        
          <Navbar/>
       
        <div className="overflow-auto h-full w-full no-scrollbar">
          <Loading/>
           <CustomSnackbar/>
           <Outlet />

        </div>
        
      </div>
      <MenuMobile/>
    </>
  );
}

export default Layout;
