import React, { useEffect, useState } from "react"
import Layout from '../components/layout/Layout';
import { processHighlightText } from "../hook"

const Team = () => {

    const [content, setContent] = useState({
        upper_title:{},
        lower_title:{},
        upper_desc:'',
        lower_desc:'',
    })
    const [members, setMembers] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8000/api/manage`);
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

            setContent({
                upper_title: {...processHighlightText(record.content.upper_title, record.content.upper_title_hl)},
                lower_title: {...processHighlightText(record.content.lower_title, record.content.lower_title_hl)},
                upper_desc: record.content.upper_desc,
                lower_desc: record.content.lower_desc,
            })

            setMembers(record.members)

            return record;
        }
        fetchData();
        return;
    },[])

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
                            <span>Management</span>
                        </li>
                    </ul>
                </div>
            </section>
            
            <section className="pt-20">
                <div className="container text-center">
                    <div className="max-w-lg mx-auto mb-12">
                        <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">FAMCO</span>
                        <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".3s">
                            { content.upper_title.first }<br />
                            <span className="text-blue-500">{ content.upper_title.middle }</span>{ content.upper_title.last }
                        </h2>
                        <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">{ content.upper_desc }</p>
                    </div>
                    <div className="flex flex-wrap -mx-3">
                        { (Array.isArray(members)) ? (members.slice(0, 4).map(function(item,index) {
                        return (
                            <div className="w-full md:w-1/2 lg:w-1/4 px-3 mb-12 hover-up-5 wow animate__animated animate__fadeIn animated" data-wow-delay=".4s">
                                <img className="h-64 w-64 mx-auto rounded object-cover object-top" src={`/assets/imgs/placeholders/${ item.image }`} alt="Famco" />
                                <p className="mt-6"><strong className="text-md">{ item.member_name }</strong></p>
                                <p className="text-gray-500 text-xs mb-4">{ item.member_prof }</p>
                            </div>
                        )
                        })) : (<div>-</div>) }
                    </div>
                </div>
            </section>

            <section className="py-20 bg-blueGray-50">
                <div className="container">
                    <div className="max-w-lg mx-auto mb-12 text-center">
                        <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">Famco Leaders</span>
                        <h2 className="text-3xl md:text-4xl mt-2 mb-4 font-bold font-heading wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                            { content.lower_title.first }<span className="text-blue-500">{ content.lower_title.middle }</span> <br />
                            { content.lower_title.last }
                        </h2>
                        <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">{ content.lower_desc }</p>
                    </div>
                    <div className="flex flex-wrap">
                        { (Array.isArray(members)) ? (members.slice(0, 4).map(function(item,index) {
                            return (
                                <div className="w-full md:w-1/2 py-5 md:px-5">
                                    <div className="px-6 py-10 bg-white shadow rounded hover-up-5 wow animate__animated animate__fadeIn animated border border-gray-100 hover:border-gray-200" data-wow-delay=".1s">
                                        <div className="flex items-center mb-4">
                                            <img className="h-16 w-16 rounded-full object-cover" src={`/assets/imgs/placeholders/${ item.image }`} alt="Famco" />
                                            <div className="pl-4">
                                                <strong className="mt-6 mb-2 text-md">{ item.member_name }</strong>
                                                <p className="text-gray-500 text-xs mt-3">{ item.member_prof }</p>
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

export default Team;