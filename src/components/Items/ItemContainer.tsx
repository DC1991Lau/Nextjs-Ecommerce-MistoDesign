import ItemCard, { ItemProps } from './ItemCard'

interface ItemContainerProps {
  items: ItemProps[]
}

const ItemContainer: React.FC<ItemContainerProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
      {items.map((item) => {
        return <ItemCard key={item.id} id={item.id} name={item.name} price={item.price} />
      })}
    </div>
  )
}

export default ItemContainer
