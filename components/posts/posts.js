
import Card from './card'
import React, { useState,useEffect } from 'react'; 
import Link from 'next/link';

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
              <Link href ={`/details/${res.id}`} key = {res.id}>
                <Card data = {res}/>
              </Link>  
              </>
            )
          })
        }
    </span>
  )
}

export default Posts
