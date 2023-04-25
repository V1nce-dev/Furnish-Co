"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import LoginPage from "./login.jsx";
import CartPage from "./cart.jsx";
import { FaShoppingCart } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Nav() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef(null);

  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
      if (cartRef.current && !cartRef.current.contains(event.target)) {
        setIsCartOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const sidebarVariants = {
    open: { width: "20rem" },
    closed: { width: 0 },
  };

  const cartVariants = {
    open: { width: "20rem" },
    closed: { width: 0 },
  };

  return (
    <div className="overflow-hidden">
      <nav className="fixed top-0 left-0 right-0 px-4 py-5 z-10 bg-white drop-shadow-lg overflow-x-hidden">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-black font-bold flex items-center">
            <Link href="/" onClick={handleScrollToTop}>
              <h1 className="hover:underline">Furnish & Co</h1>
            </Link>
            <span className="ml-10 text-sm text-gray-500">
              <Link href="/shop" onClick={handleScrollToTop}>
                <h1 className="hover:underline">Shop</h1>
              </Link>
            </span>
          </div>
          <div className="text-black font-bold flex items-center">
            <span className="mr-10 cursor-pointer" onClick={toggleCart}>
              <FaShoppingCart />
            </span>
            <button
              onClick={toggleSidebar}
              className="text-black hover:underline"
            >
              Login
            </button>
          </div>
        </div>
      </nav>
      <motion.div
        ref={sidebarRef}
        className="fixed right-0 top-0 h-full z-20 bg-white transition-all duration-300"
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
      >
        <LoginPage />
      </motion.div>
      <motion.div
        ref={cartRef}
        className="fixed right-0 top-0 h-full z-20 bg-white transition-all duration-300"
        initial={false}
        animate={isCartOpen ? "open" : "closed"}
        variants={cartVariants}
      >
        <CartPage />
      </motion.div>
      <div
        className={`fixed inset-0 z-10 bg-black transition-opacity duration-300 ${
          isOpen || isCartOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(false);
          setIsCartOpen(false);
        }}
      ></div>
    </div>
  );
};
