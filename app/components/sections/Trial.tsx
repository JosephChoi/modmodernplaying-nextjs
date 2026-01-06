'use client';

export default function Trial() {
  return (
    <section id="trial" className="py-24 bg-stone-50 relative overflow-hidden scroll-mt-28">
      <div
        className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/cubes.png')",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          나에게 딱 맞는 체험 클래스 찾기
        </h2>
        <p className="text-stone-500 mb-16 text-lg font-light">
          100% 환급되는 리스크 없는 체험부터 시작해보세요.
        </p>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {/* Trial Card 1: Dance */}
          <div className="group relative rounded-3xl bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-stone-100 overflow-hidden ring-1 ring-stone-900/5 hover:ring-royalPurple/20 h-full flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-royalPurple to-indigo-600"></div>
            <div className="absolute top-0 right-0 bg-stone-200 text-stone-600 text-[10px] font-bold px-3 py-1 rounded-bl-lg shadow-sm z-10">
              Single
            </div>

            <div className="flex justify-between items-start mb-4 mt-2">
              <div className="text-left">
                <span className="inline-block px-2 py-0.5 rounded-full bg-stone-100 text-stone-500 text-[10px] font-bold tracking-wider uppercase mb-2 border border-stone-200">
                  Dance
                </span>
                <h3 className="text-xl font-bold text-stone-900 leading-tight">
                  현대무용<br />원데이
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-royalPurple/10 flex items-center justify-center text-royalPurple group-hover:bg-royalPurple group-hover:text-white transition-colors">
                <i className="fas fa-video text-lg"></i>
              </div>
            </div>

            <div className="flex items-end gap-2 mb-4 border-b border-dashed border-stone-200 pb-4">
              <span className="text-stone-400 line-through text-xs mb-1">40,000원</span>
              <span className="text-3xl font-black text-stone-900 tracking-tighter">
                19,900<span className="text-sm font-bold text-stone-500 ml-0.5">원</span>
              </span>
            </div>

            <ul className="text-left text-xs text-stone-600 space-y-2 mb-6 flex-grow">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
                <span>나만의 움직임 찾기 (90분)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
                <span>
                  등록 시 <strong>100% 페이백</strong>
                </span>
              </li>
            </ul>

            <a
              href="#contact"
              className="w-full py-3 bg-white border border-royalPurple text-royalPurple rounded-xl font-bold text-sm hover:bg-royalPurple hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
            >
              체험 예약하기
            </a>
          </div>

          {/* Trial Card 2: Stretching */}
          <div className="group relative rounded-3xl bg-white p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-stone-100 overflow-hidden ring-1 ring-stone-900/5 hover:ring-brandRed/20 h-full flex flex-col">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-brandRed to-orange-500"></div>
            <div className="absolute top-0 right-0 bg-stone-200 text-stone-600 text-[10px] font-bold px-3 py-1 rounded-bl-lg shadow-sm z-10">
              Single
            </div>

            <div className="flex justify-between items-start mb-4 mt-2">
              <div className="text-left">
                <span className="inline-block px-2 py-0.5 rounded-full bg-stone-100 text-stone-500 text-[10px] font-bold tracking-wider uppercase mb-2 border border-stone-200">
                  Stretching
                </span>
                <h3 className="text-xl font-bold text-stone-900 leading-tight">
                  스트레칭<br />3회권
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-brandRed/10 flex items-center justify-center text-brandRed group-hover:bg-brandRed group-hover:text-white transition-colors">
                <i className="fas fa-fire text-lg"></i>
              </div>
            </div>

            <div className="flex items-end gap-2 mb-4 border-b border-dashed border-stone-200 pb-4">
              <span className="text-stone-400 line-through text-xs mb-1">90,000원</span>
              <span className="text-3xl font-black text-stone-900 tracking-tighter">
                29,700<span className="text-sm font-bold text-stone-500 ml-0.5">원</span>
              </span>
            </div>

            <ul className="text-left text-xs text-stone-600 space-y-2 mb-6 flex-grow">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
                <span>회당 커피 2잔 값 (9,900원)</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mt-0.5 mr-2"></i>
                <span>불만족 시 100% 환불</span>
              </li>
            </ul>

            <a
              href="#contact"
              className="w-full py-3 bg-white border border-brandRed text-brandRed rounded-xl font-bold text-sm hover:bg-brandRed hover:text-white transition-all duration-300 shadow-sm flex items-center justify-center gap-2"
            >
              체험 예약하기
            </a>
          </div>

          {/* Trial Card 3: All-In-One */}
          <div className="group relative rounded-3xl bg-white p-6 shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-royalPurple/20 border-2 border-classicGold overflow-hidden h-full flex flex-col transform md:scale-105 z-20">
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-classicGold to-yellow-500"></div>
            <div className="absolute top-0 right-0 bg-brandRed text-white text-xs font-bold px-4 py-1.5 rounded-bl-xl shadow-sm z-10 animate-pulse">
              🔥 선착순 마감 임박
            </div>

            <div className="flex justify-between items-start mb-4 mt-2">
              <div className="text-left">
                <span className="inline-block px-2 py-0.5 rounded-full bg-classicGold/10 text-classicGold text-[10px] font-bold tracking-wider uppercase mb-2 border border-classicGold/20">
                  Best Value
                </span>
                <h3 className="text-lg font-black text-stone-900 leading-tight">
                  현대무용 + 스트레칭<br />통합 체험권
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-classicGold/20 flex items-center justify-center text-classicGold group-hover:bg-classicGold group-hover:text-white transition-colors">
                <i className="fas fa-crown text-lg"></i>
              </div>
            </div>

            <div className="flex items-end gap-2 mb-4 border-b border-dashed border-stone-200 pb-4">
              <span className="text-stone-400 line-through text-xs mb-1">130,000원</span>
              <span className="text-4xl font-black text-royalPurple tracking-tighter">
                44,900<span className="text-sm font-bold text-stone-500 ml-0.5">원</span>
              </span>
            </div>

            <div className="bg-stone-50 rounded-lg p-3 mb-4 text-left">
              <p className="text-xs font-bold text-stone-700 mb-1">현대무용 1회 + 스트레칭 3회</p>
              <p className="text-[10px] text-stone-500">
                정상가 대비 65% 할인된 가격으로 모던플레잉의 모든 것을 경험해보세요.
              </p>
            </div>

            <ul className="text-left text-xs text-stone-600 space-y-2 mb-6 flex-grow">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-royalPurple mt-0.5 mr-2"></i>
                <span>두 가지 수업 완벽 체험</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-royalPurple mt-0.5 mr-2"></i>
                <span>
                  등록 시 <strong>100% 전액 페이백</strong>
                </span>
              </li>
            </ul>

            <a
              href="#contact"
              className="w-full py-4 bg-gradient-to-r from-royalPurple to-indigo-600 text-white rounded-xl font-bold text-sm hover:from-indigo-600 hover:to-royalPurple transition-all duration-300 shadow-lg group-hover:shadow-royalPurple/30 flex items-center justify-center gap-2"
            >
              All in one 체험 예약하기 <i className="fas fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>

        <div className="mt-16 inline-flex items-center gap-2 bg-white border border-stone-200 rounded-full px-6 py-2.5 text-stone-500 text-xs font-medium tracking-wide shadow-sm hover:shadow-md transition cursor-default">
          <i className="fas fa-shield-alt text-royalPurple"></i>
          <span>체험 후 정규 등록 시, 체험비 전액을 포인트로 돌려드립니다.</span>
        </div>
      </div>
    </section>
  );
}

