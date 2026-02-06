<template>
  <section id="contacto" ref="elementRef" class="section contact-section">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" lg="10">
          <div class="contact-wrapper" :class="{ 'animate-scale-in': isVisible }">
            <!-- Left side - decorative -->
            <div class="contact-left">
              <div class="contact-left-content">
                <v-chip color="primary" variant="flat" class="mb-4">
                  <v-icon start size="small">mdi-rocket-launch</v-icon>
                  Empezar
                </v-chip>

                <h2 class="contact-title">
                  ¿Listo para optimizar tu operación?
                </h2>
                <p class="contact-subtitle">
                  Agenda una demo personalizada y descubre cómo Jixo puede transformar
                  la gestión de tu negocio.
                </p>

                <div class="contact-info">
                  <a href="mailto:contacto@jixo.com" class="contact-link">
                    <v-icon size="20">mdi-email-outline</v-icon>
                    <span>contacto@jixo.com</span>
                  </a>
                  <a href="https://wa.me/522491794353" target="_blank" class="contact-link contact-link--whatsapp">
                    <v-icon size="20">mdi-whatsapp</v-icon>
                    <span>+52 (249) 179-4353</span>
                  </a>
                </div>
              </div>

              <!-- Decorative puzzle shapes -->
              <div class="puzzle-deco puzzle-deco--1"></div>
              <div class="puzzle-deco puzzle-deco--2"></div>
              <div class="puzzle-deco puzzle-deco--3"></div>
            </div>

            <!-- Right side - form -->
            <div class="contact-right">
              <div class="form-header">
                <h3 class="form-title">Solicitar Demo</h3>
                <p class="form-subtitle">Te contactaremos en menos de 24 horas</p>
              </div>

              <v-form ref="formRef" v-model="formValid" @submit.prevent="submitForm">
                <div class="form-grid">
                  <v-text-field
                    v-model="form.nombre"
                    label="Nombre"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-account"
                    :rules="[rules.required]"
                    color="primary"
                  />
                  <v-text-field
                    v-model="form.empresa"
                    label="Empresa"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-domain"
                    :rules="[rules.required]"
                    color="primary"
                  />
                  <v-text-field
                    v-model="form.email"
                    label="Email"
                    type="email"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-email"
                    :rules="[rules.required, rules.email]"
                    color="primary"
                  />
                  <v-text-field
                    v-model="form.telefono"
                    label="Teléfono"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-phone"
                    :rules="[rules.required]"
                    color="primary"
                  />
                </div>

                <v-textarea
                  v-model="form.mensaje"
                  label="¿En qué podemos ayudarte?"
                  variant="outlined"
                  density="comfortable"
                  prepend-inner-icon="mdi-message-text"
                  rows="3"
                  auto-grow
                  class="mb-4"
                  color="primary"
                />

                <v-btn
                  type="submit"
                  color="primary"
                  size="large"
                  block
                  :loading="loading"
                  :disabled="!formValid"
                  class="submit-btn"
                >
                  <v-icon start>mdi-send</v-icon>
                  Enviar solicitud
                </v-btn>
              </v-form>

              <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="5000">
                {{ snackbarText }}
              </v-snackbar>
            </div>
          </div>
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
  background: rgb(var(--v-theme-surface-variant));
}

.contact-wrapper {
  display: flex;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 24px 64px rgba(0, 0, 0, 0.12);
  opacity: 0;
}

/* Left side */
.contact-left {
  position: relative;
  flex: 0 0 42%;
  background: rgb(var(--v-theme-primary));
  padding: 48px 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}

.contact-left-content {
  position: relative;
  z-index: 2;
}

.contact-title {
  font-size: 2rem;
  font-weight: 800;
  color: rgb(var(--v-theme-on-primary));
  line-height: 1.2;
  margin-bottom: 16px;
}

.contact-subtitle {
  font-size: 1rem;
  color: rgb(var(--v-theme-on-primary));
  opacity: 0.85;
  line-height: 1.6;
  margin-bottom: 32px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.contact-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  background: rgba(var(--v-theme-on-primary), 0.1);
  border-radius: 12px;
  color: rgb(var(--v-theme-on-primary));
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
}

.contact-link:hover {
  background: rgba(var(--v-theme-on-primary), 0.2);
  transform: translateX(4px);
}

.contact-link--whatsapp:hover {
  background: rgba(37, 211, 102, 0.3);
}

/* Puzzle decorations */
.puzzle-deco {
  position: absolute;
  pointer-events: none;
}

.puzzle-deco--1 {
  top: -40px;
  right: -40px;
  width: 150px;
  height: 150px;
  background: rgba(var(--v-theme-on-primary), 0.08);
  border-radius: 30px 30px 30px 60px;
}

.puzzle-deco--2 {
  bottom: -30px;
  left: -30px;
  width: 120px;
  height: 120px;
  background: rgba(var(--v-theme-on-primary), 0.06);
  border-radius: 60px 30px 30px 30px;
}

.puzzle-deco--3 {
  top: 50%;
  right: -20px;
  transform: translateY(-50%);
  width: 40px;
  height: 80px;
  background: rgba(var(--v-theme-on-primary), 0.1);
  border-radius: 20px 0 0 20px;
}

/* Right side */
.contact-right {
  flex: 1;
  background: rgb(var(--v-theme-surface));
  padding: 48px 40px;
}

.form-header {
  margin-bottom: 28px;
}

.form-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: rgb(var(--v-theme-on-surface));
  margin-bottom: 4px;
}

.form-subtitle {
  font-size: 0.9rem;
  color: rgb(var(--v-theme-outline));
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-bottom: 16px;
}

.submit-btn {
  margin-top: 8px;
}

/* Mobile responsive */
@media (max-width: 960px) {
  .contact-wrapper {
    flex-direction: column;
    border-radius: 24px;
  }

  .contact-left {
    flex: none;
    padding: 40px 32px;
  }

  .contact-title {
    font-size: 1.5rem;
  }

  .contact-right {
    padding: 32px;
  }

  .form-grid {
    grid-template-columns: 1fr;
  }

  .puzzle-deco--3 {
    display: none;
  }
}

/* Animations */
.animate-scale-in {
  animation: scaleIn 0.7s ease-out forwards;
}

@keyframes scaleIn {
  from {
    opacity: 0;
    transform: scale(0.95) translateY(20px);
  }
  to {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
</style>
