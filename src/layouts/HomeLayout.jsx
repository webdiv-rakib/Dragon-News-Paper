import React, { useEffect, useState } from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';
import Loading from '../pages/Loading';

const HomeLayout = () => {
    const { state } = useNavigation();
    const [latestNews, setLatestNews] = useState([]);

    useEffect(() => {
        fetch('/news.json')
            .then(res => res.json())
            .then((data) => {
                // Filter only trending news
                const latest = data.filter(news => news.others?.is_trending == true);
                setLatestNews(latest);
                console.log(latest)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <header>
                <Header></Header>
                {/* {import.meta.env.VITE_name} */}
                <section className='w-11/12 mx-auto pt-10'>
                    <LatestNews newsItems={latestNews}></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto pt-10'>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto pt-10 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 sticky h-fit top-0'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main-nav col-span-6'>
                    {state == 'loading' ? <Loading /> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky h-fit top-0'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;