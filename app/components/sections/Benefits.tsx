'use client';

export default function Benefits() {
  return (
    <section id="benefit" className="py-24 bg-dark-gradient text-white relative overflow-hidden scroll-mt-28">
      <div className="absolute top-0 right-0 w-96 h-96 bg-royalPurple opacity-20 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-classicGold opacity-10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Header with FOMO Element */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-brandRed/20 border border-brandRed/50 rounded-full px-4 py-1.5 mb-6 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-brandRed"></span>
            <span className="text-brandRed text-xs font-bold tracking-widest uppercase">
              선착순 100명 Only
          </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white drop-shadow-lg tracking-tight">
            오픈 멤버 한정 혜택
          </h2>
          <p className="text-lg text-stone-300 font-light tracking-tight max-w-2xl mx-auto">
            마포점 최초 멤버를 위한{' '}
            <span className="text-white font-bold border-b border-classicGold/50 pb-0.5">
              4가지 독점 혜택
            </span>
            입니다.<br />
            <span className="text-sm text-stone-500 mt-2 block">
              <i className="far fa-clock text-gold mr-1"></i> 마감 시 해당 혜택 페이지는 영구적으로
              삭제됩니다.
            </span>
          </p>
        </div>

        {/* Benefit Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Benefit 1: Membership Discount */}
          <div className="bg-gradient-to-br from-stone-800/80 to-stone-900/80 backdrop-blur-md border border-classicGold/40 p-7 rounded-3xl hover:border-classicGold hover:bg-stone-800 transition duration-500 group relative flex flex-col h-full shadow-2xl">
            <div className="absolute top-0 right-0 bg-classicGold text-stone-900 text-[10px] font-bold px-3 py-1 rounded-bl-lg z-20">
              MOST VALUABLE
            </div>
            <div className="absolute top-6 right-6 text-3xl text-gold group-hover:scale-110 transition duration-300 opacity-20 group-hover:opacity-100">
              <i className="fas fa-crown"></i>
            </div>
            <div className="mb-4">
              <span className="text-xs font-bold text-classicGold uppercase tracking-widest border border-classicGold/30 rounded px-2 py-0.5">
                Discount
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 break-keep">
              정규 멤버십<br />최대 18만원 할인
            </h3>
            <p className="text-stone-400 text-sm font-light leading-relaxed mb-6 flex-grow">
              체험비 100% 전액 환급 +<br />
              결제 시 <span className="text-white font-bold">최대 15만원</span> 즉시 차감
            </p>
            <div className="space-y-3 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-1.5">
                <span className="bg-black/40 text-stone-400 text-[10px] px-1.5 py-0.5 rounded border border-white/5">
                  1개월 3만
                </span>
                <span className="bg-black/40 text-stone-400 text-[10px] px-1.5 py-0.5 rounded border border-white/5">
                  3개월 5만
                </span>
                <span className="bg-black/40 text-stone-400 text-[10px] px-1.5 py-0.5 rounded border border-white/5">
                  6개월 10만
                </span>
                <span className="bg-black/40 text-gold text-[10px] px-1.5 py-0.5 rounded border border-classicGold/30">
                  12개월 15만
                </span>
              </div>
              <div className="flex justify-between items-end">
                <span className="text-stone-500 text-xs">Total Benefit</span>
                <span className="text-2xl font-bold text-gold tracking-tight">
                  180,000<span className="text-sm text-stone-400 font-normal ml-0.5">원</span>
                </span>
              </div>
            </div>
          </div>

          {/* Benefit 2: Gift */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-7 rounded-3xl hover:bg-white/10 transition duration-300 group relative flex flex-col h-full hover:border-classicGold/30">
            <div className="absolute top-6 right-6 text-2xl text-stone-700 group-hover:text-gold transition">
              <i className="fas fa-gift"></i>
            </div>
            <div className="mb-4">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest border border-stone-600 rounded px-2 py-0.5">
                Gift
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 break-keep">
              신년 건강<br />기프트 제공 🎁
            </h3>
            <ul className="text-stone-400 text-sm font-light space-y-2 mb-6 flex-grow">
              <li className="flex items-start">
                <i className="fas fa-check text-classicGold mt-1 mr-2 text-xs"></i>
                <span>
                  액티브 스트레칭 체험권 <strong className="text-white">3회 무료 증정</strong>
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-classicGold mt-1 mr-2 text-xs"></i>
                <span>가족·지인 중 1인 양도 가능</span>
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
              <span className="text-stone-500 text-xs">10만원 상당</span>
              <span className="text-gold font-bold">Free Voucher</span>
            </div>
          </div>

          {/* Benefit 3: Add-on */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 p-7 rounded-3xl hover:bg-white/10 transition duration-300 group relative flex flex-col h-full hover:border-classicGold/30">
            <div className="absolute top-6 right-6 text-2xl text-stone-700 group-hover:text-gold transition">
              <i className="fas fa-plus-circle"></i>
            </div>
            <div className="mb-4">
              <span className="text-xs font-bold text-stone-400 uppercase tracking-widest border border-stone-600 rounded px-2 py-0.5">
                Bonus
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 break-keep">
              스트레칭 Add-on 구매 시<br />추가 제공
            </h3>
            <ul className="text-stone-400 text-sm font-light space-y-2 mb-6 flex-grow">
              <li className="flex items-start">
                <i className="fas fa-check text-classicGold mt-1 mr-2 text-xs"></i>
                <span>N개월 스트레칭 add on</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-check text-classicGold mt-1 mr-2 text-xs"></i>
                <span>
                  기본 횟수 외 <strong className="text-white">+2회 추가 (평생유효)</strong>
                </span>
              </li>
            </ul>
            <div className="mt-auto pt-4 border-t border-white/5 flex justify-between items-center">
              <span className="text-stone-500 text-xs">유효기간 없음</span>
              <span className="text-gold font-bold">+ 2 Classes</span>
            </div>
          </div>

          {/* Benefit 4: Special Class */}
          <div className="bg-gradient-to-br from-royalPurple/20 to-stone-900 border border-royalPurple/30 p-7 rounded-3xl hover:border-royalPurple/60 transition duration-300 group relative flex flex-col h-full hover:bg-royalPurple/10">
            <div className="absolute top-0 right-0 bg-royalPurple text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg z-20">
              COMMUNITY
            </div>
            <div className="absolute top-6 right-6 text-2xl text-royalPurple/50 group-hover:text-white transition">
              <i className="fas fa-ticket-alt"></i>
            </div>
            <div className="mb-4">
              <span className="text-xs font-bold text-royalPurple/70 uppercase tracking-widest border border-royalPurple/30 rounded px-2 py-0.5">
                Event
              </span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3 break-keep">
              월간 모플<br />스페셜 클래스
            </h3>
            <p className="text-stone-300 text-sm mb-4 flex-grow">
              5만원 상당의 프리미엄 커뮤니티 클래스 무료 초대
            </p>
            <div className="mt-auto space-y-4 pt-4 border-t border-white/5">
              <div className="flex flex-wrap gap-2">
                <span className="bg-black/30 text-stone-300 text-[10px] px-2 py-1 rounded">🏄‍♀️ 서핑</span>
                <span className="bg-black/30 text-stone-300 text-[10px] px-2 py-1 rounded">🕯️ 캔들</span>
                <span className="bg-black/30 text-stone-300 text-[10px] px-2 py-1 rounded">
                  🧗‍♀️ 클라이밍
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-stone-500 text-xs">월 1회</span>
                <span className="text-gold font-bold">Free Access</span>
              </div>
            </div>
          </div>
        </div>

        {/* Price Breakdown Simulation */}
        <div className="bg-white/5 border border-white/10 rounded-[2.5rem] p-8 md:p-12 max-w-6xl mx-auto backdrop-blur-sm mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
              "그래서, 최종 얼마인가요?"
            </h3>
            <p className="text-stone-400 text-sm">
              오직 오픈 멤버에게만 적용되는 3개월 등록 기준 실제 결제 예시표
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Receipt 1: Stretching */}
          <div className="bg-white text-stone-800 rounded-2xl shadow-2xl overflow-hidden relative transform hover:-translate-y-2 transition duration-300 group">
            <div className="h-2 bg-royalPurple"></div>
            <div className="p-6">
              <div className="text-center border-b-2 border-dashed border-stone-200 pb-4 mb-4">
                  <h4 className="font-black text-xl text-stone-900 tracking-tight">액티브 스트레칭</h4>
                <span className="text-[10px] font-bold tracking-widest bg-stone-100 text-stone-500 px-2 py-1 rounded mt-1 inline-block uppercase">
                  3 Months Plan
                </span>
              </div>
              <div className="space-y-3 text-sm mb-6 font-medium">
                <div className="flex justify-between text-stone-400">
                  <span>정상가</span>
                  <span className="line-through decoration-stone-300">720,000원</span>
                </div>
                <div className="flex justify-between text-stone-800">
                  <span>멤버십 할인가 (12%)</span>
                  <span>633,600원</span>
                </div>
                <div className="flex justify-between text-brandRed bg-brandRed/5 px-2 py-1 rounded -mx-2">
                  <span>🔥 오픈 프로모션</span>
                  <span>- 50,000원</span>
                </div>
                <div className="flex justify-between text-royalPurple bg-royalPurple/5 px-2 py-1 rounded -mx-2">
                  <span>💰 체험 페이백</span>
                  <span>- 29,700원</span>
                </div>
              </div>
              <div className="border-t-2 border-stone-900 pt-4 mt-2">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-stone-900 text-lg">최종 결제액</span>
                  <div className="text-right">
                    <span className="block text-3xl font-black text-royalPurple tracking-tighter">
                      553,900<span className="text-base font-bold text-stone-800 ml-1">원</span>
                    </span>
                  </div>
                </div>
                <p className="text-right text-sm text-stone-400 mt-2">
                  월 18만원대 (정상가 대비 -16.6만원)
                </p>
              </div>
            </div>
            <div className="bg-stone-50 p-3 text-center border-t border-stone-100">
              <span className="text-[10px] text-stone-400">VAT 포함 | 무이자 할부 지원</span>
            </div>
          </div>

          {/* Receipt 2: Dance */}
          <div className="bg-white text-stone-800 rounded-2xl shadow-2xl overflow-hidden relative transform hover:-translate-y-2 transition duration-300 group">
            <div className="h-2 bg-mutedSage"></div>
            <div className="p-6">
              <div className="text-center border-b-2 border-dashed border-stone-200 pb-4 mb-4">
                <h4 className="font-black text-xl text-stone-900 tracking-tight">취미 현대무용</h4>
                <span className="text-[10px] font-bold tracking-widest bg-stone-100 text-stone-500 px-2 py-1 rounded mt-1 inline-block uppercase">
                  3 Months Plan
                </span>
              </div>
              <div className="space-y-3 text-sm mb-6 font-medium">
                <div className="flex justify-between text-stone-400">
                  <span>정상가</span>
                  <span className="line-through decoration-stone-300">480,000원</span>
                </div>
                <div className="flex justify-between text-stone-800">
                  <span>멤버십 할인가 (12%)</span>
                  <span>422,400원</span>
                </div>
                <div className="flex justify-between text-brandRed bg-brandRed/5 px-2 py-1 rounded -mx-2">
                  <span>🔥 오픈 프로모션</span>
                  <span>- 50,000원</span>
                </div>
                <div className="flex justify-between text-mutedSage bg-mutedSage/10 px-2 py-1 rounded -mx-2">
                  <span>💰 체험 페이백</span>
                  <span>- 19,900원</span>
                </div>
              </div>
              <div className="border-t-2 border-stone-900 pt-4 mt-2">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-stone-900 text-lg">최종 결제액</span>
                  <div className="text-right">
                    <span className="block text-3xl font-black text-mutedSage tracking-tighter">
                      352,500<span className="text-base font-bold text-stone-800 ml-1">원</span>
                    </span>
                  </div>
                </div>
                <p className="text-right text-sm text-stone-400 mt-2">
                  월 11만원대 (정상가 대비 -12.7만원)
                </p>
              </div>
            </div>
            <div className="bg-stone-50 p-3 text-center border-t border-stone-100">
              <span className="text-[10px] text-stone-400">VAT 포함 | 무이자 할부 지원</span>
            </div>
          </div>

          {/* Receipt 3: Synergy */}
          <div className="bg-white text-stone-800 rounded-2xl shadow-2xl overflow-hidden relative transform md:scale-105 z-10 border-4 border-classicGold/30">
            <div className="absolute top-0 right-0 bg-brandRed text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg shadow-sm">
              추천
            </div>
            <div className="h-2 bg-gradient-to-r from-royalPurple to-mutedSage"></div>
            <div className="p-6">
              <div className="text-center border-b-2 border-dashed border-stone-200 pb-4 mb-4">
                <h4 className="font-black text-lg text-stone-900 tracking-tight">
                  현대무용 + 스트레칭 Add on
                </h4>
                <span className="text-[10px] font-bold tracking-widest bg-stone-900 text-white px-2 py-1 rounded mt-1 inline-block uppercase">
                  3 Months Perfect
                </span>
              </div>
              <div className="space-y-3 text-sm mb-6 font-medium">
                <div className="flex justify-between text-stone-400">
                  <span>총 정상가</span>
                  <span className="line-through decoration-stone-300">1,020,000원</span>
                </div>
                <div className="flex justify-between text-stone-800">
                  <span>결합 할인가</span>
                  <span>818,400원</span>
                </div>
                <div className="flex justify-between text-brandRed bg-brandRed/5 px-2 py-1 rounded -mx-2">
                  <span>🔥 오픈 프로모션</span>
                  <span>- 50,000원</span>
                </div>
                <div className="flex justify-between text-stone-600 bg-stone-100 px-2 py-1 rounded -mx-2">
                  <span>💰 통합 체험 페이백</span>
                    <span>- 44,900원</span>
                </div>
              </div>
              <div className="border-t-2 border-stone-900 pt-4 mt-2">
                <div className="flex justify-between items-end">
                  <span className="font-bold text-stone-900 text-lg">최종 결제액</span>
                  <div className="text-right">
                      <span className="block text-4xl font-black text-classicGold tracking-tighter">
                        723,500<span className="text-base font-bold text-stone-800 ml-1">원</span>
                    </span>
                    </div>
                  </div>
                  <p className="text-right text-sm text-royalPurple font-bold mt-2">
                    월 24만원대 (정상가 대비 -30만원)
                  </p>
                </div>
              </div>
              <div className="bg-stone-900 p-3 text-center border-t border-stone-800">
                <span className="text-[10px] text-stone-400">VAT 포함 | 선착순 마감 주의</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-stone-600 text-xs font-light tracking-wide">
            * 위 혜택은 신규 오픈 기간 내 등록 시에만 적용되며, 조기 소진 시 예고 없이 종료될 수
            있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
