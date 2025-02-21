import { BERTHS_IN_A_COUPE } from '../constants'
import Coupe from './coupe'

type CoachProps = {
  berths: number
}

export default function Coach({ berths }: CoachProps) {
  let coupeCount = Math.floor(berths / BERTHS_IN_A_COUPE)
  let coupes = Array.from({ length: coupeCount }, (_, index) => index)

  return (
    <>
      <h3>coach</h3>
      {coupes.map((_, index) => (
        <Coupe index={index} />
      ))}
    </>
  )
}
