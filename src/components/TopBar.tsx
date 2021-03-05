import { MdLocalPhone, MdLocationOn } from 'react-icons/md'
import { AiFillClockCircle } from 'react-icons/ai'
import {
  RiFacebookCircleFill,
  RiInstagramFill,
  RiPinterestFill,
  RiTwitterFill,
} from 'react-icons/ri'

const TopBar: React.FC = () => {
  return (
    <div className="hidden md:block bg-dark text-gr_white">
      <div className="mx-auto max-w-7xl px-4 py-1 flex justify-between">
        <div className="flex space-x-6">
          <div className="flex space-x-2">
            <MdLocalPhone />
            <p className="text-sm">+38 (050) 12 34 567</p>
          </div>
          <div className="flex space-x-2">
            <MdLocationOn />
            <p className="text-sm">Ukraine, Kyiv,Khreshchatyk 1</p>
          </div>
          <div className="flex space-x-2">
            <AiFillClockCircle />
            <p className="text-sm">All week 24/7</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <RiFacebookCircleFill size={14} />
          <RiTwitterFill size={14} />
          <RiInstagramFill size={14} />
          <RiPinterestFill size={14} />
        </div>
      </div>
    </div>
  )
}

export default TopBar
