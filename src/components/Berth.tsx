import { useState } from 'react'

type BerthProps = {
  berth: number
  index: number
}

export default function Berth({ berth, index }: BerthProps) {
  const [selected, setSelected] = useState<boolean>(false)

  const toggleSelection = () => setSelected((prev) => !prev)

  return (
    <span
      className={`p-1 rounded-sm text-center select-none max-w-[95px] ${
        selected
          ? ' bg-selected-berth-bg text-selected-berth-text border-2  border-selected-berth-border '
          : ' bg-unselected-berth-bg text-unselected-berth-text '
      }`}
      onClick={toggleSelection}
    >
      {berth} &nbsp;
    </span>
  )
}
