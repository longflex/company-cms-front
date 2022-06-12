import React from 'react';
import CounterUp from "./Counterup"
import { Markup } from 'interweave';
import Parser from 'html-react-parser';

const ProductNumber = (aboutskill) => {
    return (
        <div className="container px-4 mx-auto">
            <div className="flex flex-wrap justify-between pt-8 pb-16">
                { console.log("aboutskill---", aboutskill) }
                { (Array.isArray(aboutskill.aboutskill)) ? (aboutskill.aboutskill.slice(0, 4).map(function(item) {

                    return (
                        <div className="hover-up-5 flex w-1/2 lg:w-auto py-4 wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                            <div className="flex justify-center items-center bg-blueGray-50 text-blue-500 rounded-xl h-12 w-12 sm:h-20 sm:w-20">
                                { Parser(item.icon) }
                            </div>
                            <div className="sm:py-2 ml-2 sm:ml-6">
                                <span className="sm:text-2xl font-bold font-heading">+ </span>
                                <span className="sm:text-2xl font-bold font-heading count">
                                    <CounterUp count={ item.amount } time={2} />
                                </span>
                                <p className="text-xs sm:text-base text-blueGray-400">{ item.title }</p>
                            </div>
                        </div>
                    )
                })) : (<div>-</div>) }
                
            </div>
        </div>
    );
};

export default ProductNumber;