'use client';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-stone-900">
        <img
          src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Group Active Stretching"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/80"></div>
      </div>

      {/* Notification Bar */}
      <div className="absolute top-20 left-0 w-full z-20 bg-stone-900/80 backdrop-blur-sm text-white py-3 text-center border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 text-sm animate-fade-in-down">
          <span className="text-classicGold font-bold tracking-widest uppercase border border-classicGold px-2 py-0.5 rounded-sm text-[10px]">
            Grand Open
          </span>
          <span className="font-light">Hello, 마포 👋 새로운 영감을 찾고 계신가요?</span>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 w-full max-w-6xl mx-auto mt-10">
        {/* Modern Sans-Serif Title */}
        <h1 className="text-6xl md:text-8xl lg:text-[7rem] text-white font-black mb-10 leading-[0.9] tracking-tighter drop-shadow-2xl">
          Movement<br />
          <span className="font-light italic opacity-80">as</span> Play.
        </h1>

        <p className="text-stone-200 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed opacity-95">
          <span className="block mb-6 text-white font-normal text-xl md:text-2xl tracking-tight">
            Play the Movement,<br />
            Release the Body and Emotion
          </span>
          모던플레잉은 현대인의 굳은 몸과 눌린 감정을<br />
          '놀이처럼 움직이며' 풀어내는 공간입니다.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#benefit"
            className="bg-white text-stone-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-stone-100 transition shadow-lg ring-1 ring-white/50"
          >
            선착순 100명 혜택 보기
          </a>
        </div>
      </div>
    </section>
  );
}

