import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';
import LeftAside from '../components/homelayout/LeftAside';
import RightAside from '../components/homelayout/RightAside';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto pt-10'>
                    <LatestNews></LatestNews>
                </section>
                <nav className='w-11/12 mx-auto pt-10'>
                    <NavBar></NavBar>
                </nav>
            </header>
            <main className='w-11/12 mx-auto pt-10 grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>
                <section className='main-nav col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;