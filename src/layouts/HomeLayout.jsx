import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
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