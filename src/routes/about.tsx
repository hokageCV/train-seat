import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about')({
  component: AboutComponent,
})

function AboutComponent() {
  return (
    <div className='p-2'>
      <p>Mark the berths to visualize the berths alloted to you.</p>
      <p>For now, only sleeper and third tier coaches are supported.</p>
    </div>
  )
}
