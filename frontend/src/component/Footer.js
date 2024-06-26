import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col w-full gap-5  border-t pt-4'>
        <div className='flex flex-row flex-wrap w-full gap-y-3 gap-x-12 justify-center items-center'>
            <div>Acceuil </div>
            <div> Evenements</div>
            <div>Visa</div>
            <div>Koupat Holim</div>
            <div>Don</div>
            <div>Rabanim</div>
            <div>Contact</div>
        </div>
        <div className='flex flex-row w-full justify-center items-center text-center text-xs'> Developer par DaTech: Contact : +972768098624</div> 

        <div className='flex flex-row w-full justify-center items-center text-sm'> © 2024 Torat Yaackov All rights reserved</div>
    </div>
  )
}

export default Footer