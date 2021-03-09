import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoShareSocialSharp } from 'react-icons/io5'
import { TiChevronRight } from 'react-icons/ti'
import Container from '../Container'

const Header: React.FC = () => {
  const router = useRouter()
  return (
    <div className="bg-grey pt-6 pb-2">
      <Container>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center space-x-2">
            <Link href="/">
              <p className="text-sm font-medium opacity- cursor-pointer">Home</p>
            </Link>
            <TiChevronRight size={11} />
            <p className="text-sm capitalize cursor-pointer">{router.query.category}</p>
          </div>
          <div className="flex flex-row opacity-60 items-center space-x-2 cursor-pointer">
            <IoShareSocialSharp size={18} />
            <p className="text-sm">Share</p>
          </div>
        </div>
        <div className="pt-2 pb-6 text-center">
          <h2 className="text-h2 tracking-widest uppercase">{router.query.category}</h2>
        </div>
      </Container>
    </div>
  )
}

export default Header
