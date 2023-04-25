import cartContext from "../cartContext.jsx"

export default function addToCart() {
  <cartContext/>
 return (
    <div className="px-4 py-2 rounded-md">
      <h2 className="text-lg font-medium mb-2">Your Cart</h2>
      <ul className="divide-y divide-gray-200">
        <li className="py-2 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://dummyimage.com/50x50/ccc/000"
              alt="Product"
              className="w-10 h-10 object-cover rounded-md mr-4"
            />
            <div>
              <h3 className="text-sm font-medium">Product Name</h3>
              <p className="text-gray-500 text-xs">Price: $9.99</p>
            </div>
          </div>
          <button className="text-red-500 hover:text-red-700">Remove</button>
        </li>
        <li className="py-2 flex items-center justify-between">
          <div className="flex items-center">
            <img
              src="https://dummyimage.com/50x50/ccc/000"
              alt="Product"
              className="w-10 h-10 object-cover rounded-md mr-4"
            />
            <div>
              <h3 className="text-sm font-medium">Product Name</h3>
              <p className="text-gray-500 text-xs">Price: $19.99</p>
            </div>
          </div>
          <button className="text-red-500 hover:text-red-700">Remove</button>
        </li>
      </ul>
      <div className="mt-4 flex justify-between">
        <p className="font-medium">Total:</p>
        <p className="font-medium">$29.98</p>
      </div>
      <button className="mt-4 w-full bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600">
        Checkout
      </button>
    </div>
  );
}

