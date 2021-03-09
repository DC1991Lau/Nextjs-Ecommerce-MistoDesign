import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IoShareSocialSharp } from 'react-icons/io5'
import { TiChevronRight } from 'react-icons/ti'
import Container from '../Container'

const Header: React.FC = () => {
  const router = useRouter()

  console.log(router)
  return (
    <div className="bg-grey pt-6 pb-2">
      <Container>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center space-x-2">
            <Link href="/">
              <p className="text-sm font-medium opacity- cursor-pointer">Home</p>
            </Link>
            <TiChevronRight size={11} />
            <p className="text-sm capitalize cursor-pointer">{router.query.slug}</p>
          </div>
          <div className="flex flex-row opacity-60 items-center space-x-2 cursor-pointer">
            <IoShareSocialSharp size={18} />
            <p className="text-sm">Share</p>
          </div>
        </div>
        <div className="pt-2 pb-2 text-center">
          <h2 className="text-h2 tracking-widest uppercase">{router.query.slug}</h2>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-row items-center space-x-3">
            <div>
              <Image src="/img/star.svg" height={14} width={14} />
              <Image src="/img/star.svg" height={14} width={14} />
              <Image src="/img/star.svg" height={14} width={14} />
              <Image src="/img/star.svg" height={14} width={14} />
              <Image src="/img/star.svg" height={14} width={14} />
            </div>
            <p className="text-sm">2 Reviews</p>
          </div>
          <div className="flex flex-row items-center space-x-3">
            <p className="text-sm">
              SKU: <strong>777</strong>
            </p>
            <p className="text-sm">
              Availability: <strong>In Stock</strong>
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header
