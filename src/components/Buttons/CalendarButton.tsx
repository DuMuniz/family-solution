import classNames from 'classnames';

type Props = {
  type?: 'button' | 'submit';
  className?: string,
  onClick?: VoidFunction,
  children: React.ReactNode,
}

export function CalendarButton({ type = 'button', className, onClick, children }: Props) {
  return (
    <button
      type={type}
      className={classNames('flex items-center gap-2 border border-slate-400 rounded-lg h-10 p-2', className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}