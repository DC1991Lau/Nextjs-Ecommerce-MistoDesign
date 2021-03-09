import Image from 'next/image'

export interface ReviewProps {
  username: string
  date: string
  stars?: number
  review: string
}

const Review: React.FC<ReviewProps> = ({ username, date, review }) => {
  return (
    <div>
      <div className="flex flex-row justify-between">
        <h4 className="text-h5 font-medium">{username}</h4>
        <div className="flex flex-row space-x-3">
          <p className="text-sm opacity-60">{date}</p>
          <div>
            <Image src="/img/star.svg" height={14} width={14} />
            <Image src="/img/star.svg" height={14} width={14} />
            <Image src="/img/star.svg" height={14} width={14} />
            <Image src="/img/star.svg" height={14} width={14} />
            <Image src="/img/star.svg" height={14} width={14} />
          </div>
        </div>
      </div>
      <p className="text- opacity-80 mt-3">{review}</p>
    </div>
  )
}

export default Review
