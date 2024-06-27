import React , {useContext} from 'react'
import { MenuContext } from "../../context/menuContext";
import { useLocation, useNavigate } from 'react-router-dom';
import { MdMenuOpen } from "react-icons/md";
import logo from '../../assets/logo.jpg';

function MenuMobile() {

    const {menu,openMenu,closeMenu} = useContext(MenuContext);
    const navigate = useNavigate();
    const location = useLocation();
  return (
    <>
    
    {menu?
      <div className=" absolute top-0 right-0 z-50 flex flex-col justify-center items-center w-full h-[100%] bg-slate-200 gap-2 no-scrollbar overflow-hidden " >
                  <div className="rounded-xl cursor-pointer active:scale-95 active:bg-slate-400 overflow-hidden px-3 py-1 absolute top-[28px] right-[20.5px]" onClick={()=>{navigate('/');closeMenu()}}>
                      <MdMenuOpen size={40} color="#000000" />
                    </div>
                  <div className="rounded-2xl cursor-pointer overflow-hidden absolute top-[30.5px] left-[24px]" onClick={()=>{navigate('/');closeMenu()}}>
                    <img src={logo} alt="logo" className="h-11 w-11"/>
                  </div>
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-2xl hover:bg-slate-300 ${location.pathname === `/` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/') ;closeMenu()}}>
                    Acceuil
                  </div>
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-2xl hover:bg-slate-300 ${location.pathname === `/evenements` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/evenements') ;closeMenu()}}>
                    Evenements
                  </div>
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-2xl hover:bg-slate-300 ${location.pathname === `/actions` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/actions') ;closeMenu()}}>
                   Nos Actions
                  </div>
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-2xl hover:bg-slate-300 ${location.pathname === `/visa` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/visa') ;closeMenu()}}>
                   Visa
                  </div>
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-2xl hover:bg-slate-300 ${location.pathname === `/koupatHoulim` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/koupatHolim') ;closeMenu()}}>
                    Koupat holim
                  </div>
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-2xl hover:bg-slate-300 ${location.pathname === `/don` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/');closeMenu()}}>
                    Don
                  </div>
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-2xl hover:bg-slate-300 ${location.pathname === `/rabanim` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/Rabanim') ;closeMenu()}}>
                    Rabanim
                  </div>
                  <div className={`rounded-xl cursor-pointer overflow-hidden px-3 py-1 text-2xl hover:bg-slate-300 ${location.pathname === `/contact` ? 'bg-slate-400' : 'hover:bg-slate-200'}`} onClick={()=>{navigate('/contact') ;closeMenu()}}>
                    contact
                  </div>
      </div>
        :null
    }
   </>
  )
}

export default MenuMobile