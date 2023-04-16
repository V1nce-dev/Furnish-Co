import { useRouter } from "next/router";
import ArmchairPage from "../product/productPage/armchair/";
// ... other imports

const ProductPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  switch (slug) {
    case "armchair":
      return <ArmchairPage />;
    case "beds":
      return <BedsPage />;
    // ... other cases
    default:
      return <div>Product not found</div>;
  }
};

export default ProductPage;
