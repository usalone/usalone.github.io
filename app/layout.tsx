'use client';

import "./globals.css";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { Providers } from "./providers";
import Image from 'next/image'; // Kéo công cụ Image của Next.js vào

// --- COMPONENT NÚT CHUYỂN ĐỔI THEME CHUẨN M3 ---
const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    import('@material/web/iconbutton/icon-button.js');
    import('@material/web/icon/icon.js');
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10" />; 

  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('system');
    else setTheme('light');
  };

  return (
    <div onClick={toggleTheme} className="text-[#50453D] dark:text-[#EAE1D9]">
      <md-icon-button>
        <md-icon>
          {theme === 'light' ? 'light_mode' : theme === 'dark' ? 'dark_mode' : 'brightness_auto'}
        </md-icon>
      </md-icon-button>
    </div>
  );
};

// --- LAYOUT CHÍNH ---
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path || pathname.startsWith(path + '/');

  const menuSections = [
    {
      title: "About",
      items: [
        { name: "Introduction", path: "/", icon: "home" },
      ]
    },
    {
      title: "Products",
      items: [
        { name: "Naspend App", path: "/naspend", icon: "account_balance_wallet" },
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Our Blog", path: "/blog/why-choose-naspend", icon: "article" },
        { name: "Privacy Policy", path: "/privacy-policy", icon: "shield" },
        { name: "Terms of Use", path: "/terms-of-use", icon: "gavel" },
      ]
    }
  ];

  const SidebarContent = () => (
    <div className="py-4 h-full overflow-y-auto w-full pb-20">
      <div className="space-y-6">
        {menuSections.map((section, idx) => (
          <div key={idx}>
            <h3 className="text-[#201A16] dark:text-[#EAE1D9] text-[18px] px-6 mb-2">{section.title}</h3>
            <div className="space-y-1 px-3">
              {section.items.map((item, i) => {
                const active = isActive(item.path);
                return (
                  <Link 
                    key={i} 
                    href={item.path} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center px-4 py-3 rounded-full text-[15px] font-medium transition-colors ${
                      active 
                        ? 'bg-[#EBE1D9] text-[#201A16] dark:bg-[#352D27] dark:text-[#EAE1D9]' 
                        : 'text-[#50453D] dark:text-[#D1C5B4] hover:bg-[#EBE1D9]/50 dark:hover:bg-[#352D27]/50'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <title>Us Alone Studio | Material Web</title>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" rel="stylesheet" />
      </head>
      <body className="h-screen w-full flex flex-col overflow-hidden font-sans text-[#201A16] dark:text-[#EAE1D9] bg-[#F5EFE6] dark:bg-[#211B16]">
        <Providers>
          
          {/* --- TOP HEADER --- */}
          <header className="h-16 shrink-0 w-full flex items-center justify-between px-4 md:px-6">
            <div className="flex items-center gap-4">
              <button onClick={() => setIsMobileMenuOpen(true)} className="md:hidden p-2 text-[#50453D] dark:text-[#EAE1D9]">
                <span className="material-symbols-outlined text-3xl">menu</span>
              </button>
              
              <Link href="/" className="flex items-center gap-3">
                {/* Đã thay thế icon bằng Logo */}
                <Image src="/naspend-logo.png" alt="Us Alone Logo" width={32} height={32} className="rounded-lg shadow-sm" priority />
                <span className="font-bold text-xl text-[#201A16] dark:text-[#EAE1D9]">Us Alone</span>
              </Link>
            </div>
            <ThemeToggle />
          </header>

          <div className="flex-1 flex overflow-hidden">
            
            <aside className="hidden md:block w-72 h-full shrink-0">
              <SidebarContent />
            </aside>

            <AnimatePresence>
              {isMobileMenuOpen && (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/50 z-50 md:hidden"
                    onClick={() => setIsMobileMenuOpen(false)}
                  />
                  <motion.aside 
                    initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ type: 'tween', duration: 0.3 }}
                    className="fixed top-0 left-0 w-[85%] max-w-[360px] h-full bg-[#F5EFE6] dark:bg-[#211B16] z-50 shadow-2xl rounded-r-3xl md:hidden flex flex-col"
                  >
                    <div className="p-4 pt-6 flex items-center gap-3">
                       {/* Đã thay thế icon bằng Logo (cho giao diện mobile trượt) */}
                       <Image src="/naspend-logo.png" alt="Us Alone Logo" width={32} height={32} className="rounded-lg shadow-sm ml-4" priority />
                       <span className="font-bold text-xl text-[#201A16] dark:text-[#EAE1D9]">Us Alone</span>
                    </div>
                    <SidebarContent />
                  </motion.aside>
                </>
              )}
            </AnimatePresence>

            <main className="flex-1 bg-white dark:bg-[#15120F] rounded-tl-[32px] md:rounded-bl-[32px] md:rounded-tr-[32px] md:rounded-br-[32px] shadow-sm border border-[#EBE1D9] dark:border-[#352D27] overflow-y-auto mr-0 md:mr-4 mb-0 md:mb-4 relative">
              <div className="absolute left-0 top-16 bottom-16 w-[2px] bg-gradient-to-b from-transparent via-[#8D4F00]/20 dark:via-[#FFB870]/20 to-transparent hidden md:block"></div>
              <div className="min-h-full w-full">
                {children}
              </div>
            </main>

          </div>
        </Providers>
      </body>
    </html>
  );
}