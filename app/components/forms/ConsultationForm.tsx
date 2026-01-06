'use client';

import { useState, FormEvent } from 'react';
import { submitConsultation } from '@/lib/google/apps-script';
import { ConsultationFormData } from '@/lib/types/consultation';

export default function ConsultationForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    phone: '',
    email: '',
    program: '',
    message: '',
    privacyAgreed: false,
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.privacyAgreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await submitConsultation(formData);

      if (result.success) {
        setIsSubmitted(true);
        // 폼 리셋
        setFormData({
          name: '',
          phone: '',
          email: '',
          program: '',
          message: '',
          privacyAgreed: false,
        });
      } else {
        alert(result.error || '상담신청 중 오류가 발생했습니다.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('상담신청 처리 중 오류가 발생했습니다.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-stone-900 mb-2">신청 완료!</h3>
        <p className="text-stone-600 mb-6">
          오픈 혜택 상담 예약이 접수되었습니다.<br />
          담당 매니저가 30분 내로 연락드립니다.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="w-full bg-royalPurple text-white py-3.5 rounded-lg font-semibold hover:bg-indigo-800 transition"
        >
          확인
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-bold text-stone-700 mb-2">
            이름 <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3.5 rounded-lg border border-stone-200 focus:border-royalPurple focus:ring-1 focus:ring-royalPurple outline-none transition bg-stone-50 placeholder-stone-400"
            placeholder="성함을 입력해주세요"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-bold text-stone-700 mb-2">
            연락처 <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="w-full px-4 py-3.5 rounded-lg border border-stone-200 focus:border-royalPurple focus:ring-1 focus:ring-royalPurple outline-none transition bg-stone-50 placeholder-stone-400"
            placeholder="010-0000-0000"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-stone-700 mb-2">
          이메일 <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-4 py-3.5 rounded-lg border border-stone-200 focus:border-royalPurple focus:ring-1 focus:ring-royalPurple outline-none transition bg-stone-50 placeholder-stone-400"
          placeholder="example@email.com"
          required
        />
        <p className="text-xs text-stone-500 mt-1">
          상담 신청 확인 메일을 받을 이메일 주소를 입력해주세요.
        </p>
      </div>

      <div>
        <label className="block text-sm font-bold text-stone-700 mb-2">
          관심 프로그램 <span className="text-red-500">*</span>
        </label>
        <div className="relative">
          <select
            value={formData.program}
            onChange={(e) => setFormData({ ...formData, program: e.target.value })}
            className="w-full px-4 py-3.5 rounded-lg border border-stone-200 focus:border-royalPurple focus:ring-1 focus:ring-royalPurple outline-none transition bg-stone-50 appearance-none text-stone-700 cursor-pointer"
            required
          >
            <option value="">프로그램을 선택해주세요</option>
            <option value="액티브 스트레칭 체험">액티브 스트레칭 체험</option>
            <option value="현대무용 (작품반) 체험">현대무용 (작품반) 체험</option>
            <option value="1:1 현대무용 PT">1:1 현대무용 PT</option>
            <option value="현대무용 입시">현대무용 입시</option>
            <option value="기타 문의">기타 문의</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-stone-500">
            <i className="fas fa-chevron-down text-xs"></i>
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold text-stone-700 mb-2">문의 내용</label>
        <textarea
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full px-4 py-3.5 rounded-lg border border-stone-200 focus:border-royalPurple focus:ring-1 focus:ring-royalPurple outline-none transition bg-stone-50 h-40 resize-none placeholder-stone-400"
          placeholder="운동 경험, 통증 부위, 수업 가능 시간대 등 궁금하신 점을 자유롭게 적어주세요."
        />
      </div>

      <div className="flex items-start pt-2">
        <div className="flex items-center h-5">
          <input
            id="privacy-agreement"
            type="checkbox"
            checked={formData.privacyAgreed}
            onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
            className="w-5 h-5 text-royalPurple border-stone-300 rounded focus:ring-royalPurple focus:ring-offset-0 cursor-pointer accent-royalPurple"
            required
          />
        </div>
        <label
          htmlFor="privacy-agreement"
          className="ml-3 text-xs text-stone-500 leading-snug cursor-pointer select-none"
        >
          <span className="text-royalPurple font-bold">[필수]</span> 개인정보 수집 및 이용에
          동의합니다.<br />
          수집된 정보는 상담 예약 및 문의 처리를 위해서만 사용되며, 그 외의 목적으로는
          사용되지 않습니다.
        </label>
      </div>

      <div className="pt-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 bg-stone-900 text-white rounded-xl font-bold text-lg hover:bg-stone-800 transition shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <i className="fas fa-spinner fa-spin"></i> 전송 중...
            </>
          ) : (
            <>
              상담 신청하기 <i className="fas fa-paper-plane text-sm"></i>
            </>
          )}
        </button>
        <p className="text-center text-xs text-stone-400 mt-4">
          <i className="fas fa-shield-alt"></i> 입력하신 정보는 상담 목적으로만 사용되며
          안전하게 보호됩니다.
        </p>
      </div>
    </form>
  );
}

