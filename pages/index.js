import TextEffect from "../components/elements/TextEffect"
import ProductNumber from "../components/elements/ProductNumber"
import AboutSpecialty from "../components/elements/AboutSpecialty"
import Layout from "../components/layout/Layout"
import Slider1 from "../components/slider/Slider1"
import { useEffect, useState } from "react"
import { processHighlightText } from "../hook"
import Parser from 'html-react-parser';

function Home() {
    const [data, setData] = useState({
        anim_1: '',
        anim_2: '',
    })
    const [mText, setmText] = useState({
        first: '',
        middle: '',
        last: ''
    })
    const [mDesc, setmDesc] = useState({
        first: '',
        middle: '',
        last: ''
    })
    const [aboutcontent, setaboutContent] = useState({
        first: '',
        middle: '',
        last: '',
        desc: '',
    })
    const [pIntro, setpIntro] = useState({
        first: '',
        middle: '',
        last: ''
    })
    const [pad, setpAd] = useState({
        first: '',
        middle: '',
        last: ''
    })
    const [aboutskill, setaboutSkill] = useState([])
    const [aboutspecialty, setaboutSpecialty] = useState([])
    const [keyspecialty, setkeySpecialty] = useState([])
    const [productspecialty, setproductSpecialty] = useState([])
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`http://localhost:8000/api/home`);
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
            setaboutSkill(record.about_skill)
            setaboutSpecialty(record.about_specialty)
            setkeySpecialty(record.key_specialty)
            setProducts(record.products)
            setproductSpecialty(record.product_specialty)
            setmText(processHighlightText(record.main_data.main_text, record.main_data.main_text_hl))
            setmDesc(processHighlightText(record.main_data.main_desc, record.main_data.main_desc_hl))
            setaboutContent({...processHighlightText(record.about_content.lower_title, record.about_content.lower_title_hl), desc: record.about_content.lower_desc})
            setpIntro(processHighlightText(record.main_data.product_intro_text, record.main_data.product_intro_text_hl))
            setpAd(processHighlightText(record.main_data.product_ad_text, record.main_data.product_ad_text_hl))
            setData(record.main_data)

            return record;
        }
        fetchData();
        return;
    },[])

    return (
        <>
            <Layout>
                <section className="xl:bg-contain bg-top bg-no-repeat -mt-24 pt-24" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
                    <div className="container px-4 mx-auto">
                        <div className="pt-12 text-center">
                            <div className="max-w-2xl mx-auto mb-8">
                                <h2 className="text-3xl lg:text-5xl lg:leading-normal mb-4 font-bold font-heading wow animate__animated animate__fadeIn">
                                    { mText.first } 
                                     <span className="text-blue-500">{ mText.middle }</span>{ mText.last }
                                </h2>
                                <p className="text-blueGray-400 leading-relaxed wow animate__animated animate__fadeIn">
                                    { mDesc.first }<strong className="text-blue-500">{ mDesc.middle }</strong>{ mDesc.last }{" "}
                                    <span className="typewrite d-inline text-brand">
                                        <TextEffect text1={ data.anim_1 } text2={ data.anim_2 } />
                                    </span>
                                </p>
                            </div>
                            <div>
                                <a className="btn-primary py-4 px-8 mr-2 wow animate__animated animate__fadeIn hover-up-2" href="#key-features">
                                    Key Products
                                </a>
                                <a className="btn-white wow animate__animated animate__fadeIn hover-up-2" data-wow-delay=".3s" href="#how-we-work">
                                    How We Work?
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="relative max-w-6xl mt-16 md:mt-8 mb-8 mx-auto">
                        <img src="/assets/imgs/elements/pattern.png" alt="Monst" />
                        <div className="absolute" style={{ top: "9%", left: "14%", width: "72%", height: "66%" }}>
                            <img className="jump rounded wow animate__animated animate__fadeIn" src={`/assets/imgs/placeholders/${ data.main_image }`} alt="Monst" />
                        </div>
                    </div>
                    <ProductNumber aboutskill= { aboutskill } />
                </section>
                <section className="py-20 bg-blueGray-50" id="how-we-work">
                    <AboutSpecialty content={ aboutcontent } specialty={ aboutspecialty }/>
                </section>
                <section className="pt-8 pb-12 md:py-16 lg:py-16 overflow-x-hidden" id="key-features">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap lg:flex-nowrap">
                            <div className="w-full lg:w-1/2">
                                <div className="lg:py-6 lg:pr-77 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    <div className="mb-4">
                                        <span className="text-xs py-1 px-3 text-blue-500 font-semibold bg-blue-50 rounded-xl wow animate__animated animate__fadeInDown" data-wow-delay=".9s">
                                            { data.key_product_badge }
                                        </span>
                                        <h2 className="text-4xl mt-5 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                            { data.key_product }
                                        </h2>
                                    </div>
                                    { (Array.isArray(keyspecialty)) ? (keyspecialty.slice(0, 3).map(function(item,index) {
                                    return (
                                        <div className="flex items-start py-4 wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                            <div className="w-8 mr-5 text-blue-500">
                                                { Parser(item.icon) }
                                            </div>
                                            <div>
                                                <h3 className="mb-2 text-xl font-semibold font-heading">{ item.title }</h3>
                                                <p className="text-blueGray-400 leading-loose">{ item.desc }</p>
                                            </div>
                                        </div>
                                    )
                                    })) : (<div>-</div>) }
                                    
                                </div>
                            </div>
                            <div className="relative w-full lg:w-1/2 my-12 lg:my-0">
                                <div className="wow animate__animated animate__fadeIn" data-wow-delay=".5s">
                                    <img className="jump relative mx-auto rounded-xl w-full z-10" src={`/assets/imgs/placeholders/${ data.key_product_image }`} alt="Monst" />
                                    <img className="absolute top-0 left-0 w-40 -ml-12 -mt-12" src="/assets/imgs/elements/blob-tear.svg" alt="Monst" />
                                    <img className="absolute bottom-0 right-0 w-40 -mr-12 -mb-12" src="/assets/imgs/elements/blob-tear.svg" alt="Monst" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-12 md:py-20">
                    <div className="container px-4 mx-auto">
                        <div className="flex flex-wrap -mx-3">
                            <div className="relative w-full lg:w-1/3 mb-8 lg:mb-0 text-center lg:text-left">
                                <div className="max-w-md lg:max-w-xs lg:pr-16 mx-auto lg:ml-0 mb-6 lg:mb-0">
                                    <h2 className="text-3xl md:text-4xl mb-4 font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                        { pIntro.first } <span className="text-blue-500">{ pIntro.middle }</span> { pIntro.last }
                                    </h2>
                                    <p className="text-xs md:text-base text-blueGray-400 leading-loose wow animate__animated animate__fadeIn" data-wow-delay=".9s">
                                        { data.product_intro_desc }
                                    </p>
                                </div>
                            </div>
                            <div className="w-full lg:w-2/3 flex flex-wrap">
                                <div className="relative w-full">
                                    <div className="carausel-2-columns slick-carausel" id="carausel-2-columns-1">
                                        <Slider1 products={ products } />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 xl:bg-contain bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/backgrounds/intersect.svg')" }}>
                    <div className="container px-4 mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="max-w-lg mx-auto mb-4 text-4xl font-bold font-heading wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                <span>{ pad.first }</span><br />
                                <span className="text-blue-500"> { pad.middle } </span>
                                <span>{ pad.last }</span>
                            </h2>
                            <p className="max-w-sm mx-auto text-lg text-blueGray-400 wow animate__animated animate__fadeInDown" data-wow-delay=".5s">
                                { data.product_ad_desc }
                            </p>
                        </div>
                        <div className="flex flex-wrap -mx-3">
                        { console.log('productspecialty---', productspecialty) }
                            { (Array.isArray(productspecialty)) ? (productspecialty.slice(0, 3).map(function(item,index) {
                            return (
                                <div className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6">
                                    <div className="hover-up-5 pt-16 pb-8 px-4 text-center bg-white rounded shadow wow animate__animated animate__fadeIn" data-wow-delay=".2s">
                                        <img className="h-20 mb-6 mx-auto" src={`/assets/imgs/icons/${ item.image }`} alt="Monst" />
                                        <h3 className="mb-2 text-2xl font-heading px-2">{ item.title }</h3>
                                        <p className="mt-2 mb-8 text-blueGray-400 px-12">{ item.desc }</p>
                                    </div>
                                </div>
                            )
                            })) : (<div>-</div>) }
                        </div>
                    </div>
                </section>
                <section className="py-20 bg-top bg-no-repeat" style={{ backgroundImage: "url('assets/imgs/elements/blob.svg')" }}>
                    <div className="container px-4 mx-auto">
                        <div className="relative py-20 px-4 lg:p-20">
                            <div className="max-w-lg mx-auto text-center">
                                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading wow animate__animated animate__fadeIn">
                                
                                    <span>WOULD YOU LIKE TO DISCUSS FURTHER?</span>

                                </h2>
                                <p className="mb-8 text-blueGray-400 wow animate__animated animate__fadeIn" data-wow-delay=".3s">
                                    All your information is completely confidential
                                </p>
                                <a href="/contact" className="w-full md:w-auto py-4 px-8 text-xs text-white font-semibold leading-none bg-blue-400 hover:bg-blue-500 rounded" type="submit">
                                        GET IN TOUCH
                                    </a>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
export default Home