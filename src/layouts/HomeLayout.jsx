import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import NavBar from '../components/NavBar';

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
            <main>
                <section className='left-nav'>

                </section>
                <section className='main-nav'>
                    <Outlet></Outlet>
                </section>
                <section className='right-nav'>

                </section>
            </main>
        </div>
    );
};

export default HomeLayout;