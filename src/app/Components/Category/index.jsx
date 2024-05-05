'use client';

import axios from 'axios';
import { CaretCircleRight } from '@phosphor-icons/react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
const Category = () => {
  const [data, setData] = useState([]);
  const ambilData = () => {
    axios
      .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/categories', {
        headers: { apikey: '24405e01-fbc1-45a5-9f5a-be13afcd757c' },
      })
      .then((res) => {
        const datalimit = res.data.data.slice(0, 3);
        setData(datalimit);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    ambilData();
  }, []);
  return (
    <div className="flex flex-col items-center justify-center mb-32">
      <Link href="/promo" className="text-3xl font-bold text-sky-700 text-center">
        Promo
      </Link>
      <p className="text-center mt-3">Book Now and Enjoy Fantastic Discounts for Your Vacation!</p>
      <div className="flex items-center justify-center">
        <Link href="/promo">
          <div className="px-11 py-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {data.map((category) => (
              <div key={category.id}>
                <div class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 w-72 h-72 mx-auto mt-10">
                  <img src={category.imageUrl} alt="University of Southern California" class="absolute inset-0 h-full w-full object-cover" />
                  <div class="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                  <h3 class="z-10 mt-3 text-3xl font-bold text-white">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </Link>
        <button onClick={() => (window.location.href = '/category')}>
          <CaretCircleRight className="text-sky-700 mt-20" size={50} />
        </button>
      </div>
    </div>
  );
};
export default Category;
