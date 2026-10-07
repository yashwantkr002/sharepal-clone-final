import React, { useEffect, useState } from 'react';

const reviews = [
  ['SB', 'Satyaki', 'Kolkata • Trekking Gear', 'I would recommend SharePal for anybody looking to rent trekking gears, on time delivery, condition of products delivered were very good, super transparent deposit return policy.'],
  ['AS', 'Afrana', 'Bangalore • Gaming Console', 'Have used their services twice now. They never disappoint. Quick responses, polite, transparent, hassle free, great products as well. Rented trekking gear and PS4.'],
  ['KK', 'Kanthikiran', 'Bangalore • Riding Gear', 'It’s an amazing service, starting from the quality of the gear provided to the pickup and drop at doorstep facility. The staff is extremely helpful and supportive.'],
  ['AA', 'Amal', 'Bangalore • Gaming Console', 'I am a regular customer and order ps4. It’s very affordable and booking an order is super easy and user friendly website and polite staff.'],
  ['PS', 'Pankaj', 'Mumbai • Action Cameras', 'The experience with SharePal is awesome. The camera and service provided by them is good. Overall I am happy by renting camera gear from SharePal.'],
];

export default function TrustSection() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setOffset((v) => (v + 1) % reviews.length), 5000);
    return () => clearInterval(timer);
  }, []);
  const visible = reviews.map((_, i) => reviews[(i + offset) % reviews.length]);

  return (
    <section className="mt-8 overflow-hidden bg-white px-0 py-4 sm:py-8">
      <h2 className="px-4 text-center text-3xl font-black tracking-tight text-[#081025] sm:text-5xl">Served more than <span className="text-[#ed5d16]">1 Lakh Orders</span></h2>
      <div className="mt-8 flex gap-4 overflow-hidden px-4">
        {visible.slice(0, 4).map(([initials, name, meta, text]) => (
          <article key={`${initials}-${name}-${offset}`} className="min-w-[280px] flex-1 rounded-2xl border border-[#dde2e9] bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,.02)] sm:min-w-[0]">
            <div className="flex items-center gap-2 text-sm"><span className="font-black text-[#4285f4]">G</span><span className="tracking-[2px] text-[#f0ad16]">★★★★★</span></div>
            <p className="mt-4 line-clamp-4 text-[15px] font-semibold leading-6 text-[#111827]">“ {text}... ”</p>
            <div className="mt-5 flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#d8e0fb] text-sm font-bold text-[#3158ff]">{initials}</span><div><b className="block text-sm text-[#20242d]">{name}</b><small className="text-xs text-[#8a8f98]">{meta}</small></div></div>
          </article>
        ))}
      </div>
      <div className="mt-10 grid border-y border-[#e8eaef] sm:grid-cols-3">
        {[
          ['250Cr+', 'Saved Together'],
          ['4.5M Kg', 'CO₂E Emissions Saved'],
          ['100K+', 'Products In Circulation'],
        ].map(([value, label]) => (
          <div key={label} className="px-5 py-7 text-center sm:py-8"><strong className="text-4xl font-black tracking-tight text-[#1743db] sm:text-6xl">{value}</strong><small className="mt-2 block text-base text-[#565d69]">{label}</small></div>
        ))}
      </div>
    </section>
  );
}
