"use client";
import Link from "next/link.js";
import { BiSearchAlt } from "react-icons/bi";
import { sofaImage } from "./sofaImg.jsx";

export default function Sofas() {
  const handleSearchChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Search submitted");
  };

  const Sofa = (image, index) => (
    <div key={index}>
      <div className="image-container relative group w-full h-80">
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-contain border rounded-lg"
        />
        <div className=" overlay absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg"></div>
        <div className="absolute bottom-0 left-0 mb-5 ml-5 text-white font-bold bg-black bg-opacity-50 px-2 rounded">
          <h1>{image.name}</h1>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto py-5 px-4">
    <div>
      <div className="text-2xl font-bold mt-20">
        <Link href="/shop">
          <span className="mx-2 hover:underline">Shop</span>
        </Link>
        <span>/</span>
        <span className="mx-2">Sofas</span>
      </div>
      <h1 className="text-3xl font-bold inline">
        <Link href="/">
          <span className="hover:underline">Furnish & Co</span>
        </Link>
      </h1> 
        <div className="my-8 flex justify-center">
          <form onSubmit={handleSubmit} className="relative w-full max-w-md">
            <input
              type="text"
              name="sofa-search"
              placeholder="Search for sofas..."
              className="lg:w-1/2 xl:w-full h-10 shadow-inner rounded-lg bg-gray-100 mx-auto outline-none pl-10 pr-5"
              onChange={handleSearchChange}
            />
            <BiSearchAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            <button type="submit" className="hidden">
              Search
            </button>
          </form>
        </div>
        
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {sofaImage.map(Sofa)}
        </div>
      </div>
    </div>
  );
}
