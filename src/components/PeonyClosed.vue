<template>
  <svg viewBox="0 0 100 120" class="w-full h-full overflow-visible">
    <defs>
      <linearGradient id="budGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FFB7C5" />
        <stop offset="100%" stop-color="#A64D79" />
      </linearGradient>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>
    
    <!-- Stem -->
    <path d="M50 100 Q 50 110 45 120" stroke="#4A7c59" stroke-width="4" fill="none" />
    <path d="M50 100 Q 55 105 50 110" stroke="#4A7c59" stroke-width="0" fill="#6A9c79" />

    <!-- Sepals -->
    <path d="M35 90 Q 50 105 65 90 Q 50 80 35 90" fill="#6A9c79" />
    
    <!-- Bud Petals -->
    <g filter="url(#glow)">
        <path d="M50 20 Q 80 50 50 100 Q 20 50 50 20" fill="url(#budGradient)" stroke="#fff" stroke-width="0.5" stroke-opacity="0.5" />
        <!-- Inner fold detail -->
        <path d="M50 20 Q 65 40 50 90" fill="none" stroke="#A64D79" stroke-width="1" opacity="0.3" />
        <path d="M50 20 Q 35 40 50 90" fill="none" stroke="#A64D79" stroke-width="1" opacity="0.3" />
    </g>
  </svg>
</template>
