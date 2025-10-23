type StatusLevel = "normal" | "busy" | "verybusy" | "extremely";

interface StatusDialProps {
  level: StatusLevel;
  size?: number;
}

const StatusDial = ({ level, size = 200 }: StatusDialProps) => {
  const statusConfig = {
    normal: { color: "#8DC63F", label: "Normal", rotation: -90 },
    busy: { color: "#FFC20E", label: "Busy", rotation: -30 },
    verybusy: { color: "#F15A22", label: "Very Busy", rotation: 30 },
    extremely: { color: "#DC143C", label: "Extremely Busy", rotation: 90 },
  };

  const config = statusConfig[level];
  const radius = size / 2 - 20;

  return (
    <div className="flex flex-col items-center gap-6">
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        className="drop-shadow-lg"
      >
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="white"
          stroke="hsl(var(--hospital-border))"
          strokeWidth="2"
        />

        {/* Status segments */}
        {[
          { start: -90, end: -30, color: "#8DC63F", label: "Normal" },
          { start: -30, end: 30, color: "#FFC20E", label: "Busy" },
          { start: 30, end: 90, color: "#F15A22", label: "Very Busy" },
          { start: 90, end: 150, color: "#DC143C", label: "Extremely" },
        ].map((segment, index) => {
          const startRad = (segment.start * Math.PI) / 180;
          const endRad = (segment.end * Math.PI) / 180;
          const x1 = size / 2 + radius * Math.cos(startRad);
          const y1 = size / 2 + radius * Math.sin(startRad);
          const x2 = size / 2 + radius * Math.cos(endRad);
          const y2 = size / 2 + radius * Math.sin(endRad);

          return (
            <path
              key={index}
              d={`M ${size / 2} ${size / 2} L ${x1} ${y1} A ${radius} ${radius} 0 0 1 ${x2} ${y2} Z`}
              fill={segment.color}
              opacity="0.3"
            />
          );
        })}

        {/* Needle/pointer */}
        <g transform={`translate(${size / 2}, ${size / 2}) rotate(${config.rotation})`}>
          <line
            x1="0"
            y1="0"
            x2="0"
            y2={-radius + 20}
            stroke={config.color}
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle
            cx="0"
            cy="0"
            r="8"
            fill={config.color}
          />
        </g>

        {/* Center circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r="12"
          fill={config.color}
        />
      </svg>

      {/* Status Label */}
      <div className="text-center">
        <p className="text-sm font-semibold text-[hsl(var(--hospital-text-muted))]">
          Current Status
        </p>
        <p
          className="text-2xl font-bold"
          style={{ color: config.color }}
        >
          {config.label}
        </p>
      </div>
    </div>
  );
};

export default StatusDial;
