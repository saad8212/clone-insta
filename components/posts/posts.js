
import Card from './card'
import React, { useState,useEffect } from 'react'; 


function Posts({data}) {

   const [post, setPost] = useState(data);
       
      console.log(post);
    post.map(res =>{
      console.log(res.user.instagram_username);
    })   

  
  return (
    
    <span style={{width:"55%"}}>
      <h1>Post</h1>
        {
          post.map(res =>{
            return (
              <>
                <Card data = {res}/>
              </>
            )
          })
        }
    </span>
  )
}

export default Posts
