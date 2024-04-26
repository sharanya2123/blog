// Write your JS code here

import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="blog-list">
      {blogsList.map(eachBlog => (
        <BlogList key={eachBlog.id} blogDetails={eachBlog} />
      ))}
    </ul>
  )
}
export default BlogList
