export default function Philosophy() {
  return (
    <section className="py-28 relative overflow-hidden bg-[#faf9f6]">
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/noise.png')",
        }}
      ></div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <span className="text-classicGold font-bold tracking-widest text-sm uppercase mb-6 block">
            2026 New Year Resolution
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-8 leading-tight tracking-tight">
            "올해는 <span className="text-royalPurple">헬스장 기부천사</span>,<br />
            그만하고 싶지 않으신가요?"
          </h2>
          <div className="w-px h-16 bg-stone-300 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-stone-600 font-light max-w-2xl mx-auto break-keep leading-relaxed">
            숙제 같은 운동은 이제 그만.<br />
            음악에 몸을 맡기는 순간, 운동은{' '}
            <strong className="text-stone-800 font-bold">감각적인 놀이(Play)</strong>가 됩니다.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 md:gap-12">
          {/* Item 1 */}
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgba(90,61,170,0.1)] transition duration-500 border border-stone-100">
              <i className="fas fa-brain text-2xl text-stone-400 group-hover:text-royalPurple transition duration-300"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-stone-800">도파민 힐링</h3>
            <p className="text-stone-500 text-sm leading-relaxed break-keep font-normal px-4">
              좋아하는 음악의 비트에 맞춰 움직일 때,<br />
              뇌에서는 즐거움이 피어납니다.
            </p>
          </div>

          {/* Item 2 */}
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgba(90,61,170,0.1)] transition duration-500 border border-stone-100">
              <i className="fas fa-wind text-2xl text-stone-400 group-hover:text-royalPurple transition duration-300"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-stone-800">스트레스 이완</h3>
            <p className="text-stone-500 text-sm leading-relaxed break-keep font-normal px-4">
              리듬을 타는 동안 경직된 근육은<br />
              깊고 부드럽게 이완됩니다.
            </p>
          </div>

          {/* Item 3 */}
          <div className="text-center group">
            <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center mb-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_30px_rgba(90,61,170,0.1)] transition duration-500 border border-stone-100">
              <i className="fas fa-smile-beam text-2xl text-stone-400 group-hover:text-royalPurple transition duration-300"></i>
            </div>
            <h3 className="text-xl font-bold mb-3 text-stone-800">몰입의 즐거움</h3>
            <p className="text-stone-500 text-sm leading-relaxed break-keep font-normal px-4">
              매일 새로운 선율과 동작으로<br />
              시간 가는 줄 모르게 몰입합니다.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-stone-600 font-light">
            2026년, 당신의 일상에{' '}
            <span className="text-stone-800 border-b border-classicGold/50 font-bold">
              기다려지는 시간
            </span>
            을 선물하세요.
          </p>
        </div>
      </div>
    </section>
  );
}

