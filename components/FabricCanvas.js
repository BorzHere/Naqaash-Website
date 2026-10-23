import { useEffect, useRef } from "react";

export default function FabricCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;

    const mix = (a, b, t) =>
      `rgb(${a.map((value, index) => Math.round(value + (b[index] - value) * t)).join(",")})`;

    const draw = () => {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width) return;

      const ratio = window.devicePixelRatio || 1;
      canvas.width = rect.width * ratio;
      canvas.height = rect.height * ratio;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);

      const width = rect.width;
      const height = rect.height;
      const plum = [42, 20, 66];
      const purple = [107, 52, 156];
      const gold = [226, 160, 30];
      const teal = [22, 150, 132];
      const rose = [196, 62, 104];
      context.fillStyle = mix(plum, plum, 0);
      context.fillRect(0, 0, width, height);

      const size = Math.max(24, Math.min(40, width / 10));
      let seed = 11;
      const random = () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
      };

      for (let y = -size; y < height + size; y += size) {
        const row = Math.round(y / size);
        for (let x = (row % 2 ? size : 0) - size; x < width + size; x += size * 2) {
          const blend = Math.min(1, Math.max(0, (x / width) * 0.6 + (y / height) * 0.4));
          const outer = mix(gold, teal, blend);
          const layers = [
            [0.94, mix(purple, plum, 0.2)],
            [0.7, outer],
            [0.44, random() < 0.14 ? mix(rose, rose, 0) : mix(plum, plum, 0)],
            [0.2, outer],
          ];

          layers.forEach(([factor, color]) => {
            context.beginPath();
            context.moveTo(x, y - size * factor);
            context.lineTo(x + size * factor, y);
            context.lineTo(x, y + size * factor);
            context.lineTo(x - size * factor, y);
            context.closePath();
            context.fillStyle = color;
            context.fill();
          });

          context.strokeStyle = "rgba(255,255,255,.12)";
          context.lineWidth = 1;
          for (let index = -3; index <= 3; index += 1) {
            context.beginPath();
            context.moveTo(x - size * 0.7 + Math.abs(index) * size * 0.1, y + index * size * 0.1);
            context.lineTo(x + size * 0.7 - Math.abs(index) * size * 0.1, y + index * size * 0.1);
            context.stroke();
          }
        }
      }
    };

    draw();
    window.addEventListener("resize", draw);
    return () => window.removeEventListener("resize", draw);
  }, []);

  return <canvas id="fabric" ref={canvasRef} />;
}
