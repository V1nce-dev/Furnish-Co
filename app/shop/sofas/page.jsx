"use client"
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
    <div key={index} className="w-full h-80 relative p-4">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-contain border rounded-lg"
      />
      <div className="absolute bottom-0 left-0 mb-5 ml-5 p-1 text-xl text-white font-bold">
        <h2 className="text-xl font-semibold">{image.name}</h2>
        <p className="text-gray-600">{image.price}</p>
      </div>
    </div>
  );

  return (
    <div className="mt-20 mb-10 flex justify-center">
      <div>
        <h1 className="text-2xl">
          <span className="mx-2">Shop</span>
          <span>/</span>
          <span className="mx-2">Sofas</span>
        </h1>
        <div className="my-8 flex justify-center">
          <form onSubmit={handleSubmit} className="relative w-full max-w-md">
            <input
              type="text"
              name="sofa-search"
              placeholder="Search for sofas..."
              className="w-full h-10 shadow-inner rounded-lg bg-gray-100 mx-auto outline-none pl-10 pr-5"
              onChange={handleSearchChange}
            />
            <BiSearchAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            <button type="submit" className="hidden">Search</button>
          </form>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
          {sofaImage.map(Sofa)}
        </div>
      </div>
    </div>
  );
}


