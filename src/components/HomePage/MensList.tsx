/* eslint-disable react/no-unescaped-entities */
import Container from '../Container'
import ProductsContainer from '../Products/ProductsContainer'
import Button from '../Button'
import Link from 'next/link'

const items = [{ id: 1, name: 'Stripped Sweatshirt', price: 38.0, slug: 'stripped-sweatshirt' }]

const MensList: React.FC = () => {
  return (
    <Container className="mt-6 md:mt-9">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <h3 className="text-h3 mb-4 md:mb-0 font-semibold mr-6">MEN'S</h3>
        <div className="flex text-subtitle font-normal space-x-8 overflow-x-scroll md:overflow-auto">
          <Button className="text-subtitle min-w-max focus:font-bold">NEW ARRIVAL</Button>
          <Button className="text-subtitle min-w-max focus:font-bold">SPECIALS</Button>
          <Button className="text-subtitle min-w-max focus:font-bold">BESTSELLERS</Button>
          <Button className="text-subtitle min-w-max focus:font-bold">MOST VIEWED</Button>
          <Button className="text-subtitle min-w-max focus:font-bold">FEATURED PRODUCTS</Button>
        </div>
      </div>
      <ProductsContainer items={items} />
      <Button type="button" className="bg-grey">
        <Link href="/men">SEE ALL</Link>
      </Button>
    </Container>
  )
}

export default MensList
