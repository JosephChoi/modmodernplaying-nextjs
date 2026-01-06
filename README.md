# MODERN PLAYING - Next.js 마이그레이션 프로젝트

현대인의 굳은 몸과 눌린 감정을 놀이처럼 움직이며 풀어내는 공간, 모던플레잉의 공식 웹사이트입니다.

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Google Apps Script + Google Sheets
- **Deployment**: Vercel (권장)

## 프로젝트 구조

```
modernplaying-nextjs/
├── app/
│   ├── components/
│   │   ├── layout/          # Navbar, Footer, KakaoChatButton
│   │   ├── sections/        # Hero, Philosophy, Stretching, Dance, Benefits, Instructors, ContactForm
│   │   ├── forms/           # ConsultationForm
│   │   └── ui/              # ImageGallery, MembershipCard, CountdownTimer, Modal
│   ├── layout.tsx           # 루트 레이아웃
│   ├── page.tsx             # 메인 페이지
│   └── globals.css          # 전역 스타일
├── lib/
│   ├── google/              # Google Apps Script 연동
│   └── types/               # TypeScript 타입 정의
├── public/
│   └── images/              # 이미지 파일들
└── google-apps-script/      # Apps Script 코드 (참고용)
```

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```env
NEXT_PUBLIC_APPS_SCRIPT_URL=your_google_apps_script_url
ADMIN_EMAIL=admin@modernplaying.com
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## Google Apps Script 설정

자세한 설정 가이드는 [`doc/GOOGLE_SHEETS_SETUP.md`](./doc/GOOGLE_SHEETS_SETUP.md)를 참고하세요.

간단 요약:
1. Google Drive에서 새 스프레드시트를 생성합니다.
2. 스프레드시트의 확장 프로그램 > Apps Script를 엽니다.
3. `google-apps-script/consultation-handler.gs` 파일의 내용을 복사하여 붙여넣습니다.
4. 스크립트에서 `YOUR_SPREADSHEET_ID`를 실제 스프레드시트 ID로 변경합니다.
5. `doPost` 함수를 배포합니다 (배포 > 새 배포 > 웹 앱으로 설정).
6. 배포된 웹 앱 URL을 `.env.local`의 `NEXT_PUBLIC_APPS_SCRIPT_URL`에 설정합니다.

## 배포

### Vercel 배포

1. [Vercel](https://vercel.com)에 프로젝트를 연결합니다.
2. 환경 변수를 설정합니다.
3. 배포가 자동으로 진행됩니다.

### 기타 플랫폼

```bash
npm run build
npm start
```

## 주요 기능

- ✅ 반응형 디자인 (모바일, 태블릿, 데스크톱)
- ✅ Google Sheets를 통한 상담 신청 데이터 수집
- ✅ 관리자 및 신청자 이메일 자동 발송
- ✅ 카카오톡 플로팅 버튼 연동
- ✅ 실시간 카운트다운 타이머
- ✅ 이미지 갤러리
- ✅ 멤버십 플랜 표시

## 디자인 보존

원본 사이트의 디자인을 최대한 보존했습니다:

- Tailwind 커스텀 컬러 팔레트
- Pretendard 폰트
- Font Awesome 아이콘
- 모든 이미지 파일
- 애니메이션 및 호버 효과

## 라이선스

Copyright © MODERN PLAYING. All Rights Reserved.
