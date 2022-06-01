import React from 'react';
import Layout from '../components/layout/Layout';

const Testimonials = () => {
    return (
        <>
        <Layout>

        
            <section className="py-20 pb-8 overflow-x-hidden">
                <div className="container">
                    <div className="flex flex-wrap mb-24">
                        <div className="relative w-full lg:w-1/2 h-128 mb-20 lg:mb-0 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                            <div className="absolute top-0 right-0 h-full w-full mt-6 -mr-6 bg-blueGray-100 rounded-xl"></div>
                            <img className="absolute top-0 right-0 h-full w-full rounded-xl object-cover object-top" src="/assets/imgs/placeholders/img-1.png" alt="Monst" />
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-24 my-auto">
                            <img src="/assets/imgs/icons/quote.svg" alt="Monst" className="wow animate__animated animate__fadeIn" data-wow-delay=".2s" />
                            <h2 className="my-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">Maecenas nibh purus, pharetra ac felis sed, elementum molestie urna. Nunc at arcu non ipsum auctor lacinia quis quis mi.</h2>
                            <p className="mb-1 text-lg">
                                <strong className="text-blue-500 wow animate__animated animate__fadeIn" data-wow-delay=".4s">Alice Bradley</strong>
                            </p>
                            <p className="text-gray-500 text-xs wow animate__animated animate__fadeIn" data-wow-delay=".5s">CEO, Co Founders</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-4 pb-4">
                        <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                            <img className="mx-auto" src="/assets/imgs/logos/brands/brand-1.png" alt="Monst" />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                            <img className="mx-auto" src="/assets/imgs/logos/brands/brand-2.png" alt="Monst" />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                            <img className="mx-auto" src="/assets/imgs/logos/brands/brand-3.png" alt="Monst" />
                        </div>
                        <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".7s">
                            <img className="mx-auto" src="/assets/imgs/logos/brands/brand-4.png" alt="Monst" />
                        </div>
                        <div className="hidden md:block w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                            <img className="mx-auto" src="/assets/imgs/logos/brands/brand-5.png" alt="Monst" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="pt-20 pb-12 xl:bg-contain bg-top bg-no-repeat" style={{"backgroundImage":"url('assets/imgs/backgrounds/intersect.svg')"}}>
                <div className="container">
                    <div className="max-w-lg mx-auto mb-12 text-center">
                        <img className="mx-auto" src="/assets/imgs/icons/quote.svg" alt="Monst" />
                        <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">Our Customers Very Happy With Our Services</h2>
                        <p className="text-blueGray-400 leading-loose">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus eget justo et iaculis.</p>
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
                        <div className="w-full md:w-1/2 py-5 md:px-5">
                            <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".7s">
                                <div className="flex items-center mb-4">
                                    <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-5.png" alt="Monst" />
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
                        <div className="w-full md:w-1/2 py-5 md:px-5">
                            <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".7s">
                                <div className="flex items-center mb-4">
                                    <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-6.png" alt="Monst" />
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
                    </div>
                </div>
            </section>
            </Layout>
        </>
    );
};

export default Testimonials;