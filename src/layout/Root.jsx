import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import Loading from '../Loading';


const Root = () => {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => setLoading(false), 2500)
    }, [])
    if (loading) {
        return <Loading/>
    }

    return (
        <div  >
                         
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;