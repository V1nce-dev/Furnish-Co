"use client";
import Link from "next/link.js";
import { BiSearchAlt } from "react-icons/bi";
import { armchairImage } from "../../productImage/armchairImg.jsx";

const ArmChair = ({ image, index }) => (
  <div key={index}>
    <div className="image-container relative group w-full h-80">
      <Link
        href="/shop/product/productPage/[id]"
        as={`/shop/product/productPage/${image.id}`}
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-full h-full object-contain border rounded-lg shadow-md"
        />
        <div className=" overlay absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg"></div>
        <div className="absolute bottom-0 left-0 mb-5 ml-5 text-white font-bold bg-black bg-opacity-50 px-2 rounded">
          <h1>{image.name}</h1>
        </div>
      </Link>
    </div>
  </div>
);

const ArmchairPage = () => {
  return (
    <div className="container mx-auto py-5 px-4">
      <div>
        <div className="text-2xl font-bold mt-20">
          <Link href="/shop">
            <span className="mx-2 hover:underline">Shop</span>
          </Link>
          <span>/</span>
          <span className="mx-2">ArmChairs</span>
        </div>
        <div className="my-8 flex justify-center flex-col items-center">
          <h1 className="text-3xl font-bold mb-4">
            <Link href="/">
              <span className="hover:underline">Furnish & Co</span>
            </Link>
          </h1>
          <form className="relative w-full max-w-md">
            <input
              type="text"
              name="sofa-search"
              placeholder="Search for armchairs..."
              className="lg:w-1/2 xl:w-full h-10 shadow-inner rounded-lg bg-gray-100 mx-auto outline-none pl-10 pr-5"
              onChange={() => {}}
            />
            <BiSearchAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-500" />
            <button type="submit" className="hidden">
              Search
            </button>
          </form>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6 mb-4">
          {armchairImage.map((image, index) => (
            <ArmChair key={index} image={image} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArmchairPage;
