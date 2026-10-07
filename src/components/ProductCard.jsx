import React from 'react';
import { HeartIcon, InfoIcon } from './Icons.jsx';

function priceFor(product, days) {
  const displayOverrides = { 18273: 1889, 20242: 3321, 18255: 2258, 20105: 1931, 8185: 1673, 18117: 2258, 19716: 2580, 19680: 1979, 18055: 1519, 20104: 1979 };
  if (displayOverrides[product.id]) return displayOverrides[product.id];
  return Math.round(product.per_day_rent * Math.max(1, days));
}

export default function ProductCard({ product, wishlist, onWishlist, onAdd, days }) {
  const unavailable = product.out_of_stock;
  const price = priceFor(product, days);

  return (
    <article className={`overflow-hidden rounded-2xl bg-white shadow-[0_4px_14px_rgba(0,0,0,0.04)] ${unavailable ? 'ring-1 ring-gray-200' : ''}`}>
      <div className="relative h-[195px] overflow-hidden bg-white">
        {product.tag && <span className={`absolute left-3 top-3 z-10 rounded-md border px-2 py-0.5 text-xs font-bold ${product.tag === 'New' ? 'border-sky-600 text-sky-600' : 'border-orange-500 text-orange-500'}`}>{product.tag}</span>}
        <button type="button" onClick={onWishlist} aria-label="Wishlist" className="absolute right-3 top-3 z-10 rounded-full p-1.5 text-[#667085] hover:bg-gray-100 hover:text-[#111827]"><HeartIcon size={23} filled={wishlist}/></button>
        <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-contain p-3" />
        {unavailable && <div className="absolute inset-x-0 bottom-0 bg-[#e4e4e5] px-3 py-3 text-center text-sm font-bold text-[#5e6370]">Unavailable for these dates</div>}
      </div>

      <div className="px-3 pb-4 pt-3">
        <h3 title={product.name} className="min-h-[52px] text-[16px] font-bold leading-6 text-[#0b1220] line-clamp-2">{product.name}</h3>
        <div className="my-2.5 h-px bg-[#e1e4e9]" />
        {unavailable ? (
          <>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#7d828d]"><InfoIcon size={17}/><span>Unavailable</span></div>
            <button type="button" onClick={onAdd} className="mt-3 h-10 w-full rounded-full border border-[#08133d] bg-white text-sm font-bold text-[#08133d] hover:bg-[#f6f7fa]">Check Availability</button>
          </>
        ) : (
          <>
            <div className="text-sm font-semibold text-[#888b91]">Rent for {days > 1 ? `${days} days` : '1 day'}</div>
            <div className="mt-1 flex items-center justify-between gap-3">
              <div>
                <div className="text-xl font-black text-[#1b2027]">₹{price.toLocaleString('en-IN')}</div>
                <span className="mt-1 inline-flex rounded bg-[#82f600] px-1.5 py-0.5 text-[12px] font-black text-[#102000]">Incl. of GST</span>
              </div>
              <button type="button" onClick={onAdd} className="grid h-[50px] w-[50px] shrink-0 place-items-center rounded-full border-2 border-[#071334] bg-white text-3xl font-light text-[#071334] hover:bg-[#f7f8fb]">+</button>
            </div>
          </>
        )}
      </div>
    </article>
  );
}
