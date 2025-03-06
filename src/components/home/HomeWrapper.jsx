'use client'
import React, { useEffect, useState } from 'react';
import Hero from './Hero';
import DayContent from './DayContent';
import Climp from './Climp';
import Kornaisha from './Kornaisha';
import MainDetails from './MainDetails';
import Places from './Places';
import BookSec from './BookSec';
import Tips from './Tips';
import Loading from '@/app/loading';
import axios from 'axios';
import { API_BASE_URL } from '@/lib/apiConfig';
export default function Home() {
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState([]);

    useEffect(() => {
        setLoading(true)
        const getHomeData = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/landing/home/packages/vip`, {
                    headers: {
                        'lang': 'en',

                    },
                });
                let data = response.data;
                setData(data)
                setLoading(false)
            } catch (error) {
                console.error('Error retrieving data:', error);
                throw new Error('Could not get data');
                setLoading(false)
            }
        };
        getHomeData();
    }, []);
    console.log(data);
    return (
        <main>
            {
                loading ? <Loading /> :
                    <>
                        <Hero data={data} />
                        <DayContent data={data} />
                        <Climp />
                        <Kornaisha />
                        <MainDetails data={data} />
                        <Places data={data} />
                        <BookSec  data={data}/>
                        <Tips />
                    </>
            }

        </main>
    );
}
