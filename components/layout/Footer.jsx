import React, { useEffect, useState } from "react"
import Link from "next/link"
import { processHighlightText } from "../../hook"
const Footer = () => {
    const [title, setTitle] = useState({
        first: '',
        middle: '',
        last: ''
    })
    const [allright, setAllright] = useState({
        first: '',
        middle: '',
        last: '',
        addr: '',
    })
    const [contact, setContact] = useState({})
    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8000/api/foot`);
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
            setTitle(processHighlightText(record.footer_content.title, record.footer_content.title_hl))
            setAllright({...processHighlightText(record.footer_content.all_rights, record.footer_content.all_rights_link), addr : record.footer_content.all_rights_addr})
            setContact(record.contact)
            console.log('Contact---', record)
        }
        fetchData()
        return;
    }, [])
    return (
        <>
            <section className="py-20">
                <div className="container px-4 mx-auto wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                    <div className="flex flex-wrap mb-12 lg:mb-20 -mx-3 text-center lg:text-left">
                        <div className="w-full lg:w-1/5 px-3 mb-6 lg:mb-0">
                            <Link href="/">
                                <a className="inline-block mx-auto lg:mx-0 text-3xl font-semibold leading-none">
                                    <img className="h-10" src="/assets/imgs/logos/famco-logo.png" alt="Famco" />
                                </a>
                            </Link>
                        </div>
                        <div className="w-full lg:w-2/5 px-3 mb-8 lg:mb-0">
                            <p className="max-w-md mx-auto lg:max-w-full lg:mx-0 lg:pr-32 lg:text-lg text-blueGray-400 leading-relaxed">
                                { title.first }<strong>{ title.middle }</strong>{ title.last }
                            </p>
                        </div>
                        <div className="w-full lg:w-1/5 px-3 mb-8 lg:mb-0">
                            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Office</p>
                            <p className="lg:text-lg text-blueGray-400">{ contact.address }</p>
                        </div>
                        <div className="w-full lg:w-1/5 px-3">
                            <p className="mb-2 lg:mb-4 lg:text-lg font-bold font-heading text-blueGray-800">Contacts</p>
                            <p className="lg:text-lg text-blueGray-400">{ contact.phone }</p>
                            <p className="lg:text-lg text-blueGray-400">{ contact.google }</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                        <p className="text-sm text-blueGray-400">
                            &copy; { allright.first }{" "}
                            <a className="text-blue-400" href={`${ allright.addr }`} target="_blank">
                                { allright.middle }
                            </a>
                            { allright.last }
                        </p>
                        <div className="order-first lg:order-last -mx-2 mb-4 lg:mb-0">
                            <a className="inline-block px-2" href={`${ contact.facebook }`}>
                                <img src="/assets/imgs/icons/facebook-blue.svg" alt="Famco" />
                            </a>
                            <a className="inline-block px-2" href={`${ contact.twitter }`}>
                                <img src="/assets/imgs/icons/twitter-blue.svg" alt="Famco" />
                            </a>
                            <a className="inline-block px-2" href={`${ contact.instagram }`}>
                                <img src="/assets/imgs/icons/instagram-blue.svg" alt="Famco" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Footer;
