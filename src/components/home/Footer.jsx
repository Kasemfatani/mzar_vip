'use client'
import React, { useEffect, useState } from 'react'; // Importing React to use JSX syntax and create components.
import c from '/public/c.svg'
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


export default function Footer() { // Defining the main functional component named 'Footer'.
    const pathname = usePathname();
    return (
        <footer> {/* Main footer container with padding and background color */}
            {
                pathname != '/path' ?

                    <a href="https://wa.me/+966580121025?text=Hello, I am interested to know more about Mzar" className="fixed-what">
                        <i className="fa-brands fa-whatsapp"></i>
                    </a>
                    : null
            }
            <div className="container m-auto"> {/* Container for the footer content */}
                <div className="footer-cont">
                    <div className="copyRight">
                        <Image src={c} alt="Mazar" className="img" />
                        <p>{ 'Licensed by the Ministry of Tourism ,license number 73104705'}</p>
                    </div>
                    <div className="social">
                        <Link href={'https://x.com/mzarapp'}><i className="fa-brands fa-x-twitter"></i></Link>
                        <Link href={'https://www.instagram.com/mzarapp/'}><i className="fa-brands fa-instagram"></i></Link>
                        <Link href={'https://www.facebook.com/mzarapp'}><i className="fa-brands fa-facebook"></i></Link>
                        <Link href={'https://www.youtube.com/@mzarapp'}><i className="fa-brands fa-youtube"></i></Link>
                        <Link href={'https://www.tiktok.com/@mzarapp'}><i className="fa-brands fa-tiktok"></i></Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
