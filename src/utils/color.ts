import Color from 'color'

export const transformColor = (hex: string, ratio: number) => {
  const color = Color(hex).lighten(ratio)

  return color.hex()
}

export const isDark = (hex: string) => {
  const color = Color(hex).darken(0.2)

  return color.isDark()
}
