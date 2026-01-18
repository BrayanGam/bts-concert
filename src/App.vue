<script setup>
import HeroSection from './components/HeroSection.vue';
import InteractiveBouquet from './components/InteractiveBouquet.vue';
import MusicWidget from './components/MusicWidget.vue';
import CountdownTimer from './components/CountdownTimer.vue';
import MemorySlogan from './components/MemorySlogan.vue';
import SurpriseFooter from './components/SurpriseFooter.vue';
</script>

<template>
  <main class="w-full min-h-screen">
    <HeroSection />
    
    <InteractiveBouquet />

    <MemorySlogan />

    <CountdownTimer />
    
    <MusicWidget />

    <SurpriseFooter />
  </main>
</template>

<style>

</style>
