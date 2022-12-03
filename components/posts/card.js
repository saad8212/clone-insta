function Card({data}) {
  return (
    <div className='sections'>
      <div className='cards'>
        <div className = "card-title">
          <img src = {data.user.profile_image.medium} alt = "user"/>
          {/* <h4>{data.user.instagram-username}</h4> */}
        </div>
        <div className = "card-img">
          <img src = {data.urls.raw} alt = ""/>
        </div>
        <div class = "card-content">
          {/* <span className='user'><span> */}
          <span className='post_text'>
            {data.user.bio}{data.alt_description}
          </span>
        </div>  
      </div>    
    </div>
  )
}

export default Card
