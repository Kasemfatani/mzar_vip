'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '/public/pg.jpg'
import { Fancybox } from "@fancyapps/ui";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from 'framer-motion'; // Importing the motion component from Framer Motion for animations
import "@fancyapps/ui/dist/fancybox/fancybox.css";
export default function DayContent({ data }) {
    Fancybox.bind("[data-fancybox]", {
    });
    const imgs = [
        { img: img },
        { img: img },
        { img: img },
    ]
    return (
        <div className="day-content">
            <div className="container m-auto overflow-hidden">
                <div className="gallery">
                    <Swiper
                        // navigation
                        pagination={false}
                        spaceBetween={12}
                        slidesPerView={7.5}
                        autoplay={true}
                        loop={true}
                        modules={[Autoplay, Navigation, Pagination]}
                        breakpoints={{
                            1400: {
                                slidesPerView: 3,
                            },
                            1100: {
                                slidesPerView: 3,
                            },
                            767: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 2,
                                autoplay: false,
                            },
                            640: {
                                slidesPerView: 1,
                                autoplay: false,
                            },

                            100: {
                                slidesPerView: 1,
                                autoplay: false,
                            },
                        }}
                    >
                        {

                            data.package_images.map((img, index) =>
                                <SwiperSlide key={index}>
                                    <div className="img-cont" key={index}>
                                        <a href={img.image} data-fancybox="post">
                                            <figure>
                                                <Image src={img.image} alt="Mazar" className="img" width={300} height={300} />
                                            </figure>
                                        </a>
                                    </div>
                                </SwiperSlide>
                            )

                        }
                    </Swiper>

                </div>
                <div className="text">
                    <h4>Explore day content</h4>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    );
}
