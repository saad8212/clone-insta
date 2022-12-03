import Link from 'next/link';
import Image from 'next/image';
function Card({data}) {
  return (
    <div className='sections'>
      <div className='cards'>
        <div className = "card-title">
          <Image src = {data.user.profile_image.medium} alt = "user"/>
          <h4>{data.user.first_name + ' ' + data.user.last_name}</h4>
        </div>
        <div className = "card-img">
          <Link href ={`/details/${data.id}`} key = {data.id}>
            <Image src = {data.urls.small} alt = ""/>
          </Link>
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
