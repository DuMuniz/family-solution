type Props = {
  value: string;
  label: string;
}

export function InputRadio({ label, value }: Props) {
  return (
    <div className='flex gap-4 ml-4 w-[95%]'>
      <input type='radio' id={value} />
      <label htmlFor={value}>{label}</label>
    </div>
  )
}