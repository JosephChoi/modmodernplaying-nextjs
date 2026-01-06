export default function Synergy() {
  return (
    <section className="py-24 bg-[#1a1a1a] relative overflow-hidden">
      {/* Background Elements */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
        }}
      ></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-royalPurple/20 via-transparent to-[#1a1a1a] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Badge */}
          <div className="inline-flex flex-col md:flex-row items-center gap-3 mb-8 bg-white/5 p-3 rounded-[2rem] border border-white/10 backdrop-blur-sm shadow-xl">
            <span className="bg-stone-800 text-white px-5 py-2 rounded-full text-base font-bold tracking-wide shadow-md">
              현대무용 수강생
            </span>
            <i className="fas fa-plus-circle text-classicGold text-2xl animate-pulse"></i>
            <span className="bg-gradient-to-r from-royalPurple to-indigo-600 text-white px-6 py-2 rounded-full text-base font-bold tracking-wide shadow-[0_0_20px_rgba(90,61,170,0.5)] ring-2 ring-royalPurple/50">
              스트레칭 추가 시
            </span>
          </div>

          {/* Main Title & Hook */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
            "현대무용만으로는<br className="md:hidden" /> 뭔가 아쉽지 않으셨나요?"
          </h2>

          <p className="text-stone-400 text-lg max-w-2xl mx-auto font-light leading-relaxed break-keep">
            유연함이 더해지면 춤선이 달라집니다.<br />
            더 빠르고 완벽하게 성장하고 싶은 분들을 위해 준비한{' '}
            <span className="text-classicGold font-bold border-b border-classicGold/50 pb-0.5">
              시너지 플랜(통합 멤버십)
            </span>{' '}
            혜택을 확인하세요.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-8">
          {/* Option 1: Starter */}
          <div className="relative bg-stone-800/50 backdrop-blur border-x border-b border-stone-700 border-t-[6px] border-t-stone-500 rounded-3xl p-6 hover:bg-stone-800 transition duration-300 flex flex-col h-full group hover:border-stone-500">
            <div className="mb-4">
              <span className="text-stone-400 text-xs font-bold tracking-widest uppercase">입문</span>
              <h3 className="text-xl font-bold text-white mt-1">1개월 스트레칭 Add on</h3>
            </div>
            <div className="flex-grow">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-white">150,000</span>
                <span className="text-sm text-stone-400">원 / 월</span>
              </div>
              <div className="text-sm text-stone-500 mb-1">정상가 180,000원</div>
              <div className="text-stone-400 text-xs mb-6">총 결제액 150,000원</div>
              <div className="w-full border-t border-stone-700 my-4"></div>
              <p className="text-xs text-royalPurple mt-1 font-medium bg-royalPurple/10 inline-block px-2 py-1 rounded border border-royalPurple/20">
                총 6회 (회당 2.5만)
              </p>
            </div>
          </div>

          {/* Option 2: BEST VALUE */}
          <div className="relative bg-stone-800/80 backdrop-blur border-2 border-royalPurple rounded-3xl p-6 transition duration-300 flex flex-col h-full shadow-lg shadow-royalPurple/20 transform md:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-royalPurple text-white text-[10px] font-bold px-4 py-1.5 rounded-full shadow-md whitespace-nowrap uppercase tracking-wide border border-white/20">
              Best Choice
            </div>
            <div className="absolute top-0 right-0 bg-brandRed text-white text-xs font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-xl z-20">
              12% SAVE
            </div>
            <div className="mb-4 mt-2">
              <span className="text-royalPurple text-xs font-bold tracking-widest uppercase">인기</span>
              <h3 className="text-xl font-bold text-white mt-1">3개월 스트레칭 Add on</h3>
            </div>
            <div className="flex-grow">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-4xl font-bold text-white">132,000</span>
                <span className="text-sm text-stone-400">원 / 월</span>
              </div>
              <div className="text-stone-400 text-xs mb-6">총 396,000원</div>
              <div className="w-full border-t border-royalPurple/30 my-4"></div>
              <p className="text-xs text-classicGold mt-1 font-bold bg-classicGold/10 inline-block px-2 py-1 rounded border border-classicGold/20">
                <i className="fas fa-check-circle mr-1"></i> 총 18회 (회당 2.2만)
              </p>
            </div>
          </div>

          {/* Option 3: Premium */}
          <div className="relative bg-stone-800/50 backdrop-blur border-x border-b border-stone-700 border-t-[6px] border-t-indigo-400 rounded-3xl p-6 hover:bg-stone-800 transition duration-300 flex flex-col h-full group hover:border-stone-500">
            <div className="absolute top-0 right-0 bg-indigo-500 text-white text-xs font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-lg z-20">
              18% SAVE
            </div>
            <div className="mb-4">
              <span className="text-indigo-300 text-xs font-bold tracking-widest uppercase">프리미엄</span>
              <h3 className="text-xl font-bold text-white mt-1">6개월 스트레칭 Add on</h3>
            </div>
            <div className="flex-grow">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-white">123,000</span>
                <span className="text-sm text-stone-400">원 / 월</span>
              </div>
              <div className="text-stone-400 text-xs mb-6">총 738,000원</div>
              <div className="w-full border-t border-stone-700 my-4"></div>
              <p className="text-xs text-indigo-300 mt-1 font-medium bg-indigo-900/30 inline-block px-2 py-1 rounded border border-indigo-500/30">
                총 36회 (회당 2.0만)
              </p>
            </div>
          </div>

          {/* Option 4: Master */}
          <div className="relative bg-stone-800/50 backdrop-blur border-x border-b border-stone-700 border-t-[6px] border-t-classicGold rounded-3xl p-6 hover:bg-stone-800 transition duration-300 flex flex-col h-full group hover:border-stone-500">
            <div className="absolute top-0 right-0 bg-classicGold text-stone-900 text-xs font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-lg z-20">
              25% SAVE
            </div>
            <div className="mb-4">
              <span className="text-classicGold text-xs font-bold tracking-widest uppercase">마스터</span>
              <h3 className="text-xl font-bold text-white mt-1">12개월 스트레칭 Add on</h3>
            </div>
            <div className="flex-grow">
              <div className="flex items-baseline gap-1 mb-2">
                <span className="text-3xl font-bold text-white">112,500</span>
                <span className="text-sm text-stone-400">원 / 월</span>
              </div>
              <div className="text-stone-400 text-xs mb-6">총 1,350,000원</div>
              <div className="w-full border-t border-stone-700 my-4"></div>
              <p className="text-xs text-classicGold mt-1 font-medium bg-classicGold/20 inline-block px-2 py-1 rounded border border-classicGold/30">
                총 72회 (회당 1.8만)
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-stone-500 text-sm font-light">
            <i className="fas fa-info-circle mr-1"></i> 통합 멤버십은 현대무용 정규 클래스 등록 시에만 구매
            가능한 <strong>회원 전용 혜택</strong>입니다.
          </p>
        </div>
      </div>
    </section>
  );
}

