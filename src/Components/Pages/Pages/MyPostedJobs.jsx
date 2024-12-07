import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import axios from 'axios';
import MyPostTable from './MyPostTable';

const MyPostedJobs = () => {
    const { user } = useContext(AuthContext);
    const [jobs, setJobs] = useState([]);
    const uri = `http://localhost:8000/jobs?email=${user?.email}`;

    useEffect(() => {
        if (user?.email) {
            fetch(uri)
                .then(res => res.json())
                .then(data => {
                    console.log("Fetched bookings:", data);
                    setJobs(data);
                })
                .catch(error => {
                    console.error("Error fetching bookings:", error);
                });
        }
    }, [user?.email]);




    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Deadline</th>
                            <th>Price</th>

                            <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map(jobTable => (
                            <MyPostTable
                                jobs={jobTable}
                                key={jobTable._id}
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPostedJobs;
