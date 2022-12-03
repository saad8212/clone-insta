import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome,faUser,faInstagram,faPlus, faMessage} from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  return (
    
        <div className="sidebar">
            <header className='logo'>
                <a href="#">My App</a>
            </header>
            <ul className="nav">
                <li>
                <a href="#">
                    <i class="zmdi zmdi-view-dashboard"></i> Dashboard
                </a>
                </li>
                <li>
                <a href="#">
                    <i class="zmdi zmdi-link"></i> Shortcuts
                </a>
                </li>
                <li>
                <a href="#">
                    <i class="zmdi zmdi-widgets"></i> Overview
                </a>
                </li>
                <li>
                <a href="#">
                    <i class="zmdi zmdi-calendar"></i> Events
                </a>
                </li>
                <li>
                <a href="#">
                    <i class="zmdi zmdi-info-outline"></i> About
                </a>
                </li>
                <li>
                <a href="#">
                    <i class="zmdi zmdi-settings"></i> Services
                </a>
                </li>
                <li>
                <a href="#">
                    <i class="zmdi zmdi-comment-more"></i> Contact
                </a>
                </li>
            </ul>
        </div>
        
    
  )
}

export default Sidebar
