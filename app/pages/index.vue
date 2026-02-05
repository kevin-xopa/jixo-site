<template>
  <div>
    <HeroSection />

    <WaveSeparator variant="tertiary" />

    <ProblemSection />
    <SolutionSection />

    <WaveSeparator variant="primary" :show-plants="true" />

    <FeaturesSection />
    <IntegrationsSection />

    <WaveSeparator variant="secondary" />

    <ComingSoonSection />

    <WaveSeparator variant="tertiary" :show-plants="true" />

    <BenefitsSection />
    <UseCasesSection />

    <WaveSeparator variant="secondary" flip />

    <ContactSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Jixo - Control total de tu operación comercial',
})
</script>
