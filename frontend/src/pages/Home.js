import { useEffect ,useState ,useContext} from 'react';
import api from '../utils/Axios';
import { Carousel } from "flowbite-react";
import Footer from "../component/Footer";
import { MesureContext } from '../context/mesureContext';

function Home() {

  const [message, setMessage] = useState('');
  const {width} = useContext(MesureContext)
  const isMobile = width <= 1000

useEffect(() => {
  const getData = async () => {
    try {
      const response = await api.get('/auth/login');
      console.log(response.data);
      setMessage(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  getData();
}, []);

  return (
    <div className="flex flex-col items-center  ">

      <div className=" h-[200px] md:h-[400px]  w-[100%]   overflow-hidden bg-slate-400 ">

      </div>
      <div className=" flex flex-col justify-between items-center w-full mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-4xl font-bold  mt-6 max-w-7xl px-6 lg:px-8 ">
          Nos actions
        </div>

        <div className=" flex flex-row flex-wrap justify-center md:gap-x-4 lg:gap-x-6  xl:gap-x-14 gap-y-16   items-center mt-16 sm:mt-24 ">
          
          <div className="flex flex-row items-center sm:w-[80%] lg:w-[45%]">
              <div className="flex flex-col sm:mr-0 md:mr-8">
                <div className="text-2xl font-bold uppercase ">
                  lorem ipsum 
                </div>
                <div className="text-lg font-medium mt-4">
                  lorem ipsum dolor sit amet consectetur adipisicing elit dolore magna aliquam quaerat voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </div>
              </div>
              <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="w-[130px] h-[130px] rounded-full border-8 border-slate-300" />
          </div>

          <div className="flex flex-row items-center sm:w-[80%] lg:w-[45%]">
              <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="w-[130px] h-[130px] rounded-full border-8 border-slate-300" />
              <div className="flex flex-col sm:ml-4 md:ml-8">
                <div className="text-2xl font-bold uppercase ">
                  lorem ipsum 
                </div>
                <div className="text-lg font-medium mt-4">
                  lorem ipsum dolor sit amet consectetur adipisicing elit dolore magna aliquam quaerat voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </div>
              </div>
          </div>

          <div className="flex flex-row items-center sm:w-[80%] lg:w-[45%]">
          <div className="flex flex-col sm:mr-0 md:mr-8">
                <div className="text-2xl font-bold uppercase ">
                  lorem ipsum 
                </div>
                <div className="text-lg font-medium mt-4">
                  lorem ipsum dolor sit amet consectetur adipisicing elit dolore magna aliquam quaerat voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </div>
              </div>
              <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="w-[130px] h-[130px] rounded-full border-8 border-slate-300" />
          </div>

          <div className="flex flex-row items-center sm:w-[80%] lg:w-[45%]">
              <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="w-[130px] h-[130px] rounded-full border-8 border-slate-300" />
              <div className="flex flex-col sm:ml-4 md:ml-8">
                <div className="text-2xl font-bold uppercase ">
                  lorem ipsum 
                </div>
                <div className="text-lg font-medium mt-4">
                  lorem ipsum dolor sit amet consectetur adipisicing elit dolore magna aliquam quaerat voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </div>
              </div>
          </div>

          

        </div>
      </div>
      <div className=" flex flex-col justify-between items-center w-full  mt-14 bg-slate-400 py-10">
        <div className="text-4xl font-bold  mt-6  max-w-7xl px-6 lg:px-8">
          Nos Evenements
        </div>

        <div className=" flex flex-row flex-wrap justify-center md:gap-x-4 lg:gap-x-6  xl:gap-x-14 gap-y-16   items-center mt-16 sm:mt-24   max-w-7xl px-8 lg:px-8 ">
          
          <div className="flex flex-col items-center w-[80%] md:w-[60%] lg:w-[40%] rounded-3xl bg-white overflow-hidden">
              <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="w-full h-[130px] object-cover " />
              <div className="flex flex-col  px-4 py-8">
                <div className="text-2xl font-bold uppercase ">
                  lorem ipsum 
                </div>
                <div className="text-lg font-medium mt-4">
                  lorem ipsum dolor sit amet consectetur adipisicing elit dolore magna aliquam quaerat voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </div>
              </div>
          </div>

          <div className="flex flex-col items-center w-[60%] lg:w-[40%] rounded-3xl bg-white overflow-hidden">
              <img src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="..." className="w-full h-[130px] object-cover " />
              <div className="flex flex-col  px-4 py-8">
                <div className="text-2xl font-bold uppercase ">
                  lorem ipsum 
                </div>
                <div className="text-lg font-medium mt-4">
                  lorem ipsum dolor sit amet consectetur adipisicing elit dolore magna aliquam quaerat voluptatem, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                </div>
              </div>
          </div>     

        </div>
      </div>

    <div class=" py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <dl class="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-600">Transactions every 24 hours</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">44 million</dd>
        </div>
        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-600">Assets under holding</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">$119 trillion</dd>
        </div>
        <div class="mx-auto flex max-w-xs flex-col gap-y-4">
            <dt class="text-base leading-7 text-gray-600">New users annually</dt>
            <dd class="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">46,000</dd>
        </div>
        </dl>
    </div>
    </div>     

    <div className=" h-auto w-[100%] flex justify-center  overflow-hidden bg-slate-400  ">

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



      {/* <h1>{message}</h1>
      hello world */}
      <Footer/>
    </div>
    
  );
}

export default Home;