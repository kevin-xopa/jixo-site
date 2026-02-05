<template>
  <section ref="elementRef" class="section">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <v-card
            class="portal-card pa-8 pa-md-12"
            :class="{ 'animate-scale-in': isVisible }"
            color="primary"
            variant="flat"
          >
            <v-row align="center">
              <v-col cols="12" md="5">
                <div :class="{ 'animate-slide-in-left': isVisible }" style="animation-delay: 0.2s;">
                  <v-chip color="success" variant="flat" class="mb-4">
                    <v-icon start size="small">mdi-check-circle</v-icon>
                    Disponible
                  </v-chip>

                  <h2 class="text-h4 text-md-h3 font-weight-bold text-on-primary mb-4">
                    Portal de clientes integrado
                  </h2>

                  <p class="text-body-1 text-on-primary mb-6" style="opacity: 0.85;">
                    Tu tienda online completamente sincronizada con tu operación.
                    Tus clientes pueden comprar, consultar facturas y gestionar pedidos 24/7.
                  </p>

                  <div class="features-grid mb-6">
                    <div
                      v-for="(feature, index) in features"
                      :key="index"
                      class="feature-card"
                      :class="{ 'animate-fade-up': isVisible }"
                      :style="{ animationDelay: `${0.2 + index * 0.06}s` }"
                    >
                      <div class="feature-icon-mini">
                        <v-icon :color="feature.color" size="18">{{ feature.icon }}</v-icon>
                      </div>
                      <span class="feature-text">{{ feature.text }}</span>
                    </div>
                  </div>

                  <v-btn
                    color="on-primary"
                    variant="flat"
                    size="large"
                    class="text-primary"
                    @click="scrollToSection('contacto')"
                  >
                    <v-icon start>mdi-play-circle-outline</v-icon>
                    Solicitar demo
                  </v-btn>
                </div>
              </v-col>

              <v-col cols="12" md="7" class="d-none d-md-block">
                <div
                  class="portal-image-wrapper"
                  :class="{ 'animate-slide-in-right': isVisible }"
                >
                  <img
                    src="/portal-clientes.png"
                    alt="Portal de clientes Jixo"
                    class="portal-image"
                  />
                </div>
              </v-col>
            </v-row>

            <!-- Decorative elements -->
            <div class="decorative-shape decorative-shape--1"></div>
            <div class="decorative-shape decorative-shape--2"></div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { elementRef, isVisible } = useScrollAnimation()

const features = [
  { icon: 'mdi-warehouse', text: 'Catálogo multi-almacén en tiempo real', color: 'tertiary' },
  { icon: 'mdi-history', text: 'Historial de pedidos del cliente', color: 'tertiary' },
  { icon: 'mdi-credit-card-outline', text: 'Pasarela de pagos integrada', color: 'tertiary' },
  { icon: 'mdi-account-key-outline', text: 'Autenticación de clientes', color: 'tertiary' },
  { icon: 'mdi-sale', text: 'Gestor de promociones', color: 'tertiary' },
  { icon: 'mdi-file-document-check-outline', text: 'Facturación integrada', color: 'tertiary' },
  { icon: 'mdi-package-variant-closed-remove', text: 'Devoluciones con flujo completo', color: 'tertiary' },
  { icon: 'mdi-sync', text: 'Mismo backoffice, cero duplicidad', color: 'tertiary' },
]

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.portal-card {
  position: relative;
  overflow: hidden;
  opacity: 0;
}

.portal-image-wrapper {
  position: relative;
  opacity: 0;
}

.portal-image {
  width: 100%;
  height: auto;
  border-radius: 16px;
  filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15));
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

@media (max-width: 600px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  background: rgba(var(--v-theme-on-primary), 0.1);
  border-radius: 12px;
  opacity: 0;
  transition: all 0.3s ease;
}

.feature-card:hover {
  background: rgba(var(--v-theme-on-primary), 0.18);
  transform: translateX(4px);
}

.feature-icon-mini {
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: rgba(var(--v-theme-on-primary), 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.feature-icon-mini :deep(.v-icon) {
  color: rgb(var(--v-theme-on-primary)) !important;
}

.feature-text {
  font-size: 0.8rem;
  font-weight: 500;
  color: rgb(var(--v-theme-on-primary));
  line-height: 1.3;
}

/* Decorative shapes */
.decorative-shape {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}

.decorative-shape--1 {
  top: -60px;
  right: -60px;
  width: 200px;
  height: 200px;
  background: rgba(var(--v-theme-on-primary), 0.08);
}

.decorative-shape--2 {
  bottom: -40px;
  left: -40px;
  width: 150px;
  height: 150px;
  background: rgba(var(--v-theme-on-primary), 0.05);
}

/* Animations */
.animate-scale-in {
  animation: scaleIn 0.6s ease-out forwards;
}

.animate-slide-in-left {
  animation: slideInLeft 0.7s ease-out forwards;
}

.animate-slide-in-right {
  animation: slideInRight 0.7s ease-out forwards;
}

.animate-fade-up {
  animation: fadeUp 0.5s ease-out forwards;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(15px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
