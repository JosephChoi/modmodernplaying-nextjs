'use client';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export default function Modal({ isOpen, onClose, title, message }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      id="modal"
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full relative z-10 text-center transform transition-all scale-100">
        <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          <i className="fas fa-check text-2xl"></i>
        </div>
        <h3 className="text-2xl font-bold text-stone-900 mb-2">{title}</h3>
        <p className="text-stone-600 mb-6 font-light">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-royalPurple text-white py-3.5 rounded-lg font-semibold hover:bg-indigo-800 transition"
        >
          확인
        </button>
      </div>
    </div>
  );
}

