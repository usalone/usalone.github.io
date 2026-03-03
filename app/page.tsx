'use client'; // Bắt buộc phải có để import Web Components

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image'; // Thêm công cụ xử lý ảnh của Next.js

export default function UsAloneHomepage() {
  const router = useRouter();

  useEffect(() => {
    // Import các nút Material Web
    import('@material/web/button/filled-button.js');
    import('@material/web/button/outlined-button.js');
  }, []);

  return (
    <div className="py-12 px-6 md:px-16 lg:px-24 max-w-6xl mx-auto">
      <div className="mb-20 pt-10">
        <h1 className="text-5xl md:text-7xl font-bold text-[#201A16] dark:text-[#EAE1D9] tracking-tight mb-8">
          We build <br />
          <span className="text-[#8D4F00] dark:text-[#FFB870]">privacy-first</span> software.
        </h1>
        <p className="text-2xl text-[#50453D] dark:text-[#D1C5B4] leading-relaxed max-w-3xl">
          Welcome to Us Alone Studio. We are an independent team of developers passionate about creating minimalist, secure digital tools where your personal data is absolutely respected and protected.
        </p>
      </div>

      <hr className="border-[#EBE1D9] dark:border-[#352D27] my-16" />

      <section id="studio" className="mb-24">
        <h2 className="text-4xl font-bold text-[#201A16] dark:text-[#EAE1D9] mb-8">Vision & Mission</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#201A16] dark:text-[#EAE1D9]">The Privacy Era</h3>
            <p className="text-[#50453D] dark:text-[#D1C5B4] leading-relaxed text-lg">
              In a world where tech giants track every tap on your screen to serve ads, we choose a different path. We believe personal software should be truly "personal." No tracking servers, no forced account creation, and no user behavior analytics.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-[#201A16] dark:text-[#EAE1D9]">Minimalist & Efficient Design</h3>
            <p className="text-[#50453D] dark:text-[#D1C5B4] leading-relaxed text-lg">
              Our products are built on Material Design 3 principles. We remove the clutter, keeping only the essential features so you can get things done in seconds, rather than spending minutes figuring out how to use the app.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F5EFE6] dark:bg-[#211B16] rounded-[48px] p-8 md:p-16 mb-20 border border-[#EBE1D9] dark:border-[#352D27]">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#15120F] text-[#8D4F00] dark:text-[#FFB870] text-sm font-bold mb-6 border border-[#EBE1D9] dark:border-[#352D27]">
              <span className="material-symbols-outlined text-sm">workspace_premium</span> Featured Product
            </div>
            <h2 className="text-5xl font-bold mb-6 text-[#201A16] dark:text-[#EAE1D9]">Naspend</h2>
            <p className="text-xl text-[#50453D] dark:text-[#D1C5B4] mb-10 leading-relaxed">
              A smart, absolutely secure personal expense manager with 100% offline functionality. Track your cash flow and master your finances in just seconds a day.
            </p>
            
            {/* NÚT BẤM */}
            <div className="flex flex-wrap gap-4 items-center mt-6">
              <div onClick={() => router.push('/naspend')}>
                <md-filled-button className="h-10">
                  <span className="px-6 text-sm font-medium">Explore Naspend</span>
                </md-filled-button>
              </div>
              <div onClick={() => router.push('/blog/why-choose-naspend')}>
                <md-outlined-button className="h-10">
                  <span className="px-6 text-sm font-medium">Read our Blog</span>
                </md-outlined-button>
              </div>
            </div>

          </div>
          
          {/* KHU VỰC LOGO ĐÃ ĐƯỢC THAY THẾ */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <Image 
              src="/naspend-logo.png" 
              alt="Naspend App Logo" 
              width={220} 
              height={220} 
              // Thêm bo góc lớn (như icon app điện thoại) và hiệu ứng nổi khi di chuột
              className="rounded-[48px] drop-shadow-2xl transition-transform hover:scale-105 duration-300 bg-white dark:bg-[#15120F] p-2" 
              priority
            />
          </div>

        </div>
      </section>
    </div>
  );
}