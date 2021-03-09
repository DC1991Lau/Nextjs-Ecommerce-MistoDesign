const BlogItem: React.FC = () => {
  return (
    <div className="mt-12 flex-col content-center">
      <img src="/img/img-blog-1.png" className="w-full" alt="blog-1" />
      <div className="flex-col py-6 px-4 m-auto max-w-xs transform -translate-y-1/2 bg-gr_white">
        <h5 className="text-h5 tracking-widest font-semibold">The Easiest Way to Break</h5>
        <p className="text-body font-normal mt-3 leading-relaxed">
          But I must explain to you how all this mistaken idea of denouncing pleas and praising pain
          was bor
        </p>
      </div>
    </div>
  )
}

export default BlogItem
