import React from 'react';

export default function TopCategoryNav() {
  return (
    <nav className="bg-[#f1f3f5]">
      <div className="mx-auto flex max-w-[930px] items-end justify-between gap-4 px-4 pt-3 text-sm font-semibold text-[#4a4f5d] lg:px-8">
        {['Photography', 'Gaming', 'Outdoor', 'Entertainment'].map((item) => (
          <button key={item} type="button" className={`relative flex-1 pb-3 text-center transition ${item === 'Gaming' ? 'text-[#303747]' : 'hover:text-[#111827]'}`}>
            {item}
            {item === 'Gaming' && <span className="absolute bottom-0 left-1/2 h-0.5 w-32 -translate-x-1/2 bg-[#7c2bf5]" />}
          </button>
        ))}
      </div>
    </nav>
  );
}
