<script setup>
import FlipCard from './FlipCard.vue';

const memories = [
    { id: 1, front: "2013", backImg: "/album-debut.png", msg: "DEBUT: 2 Cool 4 Skool" },
    { id: 2, front: "2015", backImg: "/album-hyyh.png", msg: "HYYH: The Most Beautiful Moment" },
    { id: 3, front: "2016", backImg: "/album-wings.png", msg: "WINGS: Blood Sweat & Tears" },
    { id: 4, front: "2018", backImg: "/album-ly.png", msg: "LOVE YOURSELF" },
    { id: 5, front: "2020", backImg: "/album-mots7.png", msg: "MAP OF THE SOUL: 7" },
    { id: 6, front: "2022", backImg: "/album-proof.png", msg: "PROOF: Yet To Come" }
];
</script>

<template>
  <section class="py-20 bg-magic-cream relative">
    <div class="text-center mb-12">
        <h2 class="text-4xl font-cursive text-magic-purple">Álbum de Recuerdos</h2>
        <div class="w-24 h-1 bg-magic-pink mx-auto mt-2 rounded-full"></div>
    </div>

    <div class="flex flex-wrap justify-center gap-8 px-4">
        <FlipCard 
            v-for="card in memories" 
            :key="card.id" 
            :frontText="card.front" 
            :backImage="card.backImg" 
            :backMessage="card.msg"
        />
    </div>
  </section>
</template>
