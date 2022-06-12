import React, { useEffect, useState } from "react"
import Layout from '../components/layout/Layout';

const Testimonials = () => {
    
    const [content, setContent] = useState({})
    const [customers, setCustomers] = useState([])
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8000/api/review`);
            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
            const record = await response.json();
            if (!record) {
                window.alert(`Record with id not found`);
                return;
            }

            setCustomers(record.customers)
            setReviews(record.reviews)
            setContent(record.content)

            return record;
        }
        fetchData();
        return;
    },[])

    return (
        <>
        <Layout>
            <section className="py-20 pb-8 overflow-x-hidden">
                <div className="container">
                    <div className="flex flex-wrap mb-24">
                        <div className="relative w-full lg:w-1/2 h-128 mb-20 lg:mb-0 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                            <div className="absolute top-0 right-0 h-full w-full mt-6 -mr-6 bg-blueGray-100 rounded-xl"></div>
                            <img className="absolute top-0 right-0 h-full w-full rounded-xl object-cover object-top" src={`/assets/imgs/placeholders/${ content.img }`} alt="Monst" />
                        </div>
                        <div className="w-full lg:w-1/2 lg:pl-24 my-auto">
                            <img src="/assets/imgs/icons/quote.svg" alt="Monst" className="wow animate__animated animate__fadeIn" data-wow-delay=".2s" />
                            <h2 className="my-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">{ content.upper_desc }</h2>
                            <p className="mb-1 text-lg">
                                <strong className="text-blue-500 wow animate__animated animate__fadeIn" data-wow-delay=".4s">{ content.auther_name }</strong>
                            </p>
                            <p className="text-gray-500 text-xs wow animate__animated animate__fadeIn" data-wow-delay=".5s">{ content.auther_prof }</p>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-center max-w-4xl mx-auto pt-4 pb-4">
                        { (Array.isArray(customers)) ? (customers.slice(0, 5).map(function(item,index) {
                        return (
                            <div className="w-1/2 md:w-1/3 lg:w-1/5 px-8 mb-8 wow animate__animated animate__fadeIn" data-wow-delay=".1s">
                                <img className="mx-auto" src={`/assets/imgs/placeholders/${ item.image }`} alt="Famco" />
                            </div>
                        )
                        })) : (<div>-</div>) }
                    </div>
                </div>
            </section>
            <section className="pt-20 pb-12 xl:bg-contain bg-top bg-no-repeat" style={{"backgroundImage":"url('assets/imgs/backgrounds/intersect.svg')"}}>
                <div className="container">
                    <div className="max-w-lg mx-auto mb-12 text-center">
                        <img className="mx-auto" src="/assets/imgs/icons/quote.svg" alt="Monst" />
                        <h2 className="my-2 text-3xl md:text-4xl font-bold font-heading">{ content.lower_title }</h2>
                        <p className="text-blueGray-400 leading-loose">{ content.lower_desc }</p>
                    </div>
                    <div className="flex flex-wrap">
                        { (Array.isArray(reviews)) ? (reviews.map(function(item,index) {
                        return (
                            <div className="w-full md:w-1/2 py-5 md:px-5">
                                <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".1s">
                                    <div className="flex items-center mb-4">
                                        <img className="h-16 w-16 rounded-full object-cover" src="/assets/imgs/placeholders/avatar-1.png" alt="Monst" />
                                        <div className="pl-4">
                                            <strong className="mt-6 mb-2 text-md">{ item.auther_name }</strong>
                                            <p className="text-gray-500 text-xs mt-3">{ item.auther_prof }</p>
                                        </div>
                                    </div>
                                    <p className="leading-loose text-blueGray-400 mb-5">{ item.desc }</p>
                                </div>
                            </div>
                        )
                        })) : (<div>-</div>) }
                    </div>
                </div>
            </section>
            </Layout>
        </>
    );
};

export default Testimonials;