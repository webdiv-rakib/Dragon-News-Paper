import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../components/NewsCard';

const CategoryNews = () => {
    // useParams for get button id
    const { id } = useParams();

    // useLoaderData for loading data
    const data = useLoaderData();

    // id wise news render data to show on UI
    const [categoryNews, setCategoryNews] = useState([]);

    // useEffect to filter id wise news
    useEffect(() => {
        // now we use if else if else condition to render conditional data.
        if (id == "0") {
            setCategoryNews(data);
            return;
        }
        else if (id == '1') {
            const filteredNews = data.filter(news => news.others.is_today_pick == true);
            setCategoryNews(filteredNews)
        }
        else {

            const filteredNews = data.filter(news => news.category_id == id);
            setCategoryNews(filteredNews)
        }
    }, [data, id]);
    return (
        <div>
            <h1 className='font-semibold'>Total: <span className='text-red-600'>{categoryNews.length}</span> News Found</h1>
            <div className='grid grid-cols-1 gap-5 pt-5'>
                {
                    categoryNews.map(news => <NewsCard news={news} key={news.id}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;