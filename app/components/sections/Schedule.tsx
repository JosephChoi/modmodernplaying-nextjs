export default function Schedule() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16 tracking-tight">주간 수업 스케줄</h2>

        {/* Desktop View: Timetable */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-stone-200 shadow-sm">
          <div className="grid grid-cols-[100px_repeat(6,1fr)] divide-x divide-stone-100 bg-white">
            {/* Header Row */}
            <div className="bg-stone-50 p-4 flex items-center justify-center border-b border-stone-200">
              <span className="text-xs font-bold text-stone-400 tracking-widest">TIME</span>
            </div>
            <div className="bg-stone-50 p-4 text-center border-b border-stone-200">
              <span className="font-bold text-stone-800 text-sm tracking-widest">MON</span>
            </div>
            <div className="bg-stone-50 p-4 text-center border-b border-stone-200">
              <span className="font-bold text-stone-800 text-sm tracking-widest">TUE</span>
            </div>
            <div className="bg-stone-50 p-4 text-center border-b border-stone-200">
              <span className="font-bold text-stone-800 text-sm tracking-widest">WED</span>
            </div>
            <div className="bg-stone-50 p-4 text-center border-b border-stone-200">
              <span className="font-bold text-stone-800 text-sm tracking-widest">THU</span>
            </div>
            <div className="bg-stone-50 p-4 text-center border-b border-stone-200">
              <span className="font-bold text-stone-800 text-sm tracking-widest">FRI</span>
            </div>
            <div className="bg-stone-50 p-4 text-center border-b border-stone-200">
              <span className="font-bold text-classicGold text-sm tracking-widest">SAT</span>
            </div>

            {/* Row 07:00 */}
            <div className="bg-white p-4 flex items-center justify-center border-b border-stone-100 text-xs font-medium text-stone-400">
              07:00
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">임유진T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">임유진T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">임유진T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100"></div>

            {/* Row 08:30 */}
            <div className="bg-white p-4 flex items-center justify-center border-b border-stone-100 text-xs font-medium text-stone-400">
              08:30
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">임유진T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">최현진T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">임유진T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">최현진T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">임유진T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100"></div>

            {/* Row 09:30 */}
            <div className="bg-white p-4 flex items-center justify-center border-b border-stone-100 text-xs font-medium text-stone-400">
              09:30
            </div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">최현진T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">최현진T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100"></div>

            {/* Row 10:00 (Sat Only) */}
            <div className="bg-white p-4 flex items-center justify-center border-b border-stone-100 text-xs font-medium text-stone-400">
              10:00
            </div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">임유진T</span>
              </div>
            </div>

            {/* Row 11:00 (Sat Only) */}
            <div className="bg-white p-4 flex items-center justify-center border-b border-stone-100 text-xs font-medium text-stone-400">
              11:00
            </div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">임유진T</span>
              </div>
            </div>

            {/* Row 12:00 */}
            <div className="bg-white p-4 flex items-center justify-center border-b border-stone-100 text-xs font-medium text-stone-400">
              12:00
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">임유진T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-mutedSage/10 text-mutedSage text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                현대무용 🍀<br />
                <span className="text-[10px] font-normal text-stone-500">김민주T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">임유진T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-mutedSage/10 text-mutedSage text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                현대무용 🍀<br />
                <span className="text-[10px] font-normal text-stone-500">김민주T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">임유진T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-mutedSage/10 text-mutedSage text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                현대무용 🍀<br />
                <span className="text-[10px] font-normal text-stone-500">최혜승T</span>
              </div>
            </div>

            {/* Row 14:00 (Sat Only) */}
            <div className="bg-white p-4 flex items-center justify-center border-b border-stone-100 text-xs font-medium text-stone-400">
              14:00
            </div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-brandRed text-white text-xs font-bold py-2 px-3 rounded-lg text-center shadow-md transform hover:scale-105 transition cursor-pointer">
                월간 모플 (Special)
              </div>
            </div>

            {/* Row 18:40 */}
            <div className="bg-white p-4 flex items-center justify-center border-b border-stone-100 text-xs font-medium text-stone-400">
              18:40
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-mutedSage/10 text-mutedSage text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                현대무용 🍀<br />
                <span className="text-[10px] font-normal text-stone-500">김민주T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">최혜승T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-mutedSage/10 text-mutedSage text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                현대무용 🍀<br />
                <span className="text-[10px] font-normal text-stone-500">김민주T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">최혜승T</span>
              </div>
            </div>
            <div className="p-2 border-b border-stone-100"></div>
            <div className="p-2 border-b border-stone-100"></div>

            {/* Row 19:40 */}
            <div className="bg-white p-4 flex items-center justify-center text-xs font-medium text-stone-400">
              19:40
            </div>
            <div className="p-2">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">김민주T</span>
              </div>
            </div>
            <div className="p-2">
              <div className="bg-mutedSage/10 text-mutedSage text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                현대무용 🍀<br />
                <span className="text-[10px] font-normal text-stone-500">최혜승T</span>
              </div>
            </div>
            <div className="p-2">
              <div className="bg-royalPurple/5 text-royalPurple text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                스트레칭 🔥<br />
                <span className="text-[10px] font-normal text-stone-500">김민주T</span>
              </div>
            </div>
            <div className="p-2">
              <div className="bg-mutedSage/10 text-mutedSage text-xs font-bold py-2 px-1 rounded-lg text-center leading-tight">
                현대무용 🍀<br />
                <span className="text-[10px] font-normal text-stone-500">최혜승T</span>
              </div>
            </div>
            <div className="p-2"></div>
            <div className="p-2"></div>
          </div>
        </div>

        {/* Mobile View: Simple List */}
        <div className="lg:hidden space-y-4">
          <div className="bg-stone-50 p-4 rounded-lg">
            <div className="font-bold text-stone-800 mb-2">월요일</div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>07:00</span>
                <span className="text-royalPurple font-bold">스트레칭 🔥 (임유진T)</span>
              </div>
              <div className="flex justify-between">
                <span>08:30</span>
                <span className="text-royalPurple font-bold">스트레칭 🔥 (임유진T)</span>
              </div>
              <div className="flex justify-between">
                <span>12:00</span>
                <span className="text-royalPurple font-bold">스트레칭 🔥 (임유진T)</span>
              </div>
              <div className="flex justify-between">
                <span>18:40</span>
                <span className="text-mutedSage font-bold">현대무용 🍀 (김민주T)</span>
              </div>
              <div className="flex justify-between">
                <span>19:40</span>
                <span className="text-royalPurple font-bold">스트레칭 🔥 (김민주T)</span>
              </div>
            </div>
          </div>
          <div className="text-center text-stone-500 text-sm">
            전체 스케줄은 데스크톱에서 확인하세요
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm">
          <div className="flex items-center gap-2 bg-stone-50 px-3 py-1 rounded-full border border-stone-100">
            <div className="w-2 h-2 rounded-full bg-royalPurple"></div>
            <span className="text-stone-600 font-medium text-xs">액티브 스트레칭 🔥</span>
          </div>
          <div className="flex items-center gap-2 bg-stone-50 px-3 py-1 rounded-full border border-stone-100">
            <div className="w-2 h-2 rounded-full bg-mutedSage"></div>
            <span className="text-stone-600 font-medium text-xs">현대무용 🍀</span>
          </div>
          <div className="flex items-center gap-2 bg-stone-50 px-3 py-1 rounded-full border border-stone-100">
            <div className="w-2 h-2 rounded-full bg-brandRed"></div>
            <span className="text-stone-600 font-medium text-xs">스페셜 클래스</span>
          </div>
        </div>
      </div>
    </section>
  );
}

