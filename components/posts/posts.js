
import Card from './card'
import React, { useState,useEffect } from 'react'; 


function Posts({data}) {

   const [post, setPost] = useState([data.users]);
    
  useEffect(() => {
    // Perform localStorage action
    const item = JSON.parse(localStorage.getItem('data'));
    
    setPost([...post, item])
  }, [])

  post.map(res =>{
    console.log("res", res);
  })

  
  return (
    
    <span style={{width:"55%"}}>
      <h1>Post</h1>
        {/* {
          post.map(res =>{
            return (
              <Card data = {res}/>
            )
          })
        } */}
    </span>
  )
}

export default Posts
