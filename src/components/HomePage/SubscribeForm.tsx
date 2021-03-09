import Button from '../Button'
import Container from '../Container'

const SubscribeForm: React.FC = () => {
  return (
    <div className="flex justify-center mt-24 py-16 bg-no-repeat bg-cover bg-subscribe-bcgd ">
      <Container className="bg-gr_white py-6 text-center md:py-20 md:px-24">
        <p className="text-subtitle text-dark tracking-widest pb-4">SPECIAL OFFER</p>
        <h2 className="text-h3 font-semibold tracking-widest">SUBSCRIBE</h2>
        <h2 className="text-h3 font-semibold tracking-widest">
          AND <span className="text-sale">GET 10% OFF</span>
        </h2>
        <form className="mt-8">
          <input
            type="text"
            placeholder="Enter your email"
            className="placeholder-grey py-4 px-4 w-full focus:outline-none"
          />
          <Button type="submit" className="mt-6 bg-dark text-gr_white">
            SUBSCRIBE
          </Button>
        </form>
      </Container>
    </div>
  )
}

export default SubscribeForm
