import './ButtonsControl.sass'
import Button from '../Button/Button'
import React, { type MouseEvent, useCallback } from 'react'

interface ButtonsControlProps {
  values: number[]
  onButtonClick: (val: number) => void
}
const cssPrefix: string = 'buttonsControl'

function ButtonsControl ({ values, onButtonClick }: ButtonsControlProps) {
  const handleButtonClick = useCallback((e: MouseEvent<HTMLButtonElement>) => {
    const val = e.currentTarget.dataset.val ?? 0
    onButtonClick(+val)
  }, [onButtonClick])

  return (
      <div className={cssPrefix}>
          { values?.map((val) =>
              <Button
                  key={`$button${val}`}
                  label={(val > 0) ? `+${val}` : val.toString()}
                  onClick={ handleButtonClick }
              />
          )}
  </div>)
}

export default ButtonsControl
