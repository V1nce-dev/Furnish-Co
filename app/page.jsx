"use client";
import Link from "next/link";
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
      <div className="mt-[5rem]">
        <nav className="container mx-auto">
          <div className="bg-[#808080] py-3 flex justify-center rounded-lg">
            <h1 className="text-white text-lg">Transform your home.</h1>
          </div>
        </nav>
      </div>
      <div className="container mx-auto py-5 px-4">
        <h1 className="text-3xl font-semibold mb-10">Featured Categories</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
       {ProductImages.map((image, index) => (
  <div key={index} className="rounded shadow-lg overflow-hidden">
    <div className="h-96">
      <Link href={`/shop/sofas/`} passHref>
        <motion.img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-cover cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </Link>
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

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6">
          {ExampleImages.map((image, index) => (
            <motion.div
              key={index}
              className="rounded overflow-hidden shadow-lg border-t"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-64">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-5 bg-gray-200">
                <h2 className="text-xl font-bold">{image.name}</h2>
                <p className="text-black">{image.price}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row h-auto md:h-[30rem] my-10 rounded-lg overflow-hidden bg-gray-200">
          <img
            src="https://www.ikea.com/ext/ingkadam/m/5f80ea30c7cfb44/original/PE843872-crop001.jpg?f=xl"
            alt="banner"
            className="w-full md:w-1/2 h-64 md:h-auto object-cover"
          />
          <h1 className="text-xl md:text-3xl font-semibold m-auto px-4 text-center">
            Get 10% off your first order
          </h1>
        </div>

        <div className="my-10">
          {Room.map((image, index) => (
            <div
              key={index}
              className="w-full h-[40rem] rounded shadow-lg overflow-hidden"
            >
              <div className="h-4/5">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-[30rem] md:h-full object-cover"
                />
              </div>
              <div className="text-center">
                <h1 className="text-2xl md:text-3xl font-bold">
                  Heres an example made from our design team.
                </h1>
                <p className="text-xl md:text-2xl font-thin">
                  Join now and create your own custom design
                </p>
                <button className="w-28 h-10 border drop-shadow-md rounded-lg bg-gray-200">
                  Start Here
                </button>
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
