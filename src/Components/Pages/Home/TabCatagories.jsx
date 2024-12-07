import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import JobCard from './JobCard';
import axios from 'axios'
const TabCatagories = () => {
    const [jobs, setjobs] = useState([]);
    useEffect(() => {
        const getData = async () => {

            const { data } = await axios("http://localhost:8000/jobs")
            setjobs(data);
        }

        getData();
    })

    return (
        <div className='container py-20'>
            <Tabs>
                <TabList>
                    <Tab>Web</Tab>
                    <Tab>Graphic Design</Tab>
                    <Tab>Digital</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-3 justify-center gap-20 py-10'>
                        {jobs.filter(j => j.category === "Web Development").map(job => <JobCard
                            key={job._id}
                            job={job}
                        ></JobCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3 justify-center gap-10 py-10'>
                        {jobs.filter(j => j.category === "Graphic Design").map(job => <JobCard
                            key={job._id}
                            job={job}
                        ></JobCard>)}
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className='grid grid-cols-3  justify-center gap-10 py-10'> {jobs.filter(j => j.category === "Digital Marketing").map(job => <JobCard
                        key={job._id}
                        job={job}
                    ></JobCard>)}</div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default TabCatagories;