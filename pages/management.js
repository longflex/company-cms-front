import React from 'react';
import Layout from '../components/layout/Layout';

const Team = () => {
    return (
        <>
        <Layout>
            <section className="-mt-24 pt-40 pb-12 bg-blueGray-100">
                <div className="container text-center">
                    <h1 className="text-2xl lg:text-5xl font-bold mb-5 wow animate__animated animate__fadeIn animated">Our Management Team</h1>
                    <ul className="mx-auto text-gray-500 text-sm lg:text-sm pb-12 wow animate__animated animate__fadeIn animated">
                        <li className="inline-flex items-center">
                            <a href="#" className="hover:text-blue-500 text-gray-800">Home</a>
                            <svg fill="currentColor" viewBox="0 0 20 20" className="h-5 w-auto text-gray-300">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                            </svg>
                        </li>
                        <li className="inline-flex items-center text-gray-400">
                            <span>Portfolio</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section className="py-20 bg-blueGray-50">
                <div className="container">
                    <div className="max-w-lg mx-auto mb-12 text-center">
                        <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Our Team Leader</span>
                        <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                            Meet Our <span className="text-blue-500">Management</span> <br />
                            Team Members
                        </h2>
                        <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Our Customers Very Happy With Our Services.</p>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 py-5 md:px-5">
                            <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".1s">
                                <div className="flex items-center mb-4">
                                    <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-1.png" alt="Monst" />
                                    <div className="pl-4">
                                        <strong className="mt-6 mb-2 text-md">Geraldine Tusoy</strong>
                                        <p className="text-gray-500 text-xs mt-3">CEO, Co Founders</p>
                                    </div>
                                </div>
                                <p className="leading-loose text-blueGray-400 mb-5">Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.</p>
                                <div className="flex space-x-2">
                                    <a href="#">
                                        <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 py-5 md:px-5">
                            <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".3s">
                                <div className="flex items-center mb-4">
                                    <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-2.png" alt="Monst" />
                                    <div className="pl-4">
                                        <strong className="mt-6 mb-2 text-md">Clara Kolawole</strong>
                                        <p className="text-gray-500 text-xs mt-3">CEO-Founder</p>
                                    </div>
                                </div>
                                <p className="leading-loose text-blueGray-400 mb-5">Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.</p>
                                <div className="flex space-x-2">
                                    <a href="#">
                                        <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 py-5 md:px-5">
                            <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".5s">
                                <div className="flex items-center mb-4">
                                    <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-3.png" alt="Monst" />
                                    <div className="pl-4">
                                        <strong className="mt-6 mb-2 text-md">Chris Fulton</strong>
                                        <p className="text-gray-500 text-xs mt-3">Project-Manager</p>
                                    </div>
                                </div>
                                <p className="leading-loose text-blueGray-400 mb-5">Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.</p>
                                <div className="flex space-x-2">
                                    <a href="#">
                                        <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 py-5 md:px-5">
                            <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".7s">
                                <div className="flex items-center mb-4">
                                    <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-4.png" alt="Monst" />
                                    <div className="pl-4">
                                        <strong className="mt-6 mb-2 text-md">Dany Connolly</strong>
                                        <p className="text-gray-500 text-xs mt-3">Direct-Founder</p>
                                    </div>
                                </div>
                                <p className="leading-loose text-blueGray-400 mb-5">Donec consequat tortor risus, at auctor felis consequat a. Donec quis dolor sem. Sed sollicitudin magna in hendrerit pulvinar. Vestibulum non quam velit.</p>
                                <div className="flex space-x-2">
                                    <a href="#">
                                        <img src="/assets/imgs/icons/facebook-blue.svg" alt="Monst" />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/imgs/icons/instagram-blue.svg" alt="Monst" />
                                    </a>
                                    <a href="#">
                                        <img src="/assets/imgs/icons/twitter-blue.svg" alt="Monst" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="pt-20">
                <div className="container text-center">
                    <div className="max-w-lg mx-auto mb-12">
                        <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Our Team</span>
                        <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                            Our Awesome <br />
                            <span className="text-blue-500">Management</span> Team Member
                        </h2>
                        <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".4s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-1.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Geraldine Tusoy</strong></p>
                            <p className="text-gray-500 text-xs mb-4">CEO, Co Founders</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-2.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Clara Kolawole</strong></p>
                            <p className="text-gray-500 text-xs mb-4">CEO-Founder</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".5s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-3.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Chris Fulton</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Project-Manager</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".7s">
                            <img className="h-64 w-64 mx-auto rounded object-cover object-top" src="/assets/imgs/placeholders/avatar-4.png" alt="Monst" />
                            <p className="mt-6"><strong className="text-md">Dany Connolly</strong></p>
                            <p className="text-gray-500 text-xs mb-4">Direct-Founder</p>
                            <div className="flex py-1 justify-center space-x-2">
                                <img src="/assets/imgs/icons/facebook.svg" alt="Monst" />
                                <img src="/assets/imgs/icons/twitter.svg" alt="Monst" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
        </>
    );
};

export default Team;