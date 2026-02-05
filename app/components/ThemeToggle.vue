<template>
  <v-btn
    :icon="isDark ? 'mdi-weather-sunny' : 'mdi-weather-night'"
    variant="text"
    color="on-surface"
    @click="toggleTheme"
  />
</template>

<script setup lang="ts">
const { isDark, toggleTheme } = useAppTheme()
</script>
