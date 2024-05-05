'use client';

import axios from 'axios';
import { Trash } from '@phosphor-icons/react';

const DelJourney = ({ id }) => {
  const hapusData = async () => {
    await axios
      .delete(`https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/delete-activity/${id}`, {
        headers: {
          apikey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert('Category Deleted');
          window.location.href = '/admin/dashboard/journey';
        }
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 500) {
          alert(`you are not admin bro `);
        }
      });
  };
  return (
    <div>
      <button onClick={hapusData} className="bg-sky-700 hover:bg-sky-800 text-white font-bold py-2 px-2 rounded-full">
        <Trash size={22} />
      </button>
    </div>
  );
};
export default DelJourney;
