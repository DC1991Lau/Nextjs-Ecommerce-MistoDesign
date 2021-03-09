import { NextPage } from 'next'
import Image from 'next/image'

import Container from '../../components/Container'
import Button from '../../components/Button'
import ProductsContainer from '../../components/Products/ProductsContainer'
import Header from '../../components/CategoryPage/Header'

const products = [{ id: 1, name: 'Stripped Sweatshirt', price: 38.0, slug: 'stripped-sweatshirt' }]

const CategoryPage: NextPage = () => {
  return (
    <div>
      <Header />
      <Container>
        <div className="flex flex-row justify-between">
          <div className="text-dark opacity-60 flex flex-row items-center space-x-2 flex-shrink-0">
            <Button>
              <Image src="/img/adjustments.svg" height={32} width={32} />
            </Button>
            <Button className="text-bt">FILTER</Button>
          </div>
          <div className="text-dark opacity-60 flex flex-row items-center space-x-2">
            <Button>
              <Image src="/img/view-list.svg" height={32} width={32} />
            </Button>
            <Button>
              <Image src="/img/view-grid.svg" height={32} width={32} />
            </Button>
          </div>
          <div className="text-dark opacity-60 flex flex-row items-center space-x-2">
            <Button className="text-bt">BESTSELLERS</Button>
            <Button>
              <Image src="/img/chevron-right.svg" height={14} width={14} />
            </Button>
          </div>
        </div>
        <ProductsContainer items={products} />
      </Container>
    </div>
  )
}

export default CategoryPage
