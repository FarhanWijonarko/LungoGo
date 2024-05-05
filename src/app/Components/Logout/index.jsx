'use client';

import { CaretDown } from '@phosphor-icons/react';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Logout = () => {
  const token = localStorage.getItem('token');
  const user = () => {
    axios
      .get('https://travel-journal-api-bootcamp.do.dibimbing.id/api/v1/user', {
        headers: {
          apikey: '24405e01-fbc1-45a5-9f5a-be13afcd757c',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setNama(res?.data?.data?.name))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    user();
  }, []);
  const [nama, setNama] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)} className="text-xl underline flex gap-2 font-bold text-sky-700">
        <p>{nama}</p>
        <CaretDown className="text-sky-700 mt-1 " size={20} />
      </button>
      {isOpen ? (
        <div className="absolute w-32 flex flex-col right-5 top-14 mt-2  border-2 border-sky-700 shadow py-3 rounded bg-white">
          <button className="w-full py-2 font-bold">Pofil</button>
          <button
            onClick={() => {
              localStorage.removeItem('token');
              localStorage.removeItem('role');
              window.location.reload();
            }}
            className="w-full mb-2 font-bold"
          >
            Log Out
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default Logout;
