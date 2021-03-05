import { HTMLAttributes } from 'react'

type ContainerProps = HTMLAttributes<HTMLElement>

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`mx-auto max-w-7xl px-4 text-dark font-normal ${className}`}>
      <div className="mb-auto">{children}</div>
    </div>
  )
}

export default Container
