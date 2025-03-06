'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '/public/logo.svg'
import sar from '/public/sar.png'
export default function BookSec({ data }) {

    return (
        <div className="hero book-sec">
            <div className="relative">
                <div className="overlay" >
                    <div className="nav-bar">
                        <div className="container m-auto">
                            <div className="nav-cont">
                                <div className='price'>
                                    <div className="pp"><Image src={sar} alt="Mazar" className="img" width={30} height={33} /><span>600</span></div>
                                    <p>Per group up to 4 persons</p>
                                </div>
                                <Link href={`/https://www.mzarapp.com/book-path?id=` + data.id} target='_blank' className="btn-hero-header">Book now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="container m-auto body-container">
                        <div className="hero-body">
                            <h1>Can’t wait to see you</h1>
                            <h2>Book now and start your spiritual healing trip  </h2>
                            <div className="hero-body-btns">
                                <Link href={`https://www.mzarapp.com/book-path?id=` + data.id} target='_blank' className='btn-book' >Book Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="f-shash"></div>
                <div className="s-shash"></div>
                <div className="t-shash"></div>
            </div>
           
        </div>
    );
}
