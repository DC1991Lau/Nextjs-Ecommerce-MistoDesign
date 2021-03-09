import ProductCard, { ProductProps } from './ProductCard'

interface ProductsContainerProps {
  items: ProductProps[]
}

const ItemContainer: React.FC<ProductsContainerProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
      {items.map((item) => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            slug={item.slug}
          />
        )
      })}
    </div>
  )
}

export default ItemContainer
