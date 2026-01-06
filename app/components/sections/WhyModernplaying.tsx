'use client';

export default function WhyModernplaying() {
  const features = [
    {
      icon: 'fas fa-crown',
      text: '액티브 스트레칭 창시',
    },
    {
      icon: 'fas fa-map-marker-alt',
      text: '홍대 1호점 성공 신화',
    },
    {
      icon: 'fas fa-university',
      text: '서울대 디자인 대학<br>교양수업 강사',
    },
    {
      icon: 'fas fa-building',
      text: '대기업/공공기관 출강',
    },
    {
      icon: 'fas fa-dumbbell',
      text: '버핏그라운드 8개 지점<br>스트레칭 클래스 운영 이력',
    },
    {
      icon: 'fas fa-paint-brush',
      text: '거리예술 디렉팅',
    },
  ];

  const galleryImages = [
    {
      src: '/images/gallery-1.jpg',
      alt: 'Active Stretching Class',
    },
    {
      src: '/images/gallery-2.jpg',
      alt: 'Corporate Lecture',
    },
    {
      src: '/images/gallery-3.jpg',
      alt: 'Team Workshop',
    },
    {
      src: '/images/gallery-4.jpg',
      alt: 'Outdoor Event',
    },
    {
      src: '/images/gallery-5.jpg',
      alt: 'University Lecture',
    },
  ];

  return (
    <section className="py-24 bg-warmStone">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h3 className="text-3xl font-bold mb-12 text-stone-900">Why Modernplaying</h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white py-8 px-4 rounded-3xl flex flex-col items-center justify-center border-2 border-royalPurple/20 shadow-md hover:border-royalPurple hover:shadow-xl transition duration-300 group"
            >
              <i className={`${feature.icon} text-royalPurple text-3xl mb-4 group-hover:scale-110 transition`}></i>
              <span
                className="font-extrabold text-stone-800 text-center leading-snug"
                dangerouslySetInnerHTML={{ __html: feature.text }}
              />
            </div>
          ))}
        </div>

        {/* Sliding Gallery */}
        <div className="relative group">
          <div 
            className="flex overflow-x-auto gap-4 pb-6 snap-x snap-mandatory scroll-smooth gallery-scroll"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
              touchAction: 'pan-x',
              cursor: 'grab'
            } as React.CSSProperties}
            onMouseDown={(e) => {
              const element = e.currentTarget;
              element.style.cursor = 'grabbing';
              let startX = e.pageX - element.offsetLeft;
              let scrollLeft = element.scrollLeft;

              const handleMouseMove = (e: MouseEvent) => {
                e.preventDefault();
                const x = e.pageX - element.offsetLeft;
                const walk = (x - startX) * 2;
                element.scrollLeft = scrollLeft - walk;
              };

              const handleMouseUp = () => {
                element.style.cursor = 'grab';
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };

              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="snap-center shrink-0 w-[280px] md:w-[360px] h-[200px] rounded-2xl overflow-hidden shadow-md relative border border-stone-100 select-none"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500 pointer-events-none"
                  draggable={false}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-stone-400 mt-2">
            <i className="fas fa-arrows-alt-h mr-1 animate-pulse"></i> 옆으로 넘겨서 현장을 확인하세요
          </p>
        </div>
      </div>
    </section>
  );
}

