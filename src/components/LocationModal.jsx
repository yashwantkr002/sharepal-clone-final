import React, { useState } from 'react';
import { CloseIcon } from './Icons.jsx';

const popularCities = [
  { name: 'Delhi', icon: 'delhi' },
  { name: 'Hyderabad', icon: 'hyderabad' },
  { name: 'Mumbai', icon: 'mumbai' },
  { name: 'Pune', icon: 'pune' },
  { name: 'Chennai', icon: 'chennai' },
  { name: 'Bangalore', icon: 'bangalore' },
];

const otherCities = ['Faridabad', 'Kolkata', 'Gurgaon', 'Noida', 'Ghaziabad'];

function CityIcon({ type }) {
  const common = { width: 54, height: 54, viewBox: '0 0 54 54', fill: 'none', xmlns: 'http://www.w3.org/2000/svg' };
  const stroke = '#8B909D';
  const paths = {
    delhi: <><path d="M12 43h30M15 40V25h24v15M11 25h32M18 19h18M21 19v-5h12v5" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 29h4v5h-4zM31 29h4v5h-4zM25 29h4v11h-4z" stroke={stroke} strokeWidth="2"/><path d="M8 25l4-6h30l4 6" stroke={stroke} strokeWidth="2" strokeLinejoin="round"/></>,
    hyderabad: <><path d="M10 43h34M14 40V25h26v15M20 25v-9h5v9M29 25v-9h5v9" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M21 16c0-3 2-5 4-5s4 2 4 5M29 16c0-3 2-5 4-5s4 2 4 5" stroke={stroke} strokeWidth="2" strokeLinecap="round"/><path d="M18 30h4v5h-4zM32 30h4v5h-4zM25 29h4v11h-4z" stroke={stroke} strokeWidth="2"/></>,
    mumbai: <><path d="M9 43h36M14 40V25h26v15M11 25l4-7h24l4 7" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M19 18v-5h6v5M29 18v-5h6v5" stroke={stroke} strokeWidth="2"/><path d="M18 30h4v5h-4zM32 30h4v5h-4zM25 29h4v11h-4z" stroke={stroke} strokeWidth="2"/></>,
    pune: <><path d="M10 43h34M14 40V27h26v13M11 27h32M17 22h20" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M20 22v-5h5v5M29 22v-5h5v5" stroke={stroke} strokeWidth="2"/><path d="M19 31h4v5h-4zM31 31h4v5h-4zM25 30h4v10h-4z" stroke={stroke} strokeWidth="2"/></>,
    chennai: <><path d="M11 43h32M15 40V24h24v16" stroke={stroke} strokeWidth="2" strokeLinecap="round"/><path d="M18 24V18l4-6 4 6v6M28 24V18l4-6 4 6v6" stroke={stroke} strokeWidth="2" strokeLinejoin="round"/><path d="M20 29h4v6h-4zM30 29h4v6h-4zM25 29h4v11h-4z" stroke={stroke} strokeWidth="2"/></>,
    bangalore: <><path d="M10 43h34M14 40V23h26v17M11 23h32" stroke={stroke} strokeWidth="2" strokeLinecap="round"/><path d="M18 23v-6l3-5 3 5v6M30 23v-6l3-5 3 5v6" stroke={stroke} strokeWidth="2" strokeLinejoin="round"/><path d="M18 29h4v6h-4zM32 29h4v6h-4zM25 29h4v11h-4z" stroke={stroke} strokeWidth="2"/></>,
  };
  return <svg {...common}>{paths[type]}</svg>;
}

export default function LocationModal({ open, onClose, selectedCity = 'Kolkata', onSelect }) {
  const [activeCity, setActiveCity] = useState(selectedCity);
  if (!open) return null;
  const choose = (city) => { setActiveCity(city); onSelect?.(city); onClose?.(); };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center bg-black/35">
      <div onClick={(e) => e.stopPropagation()} className="relative w-full max-w-[790px] rounded-b-[24px] bg-white px-5 pb-7 pt-6 shadow-2xl">
        <button type="button" onClick={onClose} className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-[#818793] hover:bg-gray-100"><CloseIcon size={18}/></button>
        <h2 className="text-center text-2xl font-bold tracking-tight text-[#090d18]">Select Your City</h2>

        <div className="mt-7 flex items-center gap-4"><span className="h-0.5 flex-1 bg-[#e1e6ee]"/><span className="text-sm text-[#64708a]">Popular Cities</span><span className="h-0.5 flex-1 bg-[#e1e6ee]"/></div>
        <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6">
          {popularCities.map((city) => {
            const active = activeCity === city.name;
            return <button key={city.name} type="button" onClick={() => choose(city.name)} className={`flex min-h-[104px] flex-col items-center justify-center rounded-xl px-2 transition ${active ? 'border border-[#3158ff] bg-[#eef2ff]' : 'border border-transparent bg-[#fafbfc] hover:border-[#b8c4ff]'}`}><CityIcon type={city.icon}/><span className="mt-1 text-[13px] font-medium text-[#101522]">{city.name}</span></button>;
          })}
        </div>

        <div className="mt-8 flex items-center gap-4"><span className="h-0.5 flex-1 bg-[#e1e6ee]"/><span className="text-sm text-[#64708a]">Other Cities</span><span className="h-0.5 flex-1 bg-[#e1e6ee]"/></div>
        <div className="mt-7 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {otherCities.map((city) => <button key={city} type="button" onClick={() => choose(city)} className={`h-9 rounded-xl border text-[13px] ${activeCity === city ? 'border-[#3158ff] bg-[#f3f6ff] text-[#173bd1]' : 'border-[#dce1ea] bg-white text-[#273040] hover:border-[#3158ff] hover:text-[#173bd1]'}`}>{city}</button>)}
        </div>
      </div>
    </div>
  );
}
