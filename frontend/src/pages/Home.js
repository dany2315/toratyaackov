import { useEffect ,useState } from 'react';
import api from '../utils/Axios';
import { Carousel } from "flowbite-react";
import Footer from "../component/Footer";

function Home() {

  const [message, setMessage] = useState('');

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
    <div className="flex flex-col items-center pt-4 px-8 ">
      <div className='text-4xl font-bold self-start'>
        Hello
      </div>
      <div className=" h-[400px] w-[90%] mt-4  ">
        <Carousel  slideInterval={5000}>
          <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-4.svg" alt="..." />
          <img src="https://flowbite.com/docs/images/carousel/carousel-5.svg" alt="..." />
        </Carousel>
      </div>

    <div class="bg-white py-24 sm:py-32">
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

      {/* <h1>{message}</h1>
      hello world */}
      <Footer/>
    </div>
    
  );
}

export default Home;