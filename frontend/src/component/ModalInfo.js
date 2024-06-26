import React ,{ useState } from 'react'
//import SVG
import Close from "../assets/icons/Close.svg"
import Info from '../assets/icons/Info.svg'

function ModalInfo({text, onClose, handleConfirm}) { 

  return (
   <>
    <div
        className="flex fixed bg-yellow-900 bg-opacity-50 top-0 left-0 right-0 bottom-0 z-50 justify-center items-center"
        onClick={onClose}
      >
        {/* MODAL */}
        <div
          className="flex flex-col space-y-5 bg-white w-auto max-w-[360px] overflow-hidden no-scrollbar h-auto rounded-xl self-center px-10 py-4"
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          {/* HEADER */}
          <div className="flex flex-row w-full justify-between ">
            <div className='flex flex-row items-center'>
              <img src={Info} alt="" />
              <div className='ml-2'>INFO</div>
            </div>

            <div className="flex flex-row items-center">
              <div className="  w-[24px] h-[0px]  rotate-90 border border-yellow-900"></div>

              <div
                className=" rounded-2xl p-1 hover:bg-red-100 active:scale-75 cursor-pointer"
                onClick={onClose}
              >
                <img src={Close} alt="" className="w-5 h-5 relative" />
              </div>
            </div>
          </div>
          {/* BODY */}
          <div className='flex flex-col'>
              <div>{text}</div>
              <div className='flex flex-row justify-between mt-3'>
                <div className='hover:bg-green-500 active:scale-75 cursor-pointer rounded-xl border px-3 py-1 ' onClick={onClose}>NON</div>
                <div className='hover:bg-red-500 active:scale-75 cursor-pointer rounded-xl border px-3 py-1 ' onClick={handleConfirm}>OUI</div>
              </div>
          </div>
        </div>
    </div>
   </>
  )
}

export default ModalInfo