import classNames from 'classnames';

type Props = {
  className?: string,
  children: React.ReactNode,
}

export function SideSection({ className, children }: Props) {
  return (
    <div
      className={classNames('w-[32vw] p-6', className)}
    >
      {children}
    </div>
  )
}