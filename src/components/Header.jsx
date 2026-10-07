import React from 'react';
import { CartIcon, CalendarIcon, ChevronDown, PinIcon, SearchIcon, UserIcon } from './Icons.jsx';

function formatDate(dateString) {
  const d = new Date(dateString + 'T00:00:00');
  const day = d.getDate();
  const suffix = day % 10 === 1 && day !== 11 ? 'st' : day % 10 === 2 && day !== 12 ? 'nd' : day % 10 === 3 && day !== 13 ? 'rd' : 'th';
  return `${day}${suffix} ${d.toLocaleDateString('en-IN', { month: 'short' })}`;
}

export default function Header({ searchOpen, setSearchOpen, query, setQuery, onLogin, onLocation, bagCount, deliveryDate, pickupDate, onEditDate }) {
  return (
    <header className="sticky top-0 z-50 bg-[#5a1b90] text-white shadow-md">
      <div className="mx-auto flex max-w-[1360px] items-center gap-3 px-4 py-2 lg:px-8">
        <button type="button" onClick={onLocation} className="shrink-0 rounded-br-[18px] bg-[#2a55f5] px-4 py-3 text-2xl font-black italic tracking-tight shadow-sm">
          Share<span className="text-[#86ff00]">Pal</span>
        </button>

        <div className="hidden min-w-0 flex-1 items-center justify-center lg:flex">
          <div className="flex h-10 overflow-hidden rounded-full border-2 border-[#bda1ff] bg-white text-[#111827] shadow-sm">
            <button type="button" onClick={onLocation} className="flex min-w-[150px] items-center gap-2 border-r border-[#e4e7ee] px-4 text-sm font-semibold">
              <PinIcon size={18} />
              <span>Kolkata</span>
              <ChevronDown size={14} />
            </button>
            <button type="button" onClick={onEditDate} className="flex items-center gap-2 border-r border-[#e4e7ee] px-4 text-sm font-medium whitespace-nowrap">
              <CalendarIcon size={16} /> Delivery Date: {formatDate(deliveryDate)}
            </button>
            <button type="button" onClick={onEditDate} className="flex items-center gap-2 border-r border-[#e4e7ee] px-4 text-sm font-medium whitespace-nowrap">
              <CalendarIcon size={16} /> Pickup Date: {formatDate(pickupDate)}
            </button>
            <button type="button" onClick={onEditDate} className="m-0.5 rounded-full bg-[#07153e] px-4 text-sm font-bold text-white">Edit</button>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2 lg:gap-4">
          {searchOpen ? (
            <div className="flex h-10 items-center rounded-full bg-white px-3 text-[#111827]">
              <SearchIcon size={18}/>
              <input autoFocus value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search gaming gear" className="w-40 bg-transparent px-2 text-sm outline-none sm:w-56" />
              <button type="button" className="text-lg text-gray-500" onClick={() => { setQuery(''); setSearchOpen(false); }}>×</button>
            </div>
          ) : (
            <button type="button" className="rounded-full p-2 hover:bg-white/10" onClick={() => setSearchOpen(true)} aria-label="Search"><SearchIcon size={24}/></button>
          )}
          <button type="button" className="relative rounded-full p-2 hover:bg-white/10" aria-label="Rental bag" onClick={() => window.scrollTo({ top: 180, behavior: 'smooth' })}>
            <CartIcon size={25}/>
            {bagCount > 0 && <span className="absolute -right-0.5 -top-0.5 grid h-5 min-w-5 place-items-center rounded-full bg-[#86ff00] px-1 text-[11px] font-black text-black">{bagCount}</span>}
          </button>
          <button type="button" onClick={onLogin} className="hidden items-center gap-2 rounded-full px-1 py-1 md:flex">
            <span className="grid h-10 w-10 place-items-center rounded-full border-2 border-[#bda1ff] bg-white text-[#111827]"><UserIcon size={20}/></span>
            <b className="text-sm">Hi, Login</b>
          </button>
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#5a1b90] px-4 pb-2 lg:hidden">
        <div className="flex items-center gap-2 overflow-x-auto">
          <button type="button" onClick={onLocation} className="flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#111827]"><PinIcon size={15}/> Kolkata</button>
          <button type="button" onClick={onEditDate} className="flex shrink-0 items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#111827]"><CalendarIcon size={15}/> {formatDate(deliveryDate)} – {formatDate(pickupDate)}</button>
        </div>
      </div>
    </header>
  );
}
