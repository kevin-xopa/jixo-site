# Jixo Landing Page - Especificaciones

## Stack Tecnológico

- **Framework**: Nuxt 3
- **UI Library**: Vuetify 3
- **Colores**: Pendiente (se definirán en Vuetify Play)

---

## Estructura de Secciones

### 1. Hero Section

**Objetivo**: Captar atención inmediata y comunicar propuesta de valor.

```
Componente: HeroSection.vue

Contenido:
- Título: "Control total de tu operación comercial"
- Subtítulo: "Sistema integral de gestión para distribuidores y comercializadores"
- CTA primario: "Solicitar demo" (botón destacado)
- CTA secundario: "Ver funcionalidades" (scroll a sección)
- Imagen/Ilustración: Dashboard o mockup del sistema (opcional)

Vuetify:
- v-container fluid
- v-row/v-col para layout responsive
- v-btn para CTAs
```

---

### 2. Problema Section

**Objetivo**: Generar identificación con el dolor del cliente.

```
Componente: ProblemSection.vue

Contenido (lista de problemas):
- Inventarios desactualizados entre múltiples almacenes
- Ventas en marketplaces desconectadas del sistema interno
- Cotizaciones manuales que no reflejan stock real
- Órdenes de compra fragmentadas sin visibilidad de backorders
- Costos operativos ocultos que erosionan márgenes

Vuetify:
- v-container
- v-card con v-list o grid de íconos con texto
- Íconos de mdi (mdi-alert-circle, mdi-connection, etc.)
```

---

### 3. Solución Section

**Objetivo**: Presentar Jixo como la respuesta.

```
Componente: SolutionSection.vue

Contenido:
- Título: "Una sola plataforma para toda tu operación"
- Descripción: "Jixo unifica ventas, inventario, compras, facturación y análisis
  en un solo lugar. Visibilidad completa de costos y márgenes en tiempo real."
- Imagen central o video demo (placeholder por ahora)

Vuetify:
- v-container
- v-img o v-responsive para media
```

---

### 4. Funcionalidades Section

**Objetivo**: Mostrar el alcance completo del sistema.

```
Componente: FeaturesSection.vue

Módulos a mostrar (cada uno como card o tab):

1. Ventas Omnicanal
   - Integración MercadoLibre (órdenes, publicaciones, reclamos)
   - Sync automático de catálogo
   - Cotizaciones con conversión a venta
   - Kits y combos
   - Fulfillment integrado
   Ícono: mdi-cart-outline

2. Punto de Venta (POS)
   - Caja rápida para mostrador
   - Múltiples formas de pago
   - Cortes de caja
   Ícono: mdi-cash-register

3. Despacho y Logística
   - Flujo de picking, empaque, envío
   - Guías de envío
   - Devoluciones (RMA)
   Ícono: mdi-truck-delivery-outline

4. Gestión de Inventario
   - Multi-almacén
   - Traspasos entre sucursales
   - Reservas automáticas
   - Alertas de reorden
   Ícono: mdi-warehouse

5. Compras Inteligentes
   - Backorders automáticos
   - Integración con proveedores (Syscom, Tecnosinergia)
   - Descuentos escalonados
   - Seguimiento de OC
   Ícono: mdi-cart-arrow-down

6. Facturación Electrónica
   - CFDI 4.0
   - Timbrado automático
   - Complementos de pago
   - Notas de crédito
   Ícono: mdi-file-document-outline

7. Análisis y Costos
   - KPIs en tiempo real
   - Gastos operacionales
   - Utilidad REAL por venta
   - Rentabilidad por producto
   Ícono: mdi-chart-line

8. Clientes y CRM
   - Historial completo
   - Direcciones validadas (SEPOMEX)
   - Segmentación
   Ícono: mdi-account-group-outline

9. Notificaciones
   - Multi-canal (Email, WhatsApp, push)
   - Alertas automáticas
   - Configurables por usuario
   Ícono: mdi-bell-outline

10. Administración
    - Gestión de usuarios
    - Roles y permisos granulares
    - Auditoría
    Ícono: mdi-shield-account-outline

11. Portal de Clientes
    - Acceso web para clientes
    - Descarga de facturas 24/7
    - Autogestión
    Ícono: mdi-account-circle-outline

Vuetify:
- v-tabs o v-expansion-panels para organizar
- v-card para cada feature
- v-icon para íconos MDI
- Alternativa: grid de cards con hover effect
```

---

### 5. Integraciones Section

**Objetivo**: Mostrar conectividad con ecosistema existente.

```
Componente: IntegrationsSection.vue

Integraciones:
- MercadoLibre (logo) - Ventas, publicaciones, fulfillment
- Syscom (logo) - Catálogo, precios, órdenes
- Tecnosinergia (logo) - Catálogo mayorista
- SEPOMEX - Validación de direcciones
- PAC Facturación - CFDI 4.0

Vuetify:
- v-container
- v-row con v-col para grid de logos
- v-tooltip para descripción al hover
```

---

### 6. Próximamente Section

**Objetivo**: Generar expectativa y mostrar visión de producto.

```
Componente: ComingSoonSection.vue

Feature destacado: E-commerce Integrado

Contenido:
- Título: "Próximamente: Tu tienda online"
- Bullets:
  - Catálogo sincronizado en tiempo real
  - Checkout optimizado
  - Pasarelas de pago integradas
  - SEO y analytics
  - Mismo backoffice, cero duplicidad

Vuetify:
- v-card con estilo diferenciado (badge "Próximamente")
- v-chip para el badge
```

---

### 7. Beneficios Section

**Objetivo**: Resumir valor por área de la empresa.

```
Componente: BenefitsSection.vue

Tres columnas:

| Para Operaciones      | Para Finanzas          | Para Dirección           |
|-----------------------|------------------------|--------------------------|
| Menos errores manuales| Costos reales por venta| Visibilidad 360°         |
| Procesos automatizados| Márgenes precisos      | Decisiones basadas en datos|
| Un solo sistema       | Control de flujo       | Escalabilidad            |

Vuetify:
- v-row con 3 v-col
- v-card para cada columna
- v-list para bullets
```

---

### 8. Casos de Uso Section

**Objetivo**: Calificar al prospecto ideal.

```
Componente: UseCasesSection.vue

Título: "Ideal para"

Lista:
- Distribuidores de tecnología y cómputo
- Comercializadoras con venta en marketplaces
- Empresas con múltiples almacenes
- Negocios B2B con cotizaciones frecuentes
- Operaciones que requieren trazabilidad de costos

Vuetify:
- v-list con v-list-item
- v-icon check para cada item
```

---

### 9. CTA Final / Contacto Section

**Objetivo**: Convertir visitante en lead.

```
Componente: ContactSection.vue

Contenido:
- Título: "¿Listo para optimizar tu operación?"
- Subtítulo: "Agenda una demo personalizada"
- Formulario:
  - Nombre (v-text-field)
  - Empresa (v-text-field)
  - Email (v-text-field)
  - Teléfono (v-text-field)
  - Mensaje opcional (v-textarea)
  - Botón enviar (v-btn)

Alternativa simple:
- Email: contacto@jixo.com
- WhatsApp: botón directo

Vuetify:
- v-form con validación
- v-text-field, v-textarea
- v-btn submit
```

---

### 10. Footer

```
Componente: AppFooter.vue

Contenido:
- Logo Jixo
- Links: Funcionalidades, Integraciones, Contacto
- Redes sociales (si aplica)
- Copyright

Vuetify:
- v-footer
- v-row/v-col para layout
```

---

## Estructura de Archivos Sugerida

```
jixo-landing/
├── nuxt.config.ts
├── app.vue
├── pages/
│   └── index.vue          # Landing principal
├── components/
│   ├── HeroSection.vue
│   ├── ProblemSection.vue
│   ├── SolutionSection.vue
│   ├── FeaturesSection.vue
│   ├── IntegrationsSection.vue
│   ├── ComingSoonSection.vue
│   ├── BenefitsSection.vue
│   ├── UseCasesSection.vue
│   ├── ContactSection.vue
│   ├── AppHeader.vue      # Navbar
│   └── AppFooter.vue
├── assets/
│   └── images/            # Logos, ilustraciones
├── plugins/
│   └── vuetify.ts         # Configuración Vuetify
└── public/
    └── favicon.ico
```

---

## Configuración Vuetify

```typescript
// plugins/vuetify.ts
import { createVuetify } from 'vuetify'

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: '#1976D2',    // TODO: Definir en Vuetify Play
            secondary: '#424242',
            accent: '#82B1FF',
          },
        },
      },
    },
  })
  app.vueApp.use(vuetify)
})
```

---

## Notas de Implementación

1. **Responsive**: Todas las secciones deben verse bien en móvil
2. **Performance**: Lazy load de imágenes, componentes async si es necesario
3. **SEO**: Meta tags en nuxt.config, títulos descriptivos
4. **Animaciones**: Considerar AOS o animaciones CSS al scroll (opcional)
5. **Formulario**: Integrar con servicio de email (Resend, SendGrid, etc.)

---

## Referencia de Contenido

Todo el contenido detallado del producto está en:
`C:\laragon\www\escom\README-JIXO.md`

---

**Última actualización**: 2025-02-03
