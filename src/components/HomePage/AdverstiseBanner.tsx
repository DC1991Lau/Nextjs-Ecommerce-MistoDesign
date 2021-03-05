import Banner from '../Banner'
import Container from '../Container'

const AdverstiseBanner: React.FC = () => {
  return (
    <Container className="mt-6 md:mt-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-min_block">
        <Banner bcgdImg="bg-new-season" />
        <Banner bcgdImg="bg-sale" />
      </div>
    </Container>
  )
}

export default AdverstiseBanner
