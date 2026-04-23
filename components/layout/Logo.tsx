import Link from "next/link";

interface LogoProps {
  variant?: "white" | "dark";
  className?: string;
}

export default function Logo({ variant = "white", className = "" }: LogoProps) {
  const fill = variant === "white" ? "#f5f0e8" : "#1a2e18";
  const accent = "#c9a84c";

  return (
    <Link
      href="/"
      aria-label="The ParT Barn — Home"
      className={`group inline-flex items-center gap-2 ${className}`}
    >
      <svg
        width="38"
        height="38"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M20 3 L36 13 V30 L20 37 L4 30 V13 Z"
          stroke={fill}
          strokeWidth="1.4"
          fill="none"
        />
        <text
          x="20"
          y="24"
          textAnchor="middle"
          fontFamily="Playfair Display, Georgia, serif"
          fontSize="14"
          fontWeight="500"
          fill={accent}
        >
          PB
        </text>
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-playfair text-lg tracking-wide transition-colors"
          style={{ color: fill }}
        >
          The ParT Barn
        </span>
        <span
          className="eyebrow text-[10px] mt-0.5 opacity-70"
          style={{ color: fill }}
        >
          Lake Elmo · MN
        </span>
      </span>
    </Link>
  );
}
