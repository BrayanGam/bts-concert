<script setup>
import { ref } from 'vue';
import { useMotion } from '@vueuse/motion';
import PeonyClosed from './PeonyClosed.vue';
import PeonyOpen from './PeonyOpen.vue';

const isOpen = ref(false);
const showMessage = ref(false);

const openFlower = () => {
  if (isOpen.value) return;
  isOpen.value = true;
  // Delay message reveal slightly
  setTimeout(() => {
    showMessage.value = true;
  }, 500);
};
</script>

<template>
  <section class="min-h-[80vh] flex flex-col items-center justify-center p-8 bg-magic-cream relative overflow-hidden">
    
    <div class="z-10 text-center mb-8">
      <h2 class="text-3xl md:text-5xl font-cursive text-magic-purple mb-4">El Ramo Interactivo</h2>
      <p class="text-magic-purple md:text-xl font-light opacity-80" v-if="!isOpen">
        Haz clic para ver lo que tanto deseas...
      </p>
      <p class="text-magic-purple md:text-xl font-bold animate-pulse" v-else>
        ¡Pronto será una realidad!
      </p>
    </div>

    <div class="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center cursor-pointer transition-transform duration-500 hover:scale-105" @click="openFlower">
      
      <PeonyClosed 
        class="absolute w-full h-full transition-opacity duration-1000 z-20"
        :class="{ 'opacity-0 pointer-events-none': isOpen, 'opacity-100': !isOpen }"
      />

      <PeonyOpen 
        class="absolute w-full h-full transition-all duration-1000 z-10 scale-0 origin-center"
        :class="{ 'scale-125 rotate-12': isOpen }"
      />

      <div 
        class="absolute z-30 transition-all duration-1000 transform"
        :class="{ 
          'scale-0 translate-y-10 opacity-0': !showMessage, 
          'scale-100 translate-y-0 opacity-100': showMessage 
        }"
      >
        <img 
          :src="'/ticket.jpg'" 
          alt="BTS Ticket" 
          class="w-60 md:w-80 shadow-2xl rounded-lg rotate-[-10deg] hover:rotate-0 transition-transform duration-300 border-4 border-white/50"
        />
      </div>

    </div>

    <!-- Decoration particles (static for now or small drift) -->
    <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-10 left-10 w-4 h-4 bg-magic-pink rounded-full opacity-50 blur-sm animate-ping"></div>
        <div class="absolute bottom-20 right-20 w-6 h-6 bg-magic-purple rounded-full opacity-30 blur-md animate-bounce"></div>
    </div>

  </section>
</template>

<style scoped>
/* Custom utility for rotation if needed, otherwise Tailwind works */
</style>
