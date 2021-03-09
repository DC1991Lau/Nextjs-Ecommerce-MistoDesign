import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <button
      className={`flex justify-center items-center py-4 tracking-wide w-full text-bt focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
