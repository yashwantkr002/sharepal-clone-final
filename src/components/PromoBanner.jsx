import React from 'react';
import productsData from '../data/product-list.json';
import { ArrowUpRight } from './Icons.jsx';

export default function PromoBanner({ variant }) {
  const first = productsData.products[1]?.image;
  const second = productsData.products[0]?.image;
  if (variant === 'asset') {
    return (
      <div className="relative col-span-full overflow-hidden rounded-2xl bg-[linear-gradient(115deg,#09133c_0%,#1b3788_70%,#294ec2_100%)] px-5 py-5 text-white sm:px-8">
        <img src={first} alt="Gaming gear" className="absolute right-0 bottom-0 hidden h-[190px] w-[240px] object-contain opacity-90 sm:block" />
        <div className="relative z-10 max-w-[76%]">
          <h2 className="text-2xl font-black leading-tight sm:text-[30px]">Become an <span className="text-[#86ff00]">Asset Partner.</span> Earn Monthly.</h2>
          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              ['Monthly Earnings', 'From rental assets'],
              ['Upto ₹10,000', 'Instant Wallet credits'],
              ['10% Off', 'Exclusive discount when you rent'],
              ['Get 10% Cashback', 'On every order'],
            ].map(([title, desc]) => (
              <div key={title} className="rounded-xl border border-white/15 bg-[#142862]/60 p-3">
                <b className="block text-base leading-tight text-[#86ff00] sm:text-lg">{title}</b>
                <small className="mt-1 block text-xs leading-5 text-[#d7def9]">{desc}</small>
              </div>
            ))}
          </div>
        </div>
        <button type="button" className="absolute bottom-4 right-5 rounded-full bg-[#86ff00] px-5 py-2.5 text-sm font-black text-black shadow sm:right-8 sm:text-base">Know More <ArrowUpRight size={16}/></button>
      </div>
    );
  }
  return (
    <div className="relative col-span-full flex min-h-[175px] items-center justify-center overflow-hidden rounded-2xl bg-[linear-gradient(90deg,#253f9b_0%,#506ce0_50%,#263f95_100%)] px-6 text-center text-white">
      <img src={second} alt="Gear" className="absolute left-0 bottom-[-10px] hidden h-[150px] w-[190px] object-contain opacity-80 sm:block" />
      <div className="relative z-10">
        <p className="text-base sm:text-xl">Got gear you <u className="decoration-[#86ff00] underline-offset-4">don't use anymore?</u></p>
        <h2 className="mt-1 text-2xl font-black sm:text-[32px]">Rent Out Your Gear on SharePal</h2>
        <button type="button" className="mt-4 inline-flex items-center gap-1 rounded-full bg-[#86ff00] px-6 py-2 text-base font-black text-black">Earn With Us <ArrowUpRight size={17}/></button>
      </div>
      <img src={first} alt="Gear" className="absolute right-0 bottom-[-10px] hidden h-[170px] w-[200px] object-contain opacity-80 sm:block" />
    </div>
  );
}
