import React from 'react'
import Footer from '../component/Footer'

function Evenements() {
  return (
    <div className="flex flex-col items-center  ">

      <div className=" h-[200px] md:h-[350px]  w-[100%]   overflow-hidden  ">
        <div className='w-full h-full bg-black  z-50 relative  '>
          <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="w-full h-full object-cover opacity-50" />
          <div className='absolute bottom-16 left-11'>
          <div className="border-2 mb-2 border-orange-400 w-60"></div>
            <div className="text-3xl text-white font-bold  ">
                Maamad bnei ayeshivot
            </div> 
          </div>
        </div>
      </div>

      <div className=" flex flex-col justify-between items-center w-full mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-4xl font-bold self-start mt-6 max-w-7xl px-6 lg:px-8 ">
            Title
          </div>

          <div className="text-xl font-semibold self-start mt-6 max-w-7xl px-6 lg:px-8 ">
          Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.

Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.
          </div>
      </div>

      <div className=" h-auto w-[100%] flex flex-col justify-center items-center overflow-hidden bg-slate-400 mt-14 ">
        <div className=' font-bold text-4xl text-center mt-4'>Les rabanim intervenu lors de l'événement</div>
        <div className=" flex flex-row flex-wrap justify-center items-center gap-x-24 md:gap-x-20 lg:gap-x-14  xl:gap-x-6 gap-y-16  my-16    max-w-7xl px-6 lg:px-8 ">

            <div className="flex flex-col  items-center  rounded-3xl bg-white overflow-hidden py-4">
                <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="w-[160px] h-[160px] object-cover rounded-full" />
                <div className="flex flex-col justify-center items-center  px-4 py-4"> 
                  <div className="text-xl font-bold uppercase ">
                    Rav David Cohen
                  </div>
                  <div className="text-lg font-medium mt-2">
                    Rosh yeshiva hevron
                  </div>
                </div>
            </div>
            
            <div className="flex flex-col  items-center  rounded-3xl bg-white overflow-hidden py-4">
                <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="w-[160px] h-[160px] object-cover rounded-full" />
                <div className="flex flex-col justify-center items-center  px-4 py-4"> 
                  <div className="text-xl font-bold uppercase ">
                    Rav David Cohen
                  </div>
                  <div className="text-lg font-medium mt-2">
                    Rosh yeshiva hevron
                  </div>
                </div>
            </div>

            <div className="flex flex-col  items-center  rounded-3xl bg-white overflow-hidden py-4">
                <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="w-[160px] h-[160px] object-cover rounded-full" />
                <div className="flex flex-col justify-center items-center  px-4 py-4"> 
                  <div className="text-xl font-bold uppercase ">
                    Rav David Cohen
                  </div>
                  <div className="text-lg font-medium mt-2">
                    Rosh yeshiva hevron
                  </div>
                </div>
            </div>

            <div className="flex flex-col  items-center  rounded-3xl bg-white overflow-hidden py-4">
                <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="w-[160px] h-[160px] object-cover rounded-full" />
                <div className="flex flex-col justify-center items-center  px-4 py-4"> 
                  <div className="text-xl font-bold uppercase ">
                    Rav David Cohen
                  </div>
                  <div className="text-lg font-medium mt-2">
                    Rosh yeshiva hevron
                  </div>
                </div>
            </div>

            <div className="flex flex-col  items-center  rounded-3xl bg-white overflow-hidden py-4">
                <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="w-[160px] h-[160px] object-cover rounded-full" />
                <div className="flex flex-col justify-center items-center  px-4 py-4"> 
                  <div className="text-xl font-bold uppercase ">
                    Rav David Cohen
                  </div>
                  <div className="text-lg font-medium mt-2">
                    Rosh yeshiva hevron
                  </div>
                </div>
            </div>

            <div className="flex flex-col  items-center  rounded-3xl bg-white overflow-hidden py-4">
                <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="w-[160px] h-[160px] object-cover rounded-full" />
                <div className="flex flex-col justify-center items-center  px-4 py-4"> 
                  <div className="text-xl font-bold uppercase ">
                    Rav David Cohen
                  </div>
                  <div className="text-lg font-medium mt-2">
                    Rosh yeshiva hevron
                  </div>
                </div>
            </div>

        </div>

      </div>
      <Footer/>
    </div>
  )
}

export default Evenements