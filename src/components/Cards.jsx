import React from "react";
import Single from "../assests/single.png";
import Double from "../assests/double.png";
import Triple from "../assests/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-[#EEE5E9]">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <div className=" bg-[#568EA3] mx-auto w-30 shadow-xl p-5 mt-[-5rem] rounded-full">
            <img className="w-20 mx-auto" src={Single} alt="/" />
          </div>
          <h2 className="text-2xl font-bold text-center py-8">Basic</h2>
          <p className="text-center text-4xl font-bold">
            $79<span className="text-xl text-gray-500">/mo</span>
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b border-gray-300 mx-8 mt-8">
              500 GB Storage
            </p>
            <p className="py-2 border-b border-gray-300 mx-8">1 Granted User</p>
            <p className="py-2 border-b border-gray-300 mx-8">Send upto 2 GB</p>
          </div>
          <button className="bg-[#273043] text-[#7AFDD6] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trail
          </button>
        </div>

        <div className="w-full shadow-xl bg-gray-300 flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-300">
          <div className=" bg-[#7FC3DC] mx-auto w-30 shadow-xl p-5 mt-[-5rem] rounded-full">
            <img className="w-20 mx-auto" src={Double} alt="/" />
          </div>
          <h2 className="text-2xl font-bold text-center py-8">Standard</h2>
          <p className="text-center text-4xl font-bold">
            $149<span className="text-xl text-gray-500">/mo</span>
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b border-gray-300 mx-8 mt-8">
              1.25 TB Storage
            </p>
            <p className="py-2 border-b border-gray-300 mx-8">2 Granted User</p>
            <p className="py-2 border-b border-gray-300 mx-8">Send upto 6 GB</p>
          </div>
          <button className="text-[#273043] bg-[#7AFDD6] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trail
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <div className=" bg-[#568EA3] mx-auto w-30 shadow-xl p-5 mt-[-5rem] rounded-full">
            <img className="w-20 mx-auto" src={Triple} alt="/" />
          </div>
          <h2 className="text-2xl font-bold text-center py-8">Premium</h2>
          <p className="text-center text-4xl font-bold">
            $229<span className="text-xl text-gray-500">/mo</span>
          </p>
          <div className="text-center font-medium">
            <p className="py-2 border-b border-gray-300 mx-8 mt-8">
              4 TB Storage
            </p>
            <p className="py-2 border-b border-gray-300 mx-8">3 Granted User</p>
            <p className="py-2 border-b border-gray-300 mx-8">Send upto 10 GB</p>
          </div>
          <button className="bg-[#273043] text-[#7AFDD6] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
