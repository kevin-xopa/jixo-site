<template>
  <v-footer class="pa-0" color="primary">
    <v-container fluid class="pa-0">
      <!-- Main Footer -->
      <div class="footer-main py-12">
        <v-container>
          <v-row>
            <!-- Brand -->
            <v-col cols="12" md="4" class="mb-8 mb-md-0">
              <div class="mb-4">
                <img src="/logo-jixo-light.png" alt="Jixo" class="footer-logo" />
              </div>
              <p class="text-body-2 text-on-primary mb-4" style="opacity: 0.7; max-width: 300px;">
                Sistema integral de gestión para distribuidores y comercializadores.
                Control total de tu operación comercial.
              </p>
              <div class="d-flex ga-2">
                <v-btn icon variant="tonal" color="on-primary" size="small">
                  <v-icon>mdi-linkedin</v-icon>
                </v-btn>
                <v-btn icon variant="tonal" color="on-primary" size="small">
                  <v-icon>mdi-facebook</v-icon>
                </v-btn>
                <v-btn icon variant="tonal" color="on-primary" size="small">
                  <v-icon>mdi-twitter</v-icon>
                </v-btn>
              </div>
            </v-col>

            <!-- Links -->
            <v-col cols="6" sm="4" md="2">
              <h4 class="text-subtitle-1 font-weight-bold text-on-primary mb-4">Producto</h4>
              <div class="d-flex flex-column ga-2">
                <a
                  v-for="link in productLinks"
                  :key="link.id"
                  class="footer-link"
                  @click="scrollToSection(link.id)"
                >
                  {{ link.label }}
                </a>
              </div>
            </v-col>

            <v-col cols="6" sm="4" md="2">
              <h4 class="text-subtitle-1 font-weight-bold text-on-primary mb-4">Módulos</h4>
              <div class="d-flex flex-column ga-2">
                <a
                  v-for="module in modules"
                  :key="module"
                  class="footer-link"
                  @click="scrollToSection('funcionalidades')"
                >
                  {{ module }}
                </a>
              </div>
            </v-col>

            <v-col cols="12" sm="4" md="4">
              <h4 class="text-subtitle-1 font-weight-bold text-on-primary mb-4">Contacto</h4>
              <div class="d-flex flex-column ga-3">
                <div class="d-flex align-center">
                  <v-icon color="on-primary" size="20" class="mr-3" style="opacity: 0.7">
                    mdi-email
                  </v-icon>
                  <a href="mailto:contacto@jixo.com" class="footer-link">
                    contacto@jixo.com
                  </a>
                </div>
                <div class="d-flex align-center">
                  <v-icon color="on-primary" size="20" class="mr-3" style="opacity: 0.7">
                    mdi-phone
                  </v-icon>
                  <a href="tel:+521234567890" class="footer-link">
                    +52 (123) 456-7890
                  </a>
                </div>
                <div class="d-flex align-center">
                  <v-icon color="on-primary" size="20" class="mr-3" style="opacity: 0.7">
                    mdi-whatsapp
                  </v-icon>
                  <a href="https://wa.me/521234567890" target="_blank" class="footer-link">
                    WhatsApp
                  </a>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>

      <!-- Copyright -->
      <div class="footer-bottom py-4">
        <v-container>
          <v-row align="center">
            <v-col cols="12" md="6" class="text-center text-md-start">
              <span class="text-body-2 text-on-primary" style="opacity: 0.6">
                © {{ currentYear }} Jixo. Todos los derechos reservados.
              </span>
            </v-col>
            <v-col cols="12" md="6" class="text-center text-md-end">
              <a href="#" class="footer-link text-body-2 mr-4">Privacidad</a>
              <a href="#" class="footer-link text-body-2">Términos</a>
            </v-col>
          </v-row>
        </v-container>
      </div>
    </v-container>
  </v-footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const productLinks = [
  { id: 'funcionalidades', label: 'Funcionalidades' },
  { id: 'integraciones', label: 'Integraciones' },
  { id: 'beneficios', label: 'Beneficios' },
  { id: 'contacto', label: 'Contacto' },
]

const modules = [
  'Ventas',
  'Inventario',
  'Compras',
  'Facturación',
  'Análisis',
]

const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.footer-main {
  border-bottom: 1px solid rgba(var(--v-theme-on-primary), 0.1);
}

.footer-bottom {
  background: rgba(0, 0, 0, 0.1);
}

.footer-link {
  color: rgba(var(--v-theme-on-primary), 0.7);
  text-decoration: none;
  transition: color 0.3s ease;
  cursor: pointer;
}

.footer-link:hover {
  color: rgb(var(--v-theme-on-primary));
}

.footer-logo {
  height: 48px;
  width: auto;
}
</style>
