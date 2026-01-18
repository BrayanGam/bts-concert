<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue';
import { Play, Pause, Music, SkipBack, SkipForward } from 'lucide-vue-next';

const isPlaying = ref(false);
const progress = ref(0);
const currentTime = ref(0);
const duration = ref(30); 
const currentTrackIndex = ref(0);
const playlist = ref([]);
const displayTrack = ref({
    name: "Loading...",
    artist: "BTS",
    art: "/mikrokosmos.png" 
});

let audio = null;
let timer = null;

const songsToFetch = ["BTS Dynamite", "BTS Butter", "BTS Spring Day"];

// JSONP Helper to avoid CORS issues with iTunes API
const jsonp = (url) => {
    return new Promise((resolve, reject) => {
        const callbackName = 'jsonp_callback_' + Math.round(100000 * Math.random());
        window[callbackName] = (data) => {
            delete window[callbackName];
            document.body.removeChild(script);
            resolve(data);
        };

        const script = document.createElement('script');
        script.src = `${url}${url.includes('?') ? '&' : '?'}callback=${callbackName}`;
        script.onerror = (e) => {
            delete window[callbackName];
            document.body.removeChild(script);
            reject(e);
        };
        document.body.appendChild(script);
    });
};

const fetchPlaylist = async () => {
    try {
        const promises = songsToFetch.map(term => 
            jsonp(`https://itunes.apple.com/search?term=${encodeURIComponent(term)}&media=music&limit=1`)
                .then(data => data.results[0])
        );

        const results = await Promise.all(promises);
        playlist.value = results.filter(track => track);

        if (playlist.value.length > 0) {
            loadTrack(0);
        }
    } catch (e) {
        console.error("Error fetching playlist:", e);
        displayTrack.value.name = "Error loading music";
    }
};

const loadTrack = (index) => {
    if (audio) {
        audio.pause();
        audio = null;
    }
    
    // Reset state
    isPlaying.value = false;
    progress.value = 0;
    currentTime.value = 0;
    
    // Update display
    const track = playlist.value[index];
    if (track) {
        displayTrack.value = {
            name: track.trackName,
            artist: track.artistName,
            art: track.artworkUrl100.replace('100x100', '600x600'),
            preview: track.previewUrl
        };
        
        audio = new Audio(track.previewUrl);
        audio.volume = 0.1;
        audio.onended = nextTrack; // Auto play next
    }
};

const togglePlay = () => {
  if (!audio) return;

  if (isPlaying.value) {
    audio.pause();
    isPlaying.value = false;
    clearInterval(timer);
  } else {
    audio.play().catch(e => console.warn(e));
    isPlaying.value = true;
    timer = setInterval(() => {
        if (audio && !audio.paused) {
             currentTime.value = audio.currentTime;
             progress.value = (audio.currentTime / duration.value) * 100;
        }
    }, 100);
  }
};

const nextTrack = () => {
    currentTrackIndex.value = (currentTrackIndex.value + 1) % playlist.value.length;
    loadTrack(currentTrackIndex.value);
    togglePlay(); 
};

const prevTrack = () => {
    currentTrackIndex.value = (currentTrackIndex.value - 1 + playlist.value.length) % playlist.value.length;
    loadTrack(currentTrackIndex.value);
    togglePlay();
};

const seek = (event) => {
    if (!audio) return;
    
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(1, clickX / width));
    
    const totalTime = (audio.duration && isFinite(audio.duration)) ? audio.duration : duration.value;
    
    audio.currentTime = percentage * totalTime;
    currentTime.value = audio.currentTime;
    progress.value = percentage * 100;
};

onMounted(() => {
  fetchPlaylist();
});

onUnmounted(() => {
  if (audio) {
    audio.pause();
    clearInterval(timer);
  }
});
</script>

<template>
  <section class="py-20 bg-magic-purple text-white flex flex-col items-center justify-center">
    <div class="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 shadow-2xl max-w-sm w-full mx-4">
      
      <!-- Album Art -->
      <div class="relative w-full aspect-square mb-6 rounded-xl overflow-hidden shadow-lg group">
        <img :src="displayTrack.art" :alt="displayTrack.name" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
        <div class="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <Music class="w-12 h-12 text-white animate-bounce" />
        </div>
      </div>

      <!-- Text -->
      <div class="text-center mb-6 h-16">
        <h3 class="text-2xl font-bold mb-1 line-clamp-1">{{ displayTrack.name }}</h3>
        <p class="text-sm opacity-70">{{ displayTrack.artist }}</p>
      </div>

      <!-- Visual Progress Bar -->
      <div 
        class="w-full h-4 bg-white/20 rounded-full mb-6 relative overflow-hidden cursor-pointer" 
        title="Click to Seek"
        @click="seek"
      >
        <div 
            class="h-full bg-gradient-to-r from-magic-pink to-white transition-all duration-100 ease-linear relative"
            :style="{ width: progress + '%' }"
        >
          <div class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
            <img src="/public/bts-logo.webp" class="w-5 h-5 object-contain" alt="Logo" />
          </div>
        </div>
      </div>

      <!-- Controls -->
      <div class="flex items-center justify-center gap-8">
        <button 
            @click="prevTrack"
            class="text-white/70 hover:text-white hover:scale-110 transition p-2"
        >
            <SkipBack class="w-8 h-8" />
        </button>

        <button 
            @click="togglePlay"
            class="w-16 h-16 bg-white text-magic-purple rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg hover:shadow-magic-pink/50"
        >
            <Pause v-if="isPlaying" fill="currentColor" />
            <Play v-else fill="currentColor" class="ml-1" />
        </button>
        
        <button 
            @click="nextTrack"
            class="text-white/70 hover:text-white hover:scale-110 transition p-2"
        >
            <SkipForward class="w-8 h-8" />
        </button>
      </div>

    </div>
    
    <p class="mt-8 text-sm opacity-60 font-light italic">
      "Me tienes. Te miro y sueño."
    </p>
  </section>
</template>
