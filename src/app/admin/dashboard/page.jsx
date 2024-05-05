'use client';

import Sidebar from '@/app/admin/Components/SideBar/index.jsx';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [admin, setAdmin] = useState(0);
  const [users, setUsers] = useState(0);

  const getUser = () => {
    axios
      .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/all-user', {
        headers: {
          apikey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        for (let i = 0; i < res.data.data.length; i++) {
          setData(i);
          let adminCount = 0;
          let userCount = 0;
          for (let i = 0; i < res.data.data.length; i++) {
            if (res.data.data[i].role === 'admin') {
              adminCount++;
            } else if (res.data.data[i].role === 'user') {
              userCount++;
            }
          }
          setAdmin(adminCount);
          setUsers(userCount);
        }
      });
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex ">
      <Sidebar />
      <div className="py-20 px-10 flex flex-col">
        <h1 className="text-4xl font-bold text-sky-700">Welcome Admin...</h1>
        <p className="text-xl mt-5 font-semibold text-sky-700">Good luck and dont Forget to Smile :) </p>
        <h1 className="text-3xl mt-20 font-bold text-sky-700">Dashboard</h1>
        <div className="grid grid-cols-3 gap-10 mt-10">
          <div className="w-64 h-32 justify-center flex flex-col gap-4 text-center px-5 border-l-8 border-sky-700 bg-white rounded shadow-xl">
            <h1 className="text-lg font-bold">All</h1>
            <h1 className="text-3xl font-bold text-sky-700">{data}</h1>
          </div>
          <div className="w-64 h-32 justify-center flex flex-col gap-4 text-center px-5 border-l-8 border-sky-700 bg-white rounded shadow-xl">
            <h1 className="text-lg font-bold">Admin</h1>
            <h1 className="text-3xl font-bold text-sky-700">{admin}</h1>
          </div>
          <div className="w-64 h-32 justify-center flex flex-col gap-4 text-center px-5 border-l-8 border-sky-700 bg-white rounded shadow-xl">
            <h1 className="text-lg font-bold">Users</h1>
            <h1 className="text-3xl font-bold text-sky-700">{users}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
