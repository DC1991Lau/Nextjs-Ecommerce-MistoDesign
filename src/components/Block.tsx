import { HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  bckImg: string
}

const Block: React.FC<ContainerProps> = ({ bckImg }) => {
  return (
    <div className={`flex items-center justify-center ${bckImg} bg-no-repeat bg-cover`}>
      <div className="flex items-center px-6 py-3 max-h-12 bg-gr_white rounded-md">
        <p className="text-h5 font-semibold">WOMEN</p>
      </div>
    </div>
  )
}

export default Block
