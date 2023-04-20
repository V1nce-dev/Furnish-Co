import { sofaImage } from "../../productImage/sofaImg.jsx";
import { armchairImage } from "../../productImage/armchairImg.jsx";
import { bedImage } from "../../productImage/bedImg.jsx";
import { tableImage } from "../../productImage/tableImg.jsx";
import { mediaImage } from "../../productImage/mediaImg.jsx";

function App({ params }) {
  const allImages = [
    ...sofaImage,
    ...armchairImage,
    ...bedImage,
    ...tableImage,
    ...mediaImage,
  ];
  const chosenIndex = params.id - 1;
  const isIndexValid = chosenIndex >= 0 && chosenIndex < allImages.length;
  const chosenProduct = isIndexValid ? allImages[chosenIndex] : null;
  const chosenProductImageSrc = chosenProduct ? chosenProduct.src : "";

  return (
    <div className="mt-20">
      <div className="container mx-auto px-4 py-12">
        {chosenProduct ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <img
              className="w-full h-full object-cover rounded-md shadow-md"
              src={chosenProductImageSrc}
              alt={`Product ${chosenIndex}`}
            />
            <div>
              <h1 className="font-bold text-3xl mb-2">{chosenProduct.name}</h1>
              <h2 className="font-semibold text-2xl text-blue-600 mb-6">
                {chosenProduct.price}
              </h2>
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                interdum, dolor id mollis rhoncus, metus urna pellentesque
                magna, ut vehicula sapien neque a est.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        ) : (
          <p className="bg-black text-white text-center py-4 rounded-lg">
            Product not found.
          </p>
        )}
      </div>
    </div>
  );
}

export default App;

