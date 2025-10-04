import { useEffect, useState } from 'react';
import { Shield, Lock, Network } from 'lucide-react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

export default function LoadingAnimation({ onComplete }: LoadingAnimationProps) {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 1200);
    const timer3 = setTimeout(() => setStage(3), 1900);
    const timer4 = setTimeout(() => onComplete(), 3200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#003366] via-[#004080] to-[#0059b3] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-400 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-400 rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative text-center">
        <div className="flex justify-center items-center gap-8 mb-12">
          <div
            className={`transform transition-all duration-700 ${
              stage >= 1 ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 -rotate-180'
            }`}
          >
            <Shield className="w-20 h-20 text-white drop-shadow-2xl" strokeWidth={1.5} />
          </div>

          <div
            className={`transform transition-all duration-700 delay-300 ${
              stage >= 2 ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 rotate-180'
            }`}
          >
            <Lock className="w-20 h-20 text-cyan-200 drop-shadow-2xl" strokeWidth={1.5} />
          </div>

          <div
            className={`transform transition-all duration-700 delay-500 ${
              stage >= 3 ? 'scale-100 opacity-100 rotate-0' : 'scale-0 opacity-0 -rotate-180'
            }`}
          >
            <Network className="w-20 h-20 text-blue-200 drop-shadow-2xl" strokeWidth={1.5} />
          </div>
        </div>

        <div className={`transition-all duration-1000 ${stage >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl font-bold text-white mb-4 tracking-wide">
            مبادرة الأمن السيبراني
          </h1>
          <p className="text-xl text-cyan-100 font-light">
            جامعة الملك سعود
          </p>
        </div>

        <div className="mt-12">
          <div className="flex justify-center gap-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-3 h-3 bg-white rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
