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
      <div className="flex flex-col overflow-hidden safe-area h-screen  w-[100%]   bg-[#F3F3F3]  relative">
        <div className=" bg-[#F3F3F3] shadow-2xl sticky top-0 w-full z-50">
          <Navbar/>
        </div>
          
       
        <div className="overflow-auto h-full w-full overflow-x-hidden  no-scrollbar bg-[#F3F3F3]">
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
