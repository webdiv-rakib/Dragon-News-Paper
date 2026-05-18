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
            {/* 1. Default: 1 column layout (grid-cols-1) for mobile
  2. Medium screens (md:): 4-column master layout for tablets
  3. Large screens (lg:): Retains your full 12-column setup for desktop viewports
*/}
            <main className='w-11/12 mx-auto pt-10 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-5'>

                {/* Left Sidebar: Category Menu */}
                {/* Hidden on mobile, completely visible on large desktop views */}
                <aside className='hidden lg:block lg:col-span-3 sticky h-fit top-0'>
                    <LeftAside></LeftAside>
                </aside>

                {/* Center Section: News Stream Container */}
                {/* Takes 1 full column on mobile, 3 grids on tablet, and 6 grids on desktop */}
                <section className='main-nav col-span-1 md:col-span-3 lg:col-span-6'>
                    {state == 'loading' ? <Loading /> : <Outlet></Outlet>}
                </section>

                {/* Right Sidebar: Social widgets, logins, tags */}
                {/* Spans 1 column on mobile, drops into the 4th grid track on tablet, and snaps to 3 grids on desktop */}
                <aside className='col-span-1 md:col-span-1 lg:col-span-3 sticky h-fit top-0'>
                    <RightAside></RightAside>
                </aside>

            </main>
        </div>
    );
};

export default HomeLayout;