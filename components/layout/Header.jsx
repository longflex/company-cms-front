import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";

const Header = ({handleHidden}) => {
    const [scroll, setScroll] = useState(0)
    useEffect(() => {
        document.addEventListener("scroll", () => {
          const scrollCheck = window.scrollY > 100
          if (scrollCheck !== scroll) {
            setScroll(scrollCheck)
          }
        })
      })
    return (
        <>
            <header className={scroll ? "bg-transparent sticky-bar mt-4 stick": "bg-transparent sticky-bar mt-4"}>
                <div className="container bg-transparent">
                    <nav className="bg-transparent flex justify-between items-center py-3">
                        <Link href="/">
                            <a className="text-3xl font-semibold leading-none">
                                <img
                                    className="h-10"
                                    src="/assets/imgs/logos/famco-logo.png"
                                    alt="Monst"
                                />
                            </a>
                        </Link>
                        <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-12  mx-auto">
                            <li className="pt-4 pb-4">
                                <Link href="/">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Home
                                    </a>
                                </Link>
                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="/about">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        About Us
                                    </a>
                                </Link>
                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="/management">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Management
                                    </a>
                                </Link>
                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="/product">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Products
                                    </a>
                                </Link>
                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="/article">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Articles
                                    </a>
                                </Link>
                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="/testimonials">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Testimonials
                                    </a>
                                </Link>
                            </li>
                            <li className="pt-4 pb-4">
                                <Link href="/contact">
                                    <a className="text-sm font-semibold text-blueGray-600 hover:text-blueGray-500">
                                        Contact
                                    </a>
                                </Link>
                            </li>
                        </ul>
                        <div className="lg:hidden">
                            <button className="navbar-burger flex items-center py-2 px-3 text-blue-500 hover:text-blue-700 rounded border border-blue-200 hover:border-blue-300" onClick={handleHidden}>
                                <svg
                                    className="fill-current h-4 w-4"
                                    viewbox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <title>Mobile menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Header;
