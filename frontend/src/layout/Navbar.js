import React, {useContext ,useState , useEffect} from "react";
import {  useNavigate } from "react-router-dom";
import { MenuContext } from "../context/menuContext";
import logo from '../assets/logo.jpg';
import { MdOutlineMenu  } from "react-icons/md";


function Navbar() {

    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      const {menu,openMenu,closeMenu} = useContext(MenuContext)
      const navigate = useNavigate();
      const isMobile = windowDimensions.width <= 780
    
    
      useEffect(() => {
        const handleResize = () => {
          setWindowDimensions({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

  return (
    <>
          <div className=" flex flex-row justify-between items-center w-full h-17 px-3 py-2 bg-[#F3F3F3] rounded-2xl">
            <div className="rounded-2xl cursor-pointer overflow-hidden" onClick={()=>{navigate('/')}}> 
              <img src={logo} alt="logo" className="h-11 w-11"/>
            </div>
            <div className="flex flex-row items-center space-x-3">
              

                {isMobile ? 
                <div className="flex flex-row active:scale-95 active:bg-slate-400 rounded-2xl p-2 cursor transition-all " onClick={()=>{if(menu){closeMenu()}else{openMenu()}}}>
                  <MdOutlineMenu size={40} color="#000000" />
                </div>: 
                <>
                <div className="gap-3 flex flex-row items-center rounded-2xl cursor-pointer overflow-hidden" >
                  <div className="rounded-xl cursor-pointer overflow-hidden px-3 py-1" onClick={()=>{navigate('/')}}>
                    Acceuil
                  </div>
                  <div className="rounded-xl cursor-pointer overflow-hidden px-3 py-1" onClick={()=>{navigate('/evenements')}}>
                    Evenements
                  </div>
                  <div className="rounded-xl cursor-pointer overflow-hidden px-3 py-1" onClick={()=>{navigate('/visa')}}>
                   Visa
                  </div>
                  <div className="rounded-xl cursor-pointer overflow-hidden px-3 py-1" onClick={()=>{navigate('/koupatHolim')}}>
                    Koupat holim
                  </div>
                  <div className="rounded-xl cursor-pointer overflow-hidden px-3 py-1" onClick={()=>{navigate('/')}}>
                    Don
                  </div>
                  <div className="rounded-xl cursor-pointer overflow-hidden px-3 py-1" onClick={()=>{navigate('/Rabanim')}}>
                    Rabanim
                  </div>
                  <div className="rounded-xl cursor-pointer overflow-hidden px-3 py-1" onClick={()=>{navigate('/contact')}}>
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