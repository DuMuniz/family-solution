import classNames from 'classnames';

type Props = {
  className?: string,
  children: React.ReactNode,
}

export function Container({ className, children }: Props) {
  return (
    <div
      className={classNames('flex gap-8 w-[84vw]', className)}
    >
      {children}
    </div>
  )
}