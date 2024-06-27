import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col justify-center items-center w-full gap-5  border-t pt-4 pb-10 mt-4'>

      <div className='flex flex-col justify-center items-center'>
          <div className=' flex flex-col justify-start items-start max-w-[500px] px-8 py-6 rounded-2xl border-2 '>
            <div className="text-xl font-bold uppercase ">
              Incrivez-vous a notre NEWSLETTER !!
            </div>
            <form className="flex flex-col justify-start items-start w-full space-y-5 mt-4">
              <div className='flex flex-row justify-between items-center w-full'>
                <input type="text" className=" h-10 px-4 py-2 text-sm rounded-lg outline-none bg-slate-200 focus:border-slate-700 focus:border-2" placeholder="Nom" />
                <input type="text" className=" h-10 px-4 py-2 text-sm rounded-lg outline-none bg-slate-200 focus:border-slate-700 focus:border-2" placeholder="Prenom" />
              </div>
            
              <input type="email"className="w-full h-10 px-4 py-2 text-sm rounded-lg outline-none bg-slate-200 focus:border-slate-700 focus:border-2"placeholder="Email" />
              <button className="w-full h-10 px-4 py-2 mt-4 text-sm text-white bg-slate-700 rounded-xl hover:bg-slate-500 active:scale-95">
                S'abonner
              </button>
            </form>
          </div>

          <div className='flex flex-row flex-wrap w-full gap-y-3 gap-x-12 justify-center items-center mt-8 px-14'>
            <div>Acceuil </div>
            <div> Evenements</div>
            <div>Visa</div>
            <div>Koupat Holim</div>
            <div>Don</div>
            <div>Rabanim</div>
            <div>Contact</div>
          </div>
      </div>

      <div className='flex flex-row w-full justify-center items-center text-center text-xs'> Developer par DaTech: Contact : +972768098624</div> 
      <div className='flex flex-row w-full justify-center items-center text-sm'> © 2024 Torat Yaackov All rights reserved</div>
      
    </div>
  )
}

export default Footer