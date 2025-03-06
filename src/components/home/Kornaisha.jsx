'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img from '/public/Kornaisha.svg'
import "@fancyapps/ui/dist/fancybox/fancybox.css";
export default function Kornaisha() {

    return (
        <div className="kornaisha">
            <Image src={img} alt="Mazar" className="img" />
        </div>
    );
}
