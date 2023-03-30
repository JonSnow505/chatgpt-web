import type { GlobalThemeOverrides } from 'naive-ui'
import { computed, watch } from 'vue'
import { darkTheme, useOsTheme } from 'naive-ui'
import { useAppStore } from '@/store'

export function useTheme() {
  const appStore = useAppStore()

  const OsTheme = useOsTheme()

  const isDark = computed(() => {
    if (appStore.theme === 'auto')
      return OsTheme.value === 'dark'
    else
      return appStore.theme === 'dark'
  })

  const theme = computed(() => {
    return isDark.value ? darkTheme : undefined
  })

  const commonColor: Object  = {
    primaryColor: '#543BEF',
    primaryColorHover: '#543BEF',
    primaryColorPressed: '#543BEF',
    warningColor: '#543BEF',
    warningColorHover: '#543BEF',
    warningColorPressed: '#543BEF',
    warningColorSuppl: '#543BEF',
  }

  // 主题切换
  const themeOverrides = computed<GlobalThemeOverrides>(() => {
    if (isDark.value) {
      return {
        common: commonColor,
      }
    }
    return {
      common: commonColor,
}
  })

  watch(
    () => isDark.value,
    (dark) => {
      if (dark)
        document.documentElement.classList.add('dark')
      else
        document.documentElement.classList.remove('dark')
    },
    { immediate: true },
  )

  return { theme, themeOverrides }
}
