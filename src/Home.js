import BlogsList from './BlogsList'
import useFetch from './useFetch'
function Home() {
    /*const handelDelete = (id) =>{
        const newBlogs = blogs.filter( (blog) => blog.id !== id)
        setBlogs(newBlogs)
    }*/
    
    const { data: blogs , isLoading , error} = useFetch("http://localhost:8000/blogs")
    

  return (
    <div className='App'>
      <div className='content'>
            <div className='home'>
              { error && <div>{error}</div> }
              {isLoading && <div>Loading....</div>}
              {blogs && <BlogsList blogs={blogs} title='All Blogs!'/>}
              {/* <p className='mario-preview'></p> */}
              {/* <BlogsList blogs={blogs.filter( (blog) =>  blog.author === 'mario')} title="Mario 's Blogs!" /> */}
            </div>
      </div>
    </div>
  )
}

export default Home