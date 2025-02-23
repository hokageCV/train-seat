import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import Coach from '../components/Coach'

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  const [berths, setBerths] = useState(72)

  return (
    <div className='p-2'>
      <select onChange={(e) => setBerths(Number(e.target.value))} className='border p-2'>
        <option value='80'>Sleeper</option>
        <option value='72' selected>
          Third Tier
        </option>
      </select>
      <Coach berths={berths} />
    </div>
  )
}
