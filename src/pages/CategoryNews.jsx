import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

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
            <h1 className='font-semibold'>Total: {categoryNews.length} News Found</h1>
        </div>
    );
};

export default CategoryNews;