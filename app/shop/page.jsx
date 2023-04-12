import Link from "next/link";
import { Furniture } from "../images/images";
import { design } from "../images/images";

export default function Shop() {
  const renderFurnitureItem = (image, index) => (
    <div key={index} className="items-center justify-center w-full p-4">
      <div className="relative w-full h-64 rounded-md shadow-md overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 "></div>
        <img
          src={image.src}
          alt={image.alt}
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute bottom-0 left-0 mb-2 ml-2 p-1 text-xl text-white font-bold">
          {image.name}
        </div>
      </div>
    </div>
  );

  const renderDesignItem = (image, index) => (
    <div key={index} className="w-full h-full relative">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover rounded-lg"
      />
    </div>
  );

  return (
    <main className="mt-20 mb-10">
      <div className="container mx-auto py-5 px-4">
        <h1 className="text-3xl font-semibold text-center mb-10">Furniture</h1>
        <div className="rounded-lg bg-gray-300">
          <div className="grid sm:grid-cols-1 md:grid-cols-5 gap-4">
            {Furniture.map(renderFurnitureItem)}
          </div>
        </div>
        <h1 className="text-3xl font-semibold my-10">
          Take a look at some examples
        </h1>
        <div className="grid grid-cols-3 grid-rows-2 gap-4">
          <div className="col-span-2 row-span-2">
            {renderDesignItem(design[0])}
          </div>
          <div className="col-span-1 row-span-1">
            {renderDesignItem(design[1])}
          </div>
          <div className="col-span-1 row-span-1">
            {renderDesignItem(design[2])}
          </div>
        </div>
        <div className="mt-10 pt-5 rounded-lg bg-[#707070]">
          <h1 className="text-center text-2xl font-thin pb-10 max-w-6xl mx-auto text-white">
            Your home is a reflection of you, and your furniture should be too.
            That's why we offer a wide range of unique pieces that will elevate
            your style and make your space feel like home. Whether you're
            looking for something modern, traditional, rustic, or eclectic, we
            have furniture that will complement your personal taste. From cozy
            sofas to functional storage solutions, we have everything you need
            to make your space comfortable and inviting.
          </h1>
        </div>
      </div>
    </main>
  );
}
