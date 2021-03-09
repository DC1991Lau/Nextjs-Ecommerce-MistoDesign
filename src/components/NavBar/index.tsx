import Image from 'next/image'
import Link from 'next/link'

import { IoIosSearch } from 'react-icons/io'
import { BiWorld, BiUser } from 'react-icons/bi'
import { BsBag } from 'react-icons/bs'
import Container from '../Container'
import TopBar from './TopBar'
import DropdownMenu from './DropdownMenu'
import { useState } from 'react'

const Navbar: React.FC = () => {
  const [inHover, setHover] = useState(false)
  return (
    <div className={`fixed inset-x-0 z-50 ${!inHover && 'border-b-2 border-gr_white'}  bg-white`}>
      <TopBar />
      <Container className="flex items-center justify-between md:justify-between py-2 md:py-0">
        <Link href="/">
          <div className="flex-shrink-0 cursor-pointer">
            <Image src="/img/MiSto.svg" alt="logo" height={48} width={101} />
          </div>
        </Link>
        <nav className="inline-flex flex-row space-x-10 items-center self-stretch md:py-9">
          <Link href="/about">
            <a
              className="text-body hover:font-bold border-b-2 border-white hover:border-dark transition-all duration-150 self-stretch"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              About Us
            </a>
          </Link>
          <Link href="/categories/women">
            <a
              className="text-body hover:font-bold border-b-2 border-white hover:border-dark transition-all duration-150 self-stretch"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Women
            </a>
          </Link>
          <Link href="/categories/men">
            <a
              className="text-body hover:font-bold border-b-2 border-white hover:border-dark transition-all duration-150 self-stretch"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Men
            </a>
          </Link>
          <Link href="/categories/beauty">
            <a
              className="text-body hover:font-bold border-b-2 border-white hover:border-dark transition-all duration-150 self-stretch"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Beauty
            </a>
          </Link>
          <Link href="/categories/accessories">
            <a
              className="text-body hover:font-bold border-b-2 border-white hover:border-dark transition-all duration-150 self-stretch"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Accessories
            </a>
          </Link>
          <Link href="/blog">
            <a
              className="text-body hover:font-bold border-b-2 border-white hover:border-dark transition-all duration-150 self-stretch"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Blog
            </a>
          </Link>
          <Link href="/contact">
            <a
              className="text-body hover:font-bold border-b-2 border-white hover:border-dark transition-all duration-150 self-stretch"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              Contact
            </a>
          </Link>
        </nav>
        <div className="flex space-x-6">
          <IoIosSearch size={24} className="cursor-pointer" />
          <BiWorld size={24} className="cursor-pointer" />
          <BiUser size={24} className="cursor-pointer" />
          <BsBag size={24} className="cursor-pointer" />
        </div>
      </Container>
      <DropdownMenu show={inHover} />
    </div>
  )
}

export default Navbar
