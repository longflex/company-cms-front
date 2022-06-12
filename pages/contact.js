import React, { useEffect, useState } from "react"
import Layout from '../components/layout/Layout';
import { processHighlightText } from "../hook"

const Contact = () => {

    const [content, setContent] = useState({})

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8000/api/contact`);
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

            setContent({ ...processHighlightText(record.content.title, record.content.title_hl), badge: record.content.badge }) 

            return record;
        }
        fetchData();
        return;
    },[])

    return (
        <>
            <Layout>
                <section className="py-20">
                    <div className="container">
                        <div className="max-w-2xl mx-auto text-center">
                            <div className="max-w-md mb-8 mx-auto">
                                <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animatedanimated animate__fadeIn" data-wow-delay=".1s">
                                    { content.badge }
                                </span>
                                <h2 className="mt-2 text-4xl font-bold font-heading wow animate__animatedanimated animate__fadeIn" data-wow-delay=".s">
                                    { content.first }<span className="text-blue-500">{ content.middle }</span>{ content.last }
                                </h2>
                            </div>
                            <div>
                                <form>
                                    <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Subject" />
                                    </div>
                                    <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="text" placeholder="Name" />
                                    </div>
                                    <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <input className="w-full p-4 text-xs font-semibold leading-none bg-blueGray-50 rounded outline-none" type="email" placeholder="name@example.com" />
                                    </div>
                                    <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <textarea className="w-full h-24 p-4 text-xs font-semibold leading-none resize-none bg-blueGray-50 rounded outline-none" placeholder="Message..."></textarea>
                                    </div>
                                    <div className="mb-4 wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <label className="flex px-2 bg-blueGray-50 rounded">
                                            <input className="hidden" type="file" name="Choose file" />
                                            <span className="my-1 ml-auto px-4 py-3 text-xs text-white font-semibold leading-none bg-blueGray-500 hover:bg-blueGray-600 rounded cursor-pointer"> Browse</span>
                                        </label>
                                    </div>
                                    <div className="flex justify-between items-center wow animate__animatedanimated animate__fadeIn" data-wow-delay=".3s">
                                        <button className="py-4 px-8 text-sm text-white font-semibold leading-none bg-blue-500 hover:bg-blue-700 rounded" type="submit">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
};

export default Contact;