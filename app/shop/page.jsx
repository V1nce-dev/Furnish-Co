import { Furniture } from "../images/images";

export default function Shop() {
  return (
    <main className="container mx-auto py-5 px-4">
      <div className="flex mt-[5rem] mb-10">
        <h1 className="text-3xl font-semibold">Furniture</h1>
      </div>
      <div class="flex h-96 rounded-md bg-gray-300">
        {Furniture.map((image, index) => (
          <div
            key={index}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="relative h-64 w-64">
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover w-full h-full rounded-md"
              />
              <p className="absolute bottom-0 left-0 mb-2 ml-2 text-white font-bold bg-black bg-opacity-50 px-2 rounded">
                {image.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
