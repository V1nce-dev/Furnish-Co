"use client";
import { ExampleImages, ProductImages } from "./images/images";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="py-5 px-[10rem]">
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
            className="w-full h-[40rem] rounded overflow-hidden shadow-lg border-2"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="h-4/5">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain object-center"
              />
            </div>
            <div className="p-5 bg-gray-200">
              <h2 className="text-xl font-bold">{image.name}</h2>
              <p className="text-black">{image.price}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full h-1/2 my-10 rounded-lg bg-gray-200">
        <div className="flex">
          <img
            src="https://www.ikea.com/images/billy-series-77639f3faed6077c31520a7544321d2b.jpg?f=s"
            alt="banner"
            className="w-1/2 object-fill"
          />
          <h1 className="text-3xl font-semibold m-auto">
            Get 10% off your first order
          </h1>
        </div>
      </div>
    </main>
  );
}
