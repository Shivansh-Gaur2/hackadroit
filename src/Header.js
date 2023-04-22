import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import "./css/header.css"
import Headersoptions from './Headersoptions';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MessageIcon from '@mui/icons-material/Message';
import { Avatar } from '@material-ui/core';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

function Header() {
  return (
    <div className='header'>
        <div className='header__left'>
            <div className='header__logo'>
                <img src='https://tse1.mm.bing.net/th?id=OIP.7ys--RDJddWtloAL-uNQxAHaHa&pid=Api&rs=1&c=1&qlt=95&w=116&h=116'/>
            </div>
            <div className='header__search'>
                <SearchIcon />
                <input type='text' placeholder='search'/>
            </div>
        </div>
        <div className='header__right'>
            <Headersoptions Icon = {HomeIcon} title = "Home"/>
            <Headersoptions Icon = {PeopleIcon} title = "People"/>
            <Headersoptions Icon = {BusinessCenterIcon} title = "Jobs"/>
            <Headersoptions Icon = {MessageIcon} title = "Message"/>
            <Headersoptions Icon = {NotificationsActiveIcon} title = "Notifications"/>
            <Headersoptions avatar = {Avatar} title = "PysCoders"/>
        </div>
    </div>
  )
}

export default Header