# Google Sheets 및 Apps Script 설정 가이드

모던플레잉 상담신청 폼을 위한 Google Sheets와 Google Apps Script 설정 방법입니다.

## 📋 목차

1. [Google 스프레드시트 생성](#1단계-google-스프레드시트-생성)
2. [Google Apps Script 프로젝트 생성](#2단계-google-apps-script-프로젝트-생성)
3. [Apps Script 배포 (웹 앱)](#3단계-apps-script-배포-웹-앱)
4. [환경 변수 설정](#4단계-환경-변수-설정)
5. [테스트](#5단계-테스트)
6. [배포 환경 설정](#6단계-배포-환경-설정-vercel-등)
7. [문제 해결](#문제-해결)

---

## 1단계: Google 스프레드시트 생성

### 1.1 스프레드시트 생성

1. **Google Drive 접속**
   - https://drive.google.com 접속
   - **새로 만들기** > **Google 스프레드시트** 클릭

2. **스프레드시트 설정**
   - 파일 이름: `모던플레잉 상담신청` (원하는 이름으로 변경 가능)
   - 첫 번째 시트 이름: `상담신청` (Apps Script에서 이 이름을 사용합니다)

3. **스프레드시트 ID 확인**
   - URL에서 ID 복사
   - 예: `https://docs.google.com/spreadsheets/d/1ABC123xyz.../edit`
   - `1ABC123xyz...` 부분이 **스프레드시트 ID**입니다
   - 이 ID를 복사해두세요 (다음 단계에서 사용합니다)

---

## 2단계: Google Apps Script 프로젝트 생성

### 2.1 Apps Script 편집기 열기

1. **스프레드시트에서 Apps Script 열기**
   - 스프레드시트 상단 메뉴에서 **확장 프로그램** > **Apps Script** 클릭
   - 새 탭에서 Apps Script 편집기가 열립니다

2. **기본 코드 삭제**
   - 기본 `myFunction` 코드를 모두 삭제합니다

### 2.2 코드 붙여넣기

1. **프로젝트 코드 복사**
   - 프로젝트의 `google-apps-script/consultation-handler.gs` 파일 내용을 복사합니다
   - Apps Script 편집기에 붙여넣습니다

2. **스프레드시트 ID 설정**
   - 20번째 줄의 `YOUR_SPREADSHEET_ID`를 실제 스프레드시트 ID로 변경합니다
   ```javascript
   const spreadsheetId = "여기에_실제_스프레드시트_ID_입력";
   ```

3. **관리자 이메일 설정**
   - 129번째 줄의 `admin@modernplaying.com`을 실제 관리자 이메일로 변경합니다
   ```javascript
   const adminEmail = "실제_관리자_이메일@example.com";
   ```

4. **스프레드시트 링크 업데이트 (선택사항)**
   - 178번째 줄의 `YOUR_SPREADSHEET_ID`를 실제 스프레드시트 ID로 변경합니다
   - 관리자 이메일의 링크가 올바르게 작동하도록 합니다

---

## 3단계: Apps Script 배포 (웹 앱)

### 3.1 배포 준비

1. **코드 저장**
   - 저장 버튼 클릭 (Ctrl+S 또는 Cmd+S)
   - 프로젝트 이름 저장 (예: "모던플레잉 상담신청 API")

### 3.2 웹 앱으로 배포

1. **배포 메뉴 열기**
   - 우측 상단 **배포** > **새 배포** 클릭

2. **배포 설정**
   - **유형**: 웹 앱 선택
   - **설명**: "상담신청 API v1" (선택사항)
   - **실행 대상**: 나
   - **액세스 권한**: **모든 사용자** (중요!)

3. **배포 실행**
   - **배포** 버튼 클릭

### 3.3 권한 승인

1. **권한 확인 화면**
   - "권한 확인" 화면이 나타납니다
   - **허용** 클릭

2. **Google 계정 선택**
   - Google 계정 선택 화면에서 계정 선택

3. **고급 설정 (필요시)**
   - "고급" > "안전하지 않은 페이지로 이동" 클릭 (표시되는 경우)
   - **허용** 클릭

### 3.4 웹 앱 URL 복사

1. **배포 완료**
   - 배포 완료 후 **웹 앱 URL**이 표시됩니다
   - 예: `https://script.google.com/macros/s/AKfycby.../exec`

2. **URL 복사**
   - 이 URL을 복사해두세요 (다음 단계에서 사용합니다)

---

## 4단계: 환경 변수 설정

### 4.1 .env.local 파일 생성

1. **프로젝트 루트에 파일 생성**
   - 프로젝트 루트 디렉토리에 `.env.local` 파일을 생성합니다

2. **환경 변수 추가**
   ```env
   NEXT_PUBLIC_APPS_SCRIPT_URL=https://script.google.com/macros/s/AKfycby.../exec
   ADMIN_EMAIL=admin@modernplaying.com
   ```
   - `NEXT_PUBLIC_APPS_SCRIPT_URL`: 3단계에서 복사한 웹 앱 URL
   - `ADMIN_EMAIL`: 관리자 이메일 (Apps Script에도 동일하게 설정)

### 4.2 개발 서버 재시작

```bash
npm run dev
```

- 환경 변수 변경 후에는 개발 서버를 재시작해야 합니다

---

## 5단계: 테스트

### 5.1 폼 제출 테스트

1. **사이트에서 테스트**
   - 개발 서버가 실행 중인 상태에서 사이트 접속
   - 상담 폼 작성 및 제출
   - 모든 필드 입력 (이름, 연락처, 이메일, 프로그램)

2. **확인 사항**
   - ✅ 스프레드시트에 데이터가 추가되는지 확인
   - ✅ 신청자 이메일로 확인 메일이 오는지 확인
   - ✅ 관리자 이메일로 알림 메일이 오는지 확인

### 5.2 오류 발생 시

1. **Apps Script 로그 확인**
   - Apps Script 편집기에서 **실행** > `doPost` 선택 후 테스트
   - **보기** > **로그**에서 오류 메시지 확인

2. **일반적인 오류**
   - 스프레드시트 ID가 잘못되었을 때
   - 권한이 없을 때
   - 이메일 발송 권한이 없을 때

---

## 6단계: 배포 환경 설정 (Vercel 등)

### 6.1 Vercel 프로젝트 설정

1. **환경 변수 설정**
   - Vercel 대시보드에서 프로젝트 선택
   - **Settings** > **Environment Variables** 클릭

2. **환경 변수 추가**
   - `NEXT_PUBLIC_APPS_SCRIPT_URL`: 웹 앱 URL
   - `ADMIN_EMAIL`: 관리자 이메일 (선택사항)

3. **재배포**
   - 환경 변수 추가 후 자동으로 재배포되거나
   - 수동으로 **Deployments** 탭에서 재배포

### 6.2 기타 배포 플랫폼

다른 플랫폼을 사용하는 경우에도 동일하게 환경 변수를 설정하세요:

- **Netlify**: Site settings > Environment variables
- **AWS Amplify**: App settings > Environment variables
- **Railway**: Project settings > Variables

---

## 문제 해결

### 데이터가 저장되지 않을 때

1. **스프레드시트 ID 확인**
   - Apps Script의 `spreadsheetId` 변수가 올바른지 확인
   - 스프레드시트 URL에서 ID 추출 확인

2. **Apps Script 권한 확인**
   - Apps Script를 실행하는 계정이 스프레드시트 편집 권한을 가지고 있는지 확인
   - 스프레드시트 공유 설정 확인

3. **실행 로그 확인**
   - Apps Script 편집기에서 **보기** > **로그** 확인
   - 오류 메시지 확인

### 이메일이 발송되지 않을 때

1. **Gmail API 권한 확인**
   - Apps Script 첫 실행 시 Gmail API 권한을 승인했는지 확인
   - **확장 프로그램** > **Apps Script** > **권한** 확인

2. **이메일 주소 확인**
   - 관리자 이메일 주소가 올바른지 확인
   - 신청자 이메일 주소가 올바른지 확인

3. **스팸함 확인**
   - 이메일이 스팸함에 들어갔는지 확인

### CORS 오류 발생 시

1. **웹 앱 배포 설정 확인**
   - 배포 설정에서 **액세스 권한: 모든 사용자**로 설정되어 있는지 확인
   - 새 버전으로 재배포

2. **URL 확인**
   - 웹 앱 URL이 올바른지 확인
   - URL 끝에 `/exec`가 포함되어 있는지 확인

---

## 중요 참고사항

### 1. 스프레드시트 권한

- Apps Script를 실행하는 계정이 스프레드시트 **편집 권한**을 가져야 합니다
- 스프레드시트를 공유할 때 편집 권한을 부여하세요

### 2. Gmail API 권한

- 이메일 발송을 위해 Gmail API 권한이 필요합니다
- 첫 실행 시 권한 승인 화면이 나타납니다
- **허용**을 클릭해야 이메일 발송이 가능합니다

### 3. 웹 앱 URL 보안

- 웹 앱 URL은 공개되어도 됩니다 (누구나 접근 가능)
- 하지만 스프레드시트 ID는 URL에 직접 노출되지 않도록 주의하세요

### 4. 스크립트 수정 시

- 코드를 수정한 후에는 **다시 배포**해야 변경사항이 반영됩니다
- 새 버전으로 배포하거나 기존 배포를 업데이트하세요

### 5. 데이터 형식

스프레드시트에 저장되는 데이터 형식:

| 컬럼 | 설명 |
|------|------|
| 상담신청 일시 | 자동으로 타임스탬프 저장 |
| 이름 | 사용자 입력 |
| 연락처 | 사용자 입력 |
| 이메일 | 사용자 입력 |
| 관심 프로그램 | 선택된 프로그램 |
| 문의 내용 | 사용자 입력 (선택사항) |
| 개인정보 동의 | 동의/미동의 |

---

## 추가 리소스

- [Google Apps Script 문서](https://developers.google.com/apps-script)
- [Google Sheets API 문서](https://developers.google.com/sheets/api)
- [Gmail API 문서](https://developers.google.com/gmail/api)

---

## 지원

문제가 발생하거나 도움이 필요한 경우:

1. Apps Script 실행 로그 확인
2. 브라우저 개발자 도구 콘솔 확인
3. 스프레드시트 권한 확인
4. 이메일 발송 권한 확인

---

**마지막 업데이트**: 2025년 1월

