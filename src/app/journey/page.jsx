'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../Components/Navbar';
import { Star } from '@phosphor-icons/react';
const Journey = () => {
  const [data, setData] = useState([]);
  const ambilPromo = () => {
    axios
      .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/activities', {
        headers: { apikey: '24405e01-fbc1-45a5-9f5a-be13afcd757c' },
      })
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    ambilPromo();
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center mt-44 mb-32">
        <Link href="/promo" className="text-3xl font-bold text-sky-700 text-center">
          Journey
        </Link>
        <p className="text-center mt-3">Book Now and Enjoy Fantastic Discounts for Your Vacation!</p>
        <Link href="/promo">
          <div className=" grid grid-cols-3 px-10 gap-10 mt-20">
            {data.map((data) => (
              <div class="max-w-sm h-50 rounded p-2 overflow-hidden shadow-lg hover:shadow-2xl" key={data.id}>
                <div className="flex flex-col space-y-14 justify-center items-between">
                  <div>
                    <img class="rounded-lg h-60 object-cover w-full mt-2" src={data.imageUrls} alt="" />
                    <div class="px-6 py-4">
                      <h1 class="font-bold text-2xl mb-4">{data.title}</h1>
                      <div className="font-bold">
                        Price : <del className="text-red-500 font-semibold">Rp{data.price}</del> <span className="text-sky-700 font-semibold">Rp{data.price_discount}</span>
                      </div>
                      <p className="font-bold">
                        Facilities : <span className="text-sky-700 font-semibold">{data.facilities}</span>
                      </p>
                    </div>
                  </div>
                  <div className="px-6 pt-4 pb-2 gap-2 flex justify-end items-center">
                    <Star className="text-amber-300" size={20} />
                    <p>{data.rating}</p>
                    <p className="text-sky-700">({data.total_reviews})</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Journey;
