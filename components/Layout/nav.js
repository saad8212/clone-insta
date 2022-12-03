import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome,faUser,faInstagram,faPlus, faMessage} from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div className='top'>
        <div className="top-items">
            <div className="logo-area logo">
                <a href="#">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" alt="logo" width={103}/>
                </a>
            </div>
            <div class="acct-actions">
                <div class="actions">
                    
                        <FontAwesomeIcon icon = {faHome} className="icons"/>    
                    
                    
                        <FontAwesomeIcon icon = {faMessage} className="icons"/ >
                    
                    
                       <FontAwesomeIcon icon = {faPlus} className="icons"/>
                     
                </div>
            </div>
            <div className="user-update">
                <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt = ""/>
                <h3>Saadi</h3>
            </div>
        </div>
    </div>
  )
}

export default Nav
