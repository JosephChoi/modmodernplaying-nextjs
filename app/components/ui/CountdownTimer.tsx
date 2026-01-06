'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-02-28T23:59:59').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.days === 0 && timeLeft.hours === 0 && timeLeft.minutes === 0 && timeLeft.seconds === 0) {
    return <span className="text-brandRed font-bold">이벤트 종료</span>;
  }

  return (
    <div className="flex items-end gap-1.5 font-mono-nums leading-none">
      <div className="flex items-center gap-1">
        <span className="text-xl md:text-3xl font-black text-white tracking-tight">
          {timeLeft.days}
        </span>
        <span className="text-[10px] md:text-xs text-stone-500 font-bold uppercase mb-0.5 md:mb-1">
          Day
        </span>
      </div>
      <span className="text-lg md:text-2xl text-stone-700 font-light pb-1">:</span>
      <div className="flex items-center gap-1">
        <span className="text-xl md:text-3xl font-black text-white tracking-tight">
          {timeLeft.hours.toString().padStart(2, '0')}
        </span>
        <span className="text-[10px] md:text-xs text-stone-500 font-bold uppercase mb-0.5 md:mb-1">
          Hr
        </span>
      </div>
      <span className="text-lg md:text-2xl text-stone-700 font-light pb-1">:</span>
      <div className="flex items-center gap-1">
        <span className="text-xl md:text-3xl font-black text-white tracking-tight">
          {timeLeft.minutes.toString().padStart(2, '0')}
        </span>
        <span className="text-[10px] md:text-xs text-stone-500 font-bold uppercase mb-0.5 md:mb-1">
          Min
        </span>
      </div>
      <span className="text-lg md:text-2xl text-stone-700 font-light pb-1">:</span>
      <div className="flex items-center gap-1">
        <span className="text-2xl md:text-3xl font-black text-brandRed tracking-tight w-[36px] md:w-[46px] text-center bg-brandRed/10 rounded border border-brandRed/20">
          {timeLeft.seconds.toString().padStart(2, '0')}
        </span>
        <span className="text-[10px] md:text-xs text-brandRed font-bold uppercase mb-0.5 md:mb-1.5">
          Sec
        </span>
      </div>
    </div>
  );
}

