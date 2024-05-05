'use client';

import Link from 'next/link';
import { Gauge, UserCircle, AirplaneTakeoff, Archive, MoneyWavy, FlagBanner } from '@phosphor-icons/react';
import Image from 'next/image';
const Sidebar = () => {
  return (
    <div className="flex flex-col w-80 sticky shadow-lg top-0 bg-[#fffaf0] h-screen items-center py-10">
      <Link href="/" className="flex items-center rtl:space-x-reverse">
        <Image src="/img/LogoTravel.png" width={50} alt="" />
        <h1 className="text-3xl font-bold text-sky-700">LungoGo</h1>
      </Link>
      <div className="flex flex-col gap-10 mt-20">
        <div className="flex gap-5">
          <Gauge size={32} />
          <Link className="text-xl font-bold hover:text-sky-700" href="/admin/dashboard">
            Dashboard
          </Link>
        </div>
        <div className="flex gap-5">
          <Archive size={32} />
          <Link className="text-xl font-bold hover:text-sky-700" href="/admin/dashboard/category">
            Category
          </Link>
        </div>
        <div className="flex gap-5">
          <AirplaneTakeoff size={32} />
          <Link className="text-xl font-bold hover:text-sky-700" href="/admin/dashboard/journey">
            Journey
          </Link>
        </div>
        <div className="flex gap-5">
          <MoneyWavy size={32} />
          <Link className="text-xl font-bold hover:text-sky-700" href="/admin/dashboard/promo">
            Promo
          </Link>
        </div>
        <div className="flex gap-5">
          <FlagBanner size={32} />
          <Link className="text-xl font-bold hover:text-sky-700" href="/admin/dashboard/benner">
            Benner
          </Link>
        </div>
        <div className="flex gap-5">
          <UserCircle size={32} />
          <Link className="text-xl font-bold hover:text-sky-700" href="/admin/dashboard/user">
            User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
