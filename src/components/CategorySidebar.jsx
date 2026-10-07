import React from 'react';

export default function CategorySidebar({ items, selected, onSelect }) {
  return (
    <aside className="sticky top-[88px] hidden h-[calc(100vh-112px)] w-[126px] shrink-0 overflow-hidden rounded-2xl bg-white shadow-[0_5px_20px_rgba(0,0,0,0.06)] lg:block">
      <div className="h-full overflow-y-auto px-3 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((item) => {
          const active = selected === item.key;
          return (
            <button key={item.key} type="button" onClick={() => onSelect(item.key)} className="relative mb-2 flex w-full flex-col items-center rounded-xl px-1 py-2 text-center">
              <span className={`grid h-[66px] w-[66px] place-items-center overflow-hidden rounded-xl border bg-white transition ${active ? 'border-2 border-[#3158ff] shadow-sm' : 'border-[#dfe5ef]'}`}>
                {item.image ? <img src={item.image} alt="" loading="lazy" className="h-full w-full object-contain" /> : item.icon === 'gta' ? (
                  <span className="flex h-full w-full flex-col items-center justify-center bg-white text-[9px] leading-none">
                    <b className="text-[#b64d88]">grand</b><strong className="text-[#222]">theft</strong><em className="not-italic text-[#b64d88]">auto</em><small className="font-black text-[#222]">VI</small>
                  </span>
                ) : (
                  <span className="text-3xl text-[#3158ff]">☺</span>
                )}
              </span>
              <span className="mt-1.5 text-[13px] font-semibold leading-tight text-[#111827]">{item.label}</span>
              {active && <span className="mt-2 h-0.5 w-8 bg-[#3158ff]" />}
            </button>
          );
        })}
      </div>
    </aside>
  );
}
