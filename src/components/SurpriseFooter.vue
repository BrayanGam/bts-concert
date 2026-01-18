<script setup>
import confetti from 'canvas-confetti';

const launchConfetti = () => {
  const duration = 3000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 5,
      angle: 60,
      spread: 55,
      origin: { x: 0 },
      colors: ['#A64D79', '#FFB7C5', '#FFFFFF']
    });
    confetti({
      particleCount: 5,
      angle: 120,
      spread: 55,
      origin: { x: 1 },
      colors: ['#A64D79', '#FFB7C5', '#FFFFFF']
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  }());
};
</script>

<template>
  <footer class="py-24 bg-gradient-to-t from-magic-purple to-magic-purple/90 text-white text-center flex flex-col items-center">

    <button 
        @click="launchConfetti"
        class="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full overflow-hidden transition-all hover:bg-white/20 hover:scale-105 active:scale-95 shadow-lg hover:shadow-magic-pink/50"
    >
        <span class="relative z-10 text-xl font-bold tracking-wider">YA CASI LLEGAN</span>
        <div class="absolute inset-0 bg-gradient-to-r from-magic-pink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </button>
    
  </footer>
</template>
