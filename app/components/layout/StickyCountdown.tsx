'use client';

import CountdownTimer from '../ui/CountdownTimer';

export default function StickyCountdown() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-[#111] border-t border-royalPurple/30 shadow-[0_-10px_40px_rgba(0,0,0,0.4)] z-50 px-4 py-3 md:py-3">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
        {/* Left: Text & Timer */}
        <div className="w-full md:w-auto flex flex-col md:flex-row items-start md:items-center justify-between md:justify-start gap-3 md:gap-4">
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5 mb-0.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandRed opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brandRed"></span>
              </span>
              <span className="text-[10px] md:text-xs font-bold text-classicGold uppercase tracking-widest">
                남은 시간
              </span>
            </div>
            <div className="text-xs md:text-sm text-gray-300 font-medium leading-tight">
              <span className="hidden md:inline">선착순 100명이 끝나면 혜택이 사라집니다.</span>
              <span className="md:hidden">선착순 100명 혜택 마감 임박!</span>
            </div>
          </div>

          <div className="h-8 w-px bg-white/10 hidden md:block mx-2"></div>

          <div className="flex items-end gap-1.5 font-mono-nums leading-none w-full md:w-auto justify-center md:justify-start">
            <CountdownTimer />
          </div>
        </div>

        {/* Right: Button */}
        <div className="w-full md:w-auto flex gap-2 justify-center md:justify-end">
          <a
            href="#contact"
            className="w-full md:w-auto bg-gradient-to-r from-royalPurple to-brandRed text-white py-3.5 px-8 rounded-xl font-bold text-base hover:from-indigo-600 hover:to-royalPurple transition-all duration-300 shadow-lg shadow-brandRed/20 hover:shadow-brandRed/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
          >
            <span>100% 환급 체험권 문의</span>
            <i className="fas fa-chevron-right text-xs group-hover:translate-x-1 transition"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

