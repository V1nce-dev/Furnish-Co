"use client";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function Nav() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 px-4 py-5 z-10 bg-white drop-shadow-lg overflow-x-hidden">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black font-bold flex items-center">
            <Link
              href="/"
              className="hover:underline"
              onClick={handleScrollToTop}
            >
              Furnish & Co
            </Link>
            <span className="ml-10 text-sm text-gray-500">
              <Link
                href="/shop"
                className="hover:underline"
                onClick={handleScrollToTop}
              >
                Shop
              </Link>
            </span>
          </div>
          <div className="text-black font-bold flex items-center">
            <span className="mr-10">
              {" "}
              <FaShoppingCart />{" "}
            </span>
            <h1 className="text-black">Login</h1>
          </div>
        </div>
      </nav>
    </div>
  );
}
