import React from 'react';
import Layout from '../components/layout/Layout';
import CounterUp from "../components/elements/Counterup"

const Services = () => {
    return (
        <>
            <Layout>
                <section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
                    <div className="container">
                        <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">Our Products</h1>
                        <ul className="flex text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
                            <li className="inline-flex items-center">
                                <a href="#" className="hover:text-blue-500 text-gray-800">
                                    Home
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center">
                                <a href="#" className="hover:text-blue-500 text-gray-800">
                                    Our Products
                                </a>
                                <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                                </svg>
                            </li>
                            <li className="inline-flex items-center text-gray-400">
                                <span>Web Development</span>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="pt-12">
                    <div className="container py-12 mx-auto">
                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/2 pr-12 px-3 order-0 md:order-0 mb-12 md:mb-0 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <img className="sm:max-w-sm lg:max-w-full mx-auto" src="/assets/imgs/placeholders/img-6.jpg" alt="Monst" />
                            </div>
                            <div className="w-full md:w-1/2 px-3 order-1 md:order-1">
                                <div className="max-w-md-2">
                                    <div className="mb-4">
                                        <span className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">
                                            Why choose this
                                        </span>
                                        <h2 className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            We Provide Best <br />
                                            <span className="text-blue-500">Web design </span>services
                                        </h2>
                                    </div>

                                    <p className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
                                    </p>

                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 items-start pt-4 pb-8 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">1</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">Web design UX/UI</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">2</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">React Develop</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">3</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">Ecommerce Build</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">4</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">CMS develop</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-12">
                    <div className="container py-12 mx-auto">
                        <div className="flex flex-wrap">
                            
                            <div className="w-full md:w-1/2 px-3 order-0 md:order-1">
                                <div className="max-w-md-2">
                                    <div className="mb-4">
                                        <span className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">
                                            Why choose this
                                        </span>
                                        <h2 className="text-4xl mt-3 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            We Provide Best <br />
                                            <span className="text-blue-500">Web design </span>services
                                        </h2>
                                    </div>

                                    <p className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.
                                    </p>

                                    <div className="flex flex-wrap">
                                        <div className="w-full md:w-1/2 items-start pt-4 pb-8 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">1</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">Web design UX/UI</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">2</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">React Develop</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".4s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">3</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">Ecommerce Build</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                        <div className="w-full md:w-1/2 items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                            <div className="w-8 mb-5 text-blue-500">
                                                <span className="inline-block py-2 px-4 mr-4 text-xs font-semibold bg-blue-500 text-white rounded">4</span>
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">CMS develop</h3>
                                                <p className="text-blueGray-400 leading-loose text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis expedita animi.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 pr-12 px-3 order-1 md:order-0 mb-12 md:mb-0 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                <img className="sm:max-w-sm lg:max-w-full mx-auto" src="/assets/imgs/placeholders/img-6.jpg" alt="Monst" />
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
};

export default Services;