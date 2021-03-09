import { AiFillClockCircle } from 'react-icons/ai'
import { MdLocalPhone, MdLocationOn, MdMail } from 'react-icons/md'
import Container from '../Container'

interface DropdownMenuProps {
  show: boolean
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ show }) => {
  return (
    <Container className={`${show ? 'block' : 'hidden'} border-b-2 border-dark`}>
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
  )
}

export default DropdownMenu
