import { useEffect, useState } from "react";



const COLORS = [
  "hsl(142, 71%, 45%)", // success green
  "hsl(221, 83%, 53%)", // primary blue
  "hsl(38, 92%, 50%)",  // warning gold
  "hsl(280, 65%, 60%)", // purple
  "hsl(340, 75%, 55%)", // pink
];

const ConfettiCelebration = () => {
  const [pieces, setPieces] = useState([]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const newPieces = [];
    for (let i = 0; i < 100; i++) {
      newPieces.push({
        id: i,
        x: Math.random() * 100,
        y: -10 - Math.random() * 20,
        rotation: Math.random() * 360,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 8 + Math.random() * 8,
        delay: Math.random() * 2,
      });
    }
    setPieces(newPieces);

    // Hide confetti after animation
    const timer = setTimeout(() => setIsVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {pieces.map((piece) => (
        <div
          key={piece.id}
          className="absolute animate-confetti-fall"
          style={{
            left: `${piece.x}%`,
            top: `${piece.y}%`,
            width: piece.size,
            height: piece.size * 0.6,
            backgroundColor: piece.color,
            transform: `rotate(${piece.rotation}deg)`,
            animationDelay: `${piece.delay}s`,
            borderRadius: "2px",
          }}
        />
      ))}
    </div>
  );
};

export default ConfettiCelebration;
