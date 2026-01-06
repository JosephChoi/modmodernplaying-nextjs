function doGet() {
  return HtmlService.createHtmlOutput(
    "<h1>모던플레잉 상담신청 시스템</h1>" +
    "<p>이 API는 POST 요청을 통해 상담신청 데이터를 수신합니다.</p>"
  );
}

function doPost(e) {
  try {
    let data;
    
    // JSON 본문에서 데이터 파싱
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseError) {
        // JSON 파싱 실패 시 문자열로 처리
        data = JSON.parse(decodeURIComponent(e.postData.contents));
      }
    } else if (e.parameter && e.parameter.data) {
      // URL 파라미터로 전달된 경우
      data = JSON.parse(e.parameter.data);
    } else if (e.parameter) {
      // 직접 파라미터로 전달된 경우
      data = e.parameter;
    } else {
      throw new Error('데이터를 받을 수 없습니다.');
    }

    // 스프레드시트 ID
    const spreadsheetId = "1ccQE2550RIteoGwdTEcxxHw0-NUNpt9BIayu4g0dKjQ";
    const spreadsheet = SpreadsheetApp.openById(spreadsheetId);
    const sheet = spreadsheet.getSheetByName("상담신청") || spreadsheet.getSheets()[0];

    // 헤더가 없으면 추가
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "상담신청 일시",
        "이름",
        "연락처",
        "이메일",
        "관심 프로그램",
        "문의 내용",
        "개인정보 동의"
      ]);
    }

    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.name,
      data.phone,
      data.email || '',
      data.program,
      data.message || '',
      data.privacyAgreed ? '동의' : '미동의'
    ];

    sheet.appendRow(rowData);

    // 이메일 발송
    sendCustomerEmail(data);
    sendAdminEmail(data);

    return ContentService.createTextOutput(
      JSON.stringify({ success: true, message: "상담신청이 접수되었습니다." })
    ).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("오류 발생: " + error.toString());

    return ContentService.createTextOutput(
      JSON.stringify({ success: false, error: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function sendCustomerEmail(data) {
  if (data.email) {
    const subject = "[모던플레잉 마포점] 상담신청이 접수되었습니다";
    const htmlBody = `
      <div style="font-family: 'Pretendard', -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: white; border-radius: 12px; padding: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <h2 style="color: #5A3DAA; margin-top: 0; font-size: 24px; font-weight: 700;">상담신청이 접수되었습니다</h2>

          <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
            <strong>${data.name}</strong>님, 상담신청해주셔서 감사합니다.
          </p>

          <div style="background-color: #F5F3FF; padding: 20px; border-radius: 8px; border-left: 4px solid #5A3DAA; margin-bottom: 30px;">
            <h3 style="color: #5A3DAA; margin-top: 0; margin-bottom: 15px; font-size: 18px;">신청 내역</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 14px; width: 120px;">관심 프로그램</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; font-weight: 500; font-size: 14px;">${data.program}</td>
              </tr>
              ${data.message ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 14px;">문의 내용</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; font-size: 14px; white-space: pre-wrap;">${data.message}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 10px 0; color: #6B7280; font-size: 14px;">신청 일시</td>
                <td style="padding: 10px 0; font-size: 14px;">${new Date().toLocaleString('ko-KR')}</td>
              </tr>
            </table>
          </div>

          <div style="background-color: #FFF9E6; padding: 15px; border-radius: 8px; border-left: 4px solid #C5A059; margin-bottom: 20px;">
            <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">
              <strong>담당 매니저가 30분 내로 연락드리겠습니다.</strong><br />
              추가 문의사항이 있으시면 언제든지 연락주세요.
            </p>
          </div>

          <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
            <p style="color: #6B7280; font-size: 12px; margin: 0;">
              모던플레잉 마포점<br />
              서울시 마포구 삼개로 27, 4층(도화동, LK 빌딩)
            </p>
          </div>
        </div>
      </div>
    `;

    GmailApp.sendEmail(
      data.email,
      subject,
      "상담신청해주셔서 감사합니다.",
      {
        htmlBody: htmlBody,
        name: "모던플레잉 마포점"
      }
    );
  }
}

function sendAdminEmail(data) {
  // 관리자 이메일 목록
  const adminEmails = [
    "sixman.joseph@gmail.com",
    "minju4444@gmail.com",
    "hazzong88@gmail.com"
  ];
  
  const subject = "[모던플레잉] 새로운 상담신청이 접수되었습니다";

  const htmlBody = `
    <div style="font-family: 'Pretendard', -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
      <div style="background: white; border-radius: 12px; padding: 30px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
        <h2 style="color: #E11D48; margin-top: 0; font-size: 24px; font-weight: 700;">새로운 상담신청 접수</h2>

        <p style="color: #333; font-size: 16px; margin-bottom: 20px;">
          <strong>${data.name}</strong>님으로부터 새로운 상담신청이 접수되었습니다.
        </p>

        <div style="background-color: #F5F3FF; padding: 20px; border-radius: 8px; border-left: 4px solid #5A3DAA; margin-bottom: 30px;">
          <h3 style="color: #5A3DAA; margin-top: 0; margin-bottom: 15px; font-size: 18px;">상담신청 상세 정보</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 14px; width: 120px;">이름</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; font-weight: 500; font-size: 14px;">${data.name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 14px;">연락처</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; font-weight: 500; font-size: 14px;">
                <a href="tel:${data.phone}" style="color: #5A3DAA; text-decoration: none;">${data.phone}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 14px;">이메일</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; font-weight: 500; font-size: 14px;">
                <a href="mailto:${data.email}" style="color: #5A3DAA; text-decoration: none;">${data.email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 14px;">관심 프로그램</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; font-weight: 500; font-size: 14px;">${data.program}</td>
            </tr>
            ${data.message ? `
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; color: #6B7280; font-size: 14px;">문의 내용</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #E5E7EB; font-size: 14px; white-space: pre-wrap;">${data.message}</td>
            </tr>
            ` : ''}
            <tr>
              <td style="padding: 10px 0; color: #6B7280; font-size: 14px;">신청 일시</td>
              <td style="padding: 10px 0; font-size: 14px;">${new Date().toLocaleString('ko-KR')}</td>
            </tr>
          </table>
        </div>

        <div style="text-align: center; margin-top: 30px;">
          <a href="https://docs.google.com/spreadsheets/d/1ccQE2550RIteoGwdTEcxxHw0-NUNpt9BIayu4g0dKjQ/edit"
             style="display: inline-block; padding: 12px 24px; background: linear-gradient(135deg, #5A3DAA 0%, #E11D48 100%); color: white; text-decoration: none; border-radius: 8px; font-weight: 600;">
            스프레드시트에서 확인하기
          </a>
        </div>
      </div>
    </div>
  `;

  // 모든 관리자에게 이메일 발송
  adminEmails.forEach(function(email) {
    try {
      GmailApp.sendEmail(
        email,
        subject,
        "새로운 상담신청이 접수되었습니다.",
        {
          htmlBody: htmlBody,
          name: "모던플레잉 상담신청 시스템"
        }
      );
    } catch (error) {
      Logger.log("이메일 발송 실패 (" + email + "): " + error.toString());
    }
  });
}

