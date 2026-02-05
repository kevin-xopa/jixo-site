<template>
  <section id="beneficios" ref="elementRef" class="section section-alt">
    <v-container>
      <div
        class="text-center mb-12"
        :class="{ 'animate-fade-up': isVisible }"
      >
        <v-chip color="success" variant="tonal" class="mb-4">
          <v-icon start size="small">mdi-trophy</v-icon>
          Beneficios
        </v-chip>
        <h2 class="section-title">Valor para cada área de tu empresa</h2>
        <p class="section-subtitle">
          Jixo impacta positivamente en todas las áreas de tu organización
        </p>
      </div>

      <v-row justify="center">
        <v-col
          v-for="(benefit, index) in benefits"
          :key="benefit.title"
          cols="12"
          md="4"
        >
          <div
            class="benefit-card-wrapper"
            :class="{ 'animate-scale-in': isVisible }"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            <div class="benefit-card" :class="`benefit-card--${benefit.variant}`">
              <!-- Puzzle decorations -->
              <div class="puzzle-deco puzzle-deco--top" :class="`puzzle-deco--${benefit.variant}`"></div>
              <div class="puzzle-deco puzzle-deco--bottom" :class="`puzzle-deco--${benefit.variant}`"></div>

              <!-- Header -->
              <div class="benefit-header">
                <div class="benefit-icon" :class="`benefit-icon--${benefit.variant}`">
                  <v-icon color="white" size="28">{{ benefit.icon }}</v-icon>
                </div>
                <h3 class="benefit-title">{{ benefit.title }}</h3>
                <p class="benefit-subtitle">{{ benefit.subtitle }}</p>
              </div>

              <!-- Items -->
              <div class="benefit-items">
                <div
                  v-for="(item, idx) in benefit.items"
                  :key="idx"
                  class="benefit-item"
                >
                  <div class="benefit-check" :class="`benefit-check--${benefit.variant}`">
                    <v-icon size="14" color="white">mdi-check</v-icon>
                  </div>
                  <span>{{ item }}</span>
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

const benefits = [
  {
    title: 'Para Operaciones',
    subtitle: 'Eficiencia en cada proceso',
    icon: 'mdi-cog',
    variant: 'primary',
    items: [
      'Menos errores manuales',
      'Procesos automatizados',
      'Un solo sistema unificado',
      'Flujos de trabajo claros',
      'Mayor productividad',
    ],
  },
  {
    title: 'Para Finanzas',
    subtitle: 'Control total de números',
    icon: 'mdi-calculator',
    variant: 'secondary',
    items: [
      'Costos reales por venta',
      'Márgenes precisos',
      'Control de flujo de efectivo',
      'Facturación automatizada',
      'Reportes financieros',
    ],
  },
  {
    title: 'Para Dirección',
    subtitle: 'Decisiones informadas',
    icon: 'mdi-account-tie',
    variant: 'tertiary',
    items: [
      'Visibilidad 360° del negocio',
      'Decisiones basadas en datos',
      'Escalabilidad garantizada',
      'KPIs en tiempo real',
      'Control total de operación',
    ],
  },
]
</script>

<style scoped>
.benefit-card-wrapper {
  height: 100%;
  opacity: 0;
}

.benefit-card {
  position: relative;
  height: 100%;
  padding: 28px 24px;
  background: rgb(var(--v-theme-surface));
  border: 1px solid rgb(var(--v-theme-outline-variant));
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.benefit-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.12);
}

.benefit-card:hover .puzzle-deco--top {
  transform: scale(1.2) rotate(15deg);
  opacity: 0.15;
}

.benefit-card:hover .puzzle-deco--bottom {
  transform: scale(1.1) rotate(-10deg);
  opacity: 0.1;
}

/* Puzzle decorations */
.puzzle-deco {
  position: absolute;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  pointer-events: none;
}

.puzzle-deco--top {
  top: -20px;
  right: -20px;
  width: 100px;
  height: 100px;
  border-radius: 24px 24px 24px 50px;
  opacity: 0.08;
}

.puzzle-deco--bottom {
  bottom: -30px;
  left: -30px;
  width: 80px;
  height: 80px;
  border-radius: 50px 24px 24px 24px;
  opacity: 0.05;
}

.puzzle-deco--primary {
  background: rgb(var(--v-theme-primary));
}

.puzzle-deco--secondary {
  background: rgb(var(--v-theme-secondary));
}

.puzzle-deco--tertiary {
  background: rgb(var(--v-theme-tertiary));
}

/* Header */
.benefit-header {
  position: relative;
  z-index: 2;
  text-align: center;
  margin-bottom: 24px;
}

.benefit-icon {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
}

.benefit-icon--primary {
  background: rgb(var(--v-theme-primary));
}

.benefit-icon--secondary {
  background: rgb(var(--v-theme-secondary));
}

.benefit-icon--tertiary {
  background: rgb(var(--v-theme-tertiary));
}

.benefit-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 4px;
}

.benefit-subtitle {
  font-size: 0.85rem;
  color: rgb(var(--v-theme-outline));
  margin: 0;
}

/* Items */
.benefit-items {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.benefit-item {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  color: rgb(var(--v-theme-on-surface));
}

.benefit-check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.benefit-check--primary {
  background: rgb(var(--v-theme-primary));
}

.benefit-check--secondary {
  background: rgb(var(--v-theme-secondary));
}

.benefit-check--tertiary {
  background: rgb(var(--v-theme-tertiary));
}

/* Animations */
.animate-fade-up {
  animation: fadeUp 0.6s ease-out forwards;
}

.animate-scale-in {
  animation: scaleIn 0.5s ease-out forwards;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
