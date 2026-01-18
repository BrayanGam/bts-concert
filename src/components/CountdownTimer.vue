<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const targetDate = new Date('2026-10-09T00:00:00'); // Approx full reunion
const timeLeft = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });

const calculateTime = () => {
    const now = new Date();
    const diff = targetDate - now;
    
    if (diff > 0) {
        timeLeft.value = {
            días: Math.floor(diff / (1000 * 60 * 60 * 24)),
            horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutos: Math.floor((diff / 1000 / 60) % 60),
            segundos: Math.floor((diff / 1000) % 60),
        };
    }
};

let timer;
onMounted(() => {
    calculateTime();
    timer = setInterval(calculateTime, 1000);
});

onUnmounted(() => clearInterval(timer));
</script>

<template>
  <section class="py-16 bg-magic-cream text-magic-purple text-center">
    <h2 class="text-3xl font-cursive mb-12">Nos verás en...</h2>
    
    <div class="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto px-4">
        
        <div v-for="(value, label) in timeLeft" :key="label" class="flex flex-col items-center bg-white p-6 rounded-2xl shadow-xl w-32 md:w-40 border-2 border-magic-pink/30 hover:-translate-y-2 transition-transform duration-300">
            <span class="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-magic-purple to-magic-pink mb-2">
                {{ value }}
            </span>
            <span class="uppercase text-xs tracking-widest opacity-60">{{ label }}</span>
        </div>

    </div>
  </section>
</template>
