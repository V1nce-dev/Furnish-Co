import { ExampleImages, ProductImages } from "./images/images";

export default function Home() {
  return (
    <main className="py-5 px-[10rem]">
      <h1 className="text-3xl font-semibold mb-6">Featured Categories</h1>
      <div className="flex gap-6">
        {ProductImages.map((image, index) => (
          <div
            key={index}
            className="w-full h-[40rem] rounded overflow-hidden shadow-lg"
          >
            <div className="h-4/5">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition duration-300 ease-in-out transform hover:scale-110"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-bold text-black">{image.title}</h2>
              <p className="text-black">{image.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="text-3xl font-semibold my-6">
        We take pride in our products.
      </h1>
      <div className="flex gap-6">
        {ExampleImages.map((image, index) => (
          <div
            key={index}
            className="w-full h-[40rem] rounded overflow-hidden shadow-lg border-2 hover:border-black"
          >
            <div className="h-4/5">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-contain object-center"
              />
            </div>
            <div className="p-5">
              <h2 className="text-xl font-bold">{image.name}</h2>
              <p className="text-black">{image.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-1/2 mt-5 rounded-lg bg-gray-200">
        <div className="flex">
          <img
            src="https://www.ikea.com/images/billy-series-77639f3faed6077c31520a7544321d2b.jpg?f=s"
            alt="banner"
            className="w-1/2 object-fill"/>
          <h1 className="text-3xl font-semibold m-auto">
            Get 10% off your first order
          </h1>
        </div>
      </div>
    </main>
  );
} 


