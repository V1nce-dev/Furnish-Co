import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ProductImage } from "../product/productPage/armchair/";
// import other components if needed

const Product = () => {
  const router = useRouter();
  const { slug, id } = router.query;

  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (id) {
      // Fetch product data by ID and slug (if necessary)
      // You can replace this with an API call to your backend to fetch product data
      fetchProductData(id, slug).then((data) => setProduct(data));
    }
  }, [id, slug]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <ProductImage slug={slug} />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      {/* Render other product information and components, such as variations, quantity input, and "Add to Cart" button */}
    </div>
  );
};

// Replace this with an actual API call to your backend
async function fetchProductData(id, slug) {
  // Fetch product data based on the ID and slug (if necessary)
  // Return product data as an object
}

export default Product;
