'use client';

export default function KakaoChatButton() {
  const kakaoChatUrl = 'https://pf.kakao.com/_xjrQyn/chat';

  return (
    <a
      href={kakaoChatUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-32 md:bottom-28 right-6 z-50 bg-[#FAE100] text-[#371D1E] w-20 h-20 rounded-full shadow-2xl flex flex-col items-center justify-center gap-0.5 hover:scale-110 transition group hover:shadow-yellow-400/50 border-2 border-white/20"
      aria-label="카카오톡 문의"
    >
      <i className="fas fa-comment text-2xl"></i>
      <span className="text-xs font-bold leading-tight text-center">
        카톡<br />문의
      </span>
    </a>
  );
}

