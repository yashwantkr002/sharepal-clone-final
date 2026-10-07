import React, { useState } from 'react';
import { ChevronDown } from './Icons.jsx';

export default function FAQ({ faqs }) {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="mt-10 rounded-[24px] bg-white px-6 py-8 shadow-sm sm:px-10">
      <h2 className="text-2xl font-black text-[#080f20] sm:text-[26px]">Frequently Asked Questions (FAQs)</h2>
      <div className="mt-5 divide-y divide-[#eceff3]">
        {faqs.slice(0, 5).map(([q, a], i) => (
          <div key={q}>
            <button type="button" onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left text-[15px] font-bold text-[#111827]">
              <span>{q}</span>
              <span className={`shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`}><ChevronDown size={15}/></span>
            </button>
            {open === i && <p className="pb-5 pr-8 text-sm leading-6 text-[#606773]">{a}</p>}
          </div>
        ))}
      </div>
      <button type="button" className="mt-2 h-12 w-full rounded-full bg-[#f1f2f4] text-sm font-bold text-[#111827] hover:bg-[#e9eaed]">View more FAQ's</button>
    </section>
  );
}
