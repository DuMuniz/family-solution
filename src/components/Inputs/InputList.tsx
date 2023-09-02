type Props = {
  placeholder: string;
}

export function InputList({ placeholder }: Props) {
  return (
    <input
      type='text'
      placeholder={placeholder}
      className='w-[95%] rounded px-2 mt-4 h-8 mx-4 border border-indigo-50 outline-none'
    />
  )
}