'use client'
import React, { useEffect, useState } from 'react';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Link from 'next/link';
import img from '/public/nussuk.jpg'
import img2 from '/public/cal.svg'
import img3 from '/public/car.svg'
import Image from 'next/image';

export default function MainDetails({ data }) {

    return (
        <div className="main-details">
            <div className="container m-auto">
                <div className="main-details-cont">
                    <div className="l-side">
                        <div className="coll-cont">
                            <Link href={'/nussuk.com'} className="upper">
                                <Image src={img} alt="Mazar" className="img" />
                                <h3>Verified by nusuk </h3>
                            </Link>
                            <div className="lower">
                                <p>Officially partnered with Nusuk for a trusted and seamless experience.</p>
                            </div>
                        </div>
                        <div className="coll-cont">
                            <div href={'/nussuk.com'} className="upper">
                                <Image src={img2} alt="Mazar" className="img" />
                                <h3>Free cancelation</h3>
                            </div>
                            <div className="lower">
                                <p>Plans changed? Cancel anytime at no extra cost!</p>
                            </div>
                        </div>
                        <div className="coll-cont">
                            <div href={'/nussuk.com'} className="upper">
                                <Image src={img3} alt="Mazar" className="img" />
                                <h3>Affordable cars</h3>
                            </div>
                            <div className="lower">
                                <p>Enjoy smooth rides to the top with affordable prices.</p>
                            </div>
                        </div>
                    </div>
                    <div className="r-side">
                        <div className="fac-cont pb-10 border-b border-[#EEEEEE]" >
                            <h2>Facilities</h2>
                            <div className="grid-cont">
                                {
                                    data.services.map((facility, index) =>
                                        <div className="fac" key={index}>
                                            <Image src={facility.image} alt="Mazar" className="img" width={40} height={40} />
                                            <span>{facility.name}</span>
                                        </div>
                                    )

                                }
                            </div>
                        </div>
                        <div className="fac-cont">
                            <h2>Activities</h2>
                            <div className="act-cont">
                                {
                                    data.activities.map((activity, index) =>
                                        <div className="fac" key={index}>
                                            <Image src={activity.image} alt="Mazar" className="img" width={40} height={40}/>
                                            <span>{activity.name}</span>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
