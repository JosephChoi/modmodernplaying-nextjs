'use client';

import ImageGallery from '../ui/ImageGallery';
import MembershipCard from '../ui/MembershipCard';
import Image from 'next/image';

export default function Stretching() {
  return (
    <section id="stretching" className="py-24 bg-lavenderMist scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Image Gallery Side */}
          <ImageGallery
            mainImageId="stretching-main"
            mainImageSrc="/images/stretching-main.jpg"
            mainImageAlt="Active Stretching Main"
            thumbnails={[
              { src: '/images/stretching-1.jpg', alt: 'Stretching 1' },
              { src: '/images/stretching-2.jpg', alt: 'Stretching 2' },
              { src: '/images/stretching-3.jpg', alt: 'Stretching 3' },
            ]}
            badge={{ text: '체지방 급속 연소', icon: 'fire' }}
          />

          {/* Text Side */}
          <div className="flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-royalPurple font-bold text-xl md:text-2xl mb-2 block tracking-tight">
                숨겨진 라인을 깨우는 리듬 웰니스
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight leading-tight">
                액티브 스트레칭
              </h2>
              <div className="w-12 h-1 bg-royalPurple rounded-full"></div>
            </div>

            <div className="mb-6 self-start inline-flex items-center gap-2 bg-brandRed/5 border border-brandRed/20 px-4 py-1.5 rounded-full">
              <i className="fas fa-fire text-brandRed text-sm animate-pulse"></i>
              <span className="text-brandRed font-bold text-sm">시간당 최대 500kcal 소모</span>
            </div>

            <p className="text-lg text-stone-600 leading-relaxed font-normal mb-8 break-keep">
              "스트레칭만으로 운동이 될까?" 고민하지 마세요.<br />
              유산소의 <strong>체지방 연소</strong>, 웨이트의 <strong>근력 강화</strong>, 요가의{' '}
              <strong>라인 정리</strong>를 한 번에 해결합니다. 바쁜 현대인을 위해 설계된 고효율
              루틴으로, 지루할 틈 없이 흐르는 땀과 함께 확실한 변화를 약속합니다.
            </p>

            <div className="bg-white rounded-2xl p-6 mb-8 border border-royalPurple/10 shadow-[0_4px_20px_rgba(90,61,170,0.05)]">
              <h4 className="text-sm font-bold text-royalPurple mb-4 uppercase tracking-wide flex items-center gap-2">
                <i className="fas fa-thumbs-up"></i> 이런 분들이라면 200% 만족해요!
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start text-stone-700">
                  <i className="fas fa-check-circle text-royalPurple/60 mt-1 mr-3 flex-shrink-0"></i>
                  <span className="text-sm font-medium">
                    헬스는 지루하고, 정적인 요가는 안 맞는 분
                  </span>
                </li>
                <li className="flex items-start text-stone-700">
                  <i className="fas fa-check-circle text-royalPurple/60 mt-1 mr-3 flex-shrink-0"></i>
                  <span className="text-sm font-medium">
                    퇴근 후 붓기를 싹 빼고 개운해지고 싶은 직장인
                  </span>
                </li>
                <li className="flex items-start text-stone-700">
                  <i className="fas fa-check-circle text-royalPurple/60 mt-1 mr-3 flex-shrink-0"></i>
                  <span className="text-sm font-medium">
                    거북목·라운드 숄더 교정과 다이어트를 동시에
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-royalPurple/10 flex items-center justify-center text-royalPurple group-hover:bg-royalPurple group-hover:text-white transition-colors">
                  <i className="fas fa-bolt"></i>
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">효율 끝판왕 올인원</h3>
                  <p className="text-xs text-stone-500">유산소 + 근력 + 라인 정리를 한 번에</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-royalPurple/10 flex items-center justify-center text-royalPurple group-hover:bg-royalPurple group-hover:text-white transition-colors">
                  <i className="fas fa-music"></i>
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">음악에 맞춘 리듬감</h3>
                  <p className="text-xs text-stone-500">지루한 반복 NO, 음악과 함께 즐겁게</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Membership Cards */}
        <div id="price" className="pt-10 border-t border-royalPurple/10">
          <h3 className="text-3xl font-bold text-center mb-10 tracking-tight">
            Membership Plans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-8">
            <MembershipCard
              step="Step 1. 경험"
              title="1 Month"
              monthlyPrice="240,000"
              totalPrice="총 결제액 240,000원"
              sessions="총 8회 (회당 30,000원)"
              description="가벼운 시작"
              borderColor="stone-300"
            />
            <MembershipCard
              step="Step 2. 습관"
              title="3 Months"
              monthlyPrice="211,200"
              totalPrice="총 633,600원"
              sessions="총 24회 (회당 26,400원)"
              description="가장 많은 분들이 선택하는 기간"
              discount="12% SAVE"
              isBest={true}
              borderColor="royalPurple"
            />
            <MembershipCard
              step="Step 3. 변화"
              title="6 Months"
              monthlyPrice="196,800"
              totalPrice="총 1,180,800원"
              sessions="총 48회 (회당 24,600원)"
              description="확실한 변화를 위한 기간"
              discount="18% SAVE"
              borderColor="mutedSage"
            />
            <MembershipCard
              step="Step 4. 정체성"
              title="12 Months"
              monthlyPrice="180,000"
              totalPrice="총 1,440,000원"
              sessions="총 96회 (회당 22,500원)"
              description="마스터를 위한 최대 혜택"
              discount="25% SAVE"
              borderColor="stone-800"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

