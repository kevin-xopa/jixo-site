<template>
  <section id="funcionalidades" ref="elementRef" class="section">
    <v-container>
      <div
        class="text-center mb-12"
        :class="{ 'animate-fade-up': isVisible }"
      >
        <v-chip color="primary" variant="tonal" class="mb-4">
          <v-icon start size="small">mdi-apps</v-icon>
          Funcionalidades
        </v-chip>
        <h2 class="section-title">Todo lo que necesitas en un solo lugar</h2>
        <p class="section-subtitle">
          11 módulos integrados para gestionar cada aspecto de tu operación
        </p>
      </div>

      <v-row justify="center">
        <v-col
          v-for="(feature, index) in features"
          :key="feature.title"
          cols="6"
          sm="4"
          md="3"
          lg="3"
          xl="2"
        >
          <div
            class="feature-card-wrapper"
            :class="{ 'animate-scale-in': isVisible }"
            :style="{ animationDelay: `${index * 0.04}s` }"
          >
            <div class="feature-card" :class="`feature-card--${feature.variant}`">
              <!-- Puzzle shape background -->
              <div class="puzzle-bg">
                <div class="puzzle-shape" :class="`puzzle-shape--${feature.variant}`"></div>
                <div class="puzzle-shape-sm" :class="`puzzle-shape-sm--${feature.variant}`"></div>
              </div>

              <!-- Icon -->
              <div class="feature-icon" :class="`feature-icon--${feature.variant}`">
                <v-icon color="white" size="22">{{ feature.icon }}</v-icon>
              </div>

              <!-- Title -->
              <h3 class="feature-title">{{ feature.title }}</h3>

              <!-- Description -->
              <p class="feature-description">{{ feature.description }}</p>

              <!-- Items count badge -->
              <div class="feature-badge" :class="`feature-badge--${feature.variant}`">
                {{ feature.items.length }} funciones
              </div>

              <!-- Hover overlay with items -->
              <div class="feature-overlay">
                <div class="feature-items">
                  <div
                    v-for="(item, idx) in feature.items"
                    :key="idx"
                    class="feature-item"
                  >
                    <span class="feature-dot"></span>
                    <span>{{ item }}</span>
                  </div>
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

const features = [
  {
    icon: 'mdi-cart-outline',
    variant: 'primary',
    title: 'Ventas',
    description: 'Gestiona todos tus canales de venta en un solo lugar',
    items: ['MercadoLibre', 'Sync catálogo', 'Cotizaciones', 'Kits'],
  },
  {
    icon: 'mdi-cash-register',
    variant: 'secondary',
    title: 'POS',
    description: 'Punto de venta ágil para tu mostrador',
    items: ['Caja rápida', 'Multi-pago', 'Cortes', 'Facturación'],
  },
  {
    icon: 'mdi-truck-delivery-outline',
    variant: 'tertiary',
    title: 'Logística',
    description: 'Control total de envíos y devoluciones',
    items: ['Picking', 'Guías envío', 'RMA', 'Trazabilidad'],
  },
  {
    icon: 'mdi-warehouse',
    variant: 'primary',
    title: 'Inventario',
    description: 'Stock en tiempo real en todos tus almacenes',
    items: ['Multi-almacén', 'Traspasos', 'Reservas', 'Alertas'],
  },
  {
    icon: 'mdi-cart-arrow-down',
    variant: 'secondary',
    title: 'Compras',
    description: 'Optimiza tus órdenes con proveedores',
    items: ['Backorders', 'Proveedores', 'Descuentos', 'Tracking'],
  },
  {
    icon: 'mdi-file-document-outline',
    variant: 'tertiary',
    title: 'Facturación',
    description: 'Timbrado automático CFDI 4.0',
    items: ['CFDI 4.0', 'Timbrado', 'Pagos', 'Notas crédito'],
  },
  {
    icon: 'mdi-chart-line',
    variant: 'primary',
    title: 'Análisis',
    description: 'Métricas y reportes para decisiones informadas',
    items: ['KPIs', 'Gastos', 'Utilidad', 'Rentabilidad'],
  },
  {
    icon: 'mdi-account-group-outline',
    variant: 'secondary',
    title: 'CRM',
    description: 'Conoce y segmenta a tus clientes',
    items: ['Historial', 'SEPOMEX', 'Segmentos', 'Relaciones'],
  },
  {
    icon: 'mdi-bell-outline',
    variant: 'tertiary',
    title: 'Alertas',
    description: 'Notificaciones automáticas multicanal',
    items: ['Email', 'WhatsApp', 'Configurables', 'Push'],
  },
  {
    icon: 'mdi-shield-account-outline',
    variant: 'primary',
    title: 'Admin',
    description: 'Control de accesos y permisos granular',
    items: ['Usuarios', 'Roles', 'Auditoría', 'Accesos'],
  },
  {
    icon: 'mdi-account-circle-outline',
    variant: 'secondary',
    title: 'Portal',
    description: 'Autoservicio 24/7 para tus clientes',
    items: ['Web clientes', 'Facturas 24/7', 'Autogestión', 'Historial'],
  },
]
</script>

<style scoped>
.feature-card-wrapper {
  height: 100%;
  opacity: 0;
}

.feature-card {
  position: relative;
  height: 100%;
  min-height: 180px;
  padding: 20px 16px;
  border-radius: 20px;
  background: rgb(var(--v-theme-surface));
  border: 1px solid rgb(var(--v-theme-outline-variant));
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.feature-card:hover .puzzle-shape {
  transform: scale(1.3) rotate(10deg);
  opacity: 0.2;
}

.feature-card:hover .puzzle-shape-sm {
  transform: scale(1.2) rotate(-10deg);
  opacity: 0.15;
}

.feature-card:hover .feature-overlay {
  opacity: 1;
  transform: translateY(0);
}

.feature-card:hover .feature-badge {
  opacity: 0;
}

/* Puzzle background shapes */
.puzzle-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.puzzle-shape {
  position: absolute;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.08;
}

.puzzle-shape--primary {
  top: -30px;
  right: -30px;
  width: 80px;
  height: 80px;
  background: rgb(var(--v-theme-primary));
  border-radius: 16px 16px 16px 40px;
}

.puzzle-shape--secondary {
  top: -25px;
  right: -25px;
  width: 75px;
  height: 75px;
  background: rgb(var(--v-theme-secondary));
  border-radius: 40px 16px 16px 16px;
}

.puzzle-shape--tertiary {
  top: -28px;
  right: -28px;
  width: 78px;
  height: 78px;
  background: rgb(var(--v-theme-tertiary));
  border-radius: 16px 40px 16px 16px;
}

.puzzle-shape-sm {
  position: absolute;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0.05;
}

.puzzle-shape-sm--primary {
  bottom: -20px;
  left: -20px;
  width: 50px;
  height: 50px;
  background: rgb(var(--v-theme-primary));
  border-radius: 16px 30px 16px 16px;
}

.puzzle-shape-sm--secondary {
  bottom: -18px;
  left: -18px;
  width: 48px;
  height: 48px;
  background: rgb(var(--v-theme-secondary));
  border-radius: 16px 16px 30px 16px;
}

.puzzle-shape-sm--tertiary {
  bottom: -22px;
  left: -22px;
  width: 52px;
  height: 52px;
  background: rgb(var(--v-theme-tertiary));
  border-radius: 30px 16px 16px 16px;
}

/* Icon */
.feature-icon {
  position: relative;
  z-index: 2;
  width: 48px;
  height: 48px;
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
}

.feature-icon--primary {
  background: rgb(var(--v-theme-primary));
}

.feature-icon--secondary {
  background: rgb(var(--v-theme-secondary));
}

.feature-icon--tertiary {
  background: rgb(var(--v-theme-tertiary));
}

/* Title */
.feature-title {
  position: relative;
  z-index: 2;
  font-size: 0.95rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 4px;
}

/* Description */
.feature-description {
  position: relative;
  z-index: 2;
  font-size: 0.7rem;
  color: rgb(var(--v-theme-outline));
  margin: 0 0 8px 0;
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Badge */
.feature-badge {
  position: relative;
  z-index: 2;
  font-size: 0.7rem;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 20px;
  transition: opacity 0.3s ease;
}

.feature-badge--primary {
  background: rgb(var(--v-theme-primary-container));
  color: rgb(var(--v-theme-on-primary-container));
}

.feature-badge--secondary {
  background: rgb(var(--v-theme-secondary-container));
  color: rgb(var(--v-theme-on-secondary-container));
}

.feature-badge--tertiary {
  background: rgb(var(--v-theme-tertiary-container));
  color: rgb(var(--v-theme-on-tertiary-container));
}

/* Hover overlay */
.feature-overlay {
  position: absolute;
  inset: 0;
  background: rgb(var(--v-theme-surface));
  padding: 16px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(10px);
  transition: all 0.3s ease;
  z-index: 3;
  border-radius: 20px;
}

.feature-items {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.75rem;
  color: rgb(var(--v-theme-on-surface));
}

.feature-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: rgb(var(--v-theme-primary));
  flex-shrink: 0;
}

/* Animations */
.animate-scale-in {
  animation: scaleIn 0.5s ease-out forwards;
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
