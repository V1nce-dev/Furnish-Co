"use client";
import { ExampleImages, ProductImages, Room } from "./images/images";
import { motion } from "framer-motion";
import {
  BsGlobeAmericas,
  BsFillHouseFill,
  BsFillPeopleFill,
} from "react-icons/bs";

export default function Home() {
  return (
    <main>
      <div className="py-5 px-[10rem]">
        <h1 className="text-3xl font-semibold mb-10">Featured Categories</h1>
        <div className="flex gap-6">
          {ProductImages.map((image, index) => (
            <div
              key={index}
              className="w-full h-[40rem] rounded shadow-lg overflow-hidden"
            >
              <div className="h-4/5">
                <motion.img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="p-5">
                <h2 className="text-xl font-bold text-black">{image.title}</h2>
                <p className="text-black">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className="text-3xl font-semibold my-10 ">
          We take pride in our products.
        </h1>
        <div className="flex gap-6">
          {ExampleImages.map((image, index) => (
            <motion.div
              key={index}
              className="h-[40rem] rounded overflow-hidden shadow-lg border-2"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-4/5">
                <img
                  src={image.src}
                  alt={image.alt}
                  className=" h-full object-contain object-center"
                />
              </div>
              <div className="p-5 bg-gray-200">
                <h2 className="text-xl font-bold">{image.name}</h2>
                <p className="text-black">{image.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className=" h-1/2 my-10 rounded-lg bg-gray-200">
          <div className="flex">
            <img
              src="https://www.ikea.com/images/vihals-series-d920c627fda386d2f91e708d065211a1.jpg?f=s"
              alt="banner"
              className="w-1/2 object-cover"
            />
            <h1 className="text-3xl font-semibold m-auto">
              Get 10% off your first order
            </h1>
          </div>
        </div>
       <div className="my-10 ">
  {Room.map((image, index) => (
    <div
      key={index}
      className="w-full h-[40rem] rounded shadow-lg overflow-hidden"
    >
      <div className="h-4/5">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex p-5 justify-center">
        <h2 className="text-xl font-bold">{image.title}</h2>
        <p className=" text-3xl font-bold">Heres an example made from our design team.</p>
        <button className="w-28 h-10 ml-5 border drop-shadow-md rounded-lg bg-gray-200">Start Here</button>
      </div>
    </div>
  ))}
</div>
 
      </div>
      
      <div className="border-y border-b-gray-400 bg-[#707070] text-white">
        <h1 className="text-6xl font-semibold text-center p-10">
          Backed by the best.
        </h1>
        <p className="text-center text-2xl font-thin pb-10 max-w-3xl mx-auto">
          Our furniture has found a home in millions of households worldwide,
          providing comfort, style, and durability why settle for less.
        </p>
        <div className="flex justify-center gap-5 text-7xl pb-10">
          <h1>
            <BsFillHouseFill />
          </h1>
          <h1>
            <BsGlobeAmericas />
          </h1>
          <h1>
            <BsFillPeopleFill />
          </h1>
        </div>
      </div>
    </main>
  );
}
