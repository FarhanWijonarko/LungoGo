'use client';

import { useState } from 'react';
import axios from 'axios';
import { ArrowCircleLeft } from '@phosphor-icons/react';

const Create = () => {
  const [promoName, setPromoName] = useState({
    PromoName: '',
    Minimum: 0,
    Discount: 0,
    Code: '',
    image: '',
    terms: '',
  });
  console.log(promoName);
  const handlePromo = (e) => {
    setPromoName({ ...promoName, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      title: promoName.PromoName,
      description: promoName.Description,
      minimum_claim_price: parseInt(promoName.Minimum),
      promo_discount_price: parseInt(promoName.Discount),
      promo_code: promoName.Code,
      imageUrl: promoName.image,
      terms_condition: promoName.terms,
    };
    await axios
      .post('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/create-promo', payload, {
        headers: {
          apikey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert('Promo Created');
          window.location.href = '/admin/dashboard/promo';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="px-20 py-12 bg-[#fffaf0] w-full h-full">
      <div className="flex items-center gap-5">
        <button onClick={() => window.history.back()}>
          <ArrowCircleLeft size={40} />
        </button>
        <h1 className="text-3xl font-bold text-sky-700">Create Promo</h1>
      </div>
      <div className="mt-10 flex flex-col gap-3">
        <div>
          <label htmlFor="promoname" className="text-lg  block mb-2 font-medium text-gray-900">
            Promo Name
          </label>
          <input
            type="text"
            name="PromoName"
            id="PromoName"
            onChange={handlePromo}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Promo Name"
            required
          />
        </div>
        <div>
          <label htmlFor="discount" className="text-lg  block mb-2 font-medium text-gray-900">
            Promo Description
          </label>
          <textarea
            name="Description"
            onChange={handlePromo}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="exampleFormControlTextarea1"
            rows="4"
            placeholder="Promo Description"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-lg  block mb-2 font-medium text-gray-900">
            Promo Price Minimum
          </label>
          <input
            type="Number"
            name="Minimum"
            id="Minimum"
            onChange={handlePromo}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Price Minimum"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="text-lg  block mb-2 font-medium text-gray-900">
            Promo Discount Price
          </label>
          <input
            type="Number"
            name="Discount"
            id="Discount"
            onChange={handlePromo}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Discount Price"
            required
          />
        </div>
        <div>
          <label htmlFor="text" className="text-lg  block mb-2 font-medium text-gray-900">
            Code Promo
          </label>
          <input
            type="Text"
            name="Code"
            id="Code"
            onChange={handlePromo}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Code Promo"
            required
          />
        </div>
        <label htmlFor="image" className="text-lg block mb-1 font-medium text-gray-900">
          Input Image
        </label>
        <input type="file" id="image" name="image" className="w-full border-2 border-gray-300 rounded p-2 w-max" required onChange={handlePromo} />
      </div>
      <button onClick={handleSubmit} type="submit" className="w-32 mt-10 text-white bg-sky-700 rounded-lg text-sm p-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
        Create Promo
      </button>
    </div>
  );
};
export default Create;
