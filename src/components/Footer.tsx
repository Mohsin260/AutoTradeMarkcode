import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className="w-full bg-[#222732] p-[30px] sm:px-6 lg:px-8 mx-auto">
            <section>
                <div id="map-atma" className="w-full h-[300px] relative" >
                    <iframe style={{ border: "0px", width: "100%", height: "100%" }} src="https://www.google.com/maps/embed/v1/place?q= Auto Trademark 7591 Centreville Rd Manassas, VA 20111&amp;key=AIzaSyA1JhespUKcdmQM_u6lt12SJwU2yV7EUi4" allowFullScreen={true}></iframe>
                </div>
            </section>
            {/* {/* Grid */}
            <section className="mx-[1rem] text-white py-10 text-center sm:text-start">
                {/* footer-address-sec */}
                <div className="mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full sm:w-2/3">
                            <Image
                                src="/assets/images/autotrade-v4/bottom_logo.png"
                                alt="logo.png"
                                width={313}
                                height={72}
                                className="mx-auto sm:mx-0 sm:float-left max-w-full"
                            />
                        </div>
                        <div className="w-full sm:w-1/3 sm:text-right">
                            <ul id="list-inline">
                                <span className="uppercase">Stay Informed</span>
                                <li><Link href="https://www.facebook.com/autotrademark"><i className="fab fa-facebook"></i></Link></li>
                                <li><Link href="https://twitter.com/AutoTrademark"><i className="fab fa-twitter"></i></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* footer-address-sec */}
            <section className="mx-[1rem] text-white text-center sm:text-start">
                <div className="py-6">
                    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4 border-t border-b border-gray-700">
                        <div className="w-full border-r border-gray-700 my-5">
                            <span className="icon-loc-bottomr_1 btm-icn"></span>
                            <h4 className="text-lg font-bold">Visit us</h4>
                            <p>
                                <Link href="https://www.google.com/maps/search/?api=1&amp;query=Auto Trademark 7591 Centreville Rd Manassas, VA 20111" target="_blank">
                                    7591 Centreville Rd <br /> Manassas, VA 20111
                                </Link>
                            </p>
                        </div>
                        <div className="w-full border-r border-gray-700 my-5">
                            <span className="icon-phone-bottom_1 btm-icn"></span>
                            <h4 className="text-lg font-bold">Call us</h4>
                            <p>
                                Phone: <Link href="tel:703.361.6882">703.361.6882</Link>
                            </p>
                            <p>
                                Fax: <Link href="tel:703.361.6884">703.361.6884</Link>
                            </p>
                        </div>
                        <div className="w-full border-r border-gray-700 my-5">
                            <span className="icon-clock btm-icn"></span>
                            <h4 className="text-lg font-bold">Business Hours</h4>
                            <p>
                                <span>Mon - Fri:</span><span>9 a.m - 8 pm</span>
                                <br />
                                <span>Sat:</span><span>9 a.m - 7 pm</span>
                                <br />
                                <span>Sun:</span><span>11 a.m - 5 pm</span>
                            </p>
                        </div>
                        <div className="w-full my-5">
                            <span className="icon-shirt-links btm-icn"></span>
                            <h4 className="text-lg font-bold">Quick Links</h4>
                            <div id="footer-link" className='grid md:grid-cols-2 gap-5'>
                                <ul className='list-disc list-inside'>
                                    <li><Link href="/used-cars">Inventory</Link></li>
                                    <li><Link href="/car-finder">Find a car</Link></li>
                                    <li><Link href="/contact-us">Contact us</Link></li>
                                </ul>
                                <ul className='list-disc list-inside'>
                                    <li><Link href="/financing">Financing</Link></li>
                                    <li><Link href="/trade-in">Trade In</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mx-auto text-center sm:text-start">
                <div className="text-white">
                    Copyright 2022 Auto Trademark | <Link href="/privacy-policy">Privacy Policy</Link> | <Link href="/sitemap">Sitemap</Link><br />
                    Powered by: <Link href="https://www.dealerscloud.com">Dealer&apos;s Cloud</Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer