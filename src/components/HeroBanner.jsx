import React from 'react';
import productsData from '../data/product-list.json';

export default function HeroBanner() {
  const left = productsData.products[1]?.image;
  const right = productsData.products[0]?.image;
  const vr = productsData.products[3]?.image;

  return (
    <section className="relative overflow-hidden rounded-[14px] bg-[linear-gradient(115deg,#54158f_0%,#7b20c2_50%,#8e2bd4_100%)] px-5 py-6 text-white shadow-sm sm:px-8 sm:py-7 lg:min-h-[240px]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.18),transparent_42%)]" />
      <img src={left} alt="Gaming gear" className="absolute -left-2 top-1/2 hidden h-[190px] w-[235px] -translate-y-1/2 object-contain opacity-90 sm:block" />
      <img src={right} alt="Gaming gear" className="absolute -right-7 bottom-0 hidden h-[205px] w-[250px] object-contain opacity-90 sm:block" />
      <img src={vr} alt="VR" className="absolute right-[145px] top-10 hidden h-[90px] w-[100px] object-contain opacity-80 lg:block" />
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">Gaming Consoles</h1>
        <p className="mt-3 text-sm font-semibold leading-6 sm:text-lg sm:leading-7">
          Rent the latest gaming gadgets from <em className="font-extrabold not-italic">SharePal</em> — PS5, Xbox,<br className="hidden sm:block" /> Oculus VR, Racing Wheel on rent.
        </p>
        <div className="mt-5 flex items-center justify-center gap-4 text-base font-semibold text-white/90 sm:gap-7 sm:text-lg">
          <span>◉ XBOX</span><span className="h-6 w-px bg-white/40"/><span>◖ PS5</span><span className="h-6 w-px bg-white/40"/><span>∞ Meta</span>
        </div>
      </div>
    </section>
  );
}
