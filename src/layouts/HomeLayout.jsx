import React from 'react';
import { Outlet, useNavigate } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homelayouts/LeftAside';
import RightAside from '../components/homelayouts/RightAside';
import Loading from '../components/Loading';

const HomeLayout = () => {
    const {state} = useNavigate();
    return (
        <div>
            <header>
                <Header></Header>
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
                <section className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </section>
            </header>

            <main className='w-11/12 mx-auto my-3 grid grid-cols-12 gap-5'>
                <aside className='col-span-3 h-fit sticky top-2'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    {state == "loading"? <Loading></Loading> : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky top-2 h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;