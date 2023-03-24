import './Button.sass'
import { memo, type MouseEventHandler } from 'react'

interface ButtonProps {
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
}
const cssPrefix: string = 'button'

function Button ({ label, onClick }: ButtonProps) {
  return <button
      className={cssPrefix}
      onClick={onClick}
      data-val={label}
  >
    {label}
  </button>
}

export default memo(Button)
