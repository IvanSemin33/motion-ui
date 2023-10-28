export const getElementZPosition = (anchorEl: HTMLElement | null): number => {
  if (anchorEl) {
    const parent = anchorEl.parentElement
    const zIndex = window.getComputedStyle(anchorEl).zIndex

    return zIndex === 'auto' ? getElementZPosition(parent) : Number(zIndex)
  }

  return 0
}
