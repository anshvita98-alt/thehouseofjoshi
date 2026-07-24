import { useMemo } from "react";

export function StarField() {
  const stars = useMemo(
    () =>
      Array.from({ length: 90 }, () => ({
        top: Math.random() * 100,
        left: Math.random() * 100,
        size: Math.random() * 2 + 0.5,
        delay: Math.random() * 6,
        duration: 3 + Math.random() * 5,
        opacity: 0.3 + Math.random() * 0.6,
      })),
    [],
  );
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* ambient gold haze */}
      <div className="absolute inset-0" style={{
        background:
          "radial-gradient(800px 500px at 20% 10%, rgba(212,175,55,0.07), transparent 60%), radial-gradient(700px 500px at 80% 90%, rgba(255,215,106,0.06), transparent 60%)",
      }} />
      {stars.map((s, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-[#FFD76A]"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            opacity: s.opacity,
            boxShadow: `0 0 ${s.size * 4}px rgba(255,215,106,0.7)`,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
