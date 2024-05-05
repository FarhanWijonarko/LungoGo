'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '../Components/Navbar';
import Image from 'next/image';
const Promos = () => {
  const [diskon, setDiskon] = useState([]);
  const ambilPromo = () => {
    axios
      .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promos', {
        headers: { apikey: '24405e01-fbc1-45a5-9f5a-be13afcd757c' },
      })
      .then((res) => {
        const limitedPromos = res?.data?.data;
        setDiskon(limitedPromos);
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
          Promo
        </Link>
        <p className="text-center mt-3">Book Now and Enjoy Fantastic Discounts for Your Vacation!</p>
        <Link href="/promo">
          <div className=" grid grid-cols-3 px-10 gap-10 mt-20">
            {diskon.map((promo) => (
              <Link href={`/promos/detail/${promo.id}`} class="max-w-sm h-50 border-l-8 border-sky-700 rounded p-2 overflow-hidden shadow-lg hover:shadow-2xl" key={promo.id}>
                <Image class="w-20 mt-3 px-4" src="/img/LogoTravel.png" alt="" />
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
              </Link>
            ))}
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Promos;
