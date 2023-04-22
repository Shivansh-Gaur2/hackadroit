import React from 'react'
import "./css/sidebar.css"
import {Avatar} from "@material-ui/core"
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar__profile'>
            <img src='https://tse3.mm.bing.net/th?id=OIP.ZOIL4hdeJ6uQwSRXL5XYwwHaEo&pid=Api&P=0'/>

            <div className='profile__details'>
                <Avatar />
                <h4>PysCoders</h4>
                <p>Web developer</p>
            </div>

            <div className='profile__stats'>
                <span>Who viewed your profile</span>
                <span className='stat__number'>20</span>
            </div>
            <div className='profile__stats'>
                <span>Connection<br/><b>Grow your Network</b> </span>
                <span className='stat__number'>150</span>
            </div>

        </div>
        <div className='sidebar__recent'>
            <p>Recent</p>
            <p className='"hash'><span>#</span>branding</p>
            <p className='"hash'><span>#</span>marketing</p>
            <p className='"hash'><span>#</span>reactjs</p>
            <p className='"hash'><span>#</span>bootstrap</p>
            <p className='"hash'><span>#</span>JSX</p>
        </div>
    </div>
  )
}

export default Sidebar