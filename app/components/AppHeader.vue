<template>
  <v-app-bar
    :elevation="scrolled ? 2 : 0"
    :color="scrolled ? 'surface' : 'transparent'"
    class="transition-all"
    fixed
  >
    <v-container class="d-flex align-center">
      <div class="d-flex align-center cursor-pointer" @click="scrollToTop">
        <img :src="logoSrc" alt="Jixo" class="logo-img" />
      </div>

      <v-spacer />

      <!-- Desktop Navigation -->
      <div class="d-none d-md-flex align-center ga-2">
        <v-btn
          v-for="item in navItems"
          :key="item.id"
          variant="text"
          color="on-surface"
          @click="scrollToSection(item.id)"
        >
          {{ item.label }}
        </v-btn>

        <ThemeToggle />

        <v-btn
          color="primary"
          variant="flat"
          class="ml-2"
          @click="scrollToSection('contacto')"
        >
          Solicitar Demo
        </v-btn>
      </div>

      <!-- Mobile Menu -->
      <ThemeToggle class="d-md-none" />
      <v-app-bar-nav-icon
        class="d-md-none"
        color="on-surface"
        @click="drawer = true"
      />
    </v-container>
  </v-app-bar>

  <!-- Mobile Drawer -->
  <v-navigation-drawer v-model="drawer" temporary location="right">
    <v-list nav>
      <v-list-item
        v-for="item in navItems"
        :key="item.id"
        :title="item.label"
        @click="scrollToSection(item.id); drawer = false"
      />
      <v-list-item>
        <v-btn
          color="primary"
          variant="flat"
          block
          @click="scrollToSection('contacto'); drawer = false"
        >
          Solicitar Demo
        </v-btn>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()
const config = useRuntimeConfig()
const drawer = ref(false)
const scrolled = ref(false)

const logoSrc = computed(() => {
  const base = config.app.baseURL || '/'
  const logo = theme.global.current.value.dark
    ? 'logo-jixo-light.png'
    : 'logo-jixo-dark.png'
  return `${base}${logo}`
})

const navItems = [
  { id: 'funcionalidades', label: 'Funcionalidades' },
  { id: 'integraciones', label: 'Integraciones' },
  { id: 'beneficios', label: 'Beneficios' },
  { id: 'contacto', label: 'Contacto' },
]

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}
</script>

<style scoped>
.transition-all {
  transition: all 0.3s ease;
}

.cursor-pointer {
  cursor: pointer;
}

.logo-img {
  height: 40px;
  width: auto;
}
</style>
