import Image from 'next/image'
import { AiFillClockCircle } from 'react-icons/ai'
import { MdLocalPhone, MdLocationOn, MdMail } from 'react-icons/md'
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterFill,
} from 'react-icons/ri'
import Container from './Container'

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="bg-dark">
        <Container className="text-white py-3">
          <div className="flex justify-between items-center">
            <p className="text-subtitle tracking-widest">BE IN TOUCH WITH US:</p>

            <form className="flex">
              <input
                type="text"
                placeholder="Enter your email"
                className="bg-white placeholder-dark flex-1 px-6"
              />
              <button
                type="submit"
                className="border border-white text-bt px-6 py-2 tracking-widest ml-3"
              >
                JOIN US
              </button>
            </form>

            <div className="flex space-x-2">
              <RiFacebookCircleFill size={14} />
              <RiTwitterFill size={14} />
              <RiInstagramFill size={14} />
              <RiPinterestFill size={14} />
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="grid grid-cols-4 mt-10 mb-9 w-full">
          <ul>
            <li className="text-subtitle font-semibold mb-4">CATEGORIES</li>
            <li className="text-subtitle mb-5">Men</li>
            <li className="text-subtitle mb-5">Women</li>
            <li className="text-subtitle mb-5">Accessories</li>
            <li className="text-subtitle">Beauty</li>
          </ul>
          <ul>
            <li className="text-subtitle font-semibold mb-5">INFORMATION</li>
            <li className="text-subtitle mb-5">About Us</li>
            <li className="text-subtitle mb-5">Contact Us</li>
            <li className="text-subtitle mb-5">Blog</li>
            <li className="text-subtitle">FAQs</li>
          </ul>
          <ul>
            <li className="text-subtitle font-semibold mb-5">USEFUL LINKS</li>
            <li className="text-subtitle mb-5">Terms & Conditions</li>
            <li className="text-subtitle mb-5">Returns & Exchanges</li>
            <li className="text-subtitle mb-5">Shiping & Delivery</li>
            <li className="text-subtitle">Privacy Policy</li>
          </ul>
          <ul>
            <li className="text-subtitle font-semibold mb-5">CONTACT US</li>

            <li className="flex space-x-2 text-subtitle mb-5">
              <MdLocalPhone size={18} />
              <p className="text-sm">+38 (050) 12 34 567</p>
            </li>
            <li className="flex space-x-2 text-subtitle mb-5">
              <MdLocationOn size={18} />
              <p className="text-sm">Ukraine, Kyiv,Khreshchatyk 1</p>
            </li>
            <li className="flex space-x-2 text-subtitle mb-5">
              <AiFillClockCircle size={18} />
              <p className="text-sm">All week 24/7</p>
            </li>
            <li className="flex space-x-2 text-subtitle mb-5">
              <MdMail size={18} />
              <p className="text-sm">All week 24/7</p>
            </li>
          </ul>
        </div>
      </Container>
      <div className="bg-grey py-3">
        <Container className="">
          <div className="flex justify-between items-center">
            <p className="text-sm">Copyright © 2032 all rights reserved</p>
            <div>
              <Image src="/img/payments.png" height={16} width={381} />
            </div>
            <p className="text-sm">
              Created by <strong>Diogo Costa</strong>
            </p>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
