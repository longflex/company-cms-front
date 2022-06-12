import React, { useEffect, useState } from "react"
import Layout from '../components/layout/Layout';
import ProductNumber from "../components/elements/ProductNumber"
import AboutSpecialty from "../components/elements/AboutSpecialty"
import { processHighlightText } from "../hook"

const About = () => {
    const [aboutcontent, setaboutContent] = useState({})
    const [aboutcontent1, setaboutContent1] = useState({
        title:{},
        upper_desc:{},
        desc:'',
        img:'',
    })
    const [aboutskill, setaboutSkill] = useState([])
    const [aboutspecialty, setaboutSpecialty] = useState([])
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
            setaboutContent({...processHighlightText(record.about_content.lower_title, record.about_content.lower_title_hl), desc: record.about_content.lower_desc})
            setaboutContent1({
                title: {...processHighlightText(record.about_content.upper_title, record.about_content.upper_title_hl)},
                upper_desc: {...processHighlightText(record.about_content.upper_desc_1, record.about_content.upper_desc_1_hl)},
                desc: record.about_content.upper_desc_2,
                img: record.about_content.img,
            })
            setaboutSkill(record.about_skill)
            setaboutSpecialty(record.about_specialty)

            return record;
        }
        fetchData();
        return;
    },[])
    return (
        <>
            <Layout>
                <section className="relative -mt-24 pt-24">
                    <div className="hidden lg:block absolute inset-0 w-1/2 ml-auto bg-blueGray-100 z-0" style={{ "z-index": "-1" }}></div>
                    <div className="container">
                        <div className="flex flex-wrap items-center -mx-3">
                            <div className="w-full lg:w-1/2 px-3">
                                <div className="py-12">
                                    <div className="max-w-lg lg:max-w-md mx-auto lg:mx-0 mb-8 text-center lg:text-left">
                                        <h2 className="text-3xl lg:text-5xl mb-4 font-bold font-heading wow animate__animatedanimated animate__fadeIn">
                                            { aboutcontent1.title?.first }<span className="text-blue-500">{ aboutcontent1.title?.middle }</span>{ aboutcontent1.title?.last }
                                        </h2>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn">
                                        { aboutcontent1.upper_desc.first }<strong className="text-blue-500">{ aboutcontent1.upper_desc.middle }</strong>{ aboutcontent1.upper_desc.last }<span className="typewrite d-inline text-brand" data-period="3000" data-type='["Web Agency", "Social Marketing" ]'></span>
                                        </p>
                                        <p className="text-blueGray-400 leading-relaxed wow animate__animatedanimated animate__fadeIn mt-3 text-sm">{ aboutcontent1.desc }</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:w-1/2 px-3 lg:bg-blueGray-10 mb-12 lg:mb-0 pb-10">
                                <div className="flex items-center justify-center">
                                    <img className="lg:max-w-lg" src={`/assets/imgs/illustrations/${ aboutcontent1.img }`} alt="Famco" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-6 pb-2">
                    <ProductNumber aboutskill= { aboutskill } />
                </section>
                <section className="py-20 bg-blueGray-50" id="how-we-work">
                    <AboutSpecialty content={ aboutcontent } specialty={ aboutspecialty }/>
                </section>
            </Layout>
        </>
    );
};

export default About;