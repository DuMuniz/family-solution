type Props = {
  children: React.ReactNode,
}

export function DetailsSection({ children }: Props) {
  return (
    <div className='w-[52vw] border-s-[1px] border-gray-400 h-full'>
      {children}
    </div>
  )
}