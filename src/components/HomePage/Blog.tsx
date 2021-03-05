import Container from '../Container'
import BlogItem from './BlogItem'

const BlogContainer: React.FC = () => {
  return (
    <Container className="mt-24">
      <div className="flex justify-between">
        <h3 className="text-h3 font-semibold tracking-widest">LATEST FROM BLOG</h3>
        <p className="text-subtitle font-medium">SEE ALL</p>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-3 gap-4">
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </div>
    </Container>
  )
}

export default BlogContainer
