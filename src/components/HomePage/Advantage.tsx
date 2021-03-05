import Image from 'next/image'

const Advantage: React.FC = () => {
  return (
    <div className="flex justify-between py-8 overflow-x-scroll md:overflow-auto">
      <div className="flex flex-shrink-0 items-center">
        <Image src="/img/truck.png" height={40} width={40} />
        <div className="ml-2">
          <p className="font-semibold text-subtitle">FREE SHIPPING</p>
          <p className="font-medium text-subtitle">On all UA order or order above $100</p>
        </div>
      </div>
      <div className="flex flex-shrink-0 items-center">
        <Image src="/img/refresh.png" height={40} width={40} />
        <div className="ml-2">
          <p className="font-semibold text-subtitle">FREE SHIPPING</p>
          <p className="font-medium text-subtitle">On all UA order or order above $100</p>
        </div>
      </div>
      <div className="flex flex-shrink-0 items-center">
        <Image src="/img/support.png" height={40} width={40} />
        <div className="ml-2">
          <p className="font-semibold text-subtitle">FREE SHIPPING</p>
          <p className="font-medium text-subtitle">On all UA order or order above $100</p>
        </div>
      </div>
    </div>
  )
}

export default Advantage
