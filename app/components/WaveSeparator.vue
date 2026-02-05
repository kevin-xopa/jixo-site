<template>
  <div class="wave-separator" :class="`wave-separator--${variant}`">
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      class="wave-svg"
      :class="{ 'wave-svg--flip': flip }"
    >
      <!-- Back wave -->
      <path
        :d="backPath"
        class="wave-back"
        :class="`wave-back--${variant}`"
      />
      <!-- Front wave -->
      <path
        :d="frontPath"
        class="wave-front"
        :class="`wave-front--${variant}`"
      />
    </svg>

    <!-- Optional botanical elements -->
    <div v-if="showPlants" class="botanicals">
      <div class="plant plant--left">
        <svg viewBox="0 0 60 80" class="plant-svg">
          <path d="M30 80 L30 40 Q20 30 15 15 Q25 25 30 40 Q35 25 45 15 Q40 30 30 40"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"/>
          <circle cx="15" cy="15" r="4" fill="currentColor" opacity="0.5"/>
          <circle cx="45" cy="15" r="3" fill="currentColor" opacity="0.4"/>
          <circle cx="30" cy="25" r="2" fill="currentColor" opacity="0.3"/>
        </svg>
      </div>
      <div class="plant plant--right">
        <svg viewBox="0 0 50 60" class="plant-svg">
          <path d="M25 60 L25 35 Q15 25 10 10 Q20 20 25 35 Q30 20 40 10 Q35 25 25 35"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"/>
          <circle cx="10" cy="10" r="3" fill="currentColor" opacity="0.4"/>
          <circle cx="40" cy="10" r="3" fill="currentColor" opacity="0.5"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'neutral'
  flip?: boolean
  showPlants?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  flip: false,
  showPlants: false,
})

// Different wave paths for variety
const backPath = computed(() => {
  return 'M0,60 C180,120 360,0 540,60 C720,120 900,20 1080,60 C1260,100 1380,40 1440,60 L1440,120 L0,120 Z'
})

const frontPath = computed(() => {
  return 'M0,80 C200,40 400,100 600,70 C800,40 1000,90 1200,60 C1350,40 1400,70 1440,80 L1440,120 L0,120 Z'
})
</script>

<style scoped>
.wave-separator {
  position: relative;
  width: 100%;
  height: 80px;
  overflow: hidden;
  margin: -1px 0;
}

.wave-svg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.wave-svg--flip {
  transform: scaleY(-1);
  top: 0;
  bottom: auto;
}

/* Wave colors */
.wave-back {
  opacity: 0.4;
}

.wave-front {
  opacity: 0.7;
}

/* Primary variant */
.wave-back--primary {
  fill: rgb(var(--v-theme-primary));
}

.wave-front--primary {
  fill: rgb(var(--v-theme-primary-container));
}

/* Secondary variant */
.wave-back--secondary {
  fill: rgb(var(--v-theme-secondary));
}

.wave-front--secondary {
  fill: rgb(var(--v-theme-secondary-container));
}

/* Tertiary variant */
.wave-back--tertiary {
  fill: rgb(var(--v-theme-tertiary));
}

.wave-front--tertiary {
  fill: rgb(var(--v-theme-tertiary-container));
}

/* Neutral variant */
.wave-back--neutral {
  fill: rgb(var(--v-theme-outline));
}

.wave-front--neutral {
  fill: rgb(var(--v-theme-surface-variant));
}

/* Botanical elements */
.botanicals {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  pointer-events: none;
}

.plant {
  position: absolute;
  bottom: 5px;
  color: rgb(var(--v-theme-tertiary));
  opacity: 0.3;
}

.plant--left {
  left: 5%;
}

.plant--right {
  right: 8%;
}

.plant-svg {
  width: 40px;
  height: auto;
}

@media (max-width: 600px) {
  .wave-separator {
    height: 50px;
  }

  .plant {
    display: none;
  }
}
</style>
