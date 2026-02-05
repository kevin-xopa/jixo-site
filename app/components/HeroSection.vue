<template>
  <section class="hero-section">
    <v-container class="py-16">
      <v-row align="center" justify="center" class="min-h-screen">
        <v-col cols="12" md="10" lg="8" class="text-center">
          <div class="fade-in-up">
            <v-chip color="primary-container" variant="flat" class="mb-6" size="small">
              <v-icon start size="small">mdi-rocket-launch</v-icon>
              Sistema de gestión empresarial
            </v-chip>

            <h1 class="hero-title mb-6">
              Control total de tu
              <span class="gradient-text">operación comercial</span>
            </h1>

            <p class="hero-subtitle text-on-surface mb-10">
              Sistema integral de gestión para distribuidores y comercializadores.
              Unifica ventas, inventario, compras, facturación y análisis en un solo lugar.
            </p>

            <div class="d-flex flex-wrap justify-center ga-4">
              <v-btn
                size="x-large"
                color="primary"
                @click="scrollToSection('contacto')"
              >
                <v-icon start>mdi-calendar-check</v-icon>
                Solicitar Demo
              </v-btn>
              <v-btn
                size="x-large"
                variant="outlined"
                color="primary"
                @click="scrollToSection('funcionalidades')"
              >
                <v-icon start>mdi-eye-outline</v-icon>
                Ver Funcionalidades
              </v-btn>
            </div>

            <!-- Stats -->
            <v-row class="mt-16" justify="center">
              <v-col v-for="stat in stats" :key="stat.label" cols="6" sm="3">
                <v-card color="surface-container" variant="flat" class="pa-4">
                  <div class="text-h4 font-weight-bold text-primary">{{ stat.value }}</div>
                  <div class="text-body-2 text-on-surface-variant">{{ stat.label }}</div>
                </v-card>
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>

      <!-- Scroll indicator -->
      <div class="scroll-indicator">
        <v-icon color="primary" size="32" class="float-animation">mdi-chevron-down</v-icon>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: '11+', label: 'Módulos integrados' },
  { value: '100%', label: 'En la nube' },
  { value: '24/7', label: 'Disponibilidad' },
  { value: 'CFDI 4.0', label: 'Facturación' },
]

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: rgb(var(--v-theme-surface-container-low));
}

.min-h-screen {
  min-height: calc(100vh - 200px);
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  color: rgb(var(--v-theme-on-surface));
}

@media (max-width: 960px) {
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 600px) {
  .hero-title {
    font-size: 2rem;
  }
}

.hero-subtitle {
  font-size: 1.25rem;
  opacity: 0.8;
  max-width: 700px;
  margin: 0 auto;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
}
</style>
