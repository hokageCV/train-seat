import { BERTHS_IN_A_COUPE } from '../constants'

type CoupeProps = {
  index: number
}

export default function Coupe({ index }: CoupeProps) {
  let coupeNumber = index + 1
  let endBerth = coupeNumber * BERTHS_IN_A_COUPE
  let startBerth = endBerth - BERTHS_IN_A_COUPE + 1

  let berths = []
  for (let i = startBerth; i <= endBerth; i += 1) berths.push(i)

  return (
    <>
      <p key={`coupe_${index}`}>Coupe {coupeNumber}</p>

      {berths.map((berth) => (
        <span>{berth} &nbsp;</span>
      ))}
    </>
  )
}
