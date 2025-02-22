import { BERTHS_IN_A_COUPE } from '../constants'
import Berth from './Berth'

type CoupeProps = {
  index: number
}

export default function Coupe({ index }: CoupeProps) {
  let coupeNumber = index + 1
  let endBerth = coupeNumber * BERTHS_IN_A_COUPE
  let startBerth = endBerth - BERTHS_IN_A_COUPE + 1

  let berths = []
  for (let i = startBerth; i <= endBerth; i += 1) berths.push(i)

  berths = [
    // first row
    berths[0],
    berths[1],
    berths[2],
    null,
    berths[7],
    // second row
    berths[3],
    berths[4],
    berths[5],
    null,
    berths[6],
  ]

  return (
    <div className='py-2 w-3/4'>
      <div className='grid grid-cols-5 gap-1'>
        {berths.map((berth, idx) => {
          if (berth == null) return <span className='select-none'>&nbsp;</span>

          return <Berth key={`berth_${berth}`} berth={berth} index={idx} />
        })}
      </div>
    </div>
  )
}
