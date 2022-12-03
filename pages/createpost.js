import React,{useRef, useState} from 'react'  
function CreatePost() {
    const [data,setData] = useState([]);
    let name = useRef();
    let image = useRef();
    let message = useRef();
    let email = useRef(); 
    const submitPost = (e) =>{
        e.preventDefault();
        console.log(name.current.value, image.current.files[0]); 
        setData([name.current.value, image.current.files[0], 
            email.current.value, message.current.value]);
            console.log('data',data);
        
        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                firstName: name.current.value,
                image: [image.current.files[0],image.current.files[0].name],
                email: email.current.value,
                address:message.current.value,                
                age: 250,
                /* other user data */
            })
            }).then(res => res.json())
            .then(resp =>{
                let data = {
                    id:resp.id,
                    name:resp.name,
                    image:image.current.files[0],
                    address:resp.address,
                    email:resp.email,
                    age:43
                }
                    localStorage.setItem('data',JSON.stringify(data));
                    console.log(resp);
            });     
    }
      
  return (
    
        <section class="contacts">
            <div className=" headings text-center">
                <h1 >Create Post</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit obcaecati perspiciatis! &#128512;.</p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-8 col-10 offset-lg-2 offset-md-2 offset-1">
                        <form action="" enctype="multipart/form-data"> 
                            <div class="form-group">
                                <input type="text" ref = {name} class="form-control" placeholder="Enter Name" autocomplete = "off" required id="username"/>
                            </div>
                            <div class="form-group">
                                <input type="email" ref = {email} class="form-control" required autocomplete = "off" placeholder="Enter email" id="email"/>
                            </div>
                            <div class="form-group">   
                                <input type="file" ref = {image} accept="image/png, image/gif, image/jpeg" class="form-control" required autocomplete = "off" placeholder="Upload Image..." id="image"/>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" ref = {message} rows="4" placeholder="Enter your Message..." id="comment"></textarea>
                            </div>
                            <div class="form-buttons d-flex justify-content-center">
                                <button type="submit" onClick = {submitPost} class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default CreatePost