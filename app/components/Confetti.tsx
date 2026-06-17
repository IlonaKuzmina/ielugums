const COLORS = ["#f472b6", "#a78bfa", "#fbbf24", "#34d399", "#60a5fa", "#fb7185"];

const pieces = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 7) % 100}%`,
  delay: `${(i * 0.37) % 5}s`,
  duration: `${4 + (i % 5)}s`,
  color: COLORS[i % COLORS.length],
  size: 6 + (i % 4) * 2,
  rotation: (i * 47) % 360,
}));

export function Confetti() {
  return (
    <div className="confetti-container" aria-hidden="true">
      {pieces.map((piece) => (
        <span
          key={piece.id}
          className="confetti-piece"
          style={{
            left: piece.left,
            animationDelay: piece.delay,
            animationDuration: piece.duration,
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size * 0.6,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
}
