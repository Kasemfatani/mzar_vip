'use client'
import React, { useEffect, useState } from 'react';
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import img from '/public/pg.jpg'
import img2 from '/public/pg.jpg'
import img3 from '/public/pg.jpg'
import Image from 'next/image';

export default function Places({ data }) {
    let imgs = [img, img2, img3, img, img2, img3]
    return (
        <div className="places">
            <div className="container m-auto">
                <div className="grid-cont">
                    {data.locations.map((location, index) => (
                        <div className="place" key={index}>
                            <div className="img-cont" >
                                <Image src={location.cover} alt="Mazar" className="img" width={500} height={500} />
                            </div>
                            <div className="text">
                                <h2>{location.name}</h2>
                                <p>{location.short_description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
