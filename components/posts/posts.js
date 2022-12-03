import Card from './card'
import React, { useState,useEffect } from 'react'; 


function Posts({data}) {
   const [post, setPost] = useState(data); 
    let status = [
      {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQHTJPUawtT7pgW6VTjztfT4hgjh7L-QTDFw&usqp=CAU',
          name:'Williams',
      },
      {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlnGKC2VvWuY_i_2OBB15RlN5Cmm5zGhuBYA&usqp=CAU',
          name:'Weasley',
      },
      {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSYFB_2i64cYo12_9Z0lfEWcm49eHllO0BPQ&usqp=CAU',
          name:'David',
      },
      {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEKhBZPPCS-7C7qoqH23WanO3vNVkXjtZXUg&usqp=CAU',
          name:'Singhal',
      },
      {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDdNnMh6qmlMex0So-_YFdmGRqzoWEFTweew&usqp=CAU',
          name:'Khloeka',
      },
      {
          img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmyf3EWYdIpH89KyHnD5OITXepW5XOJ_OTg&usqp=CAU',
          name:'Morgan',
      }
      ]
      status.map(res =>{
        console.log(res.img);
      })
  return (
    <>
      <span style={{width:"50%"}} className = "posts"> 
        <div className='status'>
          
            <div className='stat'>
            {status.map(res =>{
              return (
                <span className = "status_data">
                    <img src = {res.img} alt = "" width={40}/>
                    <span>{res.name}</span>
                </span>
              )
            })
          }</div>
          
        </div>    
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
    </>
    
  )
}

export default Posts
