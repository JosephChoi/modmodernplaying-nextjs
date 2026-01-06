export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <div className="text-2xl font-bold text-white mb-2">MODERN PLAYING</div>
            <p className="text-sm text-stone-400">
              서울시 마포구 삼개로 27, 4층(도화동, LK 빌딩)
            </p>
            <div className="mt-2 text-sm font-light space-x-4">
              <span>대표: 김민주</span>
              <span>사업자등록번호: 351-34-01620</span>
            </div>
            <p className="text-sm mt-4 text-stone-600">
              Copyright © MODERN PLAYING. All Rights Reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/modern_playing_/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:bg-royalPurple transition duration-300"
              aria-label="인스타그램"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/@modern_playing_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:bg-red-600 transition duration-300"
              aria-label="유튜브"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              href="https://pf.kakao.com/_xjrQyn/chat"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-stone-400 hover:text-white hover:bg-yellow-400 transition duration-300"
              aria-label="카카오톡"
            >
              <i className="fab fa-kakao"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

