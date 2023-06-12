import Image from 'next/image'
import SecondHeader from './Composers/SecondHeader'
import Carousel from './Composers/Carousel'
import Mobile from './Composers/Mobile'

export default function Home() {
  return (
    <>
    <SecondHeader/>
    <Carousel/>
    <Mobile/>
    </>
  )
}
