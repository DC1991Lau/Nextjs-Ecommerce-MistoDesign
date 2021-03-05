/* eslint-disable react/no-unescaped-entities */
import { NextPage } from 'next'
import SubscribeForm from '../components/HomePage/SubscribeForm'
import BlogContainer from '../components/HomePage/Blog'
import Hero from '../components/HomePage/Hero'
import WomensList from '../components/HomePage/WomensList'
import MensList from '../components/HomePage/MensList'
import AdverstiseBanner from '../components/HomePage/AdverstiseBanner'

const Home: NextPage = () => {
  return (
    <div className="flex-col py-8">
      <Hero />
      <div className="border-b-2 border-gr_white" />
      <WomensList />
      <MensList />
      <AdverstiseBanner />
      <SubscribeForm />
      <BlogContainer />
    </div>
  )
}

export default Home
