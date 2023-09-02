type Props = {
  title: string;
  subtitle: string;
  Icon?: React.ReactNode;
}

export function Card({ title, subtitle, Icon }: Props) {
  return (
    <div className='border border-blue-500 rounded-lg bg-blue-500 p-2 flex items-center gap-4'>
      <div className='text-white text-2xl'>{Icon}</div>
      <div className='flex flex-col items-start justify-center'>
        <h3 className='text-white font-semibold'>{title}</h3>
        <span className='text-white text-sm'>{subtitle}</span>
      </div>
    </div>
  )
}