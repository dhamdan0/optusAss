import './SelectBox.sass'
import { type ChangeEventHandler } from 'react'

interface SelectOption {
  value: number
  label: string
}

interface SelectBoxProps {
  options: SelectOption[]
  onChangeOption: ChangeEventHandler<HTMLSelectElement>
  selectedValue: SelectOption['value']
}
const cssPrefix: string = 'selectBox'

function SelectBox ({ selectedValue, options, onChangeOption }: SelectBoxProps) {
  if (options?.length === 0) return null

  return (
      <>
        <select name="selectBox"
                value={selectedValue}
                className={cssPrefix}
                onChange={onChangeOption}
        >
          { options?.map((option) =>
              <option value={option.value} key={`${option.label}-${option.value}}`}>
                {option.label}
              </option>
          ) }
        </select>
      </>
  )
}

export default SelectBox
