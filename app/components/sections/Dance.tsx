'use client';

import ImageGallery from '../ui/ImageGallery';
import MembershipCard from '../ui/MembershipCard';

export default function Dance() {
  return (
    <section id="dance" className="py-24 bg-warmStone scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          {/* Text Side */}
          <div className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="mb-6">
              <span className="text-mutedSage font-bold text-xl md:text-2xl mb-2 block tracking-tight">
                내 안의 감각이 깨어나는 무브먼트
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4 tracking-tight leading-tight">
                취미 현대무용
              </h2>
              <div className="w-12 h-1 bg-mutedSage rounded-full"></div>
            </div>

            <div className="mb-6 self-start inline-flex items-center gap-2 bg-mutedSage/10 border border-mutedSage/20 px-4 py-1.5 rounded-full">
              <i className="fas fa-video text-mutedSage text-sm animate-pulse"></i>
              <span className="text-mutedSage font-bold text-sm">매월 나만의 '아트 필름' 제작</span>
            </div>

            <p className="text-lg text-stone-600 leading-relaxed font-normal mb-8 break-keep">
              "현대무용은 어렵다"는 편견을 버리세요.<br />
              모던플레잉에서는 춤이 처음인 분들도{' '}
              <strong className="text-stone-800">자신만의 호흡과 감정</strong>을 발견할 수
              있습니다. 말로 표현하기 힘든 감정들을 몸짓으로 털어내고(Detox), 한 달 뒤{' '}
              <strong className="text-stone-800">영화 속 주인공이 된 당신의 모습</strong>을
              고퀄리티 영상으로 소장하세요.
            </p>

            <div className="bg-white rounded-2xl p-6 mb-8 border border-mutedSage/20 shadow-[0_4px_20px_rgba(74,93,78,0.05)]">
              <h4 className="text-sm font-bold text-mutedSage mb-4 uppercase tracking-wide flex items-center gap-2">
                <i className="fas fa-lightbulb"></i> 이런 분들께 새로운 영감이 됩니다!
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start text-stone-700">
                  <i className="fas fa-check-circle text-mutedSage/60 mt-1 mr-3 flex-shrink-0"></i>
                  <span className="text-sm font-medium">
                    반복되는 일상에 지쳐 새로운 취미가 필요한 분
                  </span>
                </li>
                <li className="flex items-start text-stone-700">
                  <i className="fas fa-check-circle text-mutedSage/60 mt-1 mr-3 flex-shrink-0"></i>
                  <span className="text-sm font-medium">
                    나만의 인생 영상(Profile)을 남겨보고 싶으신 분
                  </span>
                </li>
                <li className="flex items-start text-stone-700">
                  <i className="fas fa-check-circle text-mutedSage/60 mt-1 mr-3 flex-shrink-0"></i>
                  <span className="text-sm font-medium">
                    내면의 감정을 몸으로 표현하며 해방감을 느끼고 싶은 분
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-mutedSage/10 flex items-center justify-center text-mutedSage group-hover:bg-mutedSage group-hover:text-white transition-colors">
                  <i className="fas fa-film"></i>
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">Cinematic Art Film</h3>
                  <p className="text-xs text-stone-500">전문 감독 촬영, 나만의 아트 필름 소장</p>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-mutedSage/10 flex items-center justify-center text-mutedSage group-hover:bg-mutedSage group-hover:text-white transition-colors">
                  <i className="fas fa-feather-alt"></i>
                </div>
                <div>
                  <h3 className="font-bold text-stone-800">Emotional Detox</h3>
                  <p className="text-xs text-stone-500">춤을 통한 스트레스 해소와 내면 치유</p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Gallery Side */}
          <div className="order-1 lg:order-2">
            <ImageGallery
              mainImageId="dance-main"
              mainImageSrc="/images/dance-main.jpg"
              mainImageAlt="Contemporary Dance Main"
              thumbnails={[
                { src: '/images/dance-1.jpg', alt: 'Dance 1' },
                { src: '/images/dance-2.jpg', alt: 'Dance 2' },
                { src: '/images/dance-3.jpg', alt: 'Dance 3' },
              ]}
              badge={{ text: '특별한 예술적 경험' }}
            />
          </div>
        </div>

        {/* Dance Membership Cards */}
        <div className="mb-12 pt-10 border-t border-mutedSage/10">
          <h3 className="text-3xl font-bold text-center mb-10 tracking-tight">
            Membership Plans
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch pt-8">
            <MembershipCard
              step="Step 1. 경험"
              title="1 Month"
              monthlyPrice="160,000"
              totalPrice="총 결제액 160,000원"
              sessions="총 4회 (회당 40,000원)"
              description="작품 하나를 온전히 완성"
              borderColor="stone-300"
            />
            <MembershipCard
              step="Step 2. 습관"
              title="3 Months"
              monthlyPrice="140,800"
              totalPrice="총 422,400원"
              sessions="총 12회 (회당 35,200원)"
              description="가장 많은 분들이 선택하는 기간"
              discount="12% SAVE"
              isBest={true}
              borderColor="mutedSage"
            />
            <MembershipCard
              step="Step 3. 변화"
              title="6 Months"
              monthlyPrice="131,200"
              totalPrice="총 787,200원"
              sessions="총 24회 (회당 32,800원)"
              description="확실한 변화를 위한 기간"
              discount="18% SAVE"
              borderColor="mutedSage"
            />
            <MembershipCard
              step="Step 4. 정체성"
              title="12 Months"
              monthlyPrice="120,000"
              totalPrice="총 1,440,000원"
              sessions="총 48회 (회당 30,000원)"
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

