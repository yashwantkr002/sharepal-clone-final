import React, { useEffect, useState } from 'react';
import { CalendarIcon, CloseIcon } from './Icons.jsx';

export default function RentalDateModal({ open, initialDelivery, initialPickup, onClose, onSave }) {
  const [delivery, setDelivery] = useState(initialDelivery);
  const [pickup, setPickup] = useState(initialPickup);
  useEffect(() => { if (open) { setDelivery(initialDelivery); setPickup(initialPickup); } }, [open, initialDelivery, initialPickup]);
  if (!open) return null;
  const save = () => onSave(delivery, pickup < delivery ? delivery : pickup);
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/45 p-4" onClick={onClose}>
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100"><CloseIcon size={18}/></button>
        <h2 className="text-2xl font-black">Select rental dates</h2>
        <p className="mt-1 text-sm text-gray-500">Select dates to view prices.</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <label className="block"><span className="flex items-center gap-2 text-sm font-semibold text-gray-700"><CalendarIcon/> Delivery date</span><input type="date" value={delivery} min={new Date().toISOString().slice(0,10)} onChange={(e) => setDelivery(e.target.value)} className="mt-2 h-12 w-full rounded-xl border border-gray-300 px-3 outline-none focus:border-[#5a1b90]" /></label>
          <label className="block"><span className="flex items-center gap-2 text-sm font-semibold text-gray-700"><CalendarIcon/> Pickup date</span><input type="date" value={pickup} min={delivery} onChange={(e) => setPickup(e.target.value)} className="mt-2 h-12 w-full rounded-xl border border-gray-300 px-3 outline-none focus:border-[#5a1b90]" /></label>
        </div>
        <button type="button" onClick={save} className="mt-6 h-12 w-full rounded-xl bg-[#86ff00] font-black text-[#101600] hover:brightness-95">Select Dates</button>
      </div>
    </div>
  );
}
