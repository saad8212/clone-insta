import Suggestion from './profile/suggestion'
import Posts from './posts/posts'
import Sidebar from './sidebar/sidebar'

function Main({data}) {
  return (
    <div className='main'>
        <Sidebar/>
        <Posts data = {data}/>
        <Suggestion/>
       </div>
  )
}

export default Main
