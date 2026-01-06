interface MembershipCardProps {
  step: string;
  title: string;
  monthlyPrice: string;
  totalPrice: string;
  sessions: string;
  description: string;
  discount?: string;
  isBest?: boolean;
  borderColor?: string;
}

export default function MembershipCard({
  step,
  title,
  monthlyPrice,
  totalPrice,
  sessions,
  description,
  discount,
  isBest = false,
  borderColor = 'stone-300',
}: MembershipCardProps) {
  const borderColorClass = isBest
    ? 'border-t-royalPurple'
    : borderColor === 'mutedSage'
      ? 'border-t-mutedSage'
      : borderColor === 'stone-800'
        ? 'border-t-stone-800'
        : 'border-t-stone-300';

  return (
    <div
      className={`relative bg-white rounded-2xl p-6 border-x border-b border-stone-200 border-t-[6px] ${borderColorClass} shadow-sm hover:shadow-xl transition duration-300 flex flex-col items-center text-center group h-full ${
        isBest ? 'bg-royalPurple/5 border-2 border-royalPurple md:scale-105 z-10' : ''
      }`}
    >
      {isBest && (
        <>
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-royalPurple text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md border-2 border-white whitespace-nowrap">
            Best Choice
          </div>
          <div className="absolute top-0 right-0 bg-brandRed text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-lg z-20">
            {discount}
          </div>
        </>
      )}
      {discount && !isBest && (
        <div
          className={`absolute top-0 right-0 ${
            borderColor === 'mutedSage'
              ? 'bg-mutedSage'
              : borderColor === 'stone-800'
                ? 'bg-stone-800'
                : 'bg-stone-300'
          } text-white text-[10px] font-bold px-3 py-1.5 rounded-bl-xl z-20`}
        >
          {discount}
        </div>
      )}

      <div className={`mb-4 ${isBest ? 'mt-2' : ''}`}>
        <span
          className={`${
            isBest
              ? 'text-royalPurple'
              : borderColor === 'mutedSage'
                ? 'text-mutedSage'
                : borderColor === 'stone-800'
                  ? 'text-stone-800'
                  : 'text-stone-400'
          } font-bold text-sm tracking-widest uppercase`}
        >
          {step}
        </span>
        <h4 className="text-xl font-bold text-stone-900 mt-1">{title}</h4>
      </div>

      <div className={`w-full border-t ${isBest ? 'border-royalPurple/20' : 'border-stone-100'} my-4`}></div>

      <div className="mb-2">
        <span className={`text-3xl ${isBest ? 'text-4xl' : ''} font-bold ${isBest ? 'text-royalPurple' : 'text-stone-900'}`}>
          {monthlyPrice}
        </span>
        <span className="text-sm text-stone-500">원 / 월</span>
      </div>

      <div className={`text-xs mb-6 ${isBest ? 'text-stone-500 font-medium' : 'text-stone-400'}`}>
        {totalPrice}
      </div>

      <div className={`mt-auto ${isBest ? 'w-full bg-white/60 p-3 rounded-lg border border-royalPurple/10' : ''}`}>
        <p className={`text-sm ${isBest ? 'text-royalPurple text-xs font-bold' : 'text-stone-500'}`}>
          {sessions}
        </p>
        <p className={`text-xs mt-1 ${isBest ? 'text-stone-500 text-[10px]' : 'text-stone-400'}`}>
          {description}
        </p>
      </div>
    </div>
  );
}

