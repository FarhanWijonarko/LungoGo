'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';
import { ArrowCircleLeft } from '@phosphor-icons/react';

const Detail = ({ params: { id } }) => {
  const [data, setData] = useState({});
  const ambilData = async () => {
    await axios
      .get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${id}`, {
        headers: {
          apikey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
        },
      })
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    ambilData();
  }, []);
  return (
    <div className="w-full px-10 py-10 flex flex-col gap-10 mt-10 justify-center items-center">
      <div className="flex items-center gap-5">
        <button onClick={() => window.history.back()}>
          <ArrowCircleLeft size={40} />
        </button>
        <h1 className="text-3xl font-bold text-sky-700">Detail Promo</h1>
      </div>
      <div className="flex flex-col gap-5 w-1/2 justify-center">
        <img src={data.imageUrl} alt="" className="w-full h-96 rounded-xl" />
        <div className="bg-[#fffaf0] p-5 rounded-2xl">
          <h1>
            <span className="font-bold text-sky-700">Name :</span> {data.title}
          </h1>
          <h1 className="font-bold text-sky-700">Description :</h1>
          <h1 className="mx-5">{data.description}</h1>
          <h1>
            <span className="font-bold text-sky-700">Name :</span> {data.promo_code}
          </h1>
          <h1>
            <span className="font-bold text-sky-700">Name :</span> Rp {data.minimum_claim_price}
          </h1>
          <h1>
            <span className="font-bold text-sky-700">Name :</span> Rp {data.promo_discount_price}
          </h1>
        </div>
      </div>
    </div>
  );
};
export default Detail;
