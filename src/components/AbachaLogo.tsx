import React from "react";

interface AbachaLogoProps {
  className?: string;
  size?: number;
  showBg?: boolean;
}

export default function AbachaLogo({
  className = "",
  size = 120,
  showBg = true,
}: AbachaLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`select-none ${className}`}
    >
      {/* Black Circular Background */}
      {showBg && <circle cx="200" cy="200" r="190" fill="#000000" stroke="#D4A017" strokeWidth="4" />}

      {/* Decorative Outer Gold Rings */}
      <circle cx="200" cy="200" r="175" stroke="#D4A017" strokeWidth="1" strokeDasharray="6,4" />
      <circle cx="200" cy="200" r="165" stroke="#D4A017" strokeWidth="2" />

      {/* 1. Curved Text Path definitions */}
      <defs>
        {/* Top-aligned path for "Abacha Village" - curves clockwise over the top inside. */}
        <path
          id="abacha-village-path"
          d="M 65,200 A 135,135 0 0,1 335,200"
          fill="none"
        />
        {/* Bottom-aligned path for "Eat to Remember" - curves counterclockwise or clockwise along bottom inside. */}
        {/* To make it readable, we curve it from left to right along the bottom inside. */}
        <path
          id="eat-to-remember-path"
          d="M 85,225 A 125,125 0 0,0 315,225"
          fill="none"
        />
      </defs>

      {/* 2. Brand Name Curved over the Top */}
      <text fill="#FFFFFF" className="font-display" style={{ fontSize: "28px", fontWeight: "bold", letterSpacing: "1px" }}>
        <textPath href="#abacha-village-path" startOffset="50%" textAnchor="middle">
          Abacha Village
        </textPath>
      </text>

      {/* 3. Gold Mortar and Pestle Icon in Center */}
      <g transform="translate(145, 150)">
        {/* Leaves surrounding the Mortar */}
        {/* Left Leaf branch */}
        <path
          d="M -15,40 C -35,25 -25,0 -5,-5 C -5,15 -10,30 -15,40 Z"
          fill="#2D6A2D"
          transform="translate(10, 5)"
        />
        <path
          d="M -20,15 C -35,5 -20,-15 -5,-10 C -5,5 -10,10 -20,15 Z"
          fill="#3B8E3B"
          transform="translate(10, 5)"
        />
        {/* Right Leaf branch */}
        <path
          d="M 125,40 C 145,25 135,0 115,-5 C 115,15 120,30 125,40 Z"
          fill="#2D6A2D"
          transform="translate(-10, 5)"
        />
        <path
          d="M 130,15 C 145,5 130,-15 115,-10 C 115,5 120,10 130,15 Z"
          fill="#3B8E3B"
          transform="translate(-10, 5)"
        />

        {/* Golden Mortar (Bowl) */}
        <path
          d="M 10,40 C 10,65 25,85 55,85 C 85,85 100,65 100,40 C 100,35 10,35 10,40 Z"
          fill="#D4A017"
          stroke="#B08010"
          strokeWidth="1.5"
        />
        {/* Mortar Base */}
        <path
          d="M 35,84 L 25,93 L 85,93 L 75,84 Z"
          fill="#B08010"
        />
        <ellipse cx="55" cy="84" rx="20" ry="4" fill="#886008" />

        {/* Golden Pestle sticking out */}
        <path
          d="M 68,15 L 90,-10 C 93,-13 97,-10 95,-6 L 75,25 Z"
          fill="#E5B22B"
          stroke="#B08010"
          strokeWidth="1"
        />

        {/* Red Chili Pepper near the bottom left of mortar */}
        <g transform="translate(10, 68) rotate(-15)">
          {/* Green Stem */}
          <path d="M 0,0 C -2,-5 -5,-8 -10,-8 C -10,-8 -7,-3 -5,0 Z" fill="#2D6A2D" />
          {/* Red Curved Pepper Body */}
          <path
            d="M -5,0 C 8,5 15,18 10,32 C 8,36 3,38 0,40 C 2,30 2,15 -5,0 Z"
            fill="#C0392B"
          />
          {/* Highlights */}
          <path d="M 2,10 C 5,14 6,18 4,22" stroke="#FF5A43" strokeWidth="1" fill="none" strokeLinecap="round" />
        </g>
      </g>

      {/* 4. "RESTAURANT" Label wrapped in gold dashes */}
      <g transform="translate(200, 275)">
        {/* Accent lines */}
        <line x1="-90" y1="-2" x2="-55" y2="-2" stroke="#D4A017" strokeWidth="2" />
        <line x1="55" y1="-2" x2="90" y2="-2" stroke="#D4A017" strokeWidth="2" />
        {/* Little decorative stars */}
        <circle cx="-47" cy="-2" r="3" fill="#D4A017" />
        <circle cx="47" cy="-2" r="3" fill="#D4A017" />

        <text
          fill="#D4A017"
          className="font-display uppercase"
          style={{ fontSize: "14px", fontWeight: "900", letterSpacing: "5px" }}
          textAnchor="middle"
          dominantBaseline="central"
        >
          RESTAURANT
        </text>
      </g>

      {/* 5. Tagline curved along the bottom: "Eat to Remember" */}
      <text fill="#FFFFFF" className="font-script" style={{ fontSize: "28px", fontWeight: "500" }}>
        <textPath href="#eat-to-remember-path" startOffset="50%" textAnchor="middle">
          Eat to Remember
        </textPath>
      </text>
    </svg>
  );
}
