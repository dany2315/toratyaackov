import React, {useContext ,useState , useEffect} from "react";
import {  useLocation, useNavigate } from "react-router-dom";
import { MenuContext } from "../context/menuContext";
import logo from '../assets/logo.jpg';
import { MdOutlineMenu  } from "react-icons/md";
import  { MesureContext } from "../context/mesureContext";

function Navbar() {

      const {width} = useContext(MesureContext)
      const {menu,openMenu,closeMenu} = useContext(MenuContext)
      const navigate = useNavigate();
      const location = useLocation();
      const isMobile = width <= 1000
    

  return ( 
    <>
          <div className=" flex flex-row justify-between items-center w-full h-17 px-6 py-5  shadow-2xl border-b-2 bg-[#F3F3F3]  ">
            <div className="rounded-2xl cursor-pointer overflow-hidden" onClick={()=>{navigate('/')}}> 
              <img src={logo} alt="logo" className="h-11 w-11"/>
            </div>
            <div className="flex flex-row items-center space-x-3 py-3">
              

                {isMobile ? 
                <div className="flex flex-row active:scale-95  active:bg-slate-400 rounded-2xl px-2 cursor-pointer transition-all " onClick={()=>{if(menu){closeMenu()}else{openMenu()}}}>
                  <MdOutlineMenu size={40} color="#000000" />
                </div>: 
                <>
                <div className="gap-3 flex flex-row items-center rounded-2xl cursor-pointer " >
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-xl  active:scale-95 ${location.pathname === `/` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/')}}>
                    Acceuil
                  </div>
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-xl  active:scale-95 ${location.pathname === `/evenements` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/evenements')}}>
                    Evenements
                  </div>
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-xl  active:scale-95 ${location.pathname === `/actions` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/actions')}}>
                   Nos Actions
                  </div>
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-xl  active:scale-95 ${location.pathname === `/visa` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/visa')}}>
                   Visa
                  </div>
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-xl  active:scale-95 ${location.pathname === `/koupatHolim` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/koupatHolim')}}>
                    Koupat holim
                  </div>
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-xl  active:scale-95 ${location.pathname === `/don` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/')}}>
                    Don
                  </div>
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-xl  active:scale-95 ${location.pathname === `/rabanim` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/rabanim')}}>
                    Rabanim
                  </div>
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-xl  active:scale-95 ${location.pathname === `/contact` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/contact')}}>
                    contact
                  </div>
                </div>
                
                </>
                }
                
            </div>
        </div>
    </>
  )
}

export default Navbar