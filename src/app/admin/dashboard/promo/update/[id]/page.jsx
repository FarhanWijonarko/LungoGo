'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ArrowCircleLeft } from '@phosphor-icons/react';

const Update = ({ params }) => {
  const router = useRouter();
  const { id } = params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [terms_condition, setTermsCondition] = useState('');
  const [promo_code, setPromoCode] = useState('');
  const [promo_discount_price, setPromoDiscountPrice] = useState(0);
  const [minimum_claim_price, setMinimumClaimPrice] = useState(0);

  useEffect(() => {
    if (id) {
      axios
        .get(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/promo/${id}`, {
          headers: {
            apikey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          },
        })
        .then((res) => {
          const datas = res.data.data;
          setTitle(datas.title);
          setDescription(datas.description);
          setImageUrl(datas.image_url);
          setTermsCondition(datas.terms_condition);
          setPromoCode(datas.promo_code);
          setPromoDiscountPrice(datas.promo_discount_price);
          setMinimumClaimPrice(datas.minimum_claim_price);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [id]);
  const editPromo = () => {
    const edit = {
      title,
      description,
      imageUrl,
      terms_condition,
      promo_code,
      promo_discount_price,
      minimum_claim_price,
    };
    axios
      .post(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/update-promo/${id}`, edit, {
        headers: {
          apikey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        alert('Promo Updated');
        router.push('/admin/dashboard/promo');
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="px-20 py-12 bg-[#fffaf0] w-full h-screen">
      <div className="flex items-center gap-5">
        <button onClick={() => window.history.back()}>
          <ArrowCircleLeft size={40} />
        </button>
        <h1 className="text-3xl font-bold text-sky-700">Update Promo</h1>
      </div>
      <div className="mt-10 flex flex-col gap-3">
        <div>
          <label htmlFor="promoname" className="text-lg  block mb-2 font-medium text-gray-900">
            Promo Name
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="discount" className="text-lg  block mb-2 font-medium text-gray-900">
            Promo Description
          </label>
          <textarea
            name="Description"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            id="exampleFormControlTextarea1"
            rows="4"
            placeholder="Promo Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="number" className="text-lg  block mb-2 font-medium text-gray-900">
            Promo Price Minimum
          </label>
          <input
            type="Number"
            name="Minimum"
            id="Minimum"
            value={minimum_claim_price}
            onChange={(e) => setMinimumClaimPrice(e.target.value)}
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
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Discount Price"
            required
            value={promo_discount_price}
            onChange={(e) => setPromoDiscountPrice(e.target.value)}
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
            value={promo_code}
            onChange={(e) => setPromoCode(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Code Promo"
            required
          />
        </div>
        <label htmlFor="image" className="text-lg block mb-1 font-medium text-gray-900">
          Input Image
        </label>
        <input type="file" id="image" name="image" className="w-full border-2 border-gray-300 rounded p-2 w-max" required onChange={(e) => setImageUrl(e.target.value)} />
      </div>
      <button className="w-32 mt-10 text-white bg-sky-700 rounded-lg text-lg p-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800" onClick={editPromo}>
        Edit
      </button>
    </div>
  );
};
export default Update;
