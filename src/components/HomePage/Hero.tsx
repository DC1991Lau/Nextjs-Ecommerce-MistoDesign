import Banner from '../Banner'
import Block from '../Block'
import Container from '../Container'
import Advantage from './Advantage'

const Hero: React.FC = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 md:grid-cols-2 h-heroxl gap-4">
        <Banner bcgdImg="bg-hero-1" />
        <div className="grid grid-rows-2 gap-4 ">
          <div className="grid grid-cols-2 gap-4">
            <Block bckImg="bg-hero-2" />
            <Block bckImg="bg-hero-4" />
          </div>
          <Block bckImg="bg-hero-3" />
        </div>
      </div>
      <Advantage />
    </Container>
  )
}

export default Hero
