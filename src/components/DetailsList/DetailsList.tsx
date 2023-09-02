type Props = {
  children?: React.ReactNode,
}

export function DetailsList({ children }: Props) {
  return (
    <div className='flex flex-col gap-4'>
      {children}
    </div>
  )
}