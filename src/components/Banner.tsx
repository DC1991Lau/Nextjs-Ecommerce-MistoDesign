import { HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  bcgdImg: string
}

const Banner: React.FC<ContainerProps> = ({ bcgdImg }) => {
  return (
    <div className={`flex items-center justify-center ${bcgdImg} bg-no-repeat bg-cover`}>
      <div className="flex-col items-center max-h-24 py-6 px-8 bg-gr_white rounded-md">
        <p className="text-center text-subtitle mb-3">BANNER</p>
        <p className="text-h3 font-semibold">YOUR TITLE TEXT</p>
      </div>
    </div>
  )
}

export default Banner
