'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Sidebar from '../../Components/SideBar';
import { Pencil, PlusCircle } from '@phosphor-icons/react';
import DelCategory from './DelCategory';

const Category = () => {
  const [data, setData] = useState([]);
  const ambilData = () => {
    axios
      .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories', {
        headers: { apikey: '24405e01-fbc1-45a5-9f5a-be13afcd757c' },
      })
      .then((res) => {
        setData(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    ambilData();
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="py-20 px-10 w-full flex flex-col">
        <div className="flex justify-between ">
          <h1 className="text-3xl font-bold text-sky-700">All Category</h1>
          <div className="flex px-5 gap-2 bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 rounded-full items-center">
            <PlusCircle size={32} />
            <Link href="/admin/dashboard/category/add">Create</Link>
          </div>
        </div>
        <div className="px-11 grid grid-cols-4 gap-5 my-12">
          {data.map((category) => (
            <div className="bg-gray-100 rounded-2xl mt-10 shadow-lg" key={category.id}>
              <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl h-72 px-8 pb-8 pt-40 max-w-sm mx-auto">
                <img src={category.imageUrl} alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 class="z-10 mt-3 text-3xl font-bold text-white">{category.name}</h3>
              </div>
              <div className="flex justify-end mb-4 mt-5 gap-2 mr-4 pb-2">
                <button onClick={() => (window.location.href = `/admin/dashboard/category/update/${category.id}`)} className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-2 rounded-full">
                  <Pencil size={22} />
                </button>
                <DelCategory id={category.id} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Category;
