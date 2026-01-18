<script setup>
import { onMounted, ref } from 'vue';

const petals = ref([]);

// Generate random petals
const generatePetals = () => {
  const count = 30;
  const newPetals = [];
  for (let i = 0; i < count; i++) {
    newPetals.push({
      id: i,
      left: Math.random() * 100 + '%',
      delay: Math.random() * 5 + 's',
      duration: 5 + Math.random() * 5 + 's',
      scale: 0.5 + Math.random() * 0.5,
      rotation: Math.random() * 360 + 'deg'
    });
  }
  petals.value = newPetals;
};

onMounted(() => {
  generatePetals();
});
</script>

<template>
  <section class="relative h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-magic-purple to-magic-pink text-magic-cream">
    <!-- Floating Particles -->
    <div class="absolute inset-0 pointer-events-none z-0">
      <div
        v-for="petal in petals"
        :key="petal.id"
        class="absolute top-[-10%] opacity-80"
        :style="{
          left: petal.left,
          animation: `fall ${petal.duration} linear infinite`,
          animationDelay: petal.delay,
        }"
      >
        <img 
          :src="'/petal.png'" 
          alt="petal" 
          class="w-8 h-8 object-contain opacity-70"
          :style="{
            transform: `scale(${petal.scale}) rotate(${petal.rotation})`
          }"
        />
      </div>
    </div>

    <!-- Content -->
    <div class="z-10 text-center px-4 animate-fade-in-up">
      <div class="mb-4">
        <!-- Optional: Scroll svg wrapper or simple banner -->
        <h2 class="text-xl md:text-2xl font-sans tracking-widest mb-2 uppercase opacity-90">
          Para
        </h2>
      </div>
      <h1 class="text-6xl md:text-8xl font-cursive drop-shadow-md mb-6">
        Camila
      </h1>
      <p class="text-lg md:text-xl font-sans font-light max-w-2xl mx-auto opacity-90">
        "En los días en que te odies a ti misma, en los días en que quieras desaparecer para siempre... hagamos una puerta en tu corazón."
      </p>

      <p class="mt-8 text-magic-pink text-xl md:text-2xl font-cursive font-bold animate-pulse">
        Mi niña hermosa. 💜
      </p>
      
      <div class="mt-12 animate-bounce">
         <p class="text-sm font-light">Desliza hacia abajo ↓</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fall {
  0% {
    transform: translateY(0) rotate(0deg) translateX(0);
    opacity: 0;
  }
  10% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(110vh) rotate(360deg) translateX(20px);
    opacity: 0;
  }
}

.animate-fade-in-up {
  animation: fade-in-up 1.5s ease-out forwards;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
