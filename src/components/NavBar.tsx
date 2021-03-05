import Image from 'next/image'
import Link from 'next/link'

import { IoIosSearch } from 'react-icons/io'
import { BiWorld, BiUser } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'
import Container from './Container'
import TopBar from './TopBar'

const Navbar: React.FC = () => {
  return (
    <div className="fixed inset-x-0 z-30 border-b-2 border-gr_white">
      <TopBar />
      <Container className="bg-white">
        <div className="flex items-center justify-center md:justify-between py-2 md:py-4 h-16 border-b-1">
          <div className="flex-shrink-0">
            <Image src="/img/MiSto.svg" alt="logo" height={48} width={101} />
          </div>
          <nav className="hidden md:block space-x-8 ">
            <Link href="/categories/about">
              <a className="text-body">About Us</a>
            </Link>
            <Link href="/categories/women">
              <a className="text-body">Women</a>
            </Link>
            <Link href="/categories/men">
              <a className="text-body">Men</a>
            </Link>
            <Link href="/categories/beauty">
              <a className="text-body">Beauty</a>
            </Link>
            <Link href="/categories/accessories">
              <a className="text-body">Accessories</a>
            </Link>
            <Link href="/categories/blog">
              <a className="text-body">Blog</a>
            </Link>
            <Link href="/categories/contact">
              <a className="text-body">Contact</a>
            </Link>
          </nav>
          <div className="flex space-x-6">
            <IoIosSearch size={24} />
            <BiWorld size={24} />
            <BiUser size={24} />
            <BsBag size={24} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Navbar
