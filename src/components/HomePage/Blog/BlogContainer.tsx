import Container from '../../Container'
import BlogItem from './BlogItem'

const BlogContainer: React.FC = () => {
  return (
    <Container className="mt-24">
      <div className="flex justify-between">
        <h3 className="text-h3 font-semibold tracking-widest">LATEST FROM BLOG</h3>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
      <div className="flex justify-center items-center bg-grey py-4 font-medium tracking-wide">
        <p>SEE ALL</p>
      </div>
    </Container>
  )
}

export default BlogContainer
