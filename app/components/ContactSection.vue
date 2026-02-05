<template>
  <section id="contacto" ref="elementRef" class="section contact-section">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <v-row align="center">
            <v-col cols="12" md="5" class="text-center text-md-start mb-8 mb-md-0">
              <div :class="{ 'animate-slide-in-left': isVisible }">
                <v-chip color="on-secondary" variant="flat" class="mb-4 text-secondary">
                  <v-icon start size="small">mdi-rocket-launch</v-icon>
                  Empezar
                </v-chip>

                <h2 class="text-h3 text-md-h2 font-weight-bold text-on-secondary mb-4">
                  ¿Listo para optimizar tu operación?
                </h2>
                <p class="text-body-1 text-on-secondary mb-8" style="opacity: 0.85;">
                  Agenda una demo personalizada y descubre cómo Jixo puede transformar
                  la gestión de tu negocio.
                </p>

                <div class="contact-cards">
                  <div
                    class="contact-card"
                    :class="{ 'animate-fade-up': isVisible }"
                    style="animation-delay: 0.2s;"
                  >
                    <div class="contact-card-icon">
                      <v-icon color="secondary" size="24">mdi-email</v-icon>
                    </div>
                    <div class="contact-card-content">
                      <span class="contact-card-label">Email</span>
                      <a href="mailto:contacto@jixo.com" class="contact-card-value">
                        contacto@jixo.com
                      </a>
                    </div>
                  </div>

                  <div
                    class="contact-card"
                    :class="{ 'animate-fade-up': isVisible }"
                    style="animation-delay: 0.3s;"
                  >
                    <div class="contact-card-icon">
                      <v-icon color="success" size="24">mdi-whatsapp</v-icon>
                    </div>
                    <div class="contact-card-content">
                      <span class="contact-card-label">WhatsApp</span>
                      <a href="https://wa.me/521234567890" target="_blank" class="contact-card-value">
                        +52 (123) 456-7890
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>

            <v-col cols="12" md="7">
              <div
                class="form-card"
                :class="{ 'animate-slide-in-right': isVisible }"
              >
                <!-- Puzzle decorations -->
                <div class="form-puzzle form-puzzle--1"></div>
                <div class="form-puzzle form-puzzle--2"></div>

                <h3 class="form-title">Solicitar Demo</h3>
                <p class="form-subtitle">Completa el formulario y te contactaremos pronto</p>

                <v-form ref="formRef" v-model="formValid" @submit.prevent="submitForm">
                  <div class="form-grid">
                    <v-text-field
                      v-model="form.nombre"
                      label="Nombre"
                      variant="outlined"
                      density="comfortable"
                      prepend-inner-icon="mdi-account"
                      :rules="[rules.required]"
                    />
                    <v-text-field
                      v-model="form.empresa"
                      label="Empresa"
                      variant="outlined"
                      density="comfortable"
                      prepend-inner-icon="mdi-domain"
                      :rules="[rules.required]"
                    />
                    <v-text-field
                      v-model="form.email"
                      label="Email"
                      type="email"
                      variant="outlined"
                      density="comfortable"
                      prepend-inner-icon="mdi-email"
                      :rules="[rules.required, rules.email]"
                    />
                    <v-text-field
                      v-model="form.telefono"
                      label="Teléfono"
                      variant="outlined"
                      density="comfortable"
                      prepend-inner-icon="mdi-phone"
                      :rules="[rules.required]"
                    />
                  </div>

                  <v-textarea
                    v-model="form.mensaje"
                    label="Mensaje (opcional)"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-message-text"
                    rows="3"
                    auto-grow
                    class="mb-4"
                  />

                  <v-btn
                    type="submit"
                    color="primary"
                    size="large"
                    block
                    :loading="loading"
                    :disabled="!formValid"
                  >
                    <v-icon start>mdi-send</v-icon>
                    Enviar solicitud
                  </v-btn>
                </v-form>

                <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="5000">
                  {{ snackbarText }}
                </v-snackbar>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup lang="ts">
const { elementRef, isVisible } = useScrollAnimation()

const formRef = ref()
const formValid = ref(false)
const loading = ref(false)
const snackbar = ref(false)
const snackbarText = ref('')
const snackbarColor = ref('success')

const form = reactive({
  nombre: '',
  empresa: '',
  email: '',
  telefono: '',
  mensaje: '',
})

const rules = {
  required: (v: string) => !!v || 'Este campo es requerido',
  email: (v: string) => /.+@.+\..+/.test(v) || 'Email inválido',
}

const submitForm = async () => {
  if (!formValid.value) return

  loading.value = true

  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500))

  // Show success message
  snackbarColor.value = 'success'
  snackbarText.value = '¡Gracias! Nos pondremos en contacto contigo pronto.'
  snackbar.value = true

  // Reset form
  form.nombre = ''
  form.empresa = ''
  form.email = ''
  form.telefono = ''
  form.mensaje = ''
  formRef.value?.reset()

  loading.value = false
}
</script>

<style scoped>
.contact-section {
  background: rgb(var(--v-theme-secondary));
}

/* Contact cards */
.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 16px 20px;
  background: rgba(var(--v-theme-on-secondary), 0.1);
  border-radius: 14px;
  opacity: 0;
  transition: all 0.3s ease;
}

.contact-card:hover {
  background: rgba(var(--v-theme-on-secondary), 0.15);
  transform: translateX(4px);
}

.contact-card-icon {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgb(var(--v-theme-surface));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.contact-card-content {
  display: flex;
  flex-direction: column;
}

.contact-card-label {
  font-size: 0.75rem;
  color: rgba(var(--v-theme-on-secondary), 0.7);
}

.contact-card-value {
  font-size: 1rem;
  font-weight: 600;
  color: rgb(var(--v-theme-on-secondary));
  text-decoration: none;
  transition: opacity 0.3s ease;
}

.contact-card-value:hover {
  opacity: 0.8;
}

/* Form card */
.form-card {
  position: relative;
  padding: 32px;
  background: rgb(var(--v-theme-surface));
  border-radius: 24px;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15);
  opacity: 0;
  overflow: hidden;
}

.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 4px;
  position: relative;
  z-index: 2;
}

.form-subtitle {
  font-size: 0.9rem;
  color: rgb(var(--v-theme-outline));
  margin-bottom: 24px;
  position: relative;
  z-index: 2;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 16px;
}

@media (max-width: 600px) {
  .form-grid {
    grid-template-columns: 1fr;
  }

  .form-card {
    padding: 24px;
  }
}

/* Puzzle decorations */
.form-puzzle {
  position: absolute;
  pointer-events: none;
}

.form-puzzle--1 {
  top: -30px;
  right: -30px;
  width: 100px;
  height: 100px;
  background: rgb(var(--v-theme-primary));
  border-radius: 24px 24px 24px 50px;
  opacity: 0.06;
}

.form-puzzle--2 {
  bottom: -20px;
  left: -20px;
  width: 70px;
  height: 70px;
  background: rgb(var(--v-theme-secondary));
  border-radius: 50px 24px 24px 24px;
  opacity: 0.06;
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
</style>
