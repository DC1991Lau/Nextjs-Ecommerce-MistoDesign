import Image from 'next/image'
import { BiMessageDetail } from 'react-icons/bi'
import { ReviewProps } from './Review'

import Review from './Review'

interface ReviewsProps {
  reviews?: ReviewProps[]
}

const Comments: React.FC<ReviewsProps> = () => {
  return (
    <div className="py-8 border-b-2 border-grey">
      <h2 className="text-subtitle font-semibold mb-8">REVIEWS</h2>
      <div className="flex flex-row justify-between mb-8">
        <div className="flex flex-row items-center space-x-3">
          <div>
            <Image src="/img/star.svg" height={14} width={14} />
            <Image src="/img/star.svg" height={14} width={14} />
            <Image src="/img/star.svg" height={14} width={14} />
            <Image src="/img/star.svg" height={14} width={14} />
            <Image src="/img/star.svg" height={14} width={14} />
          </div>
          <p className="text-sm">2 Reviews</p>
        </div>
        <div className="flex flex-row items-center space-x-3">
          <BiMessageDetail size={24} className="opacity-60" />
          <p className="text-sm">Write a review</p>
        </div>
      </div>
      <div className="flex flex-col space-y-11">
        <Review
          username="Oleh Chabanov"
          date="3 months ago"
          review="On the other hand, we denounce with righteous indignation and like men who are so beguiled and demoralized by the charms of pleasure of the moment"
        />
        <Review
          username="ShAmAn design"
          date="3 months ago"
          review="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti"
        />
      </div>
    </div>
  )
}

export default Comments
