import React from 'react'
import { MdVerified } from 'react-icons/md'
function Suggestion() {
    let data = [
        {
            img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
            name:'Williams',
            followed:'David',
        },
        {
            img:'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHVzZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
            name:'Weasley',
            followed:'Shan',
        },
        {
            img:'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
            name:'David',
            followed:'Williams',
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEKhBZPPCS-7C7qoqH23WanO3vNVkXjtZXUg&usqp=CAU',
            name:'Singhal',
            followed:'Weasley',
        },
        {
            img:'https://images.unsplash.com/photo-1514846326710-096e4a8035e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
            name:'Khloeka',
            followed:'Singhal',
        },
        {
            img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFmyf3EWYdIpH89KyHnD5OITXepW5XOJ_OTg&usqp=CAU',
            name:'Morgan',
            followed:'Archer',
        }
        ]
  return (
    <div className='suggestion'>
        <h3 className='text-center'><b>Suggestions For You</b></h3>
        <div className='suggestion-data'>
            {data.map(res =>{
                return (
                    <div className='suggestion-display'>
                        <img src={res.img} alt = ''/>
                        <ul className = 'suggest-list'>
                            <li><b>{res.name}</b> <MdVerified className='fa-x' /></li>
                            <li>Followed By 
                             <span style={{color:"#ff4800"}}> {res.followed}</span></li>
                        </ul>
                    </div>
                )
            })
            }</div>
    </div>
  )
}

export default Suggestion
