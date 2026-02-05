<template>
  <section ref="elementRef" class="section section-alt">
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" md="6" class="text-center text-md-start">
          <div :class="{ 'animate-slide-in-left': isVisible }">
            <v-chip color="success" variant="tonal" class="mb-4">
              <v-icon start size="small">mdi-check-circle</v-icon>
              La solución
            </v-chip>

            <h2 class="section-title mb-4">
              Una sola plataforma para
              <span class="gradient-text">toda tu operación</span>
            </h2>

            <p class="text-body-1 mb-6" style="opacity: 0.8;">
              Jixo unifica ventas, inventario, compras, facturación y análisis en un solo lugar.
              Obtén visibilidad completa de costos y márgenes en tiempo real.
            </p>

            <div class="benefits-list">
              <div
                v-for="(benefit, index) in benefits"
                :key="index"
                class="benefit-item"
                :class="{ 'animate-fade-up': isVisible }"
                :style="{ animationDelay: `${0.2 + index * 0.1}s` }"
              >
                <div class="benefit-check">
                  <v-icon color="success" size="18">mdi-check</v-icon>
                </div>
                <span class="text-body-1 font-weight-medium">{{ benefit }}</span>
              </div>
            </div>

            <v-btn
              color="primary"
              size="large"
              class="mt-8"
              @click="scrollToSection('funcionalidades')"
            >
              <v-icon start>mdi-apps</v-icon>
              Explorar módulos
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="6">
          <div
            class="dashboard-wrapper"
            :class="{ 'animate-slide-in-right': isVisible }"
          >
            <!-- Puzzle-style dashboard -->
            <div class="dashboard-puzzle">
              <!-- Main piece - Primary -->
              <div class="puzzle-piece puzzle-piece--main">
                <v-icon size="32" color="white">mdi-view-dashboard</v-icon>
                <span class="puzzle-label">Dashboard</span>
              </div>

              <!-- Top right piece - Secondary -->
              <div class="puzzle-piece puzzle-piece--top-right">
                <v-icon size="20" color="white">mdi-cart</v-icon>
                <span class="puzzle-label-sm">Ventas</span>
              </div>

              <!-- Right piece - Tertiary -->
              <div class="puzzle-piece puzzle-piece--right">
                <v-icon size="20" color="white">mdi-warehouse</v-icon>
                <span class="puzzle-label-sm">Inventario</span>
              </div>

              <!-- Bottom piece - Primary light -->
              <div class="puzzle-piece puzzle-piece--bottom">
                <v-icon size="20" color="white">mdi-file-document</v-icon>
                <span class="puzzle-label-sm">Facturación</span>
              </div>

              <!-- Bottom left piece - Secondary light -->
              <div class="puzzle-piece puzzle-piece--bottom-left">
                <v-icon size="20" color="white">mdi-chart-line</v-icon>
                <span class="puzzle-label-sm">Análisis</span>
              </div>

              <!-- Connector dot -->
              <div class="puzzle-connector"></div>
            </div>

            <!-- Module chips below -->
            <div class="module-chips mt-6">
              <v-chip
                v-for="(module, index) in modules"
                :key="module.name"
                :color="module.color"
                variant="tonal"
                size="small"
                class="module-chip"
                :class="{ 'animate-scale-in': isVisible }"
                :style="{ animationDelay: `${0.5 + index * 0.08}s` }"
              >
                <v-icon start size="14">{{ module.icon }}</v-icon>
                {{ module.name }}
              </v-chip>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { elementRef, isVisible } = useScrollAnimation()

const benefits = [
  'Todo tu negocio en una sola plataforma',
  'Datos sincronizados en tiempo real',
  'Costos y márgenes siempre visibles',
  'Automatización de procesos repetitivos',
  'Escalable según tu crecimiento',
]

const modules = [
  { icon: 'mdi-truck', name: 'Logística', color: 'primary' },
  { icon: 'mdi-account-group', name: 'CRM', color: 'secondary' },
  { icon: 'mdi-bell', name: 'Alertas', color: 'tertiary' },
  { icon: 'mdi-shield', name: 'Admin', color: 'primary' },
]

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.dashboard-wrapper {
  opacity: 0;
}

.dashboard-puzzle {
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 280px;
  margin: 0 auto;
}

.puzzle-piece {
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.puzzle-piece:hover {
  transform: scale(1.05);
}

/* Main center piece */
.puzzle-piece--main {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  background: rgb(var(--v-theme-primary));
  border-radius: 24px 24px 24px 60px;
  z-index: 3;
}

.puzzle-piece--main:hover {
  transform: translate(-50%, -50%) scale(1.05);
}

/* Top right piece */
.puzzle-piece--top-right {
  top: 0;
  right: 20px;
  width: 80px;
  height: 80px;
  background: rgb(var(--v-theme-secondary));
  border-radius: 40px 20px 20px 20px;
  z-index: 2;
}

/* Right piece */
.puzzle-piece--right {
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 75px;
  height: 75px;
  background: rgb(var(--v-theme-tertiary));
  border-radius: 20px 20px 40px 20px;
  z-index: 1;
}

.puzzle-piece--right:hover {
  transform: translateY(-50%) scale(1.05);
}

/* Bottom piece */
.puzzle-piece--bottom {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 85px;
  height: 85px;
  background: rgb(var(--v-theme-primary-container));
  border-radius: 20px 20px 20px 40px;
  z-index: 2;
}

.puzzle-piece--bottom:hover {
  transform: translateX(-50%) scale(1.05);
}

.puzzle-piece--bottom .v-icon {
  color: rgb(var(--v-theme-on-primary-container)) !important;
}

.puzzle-piece--bottom .puzzle-label-sm {
  color: rgb(var(--v-theme-on-primary-container));
}

/* Bottom left piece */
.puzzle-piece--bottom-left {
  bottom: 20px;
  left: 20px;
  width: 70px;
  height: 70px;
  background: rgb(var(--v-theme-secondary-container));
  border-radius: 20px 40px 20px 20px;
  z-index: 1;
}

.puzzle-piece--bottom-left .v-icon {
  color: rgb(var(--v-theme-on-secondary-container)) !important;
}

.puzzle-piece--bottom-left .puzzle-label-sm {
  color: rgb(var(--v-theme-on-secondary-container));
}

/* Connector */
.puzzle-connector {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 16px;
  height: 16px;
  background: rgb(var(--v-theme-surface));
  border-radius: 50%;
  z-index: 4;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.puzzle-label {
  font-size: 0.85rem;
  font-weight: 600;
  color: white;
}

.puzzle-label-sm {
  font-size: 0.7rem;
  font-weight: 500;
  color: white;
}

/* Module chips */
.module-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.module-chip {
  opacity: 0;
}

/* Benefits list */
.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 12px;
  opacity: 0;
}

.benefit-check {
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: rgba(var(--v-theme-success), 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Animations */
.animate-slide-in-left {
  animation: slideInLeft 0.7s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.7s ease-out forwards;
}

.animate-fade-up {
  animation: fadeUp 0.5s ease-out forwards;
}

.animate-scale-in {
  animation: scaleIn 0.4s ease-out forwards;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
