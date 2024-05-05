'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Sidebar from '../../Components/SideBar';
import axios from 'axios';
import { Star, PlusCircle, Pencil } from '@phosphor-icons/react';
import DelJourney from './DelJourney';
import Image from 'next/image';

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
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col w-full mb-32 items-center justify-center">
        <div className="py-10 mt-10 px-10 w-full flex flex-col">
          <div className="flex justify-between ">
            <h1 className="text-3xl font-bold text-sky-700">All Journey</h1>
            <div className="flex px-5 gap-2 bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 rounded-full items-center">
              <PlusCircle size={32} />
              <Link href="/admin/dashboard/journey/add">Create</Link>
            </div>
          </div>
        </div>
        <Link href="">
          <div className=" grid grid-cols-3 px-10 gap-10">
            {data.map((data) => (
              <div class="max-w-sm h-50 rounded p-2 overflow-hidden shadow-lg hover:shadow-2xl" key={data.id}>
                <div className="flex flex-col space-y-14 justify-center items-between">
                  <div>
                    <Image class="rounded-lg h-60 object-cover w-full mt-2" src={data.imageUrls} alt="" />
                    <div class="px-6 py-4">
                      <h1 class="font-bold text-2xl mb-4">{data.title}</h1>
                      <div className="font-bold">
                        Price : <del className="text-red-500 font-semibold">Rp{data.price}</del> <span className="text-sky-700 font-semibold">Rp{data.price_discount}</span>
                      </div>
                      <p className="font-bold">
                        Facilities : <span className="text-sky-700 font-semibold">{data.facilities}</span>
                      </p>
                    </div>
                    <div className="flex justify-end mb-4 mt-5 gap-2 mr-4 pb-2">
                      <button onClick={() => (window.location.href = `/admin/dashboard/category/update/${data.id}`)} className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-2 rounded-full">
                        <Pencil size={22} />
                      </button>
                      <DelJourney id={data.id} />
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
