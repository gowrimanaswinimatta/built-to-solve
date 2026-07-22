"use client";

export default function HeroCanvas() {
  return (
    <div className="relative h-[500px] w-full">

      <div className="absolute inset-0 rounded-3xl border border-white/10 bg-white/[0.02]" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 500"
      >

        <line
          x1="300"
          y1="120"
          x2="170"
          y2="220"
          stroke="rgba(255,255,255,.15)"
        />

        <line
          x1="300"
          y1="120"
          x2="430"
          y2="220"
          stroke="rgba(255,255,255,.15)"
        />

        <line
          x1="170"
          y1="220"
          x2="300"
          y2="340"
          stroke="rgba(16,185,129,.5)"
        />

        <line
          x1="430"
          y1="220"
          x2="300"
          y2="340"
          stroke="rgba(16,185,129,.5)"
        />

        {[
          [300,120,"Problem"],
          [170,220,"Data"],
          [430,220,"AI"],
          [300,340,"Solution"],
        ].map(([x,y,label])=>(
          <g key={String(label)}>
            <circle
              cx={Number(x)}
              cy={Number(y)}
              r="8"
              fill="#10b981"
            />
            <text
              x={Number(x)}
              y={Number(y)+30}
              fill="white"
              fontSize="14"
              textAnchor="middle"
            >
              {label}
            </text>
          </g>
        ))}

      </svg>

    </div>
  );
}
