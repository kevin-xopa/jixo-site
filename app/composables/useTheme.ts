import { useTheme as useVuetifyTheme } from 'vuetify'

export const useAppTheme = () => {
  const vuetifyTheme = useVuetifyTheme()

  const isDark = computed(() => vuetifyTheme.global.current.value.dark)

  const toggleTheme = () => {
    vuetifyTheme.global.name.value = isDark.value ? 'light' : 'dark'
  }

  const setTheme = (theme: 'light' | 'dark') => {
    vuetifyTheme.global.name.value = theme
  }

  return {
    isDark,
    toggleTheme,
    setTheme,
  }
}
