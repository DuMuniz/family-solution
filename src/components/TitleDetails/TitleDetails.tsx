type Props = {
  Icon: React.ReactNode,
  title: string;
}

export function TitleDetails({ Icon, title }: Props) {
  return (
    <div className='h-36 bg-blue-500 w-full flex items-end pb-4 gap-4 px-4'>
      <div className='text-white text-2xl'>{Icon}</div>
      <h2 className='text-white'>{title}</h2>
    </div>
  )
}