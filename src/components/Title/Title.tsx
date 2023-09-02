import classNames from 'classnames';

type Props = {
  className?: string,
  label: string;
  value: string;
}

export function Title({ className, label, value }: Props) {
  return (
    <div
      className={classNames('mb-2', className)}
    >
      <h2 className='text-4xl font-semibold'>{label}</h2>
      <span className='text-sm'>{value}</span>
    </div>
  )
}