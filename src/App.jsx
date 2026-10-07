import React, { useEffect, useMemo, useState } from 'react';
import productsData from './data/product-list.json';
import Header from './components/Header.jsx';
import CategorySidebar from './components/CategorySidebar.jsx';
import TopCategoryNav from './components/TopCategoryNav.jsx';
import HeroBanner from './components/HeroBanner.jsx';
import ProductCard from './components/ProductCard.jsx';
import PromoBanner from './components/PromoBanner.jsx';
import FAQ from './components/FAQ.jsx';
import TrustSection from './components/TrustSection.jsx';
import Footer from './components/Footer.jsx';
import LoginModal from './components/LoginModal.jsx';
import LocationModal from './components/LocationModal.jsx';
import RentalDateModal from './components/RentalDateModal.jsx';
import { SearchIcon } from './components/Icons.jsx';

const oculusImage = 'https://images.sharepal.in/categories/gaming-consoles/vr/oculus-quest-2/oculus-ques-2-on-rent-sharepal-1.webp';
const xboxImage = 'https://images.sharepal.in/categories/gaming-consoles/xbox/xbox-with-1-controller/xbox-series-s-with-1-controller-on-rent-sharepal-1.webp';
const supplementalProducts = [
  { id: 'oculus-quest-2', name: 'Oculus Quest 2', image: oculusImage, rating: 4.3, booked_count: 254, tag: '', per_day_rent: 150, out_of_stock: false },
  { id: 'oculus-quest-3s', name: 'Oculus Quest 3S', image: oculusImage, rating: 4.5, booked_count: 180, tag: '', per_day_rent: 175, out_of_stock: false },
  { id: 'xbox-series-s', name: 'Xbox Series S + 1 Controller', image: xboxImage, rating: 4.8, booked_count: 160, tag: '', per_day_rent: 175, out_of_stock: false },
];
const gtaProducts = [
  { id: 'gta-ps5', name: 'PS5 + GTA 6 with 1 Controller', image: productsData.products[0].image, rating: 4.8, booked_count: 178, tag: 'New', per_day_rent: 399, out_of_stock: true },
  { id: 'gta-xbox', name: 'Xbox Series S + GTA 6 with 1 Controller', image: productsData.products[4].image, rating: 4.6, booked_count: 124, tag: 'New', per_day_rent: 349, out_of_stock: true },
];
const categoryItems = [
  { key: 'all', label: 'All', image: null },
  { key: 'gta', label: 'GTA VI', image: null, icon: 'gta' },
  { key: 'ps5', label: 'PS5 Console', image: productsData.products[4].image },
  { key: 'xbox', label: 'Xbox Console', image: xboxImage },
  { key: 'vr', label: 'VR', image: oculusImage },
  { key: 'big-screen', label: 'Big Screen', image: productsData.products[1].image },
  { key: 'racing', label: 'Racing Wheel', image: productsData.products.find((p) => /racing wheel/i.test(p.name))?.image ?? productsData.products[1].image },
  { key: 'games', label: 'PS5 Games', image: productsData.products[8].image },
];
const faqs = [
  ['How can I rent from SharePal?', 'Choose your product, select the rental dates, and continue with checkout.'],
  ['If I rent multiple products, do I need to extend the rental duration for all or partial extension is possible?', 'Products can have different rental periods. Contact support before the return window if you need to extend only part of your order.'],
  ['What is the minimum rental period?', 'The minimum rental period can vary by product. Product pricing is shown once rental dates are selected.'],
  ['When does the rental start?', 'Your rental starts from the delivery date selected during the booking flow.'],
  ['What will be the condition of the products at the time of delivery?', 'SharePal prepares rental products for reuse and carries out quality checks before dispatch.'],
  ['Why is verification required?', 'Verification helps protect the renter and SharePal and is part of the booking process.'],
];

function daysBetween(start, end) {
  if (!start || !end) return 1;
  const ms = new Date(end + 'T00:00:00') - new Date(start + 'T00:00:00');
  return Math.max(1, Math.round(ms / 86400000));
}

export default function App() {
  const [city, setCity] = useState('Kolkata');
  const [selectedSidebar, setSelectedSidebar] = useState('all');
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sort, setSort] = useState('featured');
  const [visibleCount, setVisibleCount] = useState(12);
  const [wishlist, setWishlist] = useState(() => new Set());
  const [bag, setBag] = useState([]);
  const [toast, setToast] = useState('');
  const [loginOpen, setLoginOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [deliveryDate, setDeliveryDate] = useState('2026-10-07');
  const [pickupDate, setPickupDate] = useState('2026-10-09');

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(''), 2200);
    return () => clearTimeout(timer);
  }, [toast]);

  const days = daysBetween(deliveryDate, pickupDate);
  const filteredProducts = useMemo(() => {
    let base;
    if (selectedSidebar === 'gta') base = gtaProducts;
    else if (selectedSidebar === 'ps5') base = productsData.products.filter((p) => /PS5/i.test(p.name));
    else if (selectedSidebar === 'xbox') base = [...supplementalProducts, ...productsData.products].filter((p) => /xbox/i.test(p.name));
    else if (selectedSidebar === 'vr') base = supplementalProducts.filter((p) => /oculus|VR|quest/i.test(p.name));
    else if (selectedSidebar === 'racing') base = productsData.products.filter((p) => /racing wheel/i.test(p.name));
    else if (selectedSidebar === 'games') base = productsData.products.filter((p) => /game/i.test(p.name));
    else base = [...productsData.products, ...supplementalProducts];

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      base = base.filter((p) => p.name.toLowerCase().includes(q));
    }
    if (selectedBrand !== 'All') base = base.filter((p) => p.name.toLowerCase().includes(selectedBrand.toLowerCase()));
    const result = [...base];
    if (sort === 'price-low') result.sort((a, b) => a.per_day_rent - b.per_day_rent);
    if (sort === 'price-high') result.sort((a, b) => b.per_day_rent - a.per_day_rent);
    if (sort === 'rating') result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    if (sort === 'popular') result.sort((a, b) => b.booked_count - a.booked_count);
    return result;
  }, [selectedSidebar, query, selectedBrand, sort]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const isGta = selectedSidebar === 'gta';
  const title = isGta ? 'Gta Vi On Rent' : selectedSidebar === 'vr' ? 'VR On Rent' : selectedSidebar === 'xbox' ? 'Xbox Console On Rent' : 'Gaming Gadgets on Rent';

  const chooseCategory = (key) => { setSelectedSidebar(key); setVisibleCount(12); setSearchOpen(false); window.scrollTo({ top: 150, behavior: 'smooth' }); };
  const addToBag = (product) => {
    if (product.out_of_stock) { setToast('This item is unavailable for the selected dates.'); return; }
    setBag((items) => items.some((p) => p.id === product.id) ? items : [...items, product]);
    setToast(`${product.name} added to rental bag.`);
  };
  const toggleWishlist = (productId) => setWishlist((current) => { const next = new Set(current); next.has(productId) ? next.delete(productId) : next.add(productId); return next; });
  const saveDates = (nextDelivery, nextPickup) => { setDeliveryDate(nextDelivery); setPickupDate(nextPickup); setDateOpen(false); setToast(`Rental window updated to ${daysBetween(nextDelivery, nextPickup)} day${daysBetween(nextDelivery, nextPickup) > 1 ? 's' : ''}.`); };

  return (
    <div className="min-h-screen bg-[#f1f3f5]">
      <Header searchOpen={searchOpen} setSearchOpen={setSearchOpen} query={query} setQuery={setQuery} onLogin={() => setLoginOpen(true)} onLocation={() => setLocationOpen(true)} bagCount={bag.length} deliveryDate={deliveryDate} pickupDate={pickupDate} onEditDate={() => setDateOpen(true)} />
      <TopCategoryNav />

      <main className="mx-auto flex max-w-[1360px] gap-8 px-4 pb-14 pt-2 lg:px-8">
        <CategorySidebar items={categoryItems} selected={selectedSidebar} onSelect={chooseCategory} />
        <section className="min-w-0 flex-1">
          <HeroBanner />

          <div className="mt-6 flex items-center justify-between gap-4 border-b border-[#d7dce4] pb-4">
            <h2 className="text-2xl font-black tracking-tight text-[#081025] sm:text-3xl">{title}</h2>
            <span className="hidden text-sm font-semibold text-[#8a8f99] sm:block">{isGta ? 'Total items: 2 items' : `Showing ${Math.min(visibleCount, filteredProducts.length)} of 48 results`}</span>
          </div>

          <div className="mt-4 flex flex-col gap-3 rounded-xl bg-white/70 p-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 text-sm text-[#787e89]"><span className="grid h-8 w-8 place-items-center rounded-full bg-white shadow-sm"><SearchIcon size={15}/></span><span>Prices shown for {days} day{days > 1 ? 's' : ''}</span></div>
            <div className="flex flex-wrap gap-2">
              <button type="button" onClick={() => setDateOpen(true)} className="rounded-full border border-[#cfd4dd] bg-white px-4 py-2 text-xs font-bold text-[#111827] hover:border-[#5a1b90]">Edit dates</button>
              <label className="flex items-center gap-1 rounded-full border border-[#cfd4dd] bg-white px-3 py-1.5 text-xs font-semibold"><span>Sort:</span><select value={sort} onChange={(e) => setSort(e.target.value)} className="bg-transparent outline-none"><option value="featured">Featured</option><option value="rating">Top rated</option><option value="popular">Most booked</option><option value="price-low">Price: low</option><option value="price-high">Price: high</option></select></label>
              <label className="flex items-center gap-1 rounded-full border border-[#cfd4dd] bg-white px-3 py-1.5 text-xs font-semibold"><span>Brand:</span><select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} className="bg-transparent outline-none"><option>All</option><option>PS5</option><option>Xbox</option><option>Oculus</option></select></label>
            </div>
          </div>

          {query && <div className="mt-3 rounded-lg bg-[#eef2ff] px-4 py-2 text-sm font-semibold text-[#3158ff]">Search results for “{query}”</div>}

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {visibleProducts.map((product, idx) => (
              <React.Fragment key={product.id}>
                <ProductCard product={product} wishlist={wishlist.has(product.id)} onWishlist={() => toggleWishlist(product.id)} onAdd={() => addToBag(product)} days={days} />
                {!isGta && (idx === 3 || idx === 7) && <PromoBanner variant={idx === 3 ? 'asset' : 'earn'} />}
              </React.Fragment>
            ))}
          </div>

          {visibleProducts.length === 0 && <div className="mt-5 rounded-2xl bg-white p-12 text-center"><h3 className="text-lg font-bold">No products found</h3><p className="mt-1 text-sm text-gray-500">Try another search or category.</p></div>}

          {!isGta && filteredProducts.length > visibleCount && <div className="mt-7 border-t border-[#dce0e7] pt-7 text-center"><div className="text-sm text-[#999fa8]">Showing {visibleCount} of 48 results</div><button type="button" onClick={() => setVisibleCount((count) => Math.min(filteredProducts.length, count + 8))} className="mt-4 h-12 w-full max-w-[305px] rounded-full border-2 border-black bg-white text-sm font-bold text-[#111827] hover:bg-black hover:text-white">Show More</button></div>}
          {isGta && <div className="mt-7 border-t border-[#dce0e7] pt-5 text-center text-sm text-[#999fa8]">Showing 2 of 2 results</div>}

          <FAQ faqs={faqs} />
          <div className="mt-8 flex items-center gap-2 rounded-xl bg-[#eef0f3] px-4 py-5 text-sm text-[#566074]"><span>Kolkata</span><span>›</span><strong className="text-[#0d1528]">Gaming gadgets on rent</strong></div>
          <TrustSection />
          <Footer />
        </section>
      </main>

      <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-6 left-5 z-40 hidden items-center gap-1 text-sm font-semibold text-[#5377ef] md:flex">Go up <span className="text-lg">⌃</span></button>
      <div aria-hidden="true" className="fixed bottom-7 right-7 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#1e46e4] shadow-lg after:absolute after:-right-1 after:bottom-0 after:h-3 after:w-3 after:rotate-45 after:bg-[#1e46e4]"><span className="z-10 text-lg font-black tracking-widest text-white">•••</span></div>
      <div aria-hidden="true" className="fixed bottom-10 right-12 z-[41] grid h-12 w-12 place-items-center rounded-full bg-[#86ff00] shadow-lg"><span className="text-sm font-black tracking-widest text-white">•••</span></div>
      {toast && <div className="fixed left-1/2 bottom-5 z-[110] -translate-x-1/2 rounded-full bg-[#08122f] px-5 py-3 text-sm font-semibold text-white shadow-xl">{toast}</div>}

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
      <LocationModal open={locationOpen} selectedCity={city} onClose={() => setLocationOpen(false)} onSelect={(nextCity) => { setCity(nextCity); setToast(`Location changed to ${nextCity}.`); }} />
      <RentalDateModal open={dateOpen} initialDelivery={deliveryDate} initialPickup={pickupDate} onClose={() => setDateOpen(false)} onSave={saveDates} />
    </div>
  );
}
