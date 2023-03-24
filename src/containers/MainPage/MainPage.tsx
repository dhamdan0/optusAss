import './MainPage.sass'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import ButtonsControl from '../../components/ButtonsControl/ButtonsControl'
import React, { type ChangeEvent, useCallback, useState } from 'react'
import SelectBox from '../../components/SelectBox/SelectBox'

import data from '../../data/data.json'

const cssPrefix: string = 'mainPage'

const selectOptions = data.progressBarOptions.map((it) => ({ value: it.key, label: it.label }))

function MainPage () {
  const [progressBars, setProgressBars] = useState(data.progressBarOptions)
  const [selectedProgressbar, setSelectedProgressbar] = useState(1)

  const handleChangeProgressBar = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedProgressbar(+e.target.value)
  }, [setSelectedProgressbar])

  const handleButtonClick = useCallback((val: number) => {
    const list = [...progressBars]
    const progressbar = list.find(it => it.key === selectedProgressbar)
    if (progressbar != null) {
      progressbar.value = Math.max(+progressbar.value + val, 0)
    }
    setProgressBars(list)
  }, [selectedProgressbar, setProgressBars, progressBars])

  return (
      <div className={cssPrefix}>
          <h1>Progress Bars</h1>

        <div className={`${cssPrefix}__progressBars`}>
          {progressBars.map((it) => {
            return <ProgressBar key={it.key} progress={it.value}/>
          })}
        </div>

        <div className={`${cssPrefix}__progressBarControl`}>
          <SelectBox
              options={selectOptions}
              selectedValue={selectedProgressbar}
              onChangeOption={handleChangeProgressBar}
          />
          <ButtonsControl
              values={data.buttonsOptions}
              onButtonClick={handleButtonClick}
          />
        </div >
      </div>
  )
}

export default MainPage
