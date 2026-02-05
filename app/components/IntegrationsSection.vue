<template>
  <section id="integraciones" ref="elementRef" class="section section-alt">
    <v-container>
      <div
        class="text-center mb-12"
        :class="{ 'animate-fade-up': isVisible }"
      >
        <v-chip color="secondary" variant="tonal" class="mb-4">
          <v-icon start size="small">mdi-connection</v-icon>
          Integraciones
        </v-chip>
        <h2 class="section-title">Conectado con tu ecosistema</h2>
        <p class="section-subtitle">
          Integración nativa con las plataformas y servicios que ya utilizas
        </p>
      </div>

      <v-row justify="center">
        <v-col cols="12" lg="10" xl="8">
          <div class="integrations-grid">
            <div
              v-for="(integration, index) in integrations"
              :key="integration.name"
              class="integration-card-wrapper"
              :class="{ 'animate-scale-in': isVisible }"
              :style="{ animationDelay: `${index * 0.08}s` }"
            >
              <div class="integration-card" :class="`integration-card--${integration.variant}`">
                <!-- Puzzle connector shapes -->
                <div class="puzzle-connector-top" :class="`puzzle-connector--${integration.variant}`"></div>
                <div class="puzzle-connector-right" :class="`puzzle-connector--${integration.variant}`"></div>

                <!-- Icon with gradient background -->
                <div
                  class="integration-icon"
                  :style="{ background: integration.gradient }"
                >
                  <v-icon color="white" size="28">{{ integration.icon }}</v-icon>
                </div>

                <!-- Content -->
                <h3 class="integration-title">{{ integration.name }}</h3>
                <p class="integration-description">{{ integration.description }}</p>

                <!-- Status indicator -->
                <div class="integration-status">
                  <span class="status-dot"></span>
                  <span class="status-text">Activo</span>
                </div>

                <!-- Hover glow effect -->
                <div class="integration-glow" :style="{ background: integration.glowColor }"></div>
              </div>
            </div>
          </div>
        </v-col>
      </v-row>

      <!-- Coming soon integrations -->
      <div class="text-center mt-10">
        <p class="text-body-2 mb-4" style="opacity: 0.7;">Próximamente</p>
        <div class="coming-soon-chips">
          <v-chip
            v-for="(item, index) in comingSoon"
            :key="item"
            variant="outlined"
            size="small"
            class="coming-chip"
            :class="{ 'animate-fade-up': isVisible }"
            :style="{ animationDelay: `${0.5 + index * 0.1}s` }"
          >
            {{ item }}
          </v-chip>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { elementRef, isVisible } = useScrollAnimation()

const integrations = [
  {
    name: 'MercadoLibre',
    icon: 'mdi-shopping',
    gradient: 'linear-gradient(135deg, #FFE600, #f59e0b)',
    glowColor: 'rgba(245, 158, 11, 0.15)',
    variant: 'primary',
    description: 'Ventas, publicaciones y fulfillment sincronizados',
  },
  {
    name: 'Syscom',
    icon: 'mdi-chip',
    gradient: 'linear-gradient(135deg, #1976D2, #3b82f6)',
    glowColor: 'rgba(59, 130, 246, 0.15)',
    variant: 'secondary',
    description: 'Catálogo, precios y órdenes de compra',
  },
  {
    name: 'Tecnosinergia',
    icon: 'mdi-memory',
    gradient: 'linear-gradient(135deg, #424242, #64748b)',
    glowColor: 'rgba(100, 116, 139, 0.15)',
    variant: 'tertiary',
    description: 'Catálogo mayorista actualizado',
  },
  {
    name: 'SEPOMEX',
    icon: 'mdi-map-marker-check',
    gradient: 'linear-gradient(135deg, #4CAF50, #22c55e)',
    glowColor: 'rgba(34, 197, 94, 0.15)',
    variant: 'primary',
    description: 'Validación de direcciones nacional',
  },
  {
    name: 'PAC CFDI',
    icon: 'mdi-file-certificate',
    gradient: 'linear-gradient(135deg, #9C27B0, #a855f7)',
    glowColor: 'rgba(168, 85, 247, 0.15)',
    variant: 'secondary',
    description: 'Facturación electrónica CFDI 4.0',
  },
  {
    name: 'WhatsApp',
    icon: 'mdi-whatsapp',
    gradient: 'linear-gradient(135deg, #25D366, #22c55e)',
    glowColor: 'rgba(37, 211, 102, 0.15)',
    variant: 'tertiary',
    description: 'Notificaciones automáticas a clientes',
  },
]

const comingSoon = ['Amazon', 'Shopify', 'WooCommerce', 'CT Internacional']
</script>

<style scoped>
.integrations-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 960px) {
  .integrations-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .integrations-grid {
    grid-template-columns: 1fr;
  }
}

.integration-card-wrapper {
  opacity: 0;
}

.integration-card {
  position: relative;
  padding: 24px 20px;
  background: rgb(var(--v-theme-surface));
  border: 1px solid rgb(var(--v-theme-outline-variant));
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.integration-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.integration-card:hover .integration-glow {
  opacity: 1;
}

.integration-card:hover .puzzle-connector-top,
.integration-card:hover .puzzle-connector-right {
  opacity: 0.3;
}

/* Puzzle connector shapes */
.puzzle-connector-top {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 24px;
  height: 16px;
  border-radius: 0 0 12px 12px;
  opacity: 0.15;
  transition: opacity 0.3s ease;
}

.puzzle-connector-right {
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 24px;
  border-radius: 12px 0 0 12px;
  opacity: 0.15;
  transition: opacity 0.3s ease;
}

.puzzle-connector--primary {
  background: rgb(var(--v-theme-primary));
}

.puzzle-connector--secondary {
  background: rgb(var(--v-theme-secondary));
}

.puzzle-connector--tertiary {
  background: rgb(var(--v-theme-tertiary));
}

/* Icon */
.integration-icon {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  position: relative;
  z-index: 2;
}

/* Content */
.integration-title {
  font-size: 1rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 6px;
  position: relative;
  z-index: 2;
}

.integration-description {
  font-size: 0.8rem;
  color: rgb(var(--v-theme-outline));
  margin: 0 0 12px 0;
  line-height: 1.4;
  position: relative;
  z-index: 2;
}

/* Status indicator */
.integration-status {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 10px;
  background: rgba(var(--v-theme-success), 0.1);
  border-radius: 20px;
  position: relative;
  z-index: 2;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgb(var(--v-theme-success));
  animation: pulse 2s infinite;
}

.status-text {
  font-size: 0.7rem;
  font-weight: 500;
  color: rgb(var(--v-theme-success));
}

/* Glow effect */
.integration-glow {
  position: absolute;
  inset: 0;
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

/* Coming soon */
.coming-soon-chips {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
}

.coming-chip {
  opacity: 0;
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
    transform: scale(0.9);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
</style>
