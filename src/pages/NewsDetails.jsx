import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import RightAside from '../components/homelayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    // 1. load data
    const data = useLoaderData();

    // 2. destructure to get datas id
    const { id } = useParams();

    const [news, setNews] = useState({});
    // console.log(data, id, news);
    // 4. to load for the first time
    useEffect(() => {
        const newsDetails = data.find((singleNews => singleNews.id == id))
        setNews(newsDetails)

    }, [data, id])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12 gap-5 pt-10'>
                <section className='col-span-9'>
                    <h1 className='font-bold'>Dragon News</h1>
                    <NewsDetailsCard news={news}></NewsDetailsCard>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;