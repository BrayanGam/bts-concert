<script setup>
defineProps({
  frontText: String,
  backImage: String,
  backMessage: String,
});
</script>

<template>
  <div class="group h-80 w-64 [perspective:1000px] cursor-pointer">
    <div class="relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
      
      <!-- Front -->
      <div class="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-br from-magic-purple to-magic-pink p-8 text-center text-slate-200 [backface-visibility:hidden] flex flex-col items-center justify-center border-4 border-white/30">
        <div class="w-16 h-16 rounded-full bg-white/20 mb-4 flex items-center justify-center text-3xl">💜</div>
        <h3 class="text-2xl font-bold font-cursive">{{ frontText }}</h3>
      </div>

      <!-- Back -->
      <div class="absolute inset-0 h-full w-full rounded-xl bg-slate-100 px-4 text-center text-slate-800 [transform:rotateY(180deg)] [backface-visibility:hidden] overflow-hidden">
        <img :src="backImage" alt="Memory" class="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-1000">
        
        <div class="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
            <h4 class="text-xl font-bold font-sans mb-2 drop-shadow-md">{{ backMessage }}</h4>
        </div>
      </div>

    </div>
  </div>
</template>
