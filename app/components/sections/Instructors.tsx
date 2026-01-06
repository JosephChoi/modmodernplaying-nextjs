import Image from 'next/image';

export default function Instructors() {
  const instructors = [
    {
      name: '김민주',
      title: '대표 마스터',
      image: '/images/teacher-kimminju.jpg',
      isRepresentative: true,
      qualifications: [
        '이대 무용과 / 한예종 전문사 졸업',
        '서울대 디자인 대학 교양수업 강사',
        'SK연수원, 서울시체육회 등 출강',
        '버핏그라운드 8개 지점 총괄',
      ],
    },
    {
      name: '임유진',
      title: '마스터',
      image: '/images/teacher-imyujin.jpg',
      qualifications: [
        '모던플레잉 바디번&릴리즈 리드 강사',
        '버핏서울 가산점 스트레칭 강사',
        '문화예술교육사',
      ],
    },
    {
      name: '최혜승',
      title: '마스터',
      image: '/images/teacher-choihyeseung.jpg',
      qualifications: [
        '세종대학교 무용학과 예술대학원 재학',
        '경북대 체육교육학 전공 졸업',
      ],
    },
    {
      name: '최현진',
      title: '마스터',
      image: '/images/teacher-choihyunjin.jpg',
      qualifications: [
        '모던플레잉 바디번&릴리즈 리드 강사',
        '버핏서울 논현 & 판교 스트레칭 강사',
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-royalPurple font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
            Professional Instructors
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-stone-900">
            Meet Our Masters
          </h2>
          <div className="w-12 h-1 bg-royalPurple mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {instructors.map((instructor, index) => (
            <div key={index} className="text-center group">
              <div className="relative w-48 h-48 mx-auto mb-6">
                {instructor.isRepresentative && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-royalPurple to-indigo-400 opacity-20 group-hover:scale-105 transition duration-500"></div>
                )}
                <div className="w-full h-full rounded-full bg-stone-100 overflow-hidden relative border-4 border-white shadow-lg group-hover:border-royalPurple/20 transition duration-300">
                  <Image
                    src={instructor.image}
                    alt={instructor.name}
                    width={192}
                    height={192}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                {instructor.isRepresentative && (
                  <div className="absolute bottom-2 right-2 bg-royalPurple text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-md">
                    대표
                  </div>
                )}
              </div>
              <h3 className="font-bold text-xl mb-1 text-stone-900">
                {instructor.name}{' '}
                <span className="text-sm font-normal text-stone-500">{instructor.title}</span>
              </h3>
              <div className="w-8 h-0.5 bg-stone-200 mx-auto my-4"></div>
              <ul className="text-left text-xs text-stone-600 space-y-2 px-2 break-keep leading-relaxed">
                {instructor.qualifications.map((qual, idx) => (
                  <li key={idx} className="flex items-start">
                    <i className="fas fa-check text-stone-400 mt-0.5 mr-2 flex-shrink-0"></i>
                    {qual}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

