import Navbar from './Components/Navbar';
import Promo from './Components/Promo';
import Category from './Components/Category';
import Footer from './Components/Footer';
import Image from 'next/image';
const home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col h-screen items-center justify-center bg-[#fffaf0]">
        <h1 className="text-2xl xl:text-5xl absolute top-60 font-bold text-sky-700">Go Explore, Its a Big World Out There</h1>
        <Image className="mt-44" src="/img/travel.png" alt="" width={520} />
      </div>
      <Promo />
      <div className="flex  items-center justify-center gap-28 py-32">
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <h1 className="text-3xl font-bold text-sky-700">Travel</h1>
          <p>
            Travel is an adventure that opens the door to new experiences, amazing views, and world wonders that are waiting to be explored. Through travel, we can broaden our horizons, experience different cultures different, and create
            unforgettable memories. Its an opportunity to escape the daily routine, explore new places, and discover the beauty all around us.
          </p>
        </div>
        <Image src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width={300} className="rounded-xl" />
      </div>

      <Category />
      <Footer />
    </div>
  );
};
export default home;
