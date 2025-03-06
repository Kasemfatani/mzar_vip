'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '/public/pg.jpg'
import "@fancyapps/ui/dist/fancybox/fancybox.css";
export default function Climp() {

    return (
        <div className="climp">
            <div className="container m-auto">
                <div className="climp-cont">
                    <div className="text">
                        <h4>Climbing Hira with car</h4>
                        <p>
                            We take you on a spiritual historical journey, tracing the footsteps of the Prophet Muhammad, peace be upon him: from the starting point of the migration, passing through the location of the Pledge of Aqaba, and then descending into the valley of our Prophet Ibrahim, peace be upon him, concluding with Jabal Al Noor (Al Noor mountain), the starting point of the message, and the revelation of the Quran. At the end of this journey, you can visit the Revelation Exhibition and enjoy an enriching and delightful tour among the aisles of its museums. In this journey, we blend the emotions of the hearts,embody the present, and enrich the experience.
                        </p>
                    </div>
                    <div className="img-cont">
                        <Image src={img} alt="Mazar" className="img" />
                    </div>
                </div>
            </div>
        </div>
    );
}
