import Image from 'next/image';

export default function Testimonials() {
  const testimonials = [
    {
      tag: '#올인원운동',
      tagColor: 'royalPurple',
      text: '"헬스, 요가는 재미없어서 그만뒀는데 여긴 신세계예요! **코어+스트레칭+유산소를 한 번에 해결**할 수 있어서 꾸준히 하고 있어요. 운동 제대로 하면서 무용까지 배우는 곳은 여기뿐일 듯!"',
      author: '수강생 김**님',
      avatar: 'Felix',
    },
    {
      tag: '#직장인힐링',
      tagColor: 'mutedSage',
      text: '"퇴근 후 유일하게 마음을 내려놓고 몰입하는 시간입니다. 감정, 움직임, 리듬에 집중하다 보면 스트레스가 사라져요. 나에게 온전히 집중하는 힐링 타임!"',
      author: '직장인 이**님',
      avatar: 'Annie',
    },
    {
      tag: '#러너강추',
      tagColor: 'brandRed',
      text: '"러닝 골반 통증 때문에 왔는데, 이제 **5km 러닝도 통증 없이 거뜬**해요! 골반은 편해지고 발목은 강화됐습니다. 스트레칭은 돈 주고 제대로 배워야 한다는 걸 깨달았어요."',
      author: '러너 박**님',
      avatar: 'Jack',
    },
    {
      tag: '#몸치탈출',
      tagColor: 'stone',
      text: '"지독한 몸치인 제게 활력을 주는 유일무이한 레슨이에요. 경직된 몸과 마음을 릴랙스하게 해줘서 일상에 지친 현대인에게 꼭 필요한 리프레쉬 취미라고 생각합니다."',
      author: '수강생 최**님',
      avatar: 'Sora',
    },
    {
      tag: '#500kcal순삭',
      tagColor: 'royalPurple',
      text: '"재미있게 따라하다 보면 **한 시간에 500kcal 뚝딱**입니다! 매달 다른 작품을 완성하고 영상으로 남기는 뿌듯함이 엄청나요. 열정 넘치는 쌤들 덕분에 오래 다니고 싶어요🩷"',
      author: '장기 수강생 정**님',
      avatar: 'Luna',
    },
    {
      tag: '#운동강도최고',
      tagColor: 'brandRed',
      text: '"요가, 필라테스, PT 다 해봤지만 여기가 운동 효과 최고예요🔥🔥 남자친구도 수업 끝나면 땀 뻘뻘 흘릴 정도입니다. 진짜 해봐야 알아요!"',
      author: '커플 수강생 강**님',
      avatar: 'Milo',
    },
  ];

  const getTagBgColor = (color: string) => {
    switch (color) {
      case 'royalPurple':
        return 'bg-royalPurple/10 text-royalPurple';
      case 'mutedSage':
        return 'bg-mutedSage/10 text-mutedSage';
      case 'brandRed':
        return 'bg-brandRed/10 text-brandRed';
      default:
        return 'bg-stone-100 text-stone-500';
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-royalPurple font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
            Real Stories
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight text-stone-900">
            수강생 리얼 스토리
          </h3>
          <p className="text-stone-500">모던플레잉을 경험한 회원님들의 솔직한 이야기</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-7 rounded-2xl shadow-sm border border-stone-100 hover:shadow-md transition hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex text-classicGold text-xs space-x-0.5">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
                <span
                  className={`text-[10px] ${getTagBgColor(testimonial.tagColor)} px-2 py-1 rounded-full font-bold`}
                >
                  {testimonial.tag}
                </span>
              </div>
              <p
                className="text-stone-700 text-sm leading-relaxed mb-4 break-keep"
                dangerouslySetInnerHTML={{
                  __html: testimonial.text.replace(/\*\*(.*?)\*\*/g, '<strong class="text-royalPurple">$1</strong>'),
                }}
              ></p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-stone-200 overflow-hidden">
                  <Image
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${testimonial.avatar}`}
                    alt={testimonial.author}
                    width={32}
                    height={32}
                    className="w-full h-full"
                  />
                </div>
                <span className="text-stone-400 text-xs tracking-wide">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

