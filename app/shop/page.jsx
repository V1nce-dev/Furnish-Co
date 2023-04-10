
import { Furniture } from "../images/images";

export default function Shop() {
  const renderFurnitureItem = (image, index) => (
    <div
      key={index}
      className="items-center justify-center w-full p-4"
    >
      <div className="relative w-full h-64 rounded-md shadow-md overflow-hidden">
        <div
          className="absolute inset-0 bg-black opacity-0 hover:opacity-30 transition-opacity duration-300 z-10"
        ></div>
        <img
          src={image.src}
          alt={image.alt}
          className="object-cover w-full h-full rounded-lg"
        />
        <div className="absolute bottom-0 left-0 mb-2 ml-2 p-1 text-xl text-white font-bold z-20">
          {image.name}
        </div>
      </div>
    </div>
  );

  return (
    <main className="mt-20 mb-10">
      <h1 className="text-3xl font-semibold text-center mb-10">Furniture</h1>
      <div className=" bg-gray-300">
        <div className="grid grid-cols-5 gap-4">
          {Furniture.map(renderFurnitureItem)}
        </div>
      </div>
    </main>
  );
}
