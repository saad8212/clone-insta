import React,{useEffect, useState} from 'react'
import Image from 'next/image';
import {useRouter} from 'next/router'
function Details() {
    const [apiData, setApiData] = useState({});
    var id = useRouter()
    useEffect(() => {
        
        // declare the data fetching function
        const fetchData = async () => {
            
          const data = await fetch(`https://api.unsplash.com/photos/${id.query.id}?w=300&client_id=004HW6PAtX4glBh_O7ctSVI1762nIkQqNjNNbJgBLqc`);
          let jsonData = await data.json();
          console.log(jsonData);
          setApiData(jsonData)
        }
        fetchData()
          .catch(console.error);
      }, [])  
  return (
    <div>
      <Image src = {apiData?.urls?.small} alt = ""/>
    </div>
  )
}

export default Details
