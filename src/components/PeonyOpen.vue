<template>
  <svg viewBox="0 0 200 200" class="w-full h-full overflow-visible">
    <defs>
      <radialGradient id="petalGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
        <stop offset="0%" stop-color="#FFD1DC" />
        <stop offset="70%" stop-color="#FFB7C5" />
        <stop offset="100%" stop-color="#A64D79" />
      </radialGradient>
      <filter id="softGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <g filter="url(#softGlow)">
      <!-- Outer Petals -->
      <path d="M100 100 Q 50 10 100 0 Q 150 10 100 100" fill="url(#petalGradient)" transform="rotate(0 100 100)" opacity="0.9" />
      <path d="M100 100 Q 50 10 100 0 Q 150 10 100 100" fill="url(#petalGradient)" transform="rotate(45 100 100)" opacity="0.9" />
      <path d="M100 100 Q 50 10 100 0 Q 150 10 100 100" fill="url(#petalGradient)" transform="rotate(90 100 100)" opacity="0.9" />
      <path d="M100 100 Q 50 10 100 0 Q 150 10 100 100" fill="url(#petalGradient)" transform="rotate(135 100 100)" opacity="0.9" />
      <path d="M100 100 Q 50 10 100 0 Q 150 10 100 100" fill="url(#petalGradient)" transform="rotate(180 100 100)" opacity="0.9" />
      <path d="M100 100 Q 50 10 100 0 Q 150 10 100 100" fill="url(#petalGradient)" transform="rotate(225 100 100)" opacity="0.9" />
      <path d="M100 100 Q 50 10 100 0 Q 150 10 100 100" fill="url(#petalGradient)" transform="rotate(270 100 100)" opacity="0.9" />
      <path d="M100 100 Q 50 10 100 0 Q 150 10 100 100" fill="url(#petalGradient)" transform="rotate(315 100 100)" opacity="0.9" />
      
      <!-- Inner Petals (Smaller) -->
      <path d="M100 100 Q 70 40 100 30 Q 130 40 100 100" fill="#FFC0CB" transform="rotate(22 100 100)" opacity="0.8" />
      <path d="M100 100 Q 70 40 100 30 Q 130 40 100 100" fill="#FFC0CB" transform="rotate(67 100 100)" opacity="0.8" />
      <path d="M100 100 Q 70 40 100 30 Q 130 40 100 100" fill="#FFC0CB" transform="rotate(112 100 100)" opacity="0.8" />
      <path d="M100 100 Q 70 40 100 30 Q 130 40 100 100" fill="#FFC0CB" transform="rotate(157 100 100)" opacity="0.8" />
      <path d="M100 100 Q 70 40 100 30 Q 130 40 100 100" fill="#FFC0CB" transform="rotate(202 100 100)" opacity="0.8" />
      <path d="M100 100 Q 70 40 100 30 Q 130 40 100 100" fill="#FFC0CB" transform="rotate(247 100 100)" opacity="0.8" />
      <path d="M100 100 Q 70 40 100 30 Q 130 40 100 100" fill="#FFC0CB" transform="rotate(292 100 100)" opacity="0.8" />
      <path d="M100 100 Q 70 40 100 30 Q 130 40 100 100" fill="#FFC0CB" transform="rotate(337 100 100)" opacity="0.8" />
    </g>

    <!-- Center -->
    <circle cx="100" cy="100" r="15" fill="#FFD700" opacity="0.8" />
    <circle cx="100" cy="100" r="10" fill="#FFA500" opacity="0.6" />
    
    <!-- Stamens -->
    <g stroke="#FFFACD" stroke-width="1">
       <line x1="100" y1="100" x2="95" y2="90" />
       <line x1="100" y1="100" x2="105" y2="90" />
       <line x1="100" y1="100" x2="100" y2="88" />
       <line x1="100" y1="100" x2="90" y2="100" />
       <line x1="100" y1="100" x2="110" y2="100" />
    </g>
  </svg>
</template>
