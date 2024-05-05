'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../Components/Navbar';
import Image from 'next/image';

const Category = () => {
  const [data, setData] = useState([]);
  const ambilData = () => {
    axios
      .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories', {
        headers: { apikey: '24405e01-fbc1-45a5-9f5a-be13afcd757c' },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    ambilData();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center py-44">
        <Link href="/category" className="text-3xl font-bold text-sky-700 text-center">
          Category
        </Link>
        <p className="text-center mt-3">Find the Category You Want</p>
        <div className="px-11 py-10 grid grid-cols-4 gap-5">
          {data.map((category) => (
            <div key={category.id}>
              <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm h-72 mx-auto mt-10">
                <Image src={category.imageUrl} alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover" />
                <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                <h3 class="z-10 mt-3 text-3xl font-bold text-white">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Category;
