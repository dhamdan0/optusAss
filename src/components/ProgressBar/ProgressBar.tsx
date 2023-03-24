import './ProgressBar.sass'
import classnames from 'classnames'
import { memo } from 'react'

interface ProgressBarProps {
  progress: number
}
const cssPrefix: string = 'progressBar'

function ProgressBar ({ progress }: ProgressBarProps) {
  const normalizedProgress = Math.max(Math.round(progress), 0)
  const isExceedLimit = progress > 100

  return (
        <div
            className={
              classnames(
                  `${cssPrefix}`,
                  isExceedLimit && `${cssPrefix}--error`
              )
            }
            style={ { backgroundSize: `${normalizedProgress}% 100%` } }
        >
            <span> {`${normalizedProgress} %`}</span>
      </div>
  )
}

export default memo(ProgressBar)
