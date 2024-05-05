'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { Pencil, PlusCircle } from '@phosphor-icons/react';
import DelPromo from '../promo/DelPromo';
import Link from 'next/link';
import Sidebar from '@/app/admin/Components/SideBar/index.jsx';

const User = () => {
  const [data, setData] = useState([]);
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
          setData(res.data.data);
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="flex">
      <Sidebar className="w-96" />
      <div className="py-20 px-10 flex flex-col">
        <div className="flex justify-between">
          <h1 className="text-3xl font-bold text-sky-700">All User</h1>
          <div className="flex px-5 gap-2 bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 rounded-full items-center">
            <PlusCircle size={32} />
            <Link href="/admin/dashboard/promo/add">Create</Link>
          </div>
        </div>
        <div className="px-20 py-20 grid grid-cols-2 gap-10">
          {' '}
          {data.map((data, index) => (
            <div className="border-2 p-5 rounded-xl w-full flex gap-5" key={index}>
              {data.profilePictureUrl ? (
                <img className="w-40 rounded-lg h-52" src={data.profilePictureUrl} alt="" />
              ) : (
                <img className="w-40 rounded-lg h-52" src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="" />
              )}
              <div className=" w-full p-5 rounded-2xl">
                <h1 className="font-bold text-sky-700">
                  <span className="font-bold text-black">Name : </span>
                  {data.name}
                </h1>
                <h1 className="font-bold text-sky-700">
                  <span className="font-bold text-black">Phone : </span>
                  {data.phoneNumber}
                </h1>
                <h1 className="font-bold text-sky-700">
                  <span className="font-bold text-black">Role : </span>
                  {data.role}
                </h1>
                <h1 className="font-bold text-sky-700">
                  <span className="font-bold text-black">Email : </span>
                  {data.email}
                </h1>
              </div>
              <div className="flex flex-col mt-5 gap-2 mx-1 pb-2">
                <button onClick={() => (window.location.href = `/admin/dashboard/promo/edit/${promo.id}`)} className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-2 rounded-full">
                  <Pencil size={22} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <h1>{data.name}</h1>
      </div>
    </div>
  );
};

export default User;
