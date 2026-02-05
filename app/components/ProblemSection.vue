<template>
  <section ref="elementRef" class="section">
    <v-container>
      <div
        class="text-center mb-12"
        :class="{ 'animate-fade-up': isVisible }"
      >
        <v-chip color="tertiary" variant="tonal" class="mb-4">
          <v-icon start size="small">mdi-lightbulb-outline</v-icon>
          Desafíos comunes
        </v-chip>
        <h2 class="section-title">¿Te suena familiar?</h2>
        <p class="section-subtitle">
          Estos son los problemas más comunes que enfrentan los distribuidores y comercializadores
        </p>
      </div>

      <v-row justify="center">
        <v-col cols="12" lg="10">
          <div class="problems-grid">
            <div
              v-for="(problem, index) in problems"
              :key="index"
              class="problem-card"
              :class="{ 'animate-fade-up': isVisible }"
              :style="{ animationDelay: `${index * 0.08}s` }"
            >
              <div class="problem-number">{{ String(index + 1).padStart(2, '0') }}</div>
              <div class="problem-content">
                <div class="problem-icon-wrapper">
                  <v-icon size="20" color="tertiary">{{ problem.icon }}</v-icon>
                </div>
                <div>
                  <h3 class="problem-title">{{ problem.title }}</h3>
                  <p class="problem-description">{{ problem.description }}</p>
                </div>
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

const problems = [
  {
    icon: 'mdi-warehouse',
    title: 'Inventarios desactualizados',
    description: 'Múltiples almacenes sin sincronización en tiempo real.',
  },
  {
    icon: 'mdi-connection',
    title: 'Ventas desconectadas',
    description: 'Marketplaces y mostrador en sistemas separados.',
  },
  {
    icon: 'mdi-file-document-alert-outline',
    title: 'Cotizaciones sin control',
    description: 'No reflejan stock real ni costos actualizados.',
  },
  {
    icon: 'mdi-cart-remove',
    title: 'Backorders invisibles',
    description: 'Sin visibilidad de lo pendiente por recibir.',
  },
  {
    icon: 'mdi-currency-usd-off',
    title: 'Costos ocultos',
    description: 'Gastos que erosionan márgenes sin identificar.',
  },
  {
    icon: 'mdi-chart-timeline-variant',
    title: 'Sin visibilidad real',
    description: 'No conoces la utilidad real de cada venta.',
  },
]
</script>

<style scoped>
.problems-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}

@media (max-width: 768px) {
  .problems-grid {
    grid-template-columns: 1fr;
  }
}

.problem-card {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  padding: 20px 24px;
  background: rgb(var(--v-theme-surface));
  border: 1px solid rgb(var(--v-theme-outline-variant));
  border-radius: 16px;
  opacity: 0;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.problem-card:hover {
  transform: translateX(8px);
  border-color: rgb(var(--v-theme-tertiary));
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
}

.problem-number {
  font-size: 2rem;
  font-weight: 800;
  color: rgb(var(--v-theme-tertiary));
  opacity: 0.2;
  line-height: 1;
  flex-shrink: 0;
}

.problem-content {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  flex: 1;
}

.problem-icon-wrapper {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background: rgb(var(--v-theme-tertiary-container));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.problem-title {
  font-size: 0.95rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 4px;
}

.problem-description {
  font-size: 0.85rem;
  color: rgb(var(--v-theme-outline));
  margin: 0;
  line-height: 1.4;
}

/* Animations */
.animate-fade-up {
  animation: fadeUp 0.5s ease-out forwards;
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
