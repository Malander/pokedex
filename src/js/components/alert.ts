export type AlertProps = {
  text: string;
  style: 'positive' | 'negative' | 'info'
}

export const Alert = ({text, style}: AlertProps) => {
  
  const render = () => {
    return `<div class="poke-alert poke-alert--${style}">${text}</div>`
  }

  return render()
}