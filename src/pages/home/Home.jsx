import React from "react";
import Header from "../../components/Header/Header";
import SlaviaImage from "/images/slavia-1.png"
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />
      <section className="bg-[#efefef] min-h-screen px-14 py-10">

      {/* hero-section */}
      <div className="grid  gap-4 sm:grid-cols-12 ">
        
        <div className="min-h-[100px] sm:col-span-9 ">
          <p className="font-nunito text-semilight mt-3 text-[15px]">India's Safest Family Sedan</p>
          <img src={SlaviaImage} alt="slavia-banner-image" className="w-[900px]"/>
          
        </div>
        <div className="min-h-[100px] sm:col-span-3">
          <h2 className="font-nunito font-extrabold text-[80px]">Slavia</h2>
          <button className="font-nunito font-semibold rounded-full px-7 py-2 bg-[#a8ffcc]">Request a Test Drive</button>
          <p className="font-nunito text-semilight mt-3 text-[15px] ml-3">Stylish new explorer.</p>
        </div>
      </div>

      {/* make a stylish statement */}
      <div className="flex gap-5 flex-col bg-white py-4">
        <h2 className="text-center font-nunito font-extrabold text-[40px]">Make A Stylish Statement</h2>
        <p className="text-center font-nunito text-[16px] px-96">Discover your world in style in the Slavia. Explore cities, enjoy long drives and make every journey unforgettable.</p>
      </div>

      <div className="flex items-center justify-center mt-5">
      <NavLink to="/slavia-features"><button className="rounded-full px-7 py-3 bg-[#0d202d] text-white" >Explorer Features</button></NavLink>
      </div>

      </section>
    </>
  );
}
