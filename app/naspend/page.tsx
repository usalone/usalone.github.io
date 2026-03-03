'use client';

import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NaspendLandingPage() {
  const playStoreLink = "https://play.google.com/store/apps/details?id=com.usalone.naspend";

  useEffect(() => {
    import('@material/web/button/filled-button.js');
    import('@material/web/icon/icon.js');
  }, []);

  // --- HÀM XỬ LÝ CUỘN TRANG MƯỢT MÀ ---
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Ngăn trình duyệt nhảy trang đột ngột
    const targetId = e.currentTarget.getAttribute('href')?.substring(1); 
    const targetElement = document.getElementById(targetId || '');

    if (targetElement) {
      // Báo trình duyệt cuộn từ từ đến element đó
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeInUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

  return (
    <div className="min-h-screen">
      
      {/* THÊM onClick={handleSmoothScroll} VÀO CÁC THẺ <a> */}
      <header className="sticky top-0 bg-white/90 dark:bg-[#15120F]/90 backdrop-blur-md z-40 border-b border-[#EBE1D9] dark:border-[#352D27] px-6 py-4 flex justify-between items-center">
         <div className="font-bold text-xl text-[#8D4F00] dark:text-[#FFB870]">Naspend App</div>
         <nav className="hidden md:flex gap-6 text-[#50453D] dark:text-[#D1C5B4] font-medium">
            <a href="#about" onClick={handleSmoothScroll} className="hover:text-[#8D4F00] dark:hover:text-[#FFB870] transition-colors">About</a>
            <a href="#features" onClick={handleSmoothScroll} className="hover:text-[#8D4F00] dark:hover:text-[#FFB870] transition-colors">Features</a>
            <a href="#pricing" onClick={handleSmoothScroll} className="hover:text-[#8D4F00] dark:hover:text-[#FFB870] transition-colors">Pricing</a>
         </nav>
      </header>

      <main className="px-6 md:px-16 lg:px-24 max-w-7xl mx-auto py-12">
        
        <section id="about" className="flex flex-col items-center text-center pt-10 pb-20">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5EFE6] dark:bg-[#211B16] text-[#8D4F00] dark:text-[#FFB870] text-sm font-bold mb-8 border border-[#EBE1D9] dark:border-[#352D27]">
              <span className="material-symbols-outlined text-base">verified_user</span>
              100% Offline & No Sign-up Required
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#201A16] dark:text-[#EAE1D9] tracking-tight mb-8 leading-tight">
              Master your <br className="hidden md:block"/>
              <span className="text-[#8D4F00] dark:text-[#FFB870]">personal finances.</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#50453D] dark:text-[#D1C5B4] max-w-3xl mx-auto mb-10 leading-relaxed">
              Want to know where your money goes? Naspend helps you track income and expenses in seconds. Designed with a "Privacy First" mindset.
            </p>
            
            <div className="mt-6" onClick={() => window.open(playStoreLink, '_blank')}>
              <md-filled-button className="h-10">
                <md-icon className="pl-6 pr-2" slot="icon">shop</md-icon>
                <span className="pr-6 pl-2 text-sm font-medium">Download on Google Play</span>
              </md-filled-button>
            </div>

          </motion.div>
          
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-24 w-full rounded-[40px] overflow-hidden bg-[#F5EFE6] dark:bg-[#211B16] border border-[#EBE1D9] dark:border-[#352D27] p-2 md:p-8">
             <Image src="/naspend-mockup.png" alt="Naspend Interface Features" width={1600} height={800} className="w-full h-auto object-contain rounded-[24px]" priority />
          </motion.div>
        </section>

        <hr className="border-[#EBE1D9] dark:border-[#352D27] my-10" />

        <section id="features" className="py-20">
          <div className="mb-16">
            <h2 className="text-5xl font-bold mb-6 text-[#201A16] dark:text-[#EAE1D9]">Why Choose Naspend?</h2>
            <p className="text-2xl text-[#50453D] dark:text-[#D1C5B4] max-w-2xl">Powerful features wrapped in a Clean & Intuitive Design.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'shield_lock', title: 'Absolute Privacy', desc: '100% Offline. Your data stays solely on your device. No Servers. We never collect or access your personal data.' },
              { icon: 'flash_on', title: 'Seamless Experience', desc: 'Lightning Fast. Log a transaction in just 3 seconds. Completely Ad-Free so you can focus without distractions.' },
              { icon: 'insert_chart', title: 'Visual Reports', desc: 'Insightful charts help you understand your spending habits. Easily review daily transaction history in Calendar view.' },
              { icon: 'palette', title: 'Custom Categories', desc: 'Personalize with a wide variety of icons and colors. Modern design with full Dark Mode support.' },
              { icon: 'notifications_active', title: 'Smart Reminders', desc: 'Never forget to log your expenses. Set up local daily reminders at your preferred time.' },
              { icon: 'public', title: 'Global Ready', desc: 'Supports 30+ languages (English, Vietnamese, Chinese, Japanese, Korean, etc.) and all global currency units.' },
            ].map((feat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="bg-[#F5EFE6] dark:bg-[#211B16] p-10 rounded-[40px] border border-[#EBE1D9] dark:border-[#352D27] hover:shadow-md transition-all">
                <div className="w-16 h-16 rounded-full bg-white dark:bg-[#15120F] flex items-center justify-center text-[#8D4F00] dark:text-[#FFB870] mb-8 shadow-sm border border-[#EBE1D9] dark:border-[#352D27]">
                   <span className="material-symbols-outlined text-3xl">{feat.icon}</span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#201A16] dark:text-[#EAE1D9]">{feat.title}</h3>
                <p className="text-[#50453D] dark:text-[#D1C5B4] leading-relaxed text-lg">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        <section id="pricing" className="py-20 mb-20">
          <div className="bg-[#201A16] dark:bg-[#352D27] rounded-[48px] p-8 md:p-16 text-white dark:text-[#EAE1D9] flex flex-col md:flex-row items-center justify-between gap-12 border border-transparent dark:border-[#4A433D]">
             <div className="flex-1">
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-[#EAE1D9]">Simple. Secure. <br/><span className="text-[#EBE1D9] dark:text-[#FFB870]">Completely Free.</span></h2>
                <p className="text-xl text-gray-300 dark:text-[#D1C5B4] mb-8 leading-relaxed">
                   No hidden fees, no subscriptions, no annoying ads. All premium features are unlocked out of the box right when you download the app.
                </p>
                <ul className="space-y-4 mb-10 text-lg">
                   <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#FFB870]">check_circle</span> Free forever</li>
                   <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#FFB870]">check_circle</span> No account required</li>
                   <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#FFB870]">check_circle</span> 100% Offline & Secure</li>
                </ul>
             </div>
             <div className="w-full md:w-[400px] bg-white dark:bg-[#15120F] rounded-[32px] p-8 text-center text-[#201A16] dark:text-[#EAE1D9] border border-[#EBE1D9] dark:border-[#352D27]">
                <h3 className="text-2xl font-bold mb-2">Download Naspend</h3>
                <div className="text-6xl font-extrabold mb-6">$0</div>
                
                <div className="mt-8 flex justify-center" onClick={() => window.open(playStoreLink, '_blank')}>
                   <md-filled-button className="h-10 w-full">
                     <span className="px-6 text-sm font-medium">Download Now</span>
                   </md-filled-button>
                </div>
             </div>
          </div>
        </section>

      </main>
    </div>
  );
}