import { ConsultationFormData, ConsultationResponse } from '@/lib/types/consultation';

export async function submitConsultation(
  data: ConsultationFormData
): Promise<ConsultationResponse> {
  const scriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;
  
  if (!scriptUrl) {
    throw new Error('Apps Script URL이 설정되지 않았습니다.');
  }
  
  try {
    // Google Apps Script 웹 앱은 CORS를 지원하지 않으므로
    // URL 파라미터로 데이터 전송 (가장 안정적인 방법)
    const params = new URLSearchParams();
    params.append('data', JSON.stringify(data));
    
    const response = await fetch(`${scriptUrl}?${params.toString()}`, {
      method: 'POST',
      mode: 'no-cors', // CORS 문제 해결 (필수)
    });
    
    // no-cors 모드에서는 응답을 읽을 수 없으므로
    // 항상 성공으로 간주하고, 실제 성공 여부는 이메일/스프레드시트로 확인
    // Google Apps Script가 데이터를 받으면 자동으로 처리됩니다
    return { 
      success: true, 
      message: '상담신청이 접수되었습니다. 확인 메일을 확인해주세요.' 
    };
    
  } catch (error) {
    console.error('Consultation submission error:', error);
    return { 
      success: false, 
      error: '상담신청 처리 중 오류가 발생했습니다.' 
    };
  }
}

