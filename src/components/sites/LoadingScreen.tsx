import { useEffect, useState, useRef } from "react";
import logoCrest from "@/assets/joshi-logo.png";

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [hidden, setHidden] = useState(false);
  const startTime = useRef(Date.now());

  useEffect(() => {
    const duration = 2800; // minimum cinematic display time
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime.current;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setProgress(pct);
      if (elapsed >= duration) {
        clearInterval(interval);
        setExiting(true);
        setTimeout(() => {
          setHidden(true);
          onComplete();
        }, 900);
      }
    }, 40);
    return () => clearInterval(interval);
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-all duration-900 ease-[cubic-bezier(.16,1,.3,1)] ${
        exiting ? "opacity-0 scale-[1.04]" : "opacity-100 scale-100"
      }`}
      style={{
        background:
          "radial-gradient(1200px 800px at 50% -200px, rgba(212,175,55,0.12), transparent 70%), radial-gradient(900px 600px at 90% 110%, rgba(212,175,55,0.06), transparent 70%), #050505",
      }}
    >
      {/* Ambient particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <span
            key={i}
            className="absolute block rounded-full"
            style={{
              width: Math.random() * 3 + 1 + "px",
              height: Math.random() * 3 + 1 + "px",
              top: Math.random() * 100 + "%",
              left: Math.random() * 100 + "%",
              background: "rgba(212,175,55,0.5)",
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              opacity: 0,
            }}
          />
        ))}
      </div>

      {/* Crown crest */}
      <div
        className="relative mb-8 flex items-center justify-center"
        style={{ filter: "drop-shadow(0 0 40px rgba(212,175,55,0.4))" }}
      >
        <img
          src={logoCrest}
          alt="House of Joshi"
          className="h-28 w-auto object-contain md:h-36 lg:h-44"
          style={{
            animation: "pulse-glow 3s ease-in-out infinite",
          }}
        />
      </div>

      {/* Title */}
      <h1
        className="mb-2 text-center font-display text-2xl font-semibold tracking-wide md:text-3xl lg:text-4xl"
        style={{
          background: "linear-gradient(135deg, #FFD76A 0%, #D4AF37 40%, #8a6f1f 70%, #FFD76A 100%)",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
          textShadow: "0 0 60px rgba(255,215,106,0.25)",
        }}
      >
        House of Joshi
      </h1>

      <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.35em] text-white/40 md:text-sm">
        Entering the Kingdom
      </p>

      {/* Progress bar */}
      <div className="relative w-64 overflow-hidden rounded-full md:w-80" style={{ height: "2px", background: "rgba(255,255,255,0.06)" }}>
        <div
          className="h-full rounded-full transition-all duration-300 ease-out"
          style={{
            width: `${progress}%`,
            background: "linear-gradient(90deg, #8a6f1f, #D4AF37, #FFD76A, #D4AF37, #8a6f1f)",
            backgroundSize: "200% 100%",
            animation: "shimmer 2.5s linear infinite",
            boxShadow: "0 0 20px rgba(212,175,55,0.5), 0 0 40px rgba(212,175,55,0.2)",
          }}
        />
      </div>

      <p className="mt-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white/20 md:text-xs">
        {Math.round(progress)}%
      </p>
    </div>
  );
}
