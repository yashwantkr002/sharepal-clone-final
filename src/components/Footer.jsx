import React from 'react';

const columns = [
  ['Action Cameras', 'Action Cameras', 'Pocket Cameras', 'GoPro Cameras', 'DJI Cameras', 'DJI Drones', '360 Cameras'],
  ['Cameras', 'DSLR Cameras', 'Cameras', 'iPhones', 'DSLR Gimbal Combos', 'Wildlife Photography', 'Tripod and camera accessories'],
  ['Trekking Gear', 'Trekking Gear', 'Trekking Jackets', 'Trek/Snow Pants', 'Trekking Shoes', 'Trek Accessories'],
  ['Riding Gear', 'Riding Gear', 'Riding Luggage', 'Riding Jackets', 'Riding Essentials', 'Riding Boots', 'Binoculars'],
  ['Creator Gear', 'Wireless & Collar Mics', 'Professional Cameras', 'Mirrorless Cameras', 'UNLMTD Vlogging', 'Mobile Gimbals', 'Vlogging'],
  ['Gaming Console', 'PS5 Console', 'VR', 'Racing Wheel', 'Big Screen Gaming', 'Xbox Console'],
  ['Winter Wear', 'Snow Boots', 'Winter Jackets', 'Backpacks'],
  ['Camping Gear', 'Camping Gear', 'Camping Stools & Tables', 'Camping Tents', 'Sleeping Bags & Mats'],
  ['Audio Visual Equipment', 'Projectors', 'VR', 'Mics', 'Speakers'],
];

const linkColumns = [
  ['Sharepal', ['About', 'Why SharePal', 'Sitemap', 'CarePal']],
  ['Become a Pal', ['Sharepal for Creators', 'Careers', 'Sharepal for Brands', 'Asset Funding Program', 'Rent Your Gear']],
  ['Information', ['How it works?', 'FAQs', 'Verification', 'Cancellation Policy', 'Life at Sharepal']],
  ['Policies', ['Terms & Condition', 'Shipping policy', 'Damage Policy', 'Terms of Use', 'Privacy Policy']],
];

export default function Footer() {
  return (
    <footer className="mt-10 bg-[#020d34] text-white">
      <section className="mx-auto max-w-[1360px] px-5 py-10 sm:px-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-5">
          {columns.map(([title, ...links]) => (
            <div key={title}>
              <h3 className="text-base font-bold text-white">{title}</h3>
              <div className="mt-4 space-y-3">{links.map((link) => <a key={link} href="#" className="block text-sm text-[#a8b0c2] hover:text-white">{link}</a>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#030d33] px-5 py-8 sm:px-10">
        <div className="mx-auto max-w-[1360px]">
          <div className="rounded-sm bg-[#07174b] px-3 py-1.5 text-3xl font-black italic w-fit">Share<span className="text-[#86ff00]">Pal</span></div>
          <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
            {linkColumns.map(([title, links]) => (
              <div key={title}><h3 className="text-sm font-bold">{title}</h3><div className="mt-6 space-y-4">{links.map((link) => <a key={link} href="#" className="block text-sm text-[#9da6ba] hover:text-white">{link}{(link === 'Asset Funding Program' || link === 'Rent Your Gear') && <span className="ml-2 rounded-full bg-[#86ff00] px-2 py-0.5 text-[10px] font-black text-black">New</span>}</a>)}</div></div>
            ))}
            <div><h3 className="text-sm font-bold">Need Help</h3><div className="mt-6 space-y-4 text-sm text-[#9da6ba]"><a href="#" className="block hover:text-white">◉ &nbsp;Contact Support</a><a href="#" className="block hover:text-white">Contact Us</a><a href="mailto:care@sharepal.in" className="block hover:text-white">✉ &nbsp; care@sharepal.in</a><div className="flex gap-3 pt-2"><span className="grid h-7 w-7 place-items-center rounded bg-[#9da6ba] font-black text-[#061033]">f</span><span className="grid h-7 w-7 place-items-center rounded bg-[#9da6ba] font-black text-[#061033]">◎</span><span className="grid h-7 w-7 place-items-center rounded bg-[#9da6ba] font-black text-[#061033]">in</span></div></div></div>
          </div>
          <div className="mt-10 flex flex-col gap-3 border-t border-white/20 pt-6 text-sm text-[#7f8db0] md:flex-row md:items-center md:justify-between"><span>Go up&nbsp;⌃</span><span>© 2026 SWNAC E-Kiraya Services Pvt Ltd</span><span>Made with <b className="text-pink-500">♥</b> for you</span></div>
        </div>
      </section>
    </footer>
  );
}
