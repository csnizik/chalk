export function createButton({
  label,
  primary,
  size,
  backgroundColor,
  ...args
}) {
  const button = document.createElement('button')
  button.type = 'button'
  button.innerText = label
  button.className = `button${
    primary ? ' button--primary' : ''
  } button--${size}`

  // Apply design tokens
  if (backgroundColor) {
    button.style.setProperty('--button-background-color', backgroundColor)
  }

  // Pass through any other args, such as onClick event handlers
  Object.entries(args).forEach(([key, value]) => {
    if (key in button) {
      button[key] = value
    }
  })

  return button
}
