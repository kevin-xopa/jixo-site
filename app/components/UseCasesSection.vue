<template>
  <section ref="elementRef" class="section">
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="5">
          <div :class="{ 'animate-slide-in-left': isVisible }">
            <v-chip color="secondary" variant="tonal" class="mb-4">
              <v-icon start size="small">mdi-target</v-icon>
              Casos de uso
            </v-chip>

            <h2 class="section-title mb-4">Ideal para tu negocio</h2>

            <p class="text-body-1 mb-6" style="opacity: 0.8;">
              Jixo está diseñado específicamente para empresas que necesitan
              control total de su operación comercial y visibilidad real de sus números.
            </p>

            <div class="stats-row mb-8">
              <div class="stat-item">
                <span class="stat-number">+500</span>
                <span class="stat-label">Empresas</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-number">11</span>
                <span class="stat-label">Módulos</span>
              </div>
              <div class="stat-divider"></div>
              <div class="stat-item">
                <span class="stat-number">24/7</span>
                <span class="stat-label">Soporte</span>
              </div>
            </div>

            <v-btn
              color="primary"
              size="large"
              @click="scrollToSection('contacto')"
            >
              <v-icon start>mdi-message-text</v-icon>
              ¿Es Jixo para mí?
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" md="7">
          <div class="use-cases-grid">
            <div
              v-for="(useCase, index) in useCases"
              :key="index"
              class="use-case-card"
              :class="{ 'animate-fade-up': isVisible }"
              :style="{ animationDelay: `${index * 0.08}s` }"
            >
              <!-- Puzzle connector -->
              <div class="puzzle-tab" :class="`puzzle-tab--${useCase.variant}`"></div>

              <div class="use-case-icon" :class="`use-case-icon--${useCase.variant}`">
                <v-icon size="22" color="white">{{ useCase.icon }}</v-icon>
              </div>

              <div class="use-case-content">
                <h4 class="use-case-title">{{ useCase.title }}</h4>
                <p class="use-case-description">{{ useCase.description }}</p>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { elementRef, isVisible } = useScrollAnimation()

const useCases = [
  {
    icon: 'mdi-laptop',
    variant: 'primary',
    title: 'Distribuidores de tecnología',
    description: 'Equipos de cómputo, electrónica y accesorios',
  },
  {
    icon: 'mdi-store',
    variant: 'secondary',
    title: 'Comercializadoras',
    description: 'Ventas en marketplaces y canales múltiples',
  },
  {
    icon: 'mdi-warehouse',
    variant: 'tertiary',
    title: 'Multi-almacén',
    description: 'Empresas con múltiples ubicaciones y bodegas',
  },
  {
    icon: 'mdi-file-document-edit',
    variant: 'primary',
    title: 'Cotizadores B2B',
    description: 'Negocios con cotizaciones frecuentes',
  },
  {
    icon: 'mdi-chart-pie',
    variant: 'secondary',
    title: 'Control de costos',
    description: 'Operaciones que requieren trazabilidad',
  },
  {
    icon: 'mdi-trending-up',
    variant: 'tertiary',
    title: 'En crecimiento',
    description: 'Empresas que necesitan escalar',
  },
]

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
/* Stats row */
.stats-row {
  display: flex;
  align-items: center;
  gap: 20px;
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 1.75rem;
  font-weight: 800;
  color: rgb(var(--v-theme-primary));
  line-height: 1;
}

.stat-label {
  font-size: 0.8rem;
  color: rgb(var(--v-theme-outline));
  margin-top: 4px;
}

.stat-divider {
  width: 1px;
  height: 40px;
  background: rgb(var(--v-theme-outline-variant));
}

/* Use cases grid */
.use-cases-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (max-width: 600px) {
  .use-cases-grid {
    grid-template-columns: 1fr;
  }

  .stats-row {
    justify-content: space-between;
  }
}

.use-case-card {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 20px;
  background: rgb(var(--v-theme-surface));
  border: 1px solid rgb(var(--v-theme-outline-variant));
  border-radius: 16px;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.use-case-card:hover {
  transform: translateY(-4px) translateX(4px);
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
}

.use-case-card:hover .puzzle-tab {
  opacity: 0.4;
}

/* Puzzle tab */
.puzzle-tab {
  position: absolute;
  top: 50%;
  left: -6px;
  transform: translateY(-50%);
  width: 12px;
  height: 28px;
  border-radius: 6px 0 0 6px;
  opacity: 0.2;
  transition: opacity 0.3s ease;
}

.puzzle-tab--primary {
  background: rgb(var(--v-theme-primary));
}

.puzzle-tab--secondary {
  background: rgb(var(--v-theme-secondary));
}

.puzzle-tab--tertiary {
  background: rgb(var(--v-theme-tertiary));
}

/* Icon */
.use-case-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.use-case-icon--primary {
  background: rgb(var(--v-theme-primary));
}

.use-case-icon--secondary {
  background: rgb(var(--v-theme-secondary));
}

.use-case-icon--tertiary {
  background: rgb(var(--v-theme-tertiary));
}

/* Content */
.use-case-content {
  flex: 1;
  min-width: 0;
}

.use-case-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 4px;
}

.use-case-description {
  font-size: 0.8rem;
  color: rgb(var(--v-theme-outline));
  margin: 0;
  line-height: 1.4;
}

/* Animations */
.animate-slide-in-left {
  animation: slideInLeft 0.7s ease-out forwards;
}

.animate-fade-up {
  animation: fadeUp 0.5s ease-out forwards;
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
</style>
