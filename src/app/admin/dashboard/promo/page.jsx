'use client';

import axios from 'axios';
import Sidebar from '../../Components/SideBar';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Pencil, PlusCircle } from '@phosphor-icons/react';
import DelPromo from './DelPromo';
import Image from 'next/image';

const Promo = () => {
  const [data, setData] = useState([]);
  const ambilData = () => {
    axios
      .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos', {
        headers: { apikey: '24405e01-fbc1-45a5-9f5a-be13afcd757c' },
      })
      .then((res) => {
        const limitedPromos = res?.data?.data;
        setData(limitedPromos);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    ambilData();
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="py-20 px-10 flex flex-col">
        <div className="flex justify-between ">
          <h1 className="text-3xl font-bold text-sky-700">All Promo</h1>
          <div className="flex px-5 gap-2 bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 rounded-full items-center">
            <PlusCircle size={32} />
            <Link href="/admin/dashboard/promo/add">Create</Link>
          </div>
        </div>
        <div className="px-11 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5 my-12">
          {data.map((promo) => (
            <Link href={`/admin/dashboard/promo/detail/${promo.id}`} class="w-100 h-50 border-l-8 border-sky-700 flex rounded p-10 overflow-hidden shadow-lg hover:shadow-2xl" key={promo.id}>
              <div className=" w-72">
                <Image class="w-40 mt-3 px-4" src={promo.imageUrl} alt="" />
                <div class="px-6 py-4">
                  <div class="font-bold text-2xl mb-4">{promo.title}</div>
                  <p class="text-rose-500 font-bold">
                    <span className="font-normal text-sm text-black">Kode Promo: </span>
                    {promo.promo_code}
                  </p>
                  <p class="text-rose-500 font-bold">
                    <span className="font-normal text-sm text-black">
                      Minimum Claim Price: <span className="text-rose-500 text-base font-bold">Rp</span>
                    </span>
                    {promo.minimum_claim_price}
                  </p>
                </div>
              </div>
              <div className="flex flex-col mt-5 gap-2 mr-4 pb-2">
                <Link href={`/admin/dashboard/promo/update/${promo.id}`} className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-2 rounded-full">
                  <Pencil size={22} />
                </Link>
                <DelPromo id={promo.id} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Promo;
