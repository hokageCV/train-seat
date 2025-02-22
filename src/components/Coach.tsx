import { BERTHS_IN_A_COUPE } from '../constants'
import Coupe from './Coupe'

type CoachProps = {
  berths: number
}

export default function Coach({ berths }: CoachProps) {
  let coupeCount = Math.floor(berths / BERTHS_IN_A_COUPE)
  let coupes = Array.from({ length: coupeCount }, (_, index) => index)

  return (
    <>
      {coupes.map((_, index) => (
        <Coupe index={index} />
      ))}
    </>
  )
}
