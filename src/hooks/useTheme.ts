import type { GlobalThemeOverrides } from 'naive-ui'

export function useTheme() {

  // 主题色（系统默认绿色）
  const themeOverrides: GlobalThemeOverrides = {
      common: {
        primaryColor: '#543BEF',
        primaryColorHover: '#543BEF',
        primaryColorPressed: '#543BEF',
        warningColor: '#543BEF',
        warningColorHover: '#543BEF',
        warningColorPressed: '#543BEF',
        warningColorSuppl: '#543BEF',
      },
}


  return {themeOverrides }
}
