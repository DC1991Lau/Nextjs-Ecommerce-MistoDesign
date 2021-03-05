/* eslint-disable react/no-unescaped-entities */
import Container from '../Container'
import ItemContainer from '../Items/ItemContainer'

const items = [{ id: 1, name: 'Stripped Sweatshirt', price: 38.0 }]

const MensList: React.FC = () => {
  return (
    <Container className="mt-6 md:mt-24">
      <div className="flex-col md:flex-row  justify-between">
        <h3 className="text-h3 mb-4 md:mb-0 font-semibold mr-6">MEN'S</h3>
        <div className="flex text-subtitle font-normal space-x-8 overflow-x-scroll md:overflow-auto">
          <p className="font-medium">NEW ARRIVAL</p>
          <p>SPECIALS</p>
          <p>BESTSELLERS</p>
          <p>MOST VIEWED</p>
          <p>FEATURED PRODUCTS</p>
        </div>
      </div>
      <ItemContainer items={items} />
      <div className="flex justify-center items-center bg-grey py-4 font-medium tracking-wide">
        <p>SEE ALL</p>
      </div>
    </Container>
  )
}

export default MensList
