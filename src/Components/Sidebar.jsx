import React from 'react'
import { BiHome , BiBookAlt , BiFileBlank, BiGroup , BiClipboard, BiTask , BiFile , BiStats} from 'react-icons/bi';
import "../Styles/Sidebar.css";
const Sidebar = () => {
  return (
    <div className='menu'>
        <div className='logo'>
            <BiBookAlt className='logo-icon'/>
            <h2>EduFlex</h2>
        </div>
        
        <div className='menu--list'>
            <a href="#" className='item '>
                <BiHome className='icon' />
                Dashboard
            </a>
            <a href="#" className='item'>
                <BiTask className='icon'/>
                Catalog
            </a>
            <a href="#" className='item'>
                <BiGroup className='icon'/>
                Group Training
            </a>
            <a href="#" className='item'>
                <BiClipboard className='icon'/>
                Requirenment
            </a>
            <a href="#" className='item'>
                <BiStats className='icon'/>
                In Progress
            </a>
            <a href="#" className='item'>
                <BiFile className='icon'/>
                Docunment
            </a>
            <a href="#" className='item'>
                <BiFileBlank className='icon'/>
                Transcript
            </a>
        </div>
    </div>
  )
}

export default Sidebar
