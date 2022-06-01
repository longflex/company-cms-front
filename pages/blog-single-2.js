import React from 'react';
import Layout from '../components/layout/Layout';
import Link from "next/link"

const BlogSingle2 = () => {
    return (
        <>
            <Layout>
                <section className="pb-20">
                    <div className="pt-20 pb-8 mb-12 bg-cover bg-no-repeat">
                        <div className="container">
                            <div className="max-w-2xl mx-auto">
                                <div className="text-center mb-6">
                                    <span className="text-base md:text-lg">
                                        <Link href="/blog-2">
                                            <a className="text-blueGray-200 hover:underline">
                                                <span className="inline-block py-1 px-3 text-xs font-semibold bg-blue-100 text-blue-600 rounded-xl mr-3">Bussiness</span>
                                            </a>
                                        </Link>
                                        <span className="text-blueGray-500 text-sm">24 Jan, 2021</span>
                                    </span>
                                    <h2 className="text-4xl md:text-5xl mt-4 font-bold font-heading">Best Tailwind CSS template for your SASS landing site</h2>
                                </div>
                                <div className="flex justify-center mb-8">
                                    <img className="w-12 h-12 object-cover rounded-full" src="/assets/imgs/placeholders/avatar-8.png" alt="Monst" />
                                    <div className="pl-4">
                                        <p className="text-blueGray-500 mb-1">Alice Bradley</p>
                                        <p className="text-xs text-blueGray-500 font-semibold">Co Founders</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="max-w-2xl mx-auto">
                            <p className="mb-6 leading-loose text-blueGray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo est eget consequat imperdiet. Suspendisse laoreet scelerisque lobortis. Mauris facilisis hendrerit nulla at vehicula. Suspendisse potenti. Ut in nulla a purus bibendum convallis. Suspendisse id nunc maximus, suscipit nte ac, vulputate massa. Sed ut nunc suscipit, bibendum arcu a, interdum elit. Nullam laoreet mollis dictum. Ut suscipit, magna at elementum iaculis, erat erat fermentum justo, sit amet ultrices enim leo sit amet purus. Nulla sed erat molestie, auctor mauris lobortis, iaculis justo.</p>

                            <p className="mb-6 leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                Duis hendrerit dui in dui ornare luctus. Nullam gravida tincidunt lorem cursus suscipit. Integer scelerisque sem et sem porta, eu volutpat mi tempor. Duis interdum sodales lacus non tempor. Nam mattis, sapien a commodo ultrices, nunc orci tincidunt ante, tempus tempus turpis metus laoreet lacus. Praesent condimentum, arcu ut fringilla tincidunt, augue diam pretium augue, sit amet vestibulum nunc felis vel metus. Duis dolor nulla, pellentesque non ultrices ut, convallis eu felis.
                            </p>
                        </div>

                        <div className="max-w-2xl mx-auto">
                            <p className="leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                Duis dolor nulla, pellentesque non ultrices ut, convallis eu felis. Duis luctus tempor arcu, vitae elementum massa porta non. Morbi aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut dictum lacus neque in urna. Nam metus elit, ullamcorper pretium nisi at, aliquet gravida lectus. Nullam id lectus pellentesque, suscipit dolor eget, consequat velit. Pellentesque finibus commodo nisl, id interdum leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.
                            </p>

                            <p className="leading-loose text-blueGray-400 wow animate__animated animate__fadeIn animated" data-wow-delay=".1s">
                                Duis luctus tempor arcu, vitae elementum massa porta non. Morbi aliquet, neque ut volutpat sodales, dui enim facilisis enim, ut dictum lacus neque in urna. Nam metus elit, ullamcorper pretium nisi at, aliquet gravida lectus. Nullam id lectus pellentesque, suscipit dolor eget, consequat velit. Pellentesque finibus commodo nisl, id interdum leo. Maecenas aliquam felis justo, ut sagittis nunc maximus ut.
                            </p>
                            
                            <div className="transition duration-300 ease-in-out transform hover:-translate-y-1 flex items-center justify-center mt-12">
                                <Link href="/pricing">
                                    <a className="px-4 py-2 mt-2 text-gray-600 transition-colors duration-200 transform border border-gray-100 rounded-lg dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"> Read More Articles </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    );
};

export default BlogSingle2;