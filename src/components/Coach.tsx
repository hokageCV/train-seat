import html2canvas from 'html2canvas'
import { useRef, useState } from 'react'
import { BERTHS_IN_A_COUPE } from '../constants'
import Coupe from './Coupe'

type CoachProps = {
  berths: number
}

export default function Coach({ berths }: CoachProps) {
  let coachRef = useRef<HTMLDivElement>(null)
  let [coachName, setCoachName] = useState('')

  let coupeCount = Math.floor(berths / BERTHS_IN_A_COUPE)
  let coupes = Array.from({ length: coupeCount }, (_, index) => index)

  const captureImage = async () => {
    if (!coachRef.current) return

    let originalStyles = coachRef.current.style.cssText
    coachRef.current.style.padding = '16px'
    coachRef.current.style.border = '2px solid #4a7096'

    await new Promise((r) => setTimeout(r, 1))

    let canvas = await html2canvas(coachRef.current)
    let image = canvas.toDataURL('image/png')

    coachRef.current.style.cssText = originalStyles

    let link = document.createElement('a')
    link.href = image
    link.download = `${coachName || 'train_seat'}.png`
    link.click()
  }

  return (
    <>
      <div ref={coachRef} className='bg-background'>
        <div className='mb-2'>
          <label>Coach: </label>
          <input value={coachName} onChange={(e) => setCoachName(e.target.value.toUpperCase())} className='border-b-3 p-1 max-w-[50px] ' />
        </div>
        {coupes.map((_, index) => (
          <Coupe index={index} />
        ))}
      </div>
      <button onClick={captureImage} className='mt-4 p-2 rounded-sm bg-[#5e81ac] text-white '>
        Download Image
      </button>
    </>
  )
}
