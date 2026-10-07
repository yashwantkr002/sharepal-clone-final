import React, { useState } from 'react';
import { CloseIcon } from './Icons.jsx';

export default function LoginModal({ open, onClose }) {
  const [phone, setPhone] = useState('');
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/45 p-4" onClick={onClose}>
      <div className="relative w-full max-w-sm rounded-3xl bg-white p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute right-4 top-4 rounded-full p-2 text-gray-500 hover:bg-gray-100"><CloseIcon size={18}/></button>
        <h2 className="text-2xl font-black">Welcome back</h2>
        <p className="mt-1 text-sm text-gray-500">Login to continue with your rental.</p>
        <label className="mt-6 block text-sm font-semibold text-gray-700">Mobile number</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))} inputMode="numeric" placeholder="10-digit mobile number" className="mt-2 h-12 w-full rounded-xl border border-gray-300 px-4 outline-none focus:border-[#5a1b90] focus:ring-2 focus:ring-[#5a1b90]/10" />
        <button type="button" onClick={onClose} className="mt-4 h-12 w-full rounded-xl bg-[#5a1b90] font-bold text-white disabled:opacity-50" disabled={phone.length !== 10}>Continue</button>
      </div>
    </div>
  );
}
