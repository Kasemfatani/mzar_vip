'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import hero from '/public/pg.jpg'
import logo from '/public/logo.svg'
export default function Hero({data}) {
    
    return (
        <div className="hero">
            <div className="hero" style={{ backgroundImage: `url(${data.cover})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center , center', height: '100vh' }}>
                <div className="relative">
                    <div className="overlay" >
                        <div className="nav-bar">
                            <div className="container m-auto">
                                <div className="nav-cont">
                                    <Link href={'/'}> <Image src={logo} alt="Mazar" className="img" /></Link>
                                    <Link href={`https://www.mzarapp.com/book-path?id=`+data.id} target='_blank' className="btn-hero-header">Book now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="container m-auto body-container">
                            <div className="hero-body">
                                <h1>{data.name} </h1>
                                <h2>Start exploring our VIP trip </h2>
                                <div className="hero-body-btns">
                                    <Link href={`https://www.mzarapp.com/book-path?id=`+data.id} target='_blank' className='btn-book' >Book Now</Link>
                                </div>
                                <div className="scroll-down-icon" onClick={() => { window.scrollTo({ top: window.innerHeight, behavior: "smooth" }); }}><div className="pointer"></div></div>
                            </div>
                        </div>
                    </div>
                    <div className="f-shash"></div>
                    <div className="s-shash"></div>
                    <div className="t-shash"></div>
                </div>
            </div>


        </div>
    );
}
