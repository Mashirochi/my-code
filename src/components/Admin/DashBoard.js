import { useEffect, useState } from "react";
import "./DashBoard.scss";
import { BarChart, Tooltip, Legend, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';
// import getOverview from "../../service/userService";

const DashBoard = () => {
    const [dataOverview, setDataOverview] = useState([]);
    const [dataChart, setDataChart] = useState([]);
    // useEffect(() => {
    //     fetchDataOverView();
    // }, [])
    // const fetchDataOverView = async () => {
    //     let res = await getOverview()
    //     if (res && res.EC === 0) {
    //         setDataOverview(res.DT);
    //     }
    // }
    const data = [
        {
            "name": "Page A",
            "uv": 4000,
            "pv": 2400
        },
        {
            "name": "Page B",
            "uv": 3000,
            "pv": 1398
        },
        {
            "name": "Page C",
            "uv": 2000,
            "pv": 9800
        },
        {
            "name": "Page D",
            "uv": 2780,
            "pv": 3908
        },
        {
            "name": "Page E",
            "uv": 1890,
            "pv": 4800
        },
        {
            "name": "Page F",
            "uv": 2390,
            "pv": 3800
        },
        {
            "name": "Page G",
            "uv": 3490,
            "pv": 4300
        }
    ]

    return (
        <>
            <div className="dashboard-container">
                <div className="title">
                    Analytics DashBoard
                </div>
                <div className="content">
                    <div className="c-left">
                        <div className="child">Total users</div>
                        <div className="child">Total quizzezs</div>
                        <div className="child">Total questions</div>
                        <div className="child">Total answers</div>
                    </div>
                    <div className="c-right">
                        <BarChart width={400} height={300} data={data}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" fill="#8884d8" />
                            <Bar dataKey="uv" fill="#82ca9d" />
                        </BarChart>
                    </div>
                </div>
            </div>
        </>)
}
export default DashBoard;