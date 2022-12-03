import Profile from './profile/profile'
import Posts from './posts/posts'
function Main({data}) {
  return (
    <div className='main'>
        <Posts data = {data}/>
        <Profile/>
       </div>
  )
}

export default Main
