"use client";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-custom-gradient text-white py-4 ">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-0">
        <div className="text-2xl font-bold">Muhammad Awais</div>
        <nav className="hidden md:flex space-x-4">
          <Link href="/">
            <button>Home</button>
          </Link>
          <Link href="/projects">
            <button>Projects</button>
          </Link>
          <Link href="/about">
            <button>About</button>
          </Link>
          <Link href="/contact">
            <button>Contact</button>
          </Link>
        </nav>
        <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-custom-gradient text-white">
          <Link href="/">
            <p className="block px-4 py-2">Home</p>
          </Link>
          <Link href="/about">
            <p className="block px-4 py-2">About</p>
          </Link>
          <Link href="/contact">
            <p className="block px-4 py-2">Contact</p>
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
