import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'
import Coach from '../components/coach';

export const Route = createFileRoute('/')({
  component: HomeComponent,
})

function HomeComponent() {
  let berths = 72;

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Coach berths={berths} />
    </div>
  )
}
