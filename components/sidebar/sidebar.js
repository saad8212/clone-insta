import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineModeComment } from 'react-icons/md'
import { RiSendPlaneLine } from 'react-icons/ri'
import { FiSave } from 'react-icons/fi'
import { IoMdHome } from 'react-icons/io'
import { CiSearch } from 'react-icons/ci'
import { MdOutlineExplore } from 'react-icons/md'
import { BiMessageRoundedDetail } from 'react-icons/bi'
import { IoMdHeartEmpty } from 'react-icons/io'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineMenu } from 'react-icons/ai'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHome,faUser,faInstagram,faPlus, faMessage} from "@fortawesome/free-solid-svg-icons";
function Sidebar() {
  return (
    
    <div className="sidebar">
        <div className='container' style={{paddingLeft:"10px"}}>
        <h2 className='py-5'>Instagram</h2>
        <div className='pb-3 pl-3 d-flex align-items-center'>
            <IoMdHome className='fs-2 me-3' />
            <a className='text-decoration-none text-dark fs-4' href='#'>Home</a>
        </div>
        <div className='pb-3 d-flex align-items-center'>
            <CiSearch className='fs-2 me-3' />
            <a className='text-decoration-none text-dark fs-4' href='#'>Search</a>
        </div>
        <div className='pb-3 d-flex align-items-center'>
            <MdOutlineExplore className='fs-2 me-3' />
            <a className='text-decoration-none text-dark fs-4' href='#'>Explore</a>
        </div>
        <div className='pb-3 d-flex align-items-center'>
            <BiMessageRoundedDetail className='fs-2 me-3' /><a className='text-decoration-none text-dark fs-4' href='#'>Messages</a>
        </div>
        <div className='pb-3 d-flex align-items-center'>
            <IoMdHeartEmpty className='fs-2 me-3' />
            <a className='text-decoration-none text-dark fs-4' href='#'>Notification</a>
        </div>
        <div className='pb-3 d-flex align-items-center'>
            <BiMessageSquareAdd className='fs-2 me-3' /><a className='text-decoration-none text-dark fs-4' href='#'>Create</a>
        </div>
        <div className='pb-3 d-flex align-items-center'>
            <CgProfile className='fs-2 me-3' /><a className='text-decoration-none text-dark fs-4' href='#'>Profile</a>
        </div>
        <div className='pb-3 d-flex align-items-center'>
            <AiOutlineMenu className='fs-2 me-3' /><a className='text-decoration-none text-dark fs-4' href='#'>More</a>
        </div>
        </div>
    </div>
    
  )
}

export default Sidebar
