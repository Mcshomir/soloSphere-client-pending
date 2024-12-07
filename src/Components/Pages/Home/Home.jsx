import React from 'react';
import Navbanner from './Navbanner';
import TabCatagories from './TabCatagories';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const jobs = useLoaderData()
    console.log("jobs", jobs);
    return (
        <div>
            <Navbanner ></Navbanner>
            <TabCatagories jobs={jobs}></TabCatagories>

        </div>
    );
};

export default Home;