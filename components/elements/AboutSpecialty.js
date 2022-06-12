import React from 'react';
import CounterUp from "./Counterup"
import Parser from 'html-react-parser';

const AboutSpecialty = ({ content, specialty }) => {
    return (
        <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center justify-between max-w-2xl lg:max-w-full mb-12">
                <div className="w-full lg:w-1/2 mb-4 lg:mb-0">
                    <h2 className="text-3xl md:text-4xl font-bold font-heading wow animate__animated animate__fadeInDown">
                        { console.log("about-", specialty) }
                        <span>{ content.first }</span>
                        <span className="text-blue-500">{ content.middle }</span>
                        <br />
                        <span>{ content.last }</span>
                    </h2>
                </div>
                <div className="w-full lg:w-1/2">
                    <p className="text-blueGray-400 leading-loose wow animate__animated animate__fadeIn">{ content.desc }</p>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 -mb-6 text-center">
                { (Array.isArray(specialty)) ? (specialty.slice(0, 3).map(function(item,index) {

                return (
                    <div className="hover-up-5 w-full md:w-1/2 lg:w-1/3 px-3 mb-6 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                        <div className="p-12 bg-white shadow rounded">
                            <div className="flex w-12 h-12 mx-auto items-center justify-center text-blue-800 font-bold font-heading bg-blue-200 rounded-full">{ index+1 }</div>
                            <img className="h-36 mx-auto my-4" src={`/assets/imgs/illustrations/${ item.img }`} alt="famco" />
                            <h3 className="mb-2 font-bold font-heading text-xl">{ item.title }</h3>
                            <p className="text-sm text-blueGray-400 leading-relaxed">{ item.desc }</p>
                        </div>
                    </div>
                )
                })) : (<div>-</div>) }
            </div>
        </div>
    );
};

export default AboutSpecialty;