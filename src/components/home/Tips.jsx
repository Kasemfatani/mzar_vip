'use client'
import Link from 'next/link';
import React from 'react';
export default function Home() {
   
    return (
        <div className="tips">
                <div className="container m-auto">
                    <h3>Need more trips ?</h3>
                    <p>See another trips and explore more trips  </p>
                    <Link href={'https://www.mzarapp.com/#paths'}><span>Explore Trips </span>   <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
            </div>
    );
}
