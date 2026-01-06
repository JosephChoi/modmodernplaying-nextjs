import ConsultationForm from '../forms/ConsultationForm';

export default function ContactForm() {
  return (
    <section id="contact" className="py-24 bg-stone-50 border-t border-stone-200 scroll-mt-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[2rem] shadow-xl p-8 md:p-14 border border-stone-100">
          <div className="text-center mb-12">
            <span className="text-royalPurple font-bold tracking-[0.2em] text-xs uppercase mb-3 block">
              Consultation
            </span>
            <h2 className="text-3xl font-bold mb-3 text-stone-900">1:1 맞춤 상담 신청</h2>
            <p className="text-stone-500 text-sm">
              상세한 상담을 위해 아래 정보를 입력해 주세요.<br />
              담당 매니저가 확인 후 빠르게 연락드리겠습니다.
            </p>
          </div>
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}

