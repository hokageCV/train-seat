type BerthProps = {
  berth: number
  index: number
}

export default function Berth({ berth, index }: BerthProps) {
  return <span className='p-1 rounded-sm text-center bg-berth'>{berth} &nbsp;</span>
}
