import React from 'react'
import Home from './Components/Home';
import { About } from './Components/About';
import { Contact } from './Components/Contact';

const App = () => {
  return (
    <>
      <Home />
      <nav class='bg-green-100 flex justify-between item-center shadow-xl  fixed top-0 z-10 w-full  md:h-16 p-3'>
        <div class=' text-xl'> Greenden</div>
      <div class='block md:hidden'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs54sMjKHvUqNm0oebfAbM5IOJHg0SxxTGbw&s' class='h-9 w-9'></img>
        </div>
      <div class='hidden md:block'>
        <ul class='flex gap-5'>
          <li> Home</li>
          <li> Products</li>
          <li>  Contact</li>
        </ul>
        </div>  
      </nav>
      <section class='bg-green-100 flex justify-center item-center  mt-12 p-4 md:mt-10 md:p-18 md:h-80 w-full  '>
        <div class='mr-10 md:ml-10'>
          <p class='text-sm md:xs'>We offer you awide range of Artificial and  Natural flowers</p>
          <h1 class='font-bold text-2xl md:mt-4 md:text-5xl '>Plant for your interior</h1>
          <div class='flex gap-3 mt-3'>
            <button class='bg-black text-white p-2 rounded'>show Now</button>
            <button class=' text-black p-2 border-2 border-black rounded '>Watch video</button>
          </div>
          <p class='mt-5'>160+plants species,100+clients</p>
        </div>
        <div class='hidden md:block'>
          <img src="https://5.imimg.com/data5/LY/SR/MY-2648710/garden-flower-planters-500x500.jpg" class='h-40 w-43 ml-10 bottom' ></img>
        </div>
      </section>
      <section class='text-center mt-5 p-4'>
        <h1 class='text-3xl font-bold'>About us</h1>
        <p>This site is for those who admire the beauty and harmony of the nature</p>
        <div class='grid grid-col-1  mt-3 md:grid-cols-3 gap-7'>
          <div class='border-1 p-4'>
            <img src='https://developer.adobe.com/events/media_10bbe277d0ef1db6e8a5b4ac11f518e8daad3780b.png?width=750&format=png&optimize=medium' class='h-11 w-14 ml-30 md:ml-50'></img>

            <h1 class='text-2xl font-medium'>Large Assortment</h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta molestiae, voluptatem assumenda delectus architecto facere! Placeat nesciunt quos neque a?
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis, repudiandae?
          </div>
          <div class='border-1 p-4'>
            <img src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSwprzL61ONCTGBDVqj9iAL9AuxRikvXPCn-d-vNu9G0tlERGaR' class='h-11 w-14  ml-30 md:ml-50'></img>
            <h1 class='text-2xl font-medium'>Free and Fast shipping</h1>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus, dignissimos.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut atque corrupti suscipit vitae numquam perspiciatis recusandae molestiae porro facilis temporibus?</div>
          <div class='border-1 p-4 '>
            <img src='https://i.pinimg.com/236x/f7/b0/e0/f7b0e012a138cc8fe3a6c9c858208d1a.jpg' class='h-7 w-8 ml-30 md:ml-50 mt-3'></img>
            <h1 class='text-2xl font-medium'>24/7 Support</h1>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta laborum ab voluptatum assumenda, consectetur ducimus maxime, incidunt nisi atque ea aspernatur tempore quasi doloribus aliquam saepe fugit, obcaecati dolore sapiente?</div>
        </div>
      </section>
      <section>
        <h1 class='text-3xl font-bold flex justify-center mt-10'>Best Seller</h1>
        <div class='grid grid-cols-2  gap-1 mt-9 ml-3 md:gap6 md:ml-30 md:grid-cols-4 '>
          <div>
            <img src='https://images.herzindagi.info/webstories/20936/schema-image-akshita--3--1700556853.jpeg' class='h-50 w-40 md:h-60 md:w-50 hover:-translate-y-2'></img>
            <h1 class='text-center md:mr-40'>Rose plant</h1>
            <p class='text-center md:mr-40'>$40</p>
          </div>
          <div>
            <img src='https://cdn.shopify.com/s/files/1/0439/6623/4784/files/PLANTS_INSIDE_1_480x480.png?v=1697216237' class='h-50 w-40 md:h-60 md:w-50 hover:-translate-y-2'></img>
            <h1 class='text-center md:mr-40'>Lilly plant</h1>
            <p class='text-center md:mr-40'>$20</p>
          </div>
          <div>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQde3oWIBcB4jfoyt1AZoaC1mzdeEn15I3Rg4PUHTNPDom7OA9m' class='h-50 w-40 md:h-60 md:w-50 hover:-translate-y-2'></img>
            <h1 class='text-center md:mr-40'>Tulip plant</h1>
            <p class='text-center md:mr-40'>$80</p>
          </div>
          <div>
            <img src='https://images.news18.com/webstories/uploads/2025/03/image-2025-03-c1f823712ce2a3d831bd2de21b8dff3d.png' class='h-50 w-40 md:h-60 md:w-50 hover:-translate-y-2'></img>
            <h1 class='text-center md:mr-40'>catus plant</h1>
            <p class='text-center md:mr-40'>$30</p>
          </div>
        </div>
      </section>
      <section class='mt-3 '>
        <h1 class='text-3xl font-bold text-center'>Customer Review</h1>
        <div class='mt-5 flex justify-center items-center flex-col gap-5 m-5'>
          <div class='bg-green-900 text-white p-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi dolorum asperiores tempore, harum consequuntur iure a magnam ad voluptatum reprehenderit soluta error aperiam obcaecati deleniti dolores, sed facere, cupiditate repellendus?
            <h1 class='text-amber-300 font-bold'>joseph</h1>
          </div>
          <div class='bg-green-900 text-white p-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, fugit. Maxime vitae quis accusamus quas natus aut voluptate dolorum rerum commodi necessitatibus quia, aspernatur delectus nobis odit corrupti laboriosam deserunt!
            <h1 class='text-amber-300 font-bold'>Harry</h1>
          </div>
          <div class='bg-green-900 text-white p-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus possimus harum perferendis error, explicabo recusandae ad voluptate totam. Libero voluptatem deserunt labore! Blanditiis est, aperiam neque vitae temporibus repellat
            <h1 class='text-amber-300 font-bold'>Mathew</h1>
          </div>
        </div>
      </section>
      <section>
        <h1 class='text-3xl font-bold flex justify-center mt-10'>Join our News Letter</h1>
        <p class='text-center'>Signup for our email newspaper to get exclusive discounts, updates and more</p>
        <div class='flex flex-col sm:flex-row justify-center items-center gap-4'>
        <input type class='border border-black p-2 m-3 min-w-7/12 h-10   text-l '></input></div>
        <button class='bg-black text-white underline p-3 ml-36  md:ml-170'> Subscribe</button>
      </section>
<section class='bg-green-100 flex flex-col gap-5 p-5 mt-2'>
  <h1 class='text-4xl font-bold'>Greenden</h1>
  <p>The Standard chunk of lorem ipsum is used since the 1500s is reproduced below for those interest</p>
  <p>©2025 Greenday.com</p>
</section>
    </>
  )
}
export default App;
