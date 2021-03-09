import { NextPage } from 'next'
import Image from 'next/image'

import Container from '../../components/Container'
import Header from '../../components/ProductPage/Header'
import Button from '../../components/Button'

import { IoChevronBackCircle, IoChevronForwardCircle, IoHeartOutline } from 'react-icons/io5'
import { FaBalanceScaleRight } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineRefresh, HiOutlineTruck } from 'react-icons/hi'
import Reviews from '../../components/Products/Reviews/Reviews'

const ProductPage: NextPage = () => {
  return (
    <div>
      <Header />
      <Container className="grid grid-cols-2 gap-8 mt-8 mb-24">
        <div className="flex flex-row space-x-4">
          <div className="flex flex-col space-y-5 w-24 min-h-full">
            <img src="/img/products/img-item.png" alt="item" />
            <img src="/img/products/img-item.png" alt="item" />
            <img src="/img/products/img-item.png" alt="item" />
            <img src="/img/products/img-item.png" alt="item" />
          </div>
          <div className="flex-1 relative max-h-560px">
            <div className="flex flex-row absolute min-w-full bg-ok justify-between inset-y-1/2 px-3">
              <IoChevronBackCircle size={40} className="text-dark opacity-60 cursor-pointer" />
              <IoChevronForwardCircle size={40} className="text-dark opacity-60 cursor-pointer" />
            </div>
            <img src="/img/products/img-item.png" alt="item" className="min-w-full h-full " />
          </div>
        </div>

        <div>
          <div className="border-b-2 border-grey mt-1">
            <div className="flex space-x-2 mb-4">
              <h2 className="text-subtitle opacity-60 font-semibold">COLOR:</h2>
              <h2 className="text-subtitle font-semibold">Blue</h2>
            </div>
            <div className="flex flex-row space-x-3 mb-8">
              <img src="/img/products/img-item.png" alt="item" className="w-16" />
              <img src="/img/products/img-item.png" alt="item" className="w-16" />
              <img src="/img/products/img-item.png" alt="item" className="w-16" />
              <img src="/img/products/img-item.png" alt="item" className="w-16" />
            </div>
            <div className="flex space-x-2 mb-4">
              <h2 className="text-subtitle opacity-60 font-semibold">SIZE:</h2>
              <h2 className="text-subtitle font-semibold">S</h2>
            </div>
            <div className="flex flex-row space-x-3 mb-8">
              <div className="flex items-center justify-center w-10 h-40px bg-grey text-center">
                <h2 className="text-subtitle font-semibold text-center">XS</h2>
              </div>
              <div className="flex items-center justify-center w-10 h-40px bg-grey text-center">
                <h2 className="text-subtitle font-semibold text-center">S</h2>
              </div>
              <div className="flex items-center justify-center w-10 h-40px bg-grey text-center">
                <h2 className="text-subtitle font-semibold text-center">M</h2>
              </div>
              <div className="flex items-center justify-center w-10 h-40px bg-grey text-center">
                <h2 className="text-subtitle font-semibold text-center">L</h2>
              </div>
              <div className="flex items-center justify-center w-10 h-40px bg-grey text-center">
                <h2 className="text-subtitle font-semibold text-center">XL</h2>
              </div>
            </div>
          </div>

          <div className="border-b-2 border-grey">
            <div className=" flex flex-row py-8 items-center space-x-6 max-w-min flex-shrink-0">
              <h3 className="text-h3 font-bold">€379.99</h3>
              <Button className="bg-dark text-white min-w-max px-6">ADD TO CARD</Button>
              <IoHeartOutline size={24} className="flex-shrink-0 opacity-60" />
              <FaBalanceScaleRight size={24} className="flex-shrink-0 opacity-60" />
            </div>
          </div>

          <div className="flex justify-between py-9">
            <div className="flex space-x-2 items-center opacity-60">
              <HiOutlineTruck size={24} />
              <p className="text-subtitle ">Shipping & Delivery</p>
            </div>
            <div className="flex space-x-2 items-center opacity-60">
              <HiOutlineRefresh size={24} />
              <p className="text-subtitle ">Shipping & Delivery</p>
            </div>
            <div className="flex space-x-2 items-center opacity-60">
              <HiOutlineMail size={24} />
              <p className="text-subtitle ">Shipping & Delivery</p>
            </div>
          </div>

          <div className="pb-8 border-b-2 border-grey">
            <div className="flex flex-row items-center space-x-3 mb-6">
              <h2 className="text-subtitle font-bold">GUARANTEED SAFE CHECKOUT</h2>
              <div className="flex-1 border-b-2 border-grey" />
            </div>
            <div className="w-full text-center">
              <Image src="/img/payments-color.png" width={522.02} height={21.8} />
            </div>
          </div>

          <div className="text-subtitle opacity-60 py-8 border-b-2 border-grey">
            <h3>DESCRIPTION</h3>
          </div>

          <div className="py-8 border-b-2 border-grey">
            <h2 className="text-subtitle font-semibold mb-8">ADDITIONAL INFORMATION</h2>
            <div className="flex flex-col space-y-3">
              <div className="flex space-x-2">
                <h5 className="font-semibold text-h5">Color:</h5>
                <h5 className="text-h5 opacity-60">Blue, White, Black, Grey</h5>
              </div>
              <div className="flex space-x-2">
                <h5 className="font-semibold text-h5">Size:</h5>
                <h5 className="text-h5 opacity-60">XS, S, M, L</h5>
              </div>
              <div className="flex space-x-2">
                <h5 className="font-semibold text-h5">Material:</h5>
                <h5 className="text-h5 opacity-60">100% Polyester</h5>
              </div>
            </div>
          </div>

          <Reviews />
        </div>
      </Container>
    </div>
  )
}

export default ProductPage
