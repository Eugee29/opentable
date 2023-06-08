import Description from '@/app/restaurant/[slug]/components/Description'
import Images from '@/app/restaurant/[slug]/components/Images'
import Rating from '@/app/restaurant/[slug]/components/Rating'
import Reviews from '@/app/restaurant/[slug]/components/Reviews'
import Title from '@/app/restaurant/[slug]/components/TItle'

export default function RestaurantDetails() {
  return (
    <>
      <Title />
      <Rating />
      <Description />
      <Images />
      <Reviews />
    </>
  )
}
