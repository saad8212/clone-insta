import React,{useEffect, useState} from 'react'
import {useRouter} from 'next/router'
function Details() {
    const [apiData, setApiData] = useState({});
    var id = useRouter()
    useEffect(() => {
        
        // declare the data fetching function
        const fetchData = async () => {
            
          const data = await fetch(`https://api.unsplash.com/photos/${id.query.id}?client_id=004HW6PAtX4glBh_O7ctSVI1762nIkQqNjNNbJgBLqc`);
          let jsonData = await data.json();
          console.log(jsonData);
          setApiData(jsonData)
        }
        fetchData()
          .catch(console.error);
      }, [])  
  return (
    <div>
      <img src = {apiData.urls.raw} alt = ""/>
    </div>
  )
}

export default Details
