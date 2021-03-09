import Link from 'next/link'
import { HTMLAttributes } from 'react'

interface ContainerProps extends HTMLAttributes<HTMLElement> {
  bckImg: string
  title: string
  src: string
}

const Block: React.FC<ContainerProps> = ({ bckImg, title, src }) => {
  return (
    <div className={`flex items-center justify-center ${bckImg} bg-no-repeat bg-cover`}>
      <Link href={src}>
        <div className="flex items-center px-6 py-3 max-h-12 bg-gr_white rounded-md text-h5 font-semibold flex-shrink max-w-min cursor-pointer">
          {title}
        </div>
      </Link>
    </div>
  )
}

export default Block
