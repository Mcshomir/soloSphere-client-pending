import React from 'react';

const MyPostTable = ({ jobs }) => {
    const { category, description, job_title, deadline, max_price, min_price, buyer } = jobs
    console.log("jobbbbbbbbj", jobs)
    return (

        <tr>

            <td>
                <div className="flex items-center gap-3">
                    {/* <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div> */}

                    <div>
                        <div className="font-bold">{job_title}</div>

                    </div>


                </div>
            </td>
            <td>
                {category}
            </td>
            <td>

                <br />
                <span className="badge badge-ghost badge-sm">{deadline}</span>
            </td>

            <div>
                <td>Min: ${max_price}</td>

                <td>Max: ${min_price}</td>
            </div>

            <th>
                <button className="btn btn-ghost btn-xs">x</button>
            </th>


        </tr>

    );
};

export default MyPostTable;