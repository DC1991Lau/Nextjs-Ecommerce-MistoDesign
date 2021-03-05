/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'

export interface ItemProps {
  id: number
  name: string
  price: number
}

const ItemCard: React.FC<ItemProps> = ({ name, price }) => {
  return (
    <div className="flex-col mb-8">
      <img src="/img/products/img-item.png" alt="item" className="min-w-full" />
      <div className="pt-4">
        <p className="text-body font-normal mb-3">{name}</p>
        <div className="flex justify-between">
          <p className="text-h5 font-bold">€{price}</p>
          <div>
            <Image src="/img/star.svg" height={14} width={14} />
            <Image src="/img/star.svg" height={14} width={14} />
            <Image src="/img/star.svg" height={14} width={14} />
            <Image src="/img/star.svg" height={14} width={14} />
            <Image src="/img/star.svg" height={14} width={14} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemCard
