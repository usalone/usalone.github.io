'use client'; // Bắt buộc phải có để import Web Components

import { useEffect } from 'react';

export default function BlogPost() {
  
  useEffect(() => {
    import('@material/web/button/filled-button.js');
  }, []);

  return (
    <div className="py-12 px-6 md:px-16 max-w-4xl mx-auto">
      <article className="prose prose-xl prose-headings:text-[#201A16] dark:prose-headings:text-[#EAE1D9] prose-strong:text-[#201A16] dark:prose-strong:text-[#EAE1D9] text-[#50453D] dark:text-[#D1C5B4] max-w-none">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5EFE6] dark:bg-[#211B16] text-[#8D4F00] dark:text-[#FFB870] text-sm font-bold mb-8 border border-[#EBE1D9] dark:border-[#352D27]">
          <span className="material-symbols-outlined text-sm">edit_note</span> From the Developer Team
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 tracking-tight">
          Why Choose Naspend? The Era of "Privacy First"
        </h1>

        <p className="lead text-2xl font-medium text-[#201A16] dark:text-[#EAE1D9] mb-12">
          In a world where your financial data is constantly collected, tracked, and sold to third parties every second, protecting your privacy is more important than ever. That's why Naspend was born.
        </p>

        <h2 className="text-3xl font-bold mt-16 mb-6">1. The Problem with "Cloud-Based" Apps</h2>
        <p className="mb-6 leading-relaxed">
          Most expense tracking apps today force you to create an account. Every time you log an expense — whether it's a cup of coffee or a sensitive medical bill — that data is immediately sent to their servers. It's unsettling when your income, dining habits, and debts are in someone else's hands.
        </p>

        <h2 className="text-3xl font-bold mt-16 mb-6">2. Naspend: Absolute Privacy (100% Offline)</h2>
        <p className="mb-6 leading-relaxed">
          With Naspend, we completely eliminate the server. 
          <strong> No sign-up. No servers. No data collection.</strong><br/>
          All your financial data is stored locally right on your phone's memory using highly secure SQLite encryption. This means no one — not even us — can access your data.
        </p>

        <h2 className="text-3xl font-bold mt-16 mb-6">3. A Seamless, Ad-Free Experience</h2>
        <p className="mb-6 leading-relaxed">
          Tracking expenses is a habit that requires patience. Imagine being in a rush at the grocery checkout, opening an app, and having to wait 5 seconds for a video ad to finish. It's terrible!
        </p>
        <p className="mb-12 leading-relaxed">
          Naspend is a <strong>completely free and ad-free</strong> application. It launches instantly, and it takes you exactly 3 seconds to log a transaction thanks to the extremely minimalist Material Design 3 interface.
        </p>

        <div className="bg-[#F5EFE6] dark:bg-[#211B16] border border-[#EBE1D9] dark:border-[#352D27] p-12 rounded-[40px] text-center mt-16">
          <h3 className="text-3xl font-bold mb-6 text-[#201A16] dark:text-[#EAE1D9]">Ready to master your finances?</h3>
          <p className="mb-8 text-xl">Download Naspend today to start your secure and smart financial management journey.</p>
          
          {/* SỬ DỤNG MATERIAL FILLED BUTTON */}
          <div className="mt-8 flex justify-center" onClick={() => window.open("https://play.google.com/store/apps/details?id=com.usalone.naspend", '_blank')}>
            <md-filled-button className="h-10">
              <span className="px-6 text-sm font-medium">Download Naspend for Free</span>
            </md-filled-button>
          </div>

        </div>
      </article>
    </div>
  );
}